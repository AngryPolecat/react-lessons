import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Input } from '../../../../components'
import { sanitizeContent } from './utils/sanitize-content'
import { savePostAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid #000;
  white-space: pre-line;
  font-size: 15px;

  & :focus {
    border: 2px solid #000;
  }
`

const PostFormContainer = ({ className, post: { id, title, content, imageUrl, publishedAt } }) => {
  const imageRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()
  const dispatch = useDispatch()
  const requestServer = useServerRequest()
  const navigate = useNavigate()

  const handlerSavePost = (postId) => {
    const newImageUrl = imageRef.current.value
    const newTitlePost = titleRef.current.value
    const newContentPost = sanitizeContent(contentRef.current.innerHTML)

    dispatch(savePostAsync(requestServer, { id: postId, imageUrl: newImageUrl, title: newTitlePost, content: newContentPost })).then(() => navigate(`/post/${postId}`))
  }

  return (
    <div className={className}>
      <div className="special-panel">
        <div className="published-at">
          <Icon id="fa-calendar" margin="0 10px 0 1px" size="15px" />
          <div>{publishedAt}</div>
        </div>
        <div className="buttons-panel">
          <Icon id="fa-floppy-o" margin="0 10px 0 0" size="20px" onClick={() => handlerSavePost(id)} />
          <Icon id="fa-trash" margin="0 10px 0 0" size="20px" />
        </div>
      </div>
      <Input defaultValue={imageUrl} size="15px" ref={imageRef} />
      <Input defaultValue={title} size="15px" ref={titleRef} />
      <Content contentEditable={true} suppressContentEditableWarning={true} ref={contentRef}>
        {content}
      </Content>
    </div>
  )
}

export const PostForm = styled(PostFormContainer)`
  display: flex;
  flex-direction: column;
  padding: 40px 80px 20px 80px;

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
    line-height: 20px;
  }
`
