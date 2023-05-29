import React from "react";
import { FaGoogle } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import studyImage from "../../assets/images/self-learning.jpg";
import "./SignFragment.scss";
const SignFragment = ({
  header,
  socialText,
  endText,
  signText,
  children,
  href,
}) => {
  return (
    <div className="a-login">
      <div className="a-img-study">
        <img src={studyImage} alt="study img" />
      </div>
      <div className="a-login-form">
        <h1>{header}</h1>
        <div className="a-header-login-content">Access to our dashboard</div>
        {children}
        <div className="a-login-or">
          <span className="a-or-line"></span>
          <span className="a-or">OR</span>
        </div>
        <div className="a-social-login">
          <span>{socialText}</span>
          <a href="/facebook" className="a-facebook">
            <TfiFacebook size={16} />
          </a>
          <a href="/google" className="a-google">
            <FaGoogle size={16} />
          </a>
        </div>
        <div className="a-dont-have">
          {endText} <a href={href}>{signText}</a>
        </div>
      </div>
    </div>
  );
};
export default SignFragment;
