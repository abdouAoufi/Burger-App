import React from "react";
import cssClasses from "./Spinner.css";

export const Spinner = () => {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.progress}>
        <div>Loading…</div>
      </div>
    </div>
  );
};

export default Spinner;
