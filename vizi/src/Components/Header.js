import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to={'/'} className={styles.link}>Home</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;