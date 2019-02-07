import React from "react";
import "./error.scss";

const ErrorInformations = ({ status, msg }) => {
  return (
    <div className="error">
      <h1>Wystąpił bład podczas pobierania danych.</h1>
      <p>
        Error: {status} - {msg}
      </p>
    </div>
  );
};

export default ErrorInformations;
