import { Icon } from '../../../../../../components'
import styled from 'styled-components'

const CommentContainer = ({ className, id, authorId, content, publishedAt }) => {
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="fa-user-circle-o" margin="0 10px 0 0" size="16px" />
            {authorId}
          </div>
          <div className="published-at">
            <Icon id="fa-calendar" margin="0 10px 0 0" size="16px" />
            {publishedAt}
          </div>
        </div>
        <div className="content-data">{content}</div>
      </div>
      <Icon id="fa-trash" margin="0 0 0 10px" size="20px" />
    </div>
  )
}

export const Comment = styled(CommentContainer)`
  display: flex;
  width: 580px;
  margin: 0 auto;
  border: 0px solid black;
  margin-top: 10px;
  font-size: 15px;

  & .comment {
    border: 1px solid black;
    width: 552px;
    padding: 5px;
  }

  & .information-panel {
    display: flex;
    justify-content: space-between;
  }

  & .published-at {
    display: flex;
  }

  & .author {
    display: flex;
    margin-bottom: 5px;
  }

  & .content-data {
    text-align: left;
  }
`
