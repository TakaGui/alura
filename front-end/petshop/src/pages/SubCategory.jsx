import { useParams } from 'react-router-dom';

import { PostList } from "../components/PostList";

export const SubCategory = () => {
  const { subcategory } = useParams();

  return (
    <PostList url={`/posts?subcategory=${subcategory}`} />
  );
}
