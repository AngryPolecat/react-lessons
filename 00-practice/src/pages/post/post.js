import { useParams, useMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useLayoutEffect } from 'react'
import { PostContent, Comments, PostForm } from './components'
import { useServerRequest } from '../../hooks'
import { loadPostAsync, RESET_POST } from '../../actions'
import { postSelector } from '../../selectors'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
  const params = useParams()
  const isEditing = useMatch('/post/:id/edit')
  const isCreating = useMatch('/post')
  const dispatch = useDispatch()
  const post = useSelector(postSelector)
  const requestServer = useServerRequest()

  useLayoutEffect(() => {
    dispatch(RESET_POST)
  }, [dispatch, isCreating])

  useEffect(() => {
    if (isCreating) {
      return
    }
    dispatch(loadPostAsync(requestServer, params.postId))
  }, [dispatch, requestServer, params.postId, isCreating])

  return (
    <div className={className}>
      {!isEditing && !isCreating ? (
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
