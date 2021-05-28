import {
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';

import { search } from '../api';

import '../assets/css/blog.css';

export const CategoriesList = ({ url }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    search(url, setCategories);
  }, [url]);

  return (
    <ul className="categories-list container flex">
      {
        categories.map((category) => (
          <Link
            key={category.id}
            to={`/categoria/${category.id}`}
          >
            <li className={`categories-list__category categories-list__category--${category.id}`}>
              {category.name}
            </li>
          </Link>
        ))
      }
    </ul>
  );
}
