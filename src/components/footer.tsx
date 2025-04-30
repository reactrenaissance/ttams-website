import Link from "next/link";
import "@/styles/globals.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
            {/* Footer Links */}
        <div className="footer-links">
            <Link href="/about/about-ttams">About</Link>
            <Link href="/about/general-information">General Information</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact-us">Contact</Link>
        </div>

          <p className="footer-text">
            &copy; {new Date().getFullYear()} TTAMS. All rights reserved.
          </p>

          {/* Signature */}
          <p className="footer-signature">
            Crafted with intention by <span/><span/>
                <a
                href="https://reactrenaissance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-name"
                >
                React Renaissance
                </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;