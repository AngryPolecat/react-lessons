import { useSelector } from 'react-redux'
import { usersSelector } from '../../selectors'
import { Icon } from '../../components'
import styled from 'styled-components'

const UsersContainer = ({ className }) => {
  //const users = useSelector(usersSelector)
  const users = []
  console.log(users)
  return (
    <div className={className}>
      <h2>Пользователи</h2>
      <div>
        <div className="table-header">
          <div className="login-column">Логин</div>
          <div className="registered-at-column">Дата регистрации</div>
          <div className="role-column">Роль</div>
        </div>
        {users.map(({ id, login, registeredAt, roleId }) => {
          return (
            <div className="table-row">
              <div className="user-data">
                <div className="login-column"></div>
                <div className="registered-at-column"></div>
                <div className="role-column"></div>
              </div>
              <Icon id="fa-trash-o" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Users = styled(UsersContainer)``
