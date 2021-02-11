import React from "react";
import { Input, useValidation, Collection } from "usetheform";
const required = (value) => (value && value !== "" ? undefined : "Required");

export default function SexSelection() {
  const [status, validation] = useValidation([required]);

  return (
    <div className="field">
      <div className="control">
        <Collection object touched name="gender" {...validation}>
          <label className="radio">
            <Input type="radio" name="sex" value="M" />
            Male
          </label>
          <label className="radio">
            <Input type="radio" name="sex" value="F" />
            Female
          </label>
          <label className="radio">
            <Input type="radio" name="sex" value="Other" />
            Other
          </label>
        </Collection>
      </div>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  );
}
