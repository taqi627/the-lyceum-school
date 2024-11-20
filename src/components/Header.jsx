import { Link } from 'react-router-dom';
import logo from "../assets/logo.webp"
import './styles/Header.css';

function Header() {
  return (
    <header className="header">

      <div className = 'logoandtitle'>
        <img src={logo} alt="Logo image" />
      <h1>The Lyceum School</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
