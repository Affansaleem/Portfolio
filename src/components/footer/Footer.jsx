import "./Footer.scss";

function Footer() {
  return (
    <div className="footer text-white py-10 w-full">
      <div className="container mx-auto text-center">
        <p className="text-4xl font-mono mb-4">
          "Transforming innovative ideas into powerful mobile and web
          experiences with Flutter and React."
        </p>
        <p className="text-2xl mb-6">StayinTouch 👇🏻</p>
        <div className="footer-social flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/affan-saleem/"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Affansaleem"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:m.affansalim@gmail.com"
            className="footer-social-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="footer-logo">
          <img src="the end.png" alt="Logo" className="h-28 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
