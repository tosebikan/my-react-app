import { Link } from 'gatsby';
import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../images/logo-designcode.svg';
import './header.css';


const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;

      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={scrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={logo} width="30" alt="" /></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><Button>Buy</Button></Link>
      </div>
    </div>
  );
};


Header.defaultProps = {
  siteTitle: '',
};

export default Header;
