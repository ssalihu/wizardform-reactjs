import React from "react";
import { Form } from "usetheform";
import Email from "./../fields/Email";
import SelectCountry from "./../fields/SelectCountry";
import TermAndConditions from "./../fields/TermAndConditions";

import Submit from "./../buttons/Submit";
import Reset from "./../buttons/Reset";

export default function FormTwo({ prevPage, ...props }) {
  return (
    <Form {...props}>
      <SelectCountry />
      <Email />
      <TermAndConditions />
      <div className="field is-grouped">
        <div className="control">
          <button type="button" onClick={prevPage} className="button is-text">
            Previous
          </button>
        </div>
        <div className="control">
          <Reset />
        </div>
        <div className="control">
          <Submit type="submit">Submit Wizard</Submit>
        </div>
      </div>
    </Form>
  );
}
