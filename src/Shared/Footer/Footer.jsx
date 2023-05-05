// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h4>About Chef</h4>
            <p>Pakistani chefs are renowned for their flavorful and aromatic cuisine, influenced by regional and cultural blends. They use traditional methods to create authentic and wholesome meals. Many chefs have gained worldwide recognition for their culinary skills, making Pakistani cuisine a favorite among food lovers everywhere.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Contact Chef</h4>
            <ul>
              <li>Phone: 123-456-7890</li>
              <li>Email: chef@example.com</li>
              <li>Address: 123 Main Street, Karachi, Pakistan</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Follow Chef</h4>
            <ul className="social-icons">
              <li><a href="#"><FaFacebook></FaFacebook></a></li>
              <li><a href="#"><FaTwitter></FaTwitter></a></li>
              <li><a href="#"><FaInstagram></FaInstagram></a></li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;