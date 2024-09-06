import { Link } from "react-router-dom";
import Logo from "../../assets/images/images.jfif";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <div className="flex justify-center w-full bg-base-200 p-10">
      <footer className="footer text-base-content sm:max-w-[1400px] sm:px-[2rem] grid grid-cols-1 sm:grid-cols-4 gap-8">
        <aside>
          <div>
          <img className="w-[150px] mb-4" src={Logo} alt="Logo" />
          <h2 className="text-xl font-bold">Online Nursary</h2>
          </div>
          <p>
             Online Nursery plant shop offering a diverse selection
            of high-quality plants and gardening essentials.
          </p>
        </aside>
        
        <nav>
          <h6 className="footer-title text-xl font-bold mb-2">Important Links</h6>
          <Link to="/" className="link link-hover">
            Home Page
          </Link>
          <Link to="/products" className="link link-hover">
            Products
          </Link>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
          <Link to="/cart" className="link link-hover">
            Cart
          </Link>
        </nav>
        
        <nav>
          <h6 className="footer-title font-bold text-xl mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        
        <nav>
          <h6 className="footer-title font-bold text-xl mb-2">Follow Us</h6>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-xl text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-xl text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-xl text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="text-xl text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
