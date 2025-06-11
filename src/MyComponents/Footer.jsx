import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Customer Support</h5>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Returns</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Payment Methods</h5>
            <ul>
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
              <li>UPI</li>
              <li>Wallets</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
