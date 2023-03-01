import { useState } from "react";
import Button from "../../components/Button/Button";

export default function RegisterPage() {
  let value = "Sign Up";
  return (
    <div className="Register">
      <Button buttonValue={value} />
    </div>
  );
}
