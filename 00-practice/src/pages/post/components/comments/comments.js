import { useState } from 'react'
import { Icon } from '../../../../components'
import { Comment } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { idUserSelector } from '../../../../selectors'
import { addCommentAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import styled from 'styled-components'

const NewComment = styled.textarea`
  width: 100%;
  resize: none;
  height: 100px;
`

const IconButton = styled.div`
  cursor: pointer;
`

const CommentsContainer = ({ className, comments, idPost }) => {
  const idUser = useSelector(idUserSelector)
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()
  const requestServer = useServerRequest()

  const handlerChangeComment = ({ target }) => {
    setNewComment(target.value)
  }

  const handlerAddComment = () => {
    //console.log(idPost, idUser, newComment)
    dispatch(addCommentAsync(requestServer, idUser, idPost, newComment))
  }

  return (
    <div className={className}>
      <div className="container-textarea">
        <NewComment name="comment" value={newComment} onChange={handlerChangeComment} placeholder="Комментарий..."></NewComment>
        <IconButton onClick={() => handlerAddComment()}>
          <Icon id="fa-paper-plane-o" margin="0 0 0 10px" size="18px" />
        </IconButton>
      </div>
      <div className="container-comments">
        {comments.map(({ id, author, publishedAt, content }) => (
          <Comment key={id} id={id} author={author} publishedAt={publishedAt} content={content} />
        ))}
      </div>
    </div>
  )
}

export const Comments = styled(CommentsContainer)`
  & .container-textarea {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 580px;
  }

  & .container-comments {
    margin-bottom: 140px;
  }
`
