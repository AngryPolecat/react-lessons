import { Component } from 'react';
import { connect } from 'react-redux';
import { CHANGE_PLAYER, STATE_GAME } from '../../const/const';
import { movePlayer, changeStatusGame } from '../../actions';
import { checkResult } from '../../utils/check';

class FieldContainer extends Component {
  handlerMovePlayer(cell) {
    const field = this.props.field;
    const status = this.props.status;
    const player = this.props.player;
    const statusCell = field.at(cell);
    if (!statusCell && status === STATE_GAME.game) {
      this.props.movePlayer(cell);
      const newField = [...field];
      newField[cell] = player;
      const resultGame = checkResult(newField, player);
      if (resultGame === STATE_GAME.game) {
        this.props.changePlayer();
      } else {
        this.props.changeStatus(resultGame);
      }
    }
  }

  render() {
    const field = this.props.field;
    return (
      <div className="flex flex-wrap justify-around">
        {field.map((cell, idx) => (
          <div className={`cell border rounded mb-10 cursor-pointer ${cell ? 'cursor-not-allowed' : false}`} key={idx} onClick={() => this.handlerMovePlayer(idx)}>
            {cell}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  player: state.player,
  status: state.status,
});

const mapDispatchToProps = (dispatch) => ({
  movePlayer: (cell) => dispatch(movePlayer(cell)),
  changePlayer: () => dispatch(CHANGE_PLAYER),
  changeStatus: (resultGame) => dispatch(changeStatusGame(resultGame)),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
