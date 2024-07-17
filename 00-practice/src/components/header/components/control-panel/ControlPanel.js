import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Icon, Button } from '../../../../components'
import { loginSelector, roleSelector, sessionSelector } from '../../../../selectors'
import { ROLE } from '../../../../const'
import { logout } from '../../../../actions'
import styled from 'styled-components'

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconButton = styled.div`
  cursor: pointer;
`

const Login = styled.div`
  margin-top: 2px;
`

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const login = useSelector(loginSelector)
  const role = useSelector(roleSelector)
  const session = useSelector(sessionSelector)

  return (
    <div className={className}>
      <RightAligned>
        {role === ROLE.GUEST ? (
          <Link to="/login">
            <Button>Войти</Button>
          </Link>
        ) : (
          <>
            <Login>{login}</Login>
            <IconButton onClick={() => dispatch(logout(session))}>
              <Icon id="fa-sign-out" size="20px" margin="0 0 0 20px" />
            </IconButton>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <IconButton onClick={() => navigate(-1)}>
          <Icon id="fa-backward" size="20px" margin="10px 0 0 20px" />
        </IconButton>
        <Link to="/post">
          <Icon id="fa-file-text-o" size="20px" margin="10px 0 0 20px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" size="20px" margin="10px 0 0 20px" />
        </Link>
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)`
  margin-top: 10px;
`
