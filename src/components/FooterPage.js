import React from "react";
import "./../styles/cartStyle.css";

export default function FooterPage() {
  return (
    <>
      <footer className="bi">
        <div className="displayfl">
          <p className="footerLabel">About us</p>
          <p className="footerLabel">Blog</p>
          <p className="footerLabel">Terms & Condition</p>
          <p className="footerLabel">Privacy Policy</p>
          <p className="footerLabel">Offers & Gifts Cards</p>
          <p className="footerLabel">Contact Us</p>
        </div>
        <div className="displayfl">
          <p className="footerLabel down">Download Oyebusy App</p>
          <img className="pin" src="black-playstore 1.png" alt="play" />
        </div>
        <section className="displayfl2">
          <img className="pin2" src="Vector-3.png" alt="insta" />
          <img className="pin2" src="icons8-twitter.png" alt="twitter" />
          <img className="pin2" src="linkedin-logo 1.png" alt="ln" />
          <img className="pin2" src="facebook 1.png" alt="fb" />
          <img className="pin2" src="youtube.png" alt="yt" />
          <img className="pin2" src="pinterest-social-logo.png" alt="pin" />
        </section>
        <div className="footer-copyright text-center">
          
             &copy; {new Date().getFullYear()} House Cleaning Expert
           
        </div>
      </footer>
    </>
  );
}
