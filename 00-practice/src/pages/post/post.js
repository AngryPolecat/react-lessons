import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PostContent, Comments } from './components'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
  const params = useParams()
  const post = useSelector(/* selector */)

  return (
    <div className={className}>
      <PostContent />
      <Comments />
    </div>
  )
}

export const Post = styled(PostContainer)``
