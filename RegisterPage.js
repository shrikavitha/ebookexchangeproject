import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

import BackgroundImage from '../../assets/images/bg.jpg';



export default function SignUpPage() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    email: '',
    address: '',
    city: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prodata = {
      id: formData.id,
      name: formData.name,
      gender: formData.gender,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      phonenumber: formData.phonenumber,
    };

    axios.post('http://localhost:8080/addBookcust', prodata);
    

  };

  return (
    
    <header style={HeaderStyle}>
      <div className="text-center m-5-auto">
      <nav>
        <ul  style={{display:"flex",flexDirection:"row",marginTop:"6px"}}>
          <li style={{marginLeft:"1200px"}}>
            <Link to="/Delete">Delete</Link>
          </li>
          
          
          <li>
            <Link to="/Update">Update</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Customer id</label><br />
            <input
              type='number'
              name='id'
              value={formData.id}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label>Name</label><br />
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Gender</label><br />
            <input
              type='text'
              name='gender'
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Email address</label><br />
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Address</label><br />
            <input
              type='text'
              name='address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>City</label><br />
            <input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Phonenumber</label><br />
            <input
              type='text'
              name='phonenumber'
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </p>
          
          <p>
            <button id="sub_btn" type="submit">Register</button>
          </p>
        </form>
        
        <footer>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
    </header>
          
  );
}

const NavbarStyle = {
  background: '#433',
  color: '#bbff',
};

const HeaderStyle = {
  width: '100%',
  height: '110vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
};
NavbarStyle.ul = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

NavbarStyle.ul.li = {
  margin: '4 40px', // Adjust the spacing between navbar items
};
