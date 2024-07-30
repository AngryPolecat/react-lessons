import { useEffect, useState } from 'react';
import { PostCard } from './components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts').then((posts) => {
      setPosts(posts.res);
    });
  }, [requestServer]);

  return (
    <div className={className}>
      {posts.map(({ id, imageUrl, title, publishedAt, commentsCount }) => (
        <PostCard key={id} id={id} imageUrl={imageUrl} title={title} publishedAt={publishedAt} commentsCount={commentsCount} />
      ))}
    </div>
  );
};

export const Main = styled(MainContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px 50px 140px 50px;
  justify-content: flex-start;
`;
