import { useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Field from "../../components/Field/Field";
import { FirstEllipse } from "./../../assets/svg";
import { SecondEllipse } from "./../../assets/svg";
import Logo from "./../../assets/snof-logo.png";
import "./RegisterPage.css";

export default function RegisterPage() {
  const ref = useRef(null);
  useEffect(() => {
    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress: any = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    const passwordHide = document.querySelector(".password-hide-icon");
    const passwordShow = document.querySelector(".password-show-icon");
    const passwordField = document.querySelector("#orgPasswd");

    //Show and Hide password

    passwordShow?.addEventListener("click", () => {
      passwordShow?.classList.add("password-hide-icon");
      passwordShow?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "text");
      passwordHide?.classList.remove("password-hide-icon");
      passwordHide?.classList.add("active");
    });

    passwordHide?.addEventListener("click", () => {
      passwordHide?.classList.add("password-hide-icon");
      passwordHide?.classList.remove("active");
      passwordField?.removeAttribute("type");
      passwordField?.setAttribute("type", "password");
      passwordShow?.classList.remove("password-hide-icon");
      passwordShow?.classList.add("active");
    });

    //Track movement on the progress bar
    let formStepsNum = 0;

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps(formSteps, formStepsNum);
        updateProgressBar(progressSteps, formStepsNum);
      });
      const progressActive = document.querySelectorAll(".progress-step-active");
      console.log(progressActive);

      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
      progress.style.backgroundColor = "rgb(67, 110, 122)";
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps(formSteps, formStepsNum);
        updateProgressBar(progressSteps, formStepsNum);
      });
    });
  }, []);

  function updateFormSteps(formSteps: any, formStepsNum: any) {
    formSteps.forEach((formStep: any) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
  }

  function updateProgressBar(progressSteps: any, formStepsNum: any) {
    progressSteps.forEach((progressStep: any, i: any) => {
      if (i < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  }

  const submitButtonValue = "Sign Up";
  const type = "text";
  const orgName = "orgName";
  const id = "orgName";
  const orgLabel = "Organization name";
  const selectLabel = "Organization type";

  const locationNumberLabel = "Number of locations";
  const locationNumberType = "number";
  const locationNumberName = "locationNumber";
  const locationNumberId = "locNumberId";

  const emailLabel = "Email";
  const emailType = "email";
  const emailName = "orgEmail";
  const emailId = "orgEmail";

  const passwdLabel = "Password";
  const passwdType = "password";
  const passwdName = "passwd";
  const passwdId = "orgPasswd";

  return (
    <div className="register">
      <div className="vectors">
        <FirstEllipse />
        <SecondEllipse />
      </div>
      <div className="logo">
        <img src={Logo} alt="SNoF-logo" />
      </div>
      <form action="#" method="post">
        <h2 className="text-center">Set up your account</h2>
        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress" id="progress"></div>
          <div
            className="progress-step progress-step-active"
            data-title="Step 1"
          ></div>
          <div className="progress-step" data-title="Half way to finish"></div>
          <div className="progress-step" data-title="Finish set up"></div>
        </div>

        {/* Steps */}
        <div className="form-step form-step-active">
          <Field labelName={orgLabel} type={type} name={orgName} id={id} />

          <div className="">
            <a href="#" className="btn btn-next width-50 ml-auto">
              Next
            </a>
          </div>
        </div>
        <div className="form-step">
          <div className="locations">
            <Field
              labelName={locationNumberLabel}
              type={locationNumberType}
              name={locationNumberName}
              id={locationNumberId}
            />
          </div>
          <div className="btn-group">
            <a href="#" className="btn btn-prev">
              Back
            </a>
            <a href="#" className="btn btn-next">
              Next
            </a>
          </div>
        </div>
        <div className="form-step">
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
            <FontAwesomeIcon
              className="password-show-icon active"
              icon={faEye}
            />
            <FontAwesomeIcon className="password-hide-icon" icon={faEyeSlash} />
          </div>

          <div className="">
            <SubmitButton buttonValue={submitButtonValue} />
          </div>
        </div>
      </form>
    </div>
  );
}
