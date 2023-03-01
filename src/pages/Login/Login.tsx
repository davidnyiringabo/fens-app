import "./login.css";

import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import Field from "../../components/Field/Field";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

import Ellipse1 from "./../../assets/first-ellipse.svg";
import Ellipse2 from "./../../assets/second-ellipse.svg";
import Logo from "../../assets/snof-logo.png";

export default function Login() {
  const ref = useRef(null);
  useEffect(() => {
    const passwordHide = document.querySelector(".password-hide-icon");
    const passwordShow = document.querySelector(".password-show-icon");
    const passwordField = document.querySelector("#orgPasswd");

    //Show and Hide password

    passwordShow?.addEventListener("click", () => {
      passwordShow.classList.add("password-hide-icon");
      passwordShow?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "text");
      passwordHide?.classList.remove("password-hide-icon");
      passwordHide?.classList.add("active");
    });

    passwordHide?.addEventListener("click", () => {
      passwordHide.classList.add("password-hide-icon");
      passwordHide?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "password");
      passwordShow?.classList.remove("password-hide-icon");
      passwordShow?.classList.add("active");
    });
  }, []);

  const emailLabel = "Email";
  const emailType = "email";
  const emailName = "orgEmail";
  const emailId = "orgEmail";

  const passwdLabel = "Password";
  const passwdType = "password";
  const passwdName = "passwd";
  const passwdId = "orgPasswd";

  const loginButtonValue = "Login";
  return (
    <div className="login">
      <div className="vectors">
        <img src={Ellipse1} alt="First ellipse" />
        <img src={Ellipse2} alt="Second ellipse" />
      </div>

      <div className="logo">
        <img src={Logo} alt="SNoF-logo" />
      </div>
      <h2>Login into your Organisation account</h2>
      <form action="#" method="post">
        <Field
          labelName={emailLabel}
          type={emailType}
          name={emailName}
          id={emailId}
        />
        <Field
          labelName={passwdLabel}
          type={passwdType}
          name={passwdName}
          id={passwdId}
        />
        <div className="password-hide">
          <FontAwesomeIcon className="password-show-icon active" icon={faEye} />
          <FontAwesomeIcon className="password-hide-icon" icon={faEyeSlash} />
        </div>
        <div className="">
          <SubmitButton buttonValue={loginButtonValue} />
        </div>
      </form>
    </div>
  );
}
