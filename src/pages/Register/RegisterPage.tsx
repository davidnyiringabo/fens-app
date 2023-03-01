<<<<<<< HEAD
import { useState } from "react";
import Button from "../../components/Button/Button";
=======
import { useRef, useEffect } from "react";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Field from "../../components/Field/Field";
import Select from "../../components/Select/Select";

import Logo from "./../../assets/snof-logo.png";
import Ellipse1 from "./../../assets/first-ellipse.svg";
import Ellipse2 from "./../../assets/second-ellipse.svg";

import "./RegisterPage.css";
import LocationRegistration from "./../../components/LocationRegistration/LocationRegistration";
>>>>>>> a5dbbe2 (Basic Login)

export default function RegisterPage() {
  let value = "Sign Up";
  return (
<<<<<<< HEAD
    <div className="Register">
      <Button buttonValue={value} />
=======
    <div className="register">
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
          <Select labelName={selectLabel} />
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
          <div className="">
            <SubmitButton buttonValue={submitButtonValue} />
          </div>
        </div>
      </form>
>>>>>>> a5dbbe2 (Basic Login)
    </div>
  );
}
