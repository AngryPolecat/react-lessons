import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Authorization, Registration, Users, Post } from './pages'
import styled from 'styled-components'

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`

const Page = styled.div`
  text-align: center;
  margin-top: 120px;
`

export const Blog = () => {
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  )
}
