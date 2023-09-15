import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/images/bggg.jpg';

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul  style={{display:"flex",flexDirection:"row",marginTop:"6px"}}>
          <li style={{marginLeft:"1200px"}}>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/sell">Sell</Link>
          </li>
          <li>
            <Link to="/Buy">Buy</Link>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header style={HeaderStyle}>
        <div className="text-center">
          <h1 className="main-title home-page-title">Welcome</h1>
          <br></br>
          <h4 className="bold-text" >
            "Every book has its own journey, and today, it found its new home
            with you. <br />
            May the words within these pages inspire, educate, and transport you
            to places unknown.<br />
            Thank you for choosing this book, and may it be the beginning of a
            beautiful adventure."
          </h4>
          {/* <Link to="/sell">
            <button className="primary-button">Sell</button>
          </Link>
          <Link to="/buy">
            <button className="primary-button">Buy</button>
          </Link> */}
          <Link to="/">
            <button className="primary-button bottom-right-button">
              Log out
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

const NavbarStyle = {
  background: '#433',
  color: '#bbff',
};

const HeaderStyle = {
  width: '100%',
  height: 'calc(100vh - 60px)', // Adjusted for the navbar's height
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

// Style for the horizontal navbar
NavbarStyle.ul = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

NavbarStyle.ul.li = {
  margin: '0 20px', // Adjust the spacing between navbar items
};

// NavbarStyle.ul.li a = {
//   color: '#fff',
//   textDecoration: 'none',
// };