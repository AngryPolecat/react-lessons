import { Icon } from '../../../../components';
import styled from 'styled-components';

const Img = styled.img`
  float: left;
  margin: 0 20px 20px 0;
`;

const Content = styled.div`
  text-align: left;
`;

const H2 = styled.h2`
  margin-top: 0;
`;

const PostContentContainer = ({ className, post: { id, title, content, imageUrl, publishedAt } }) => {
  return (
    <div className={className}>
      <Img src={imageUrl} alt="" />
      <H2>{title}</H2>
      <div className="special-panel">
        <div className="published-at">
          <Icon id="fa-calendar" margin="0 10px 0 0" size="15px" />
          <div>{publishedAt}</div>
        </div>
        <div className="buttons-panel">
          <Icon id="fa-pencil-square-o" margin="0 10px 0 0" size="22px" />
          <Icon id="fa-trash" margin="0 10px 0 0" size="20px" />
        </div>
      </div>
      <Content>{content}</Content>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  padding: 40px 80px 140px 80px;

  & > div,
  h2 {
    text-align: left;
  }

  & .special-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  & .buttons-panel,
  .published-at {
    display: flex;
    flex-direction: row;
  }
`;
