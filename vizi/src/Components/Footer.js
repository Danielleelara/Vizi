import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className="footer bg-secondary text-center text-lg-start">
        <div className="text-center p-3 text-white">
          © 2022 Copyright:{" "}
          <a className="text-white" href="https://github.com/Danielleelara">
            Github - Danielle de Souza
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;