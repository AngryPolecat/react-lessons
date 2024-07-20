import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import styled from 'styled-components';

const UserRowContainer = ({ className, login, registeredAt, roleId: userRoleId, roles }) => {
  const [selectedRole, setSelectedRole] = useState(userRoleId);
  const dispatch = useDispatch();

  const handlerChangeRole = ({ target }) => {
    setSelectedRole(Number(target.value));
  };

  const isSaveButtonDisabled = selectedRole === userRoleId;

  return (
    <div className={className}>
      <TableRow border>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRole} onChange={handlerChangeRole}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option value={roleId} key={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <Icon id="fa-floppy-o" onClick={() => dispatch(/* TODO*/)} margin="0 0 0 10px" disabled={isSaveButtonDisabled} />
        </div>
      </TableRow>
      <Icon id="fa-trash-o" onClick={() => dispatch(/* TODO*/)} margin="11px 0 0 10px" />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
