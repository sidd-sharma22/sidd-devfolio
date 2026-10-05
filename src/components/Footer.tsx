import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <p>
          Built with <Heart size={14} aria-hidden="true" /> by Siddharth Sharma
        </p>

        <p className="site-footer__copyright">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
