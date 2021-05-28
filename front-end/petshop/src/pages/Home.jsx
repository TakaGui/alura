import { CategoriesList } from '../components/CategoriesList';
import { PostList } from '../components/PostList';

export const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet notícias</h2>
      </div>

      <CategoriesList url={ '/categories' } />
      <PostList url={ '/posts' } />
    </main>
  );
}
