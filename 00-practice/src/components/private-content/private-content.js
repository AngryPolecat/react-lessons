import { useSelector } from 'react-redux';
import { roleSelector } from '../../selectors';
import { Error } from '../error/error';
import { ERROR } from '../../const';

export const PrivateContent = ({ children, serverError = null, access }) => {
  const role = useSelector(roleSelector);
  const accessError = access.includes(role) ? null : ERROR.ACCESS_DENIED;
  const error = serverError || accessError;

  return error ? <Error error={error} /> : children;
};
