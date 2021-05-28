import {
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';

import { search } from '../api';

import '../assets/css/post.css';

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    search(`/posts/${id}`, setPost)
  }, [id]);

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="card__title">
          {post.title}
        </h2>

        <p className="card__text">
          {post.body}
        </p>
      </article>
    </main>
  );
}
