import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
            <p>Contact Us: example@example.com | 123-456-7890</p>
            <ul className="social-media">
              <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
            <p>Subscribe to our newsletter for updates:</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <a href="#top">Back to Top <i className="fas fa-arrow-up"></i></a>
      </div>
      <div className="site-credits">
        <p>Designed and Developed by Your Name</p>
      </div>
    </footer>
  )
}

export default Footer;