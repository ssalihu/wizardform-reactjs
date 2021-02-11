import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactJson from "react-json-view";
import { useMultipleForm } from "usetheform";

import FormOne from "./components/wizard/FormOne";
import FormTwo from "./components/wizard/FormTwo";

import "bulma";
import "./styles.css";

function App() {
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const [getWizardState, wizard] = useMultipleForm((state) =>
    updateJson(state)
  );
  const onSubmitWizard = () => console.log(getWizardState());

  const [wizardState, updateJson] = useState({});

  return (
    <div className="App">
      {currentPage === 1 && (
        <FormOne name="form1" {...wizard} onSubmit={nextPage} />
      )}
      {currentPage === 2 && (
        <FormTwo
          name="form2"
          {...wizard}
          prevPage={prevPage}
          onSubmit={onSubmitWizard}
        />
      )}
      <br />
      <ReactJson src={wizardState} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
