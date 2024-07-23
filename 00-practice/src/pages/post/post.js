import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { PostContent, Comments } from './components'
import { useServerRequest } from '../../hooks'
import { loadPostAsync } from '../../actions'
import { postSelector } from '../../selectors'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const post = useSelector(postSelector)
  const requestServer = useServerRequest()

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.postId))
  }, [dispatch, requestServer, params.postId])

  //console.log(post);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} idPost={post.id} />
    </div>
  )
}

export const Post = styled(PostContainer)``
