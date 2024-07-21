//import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useServerRequest } from '../../../../hooks';
import styled from 'styled-components';

const IconButton = styled.div`
  cursor: pointer;
`;

const UserRowContainer = ({ className, id: userId, login, registeredAt, roleId: userRoleId, roles, onRemoveUser }) => {
  const [selectedRole, setSelectedRole] = useState(userRoleId);
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();
  //const dispatch = useDispatch();

  const handlerChangeRole = ({ target }) => {
    setSelectedRole(Number(target.value));
  };

  const handlerSaveUserRole = (userId, newUserRoleId) => {
    requestServer('updateUserRole', userId, newUserRoleId).then(() => {
      setInitialRoleId(selectedRole);
    });
  };

  const isSaveButtonDisabled = selectedRole === initialRoleId;

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
          <IconButton onClick={() => handlerSaveUserRole(userId, selectedRole)}>
            <Icon id="fa-floppy-o" margin="0 0 0 10px" disabled={isSaveButtonDisabled} />
          </IconButton>
        </div>
      </TableRow>
      <IconButton onClick={onRemoveUser}>
        <Icon id="fa-trash-o" margin="11px 0 0 10px" />
      </IconButton>
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
