import React from "react";

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
