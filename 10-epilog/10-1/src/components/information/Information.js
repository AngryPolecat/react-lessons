import { connect } from 'react-redux';
import { STATE_GAME } from '../../const/const';
import { Component } from 'react';

class InformationContainer extends Component {
  getInfoText() {
    const { player, status } = this.props;
    let info = '';
    switch (status) {
      case STATE_GAME.win:
        info = `Победа игрока: ${player}`;
        break;
      case STATE_GAME.draw:
        info = `Ничья`;
        break;
      default:
        info = `Ход игрока: ${player}`;
    }
    return info;
  }

  render() {
    const info = this.getInfoText();
    return <div className="text-3xl p-5">{info}</div>;
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
  status: state.status,
});

export const Information = connect(mapStateToProps)(InformationContainer);
