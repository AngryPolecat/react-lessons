import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ cells, move }) => {
  return <FieldLayout cells={cells} move={move} />;
};

Field.propTypes = {
  cells: PropTypes.array,
  move: PropTypes.func,
};
