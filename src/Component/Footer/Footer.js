import React from "react";
import './Footer.css';
import amazonlogo from '../../Assets/amazonlogo.jpg';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContent">

        <div className="FooterColumn">
          <div className="ContentFooterTitle">Get to Know Us</div>
          <div className="ContentFooterSubtitleDiv">
            <div className="ContentFooterSubtitleContent">About Us</div>
            <div className="ContentFooterSubtitleContent">Careers</div>
            <div className="ContentFooterSubtitleContent">Press Release</div>
            <div className="ContentFooterSubtitleContent">Amazon Science</div>
          </div>
        </div>

        <div className="FooterColumn">
          <div className="ContentFooterTitle">Connect with Us</div>
          <div className="ContentFooterSubtitleDiv">
            <div className="ContentFooterSubtitleContent">Instagram</div>
            <div className="ContentFooterSubtitleContent">LinkedIn</div>
            <div className="ContentFooterSubtitleContent">Twitter</div>
            <div className="ContentFooterSubtitleContent">Facebook</div>
          </div>
        </div>

        <div className="FooterColumn">
          <div className="ContentFooterTitle">Make money with us</div>
          <div className="ContentFooterSubtitleDiv">
            <div className="ContentFooterSubtitleContent">Sell on Amazon</div>
            <div className="ContentFooterSubtitleContent">Sell under Amazon Accelerator</div>
            <div className="ContentFooterSubtitleContent">Amazon Global Selling</div>
            <div className="ContentFooterSubtitleContent">Beccome an Affiliate</div>
          </div>
        </div>

        <div className="FooterColumn">
          <div className="ContentFooterTitle">Let us help you</div>
          <div className="ContentFooterSubtitleDiv">
            <div className="ContentFooterSubtitleContent">Covid19 and Amazon</div>
            <div className="ContentFooterSubtitleContent">Your Account</div>
            <div className="ContentFooterSubtitleContent">Returns Center</div>
          </div>
        </div>



      </div>

      <div className="AmazonImage">
        <img className="AmazonImgFooter" src={amazonlogo} alt="Amazon Logo" />
      </div>
    </div>
  );
}

export default Footer;
