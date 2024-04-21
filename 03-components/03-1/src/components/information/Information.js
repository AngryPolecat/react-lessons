import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = ({ player, end, draw }) => {
  let info = '';
  if (draw || end) {
    draw ? (info = 'Ничья') : (info = `Победа игрока ${player}`);
  } else {
    info = `Ход игрока: ${player}`;
  }
  return <InformationLayout player={player}>{info}</InformationLayout>;
};

Information.propTypes = {
  player: PropTypes.string,
  end: PropTypes.bool,
  draw: PropTypes.bool,
};
