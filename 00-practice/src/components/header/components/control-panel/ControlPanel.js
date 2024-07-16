import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BackButton = styled.div`
  cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <Link to="/login">
          <Button>Войти</Button>
        </Link>
      </RightAligned>
      <RightAligned>
        <BackButton onClick={() => navigate(-1)}>
          <Icon id="fa-backward" size="20px" margin="10px 0 0 20px" />
        </BackButton>
        <Link to="/post">
          <Icon id="fa-file-text-o" size="20px" margin="10px 0 0 20px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" size="20px" margin="10px 0 0 20px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  margin-top: 10px;
`;
