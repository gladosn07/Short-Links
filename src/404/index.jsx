import React from "react";
import "./error.css";

import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <img src="/images/notfound.png" alt="imagens de página não encontrada" />
      <h2>Página nao encontrada!</h2>
      <button>
        <Link className="button-Back" to="/">
          Voltar para Home
        </Link>
      </button>
    </div>
  );
}

export default Error;
