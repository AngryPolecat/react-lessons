import { Icon } from '../../../../components';
import styled from 'styled-components';

const Title = styled.div`
  text-align: left;
  font-size: 13px;
  padding: 5px;
  font-weight: bold;
`;

const PostCardContainer = ({ className, id, title, publishedAt, commentsCount, imageUrl }) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt="" />
      <div className="post-card-footer">
        <Title>{title}</Title>
        <div className="post-card-info">
          <div>
            <Icon id="fa-calendar" margin="0 5px 0 0" size="12px" />
            {publishedAt}
          </div>
          <div>
            <Icon id="fa-comment-o" margin="0 5px 0 0" size="12px" />
            {commentsCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
  width: 280px;
  height: 220px;
  border: 1px solid black;
  margin: 0 20px 20px 0;

  & .post-card-footer {
    margin-bottom: 0;
  }

  & .post-card-info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 5px;
  }

  & .post-card-info div {
    display: flex;
  }
`;
