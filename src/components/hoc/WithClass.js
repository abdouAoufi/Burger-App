/* jshint ignore:start */

import React from "react";

const withClass = (WrrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrrappedComponent {...props} />
    </div>
  );
};

export default withClass;
