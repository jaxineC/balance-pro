import React, { useState, useEffect, navigate } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginBox() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "30% 70%" }}
      className="LoginBox TextM"
    >
      <label>email</label>
      <input type="email" placeholder="name@gmail.com"></input>
      <label>password</label>
      <Link to="/list">
        <input
          onClick={handleClick}
          type="password"
          placeholder="abcd1234"
        ></input>
      </Link>
    </div>
  );
}

export default LoginBox;
