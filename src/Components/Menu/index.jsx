import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import "./menu.css";

function Menu() {
  return (
    <div className="menu-content">
      <a href="https://github.com/gladosn07" target="_blank" rel="noreferrer">
        <BsGithub size={35} color="#FFF" />
      </a>

      <Link className="my-Links" to="/links">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
