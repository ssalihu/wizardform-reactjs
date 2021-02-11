import React from "react";
import { useForm } from "usetheform";

const Reset = () => {
  const { reset, pristine } = useForm();
  return (
    <button
      disabled={pristine}
      type="button"
      className="button is-text"
      onClick={reset}
    >
      Reset
    </button>
  );
};

export default Reset;
