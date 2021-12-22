import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contactus-footer">
        <h3>Contact Us</h3>
        <p>Tel: +962777685048</p>
      </div>
      <div className="social-footer">
        <h3>Follow Us</h3>
        <ul>
          <Link to="#">
            <i class="social fa-brands fa-facebook"></i>
          </Link>
          <Link to="#">
            <i class="social fa-brands fa-instagram"></i>
          </Link>
          <Link to="#">
            <i class="social fa-brands fa-twitter"></i>
          </Link>
        </ul>
      </div>
      <div className="copyright-footer">
        <p>&copy; 2022 Tawseelih . All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
