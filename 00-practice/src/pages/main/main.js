import { useEffect, useState } from 'react'
import { PostCard, Pagination } from './components'
import { Input, Icon } from '../../components'
import { useServerRequest } from '../../hooks'
import { PAGINATION_LIMIT } from '../../const'
import styled from 'styled-components'

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const requestServer = useServerRequest()

  useEffect(() => {
    requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts) => {
      setPosts(posts.res)
      setLastPage(1)
    })
  }, [requestServer, page])

  return (
    <div className={className}>
      <div className="post-search">
        <Input type="text" size="18px" />
        <Icon id="fa-search" margin="8px 10px 0 10px" size="25px" />
      </div>
      <div className="post-list">
        {posts.map(({ id, imageUrl, title, publishedAt, commentsCount }) => (
          <PostCard key={id} id={id} imageUrl={imageUrl} title={title} publishedAt={publishedAt} commentsCount={commentsCount} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} lastPage={lastPage} />
    </div>
  )
}

export const Main = styled(MainContainer)`
  & .post-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 40px 0px 40px;
    justify-content: flex-start;
  }

  & .post-search {
    display: flex;
    width: 500px;
    margin: 20px auto 0;
    padding: 5px;
  }

  & input {
    width: 100%;
    border: 0 solid black;
  }

  & input:focus {
    border: 0px solid #000;
  }
`
