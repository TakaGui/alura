import doguito404 from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

export const Page404 = () => {
  return (
    <main className="container flex flex--center flex--column">
      <img className="doguito-image" src={ doguito404 } alt="Ilustração doguito" />
      <p className="notfound-text">
        Ops, Essa página não existe!
      </p>
    </main>
  );
}
