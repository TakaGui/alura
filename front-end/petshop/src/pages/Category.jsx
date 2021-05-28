import {
  useState,
  useEffect,
} from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from 'react-router-dom';
import { search } from '../api';

import { CategoriesList } from '../components/CategoriesList';
import { PostList } from '../components/PostList';
import { SubCategory } from './SubCategory';

import '../assets/css/blog.css';

export const Category = () => {
  const [subcategories, setSubcategories] = useState([]);

  const { id } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    search(`/categories/${id}`, (category) => {
      setSubcategories(category.subcategories);
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

        <ul className="categories-list container flex">
          {
            subcategories.map((subcategory) => (
              <li
                className={`categories-list__category categories-list__category--${id}`}
                key={subcategory}
              >
                <Link to={`${url}/${subcategory}`}>
                  {subcategory}
                </Link>
              </li>
            ))
          }
        </ul>

        <Switch>
          <Route exact path={`${path}/`}>
            <PostList url={`/posts?category=${id}`} />
          </Route>

          <Route path={`${path}/:subcategory`}>
            <SubCategory />
          </Route>
        </Switch>
      </>
  );
}
