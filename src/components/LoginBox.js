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

      <input
        onClick={handleClick}
        type="password"
        placeholder="abcd1234"
      ></input>
      <br />
      {/* <Link to="/list" style={{ position: "relative" }}>
        <button
          style={{
            position: "absolute",
            right: 80,
            height: 25,
            width: 80,
            border: "1px solid #cccccc",
            borderRadius: 5,
            backgroundColor: "blueviolet",
            color: "white",
          }}
          type="button"
        >
          Login
        </button>
      </Link> */}
    </div>
  );
}

export default LoginBox;
