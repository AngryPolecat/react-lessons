import { useParams, useMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { PostContent, Comments, PostForm } from './components'
import { useServerRequest } from '../../hooks'
import { loadPostAsync } from '../../actions'
import { postSelector } from '../../selectors'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
  const params = useParams()
  const idEditing = useMatch('/post/:id/edit')
  const dispatch = useDispatch()
  const post = useSelector(postSelector)
  const requestServer = useServerRequest()

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.postId))
  }, [dispatch, requestServer, params.postId])

  return (
    <div className={className}>
      {!idEditing ? (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      ) : (
        <PostForm post={post} />
      )}
    </div>
  )
}

export const Post = styled(PostContainer)``
