import {
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';

import { search } from '../api';

export const PostList = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    search(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {
        posts.map((post) => (
          <Link
            className={`card-post card-post--${post.category}`}
            key={post.id}
            to={`/posts/${post.id}`}
          >
            <article>
              <h3 className="card-post__title">
                {post.title}
              </h3>
              <p className="card-post__meta">
                {post.metadescription}
              </p>
            </article>
          </Link>
        ))
      }
    </section>
  );
}