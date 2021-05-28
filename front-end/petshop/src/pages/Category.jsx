import {
  useState,
  useEffect,
} from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { search } from '../api';

import '../assets/css/blog.css';
import { CategoriesList } from '../components/CategoriesList';
import { PostList } from '../components/PostList';

export const Category = () => {
  const [subcategory, setSubcategory] = useState([]);

  const { id } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    search(`/categories/${id}`, (category) => {
      setSubcategory(category.subcategories);
    });
  }, [id]);

  return(
      <>
        <div className="container">
            <h2 className="title-page">
              Pet Notícias
            </h2>
        </div>

        <CategoriesList url="/categories" />

        <Route exact path={`${path}/`}>
          <PostList url={`/posts?category=${id}`} />
        </Route>
      </>
  );
}
