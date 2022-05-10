import React, { useState, useEffect } from "react";

function LoginBox() {
  return (
    <div className="LoginBox TextM">
      <label>email</label>
      <input placeholder="name@gmail.com"></input>
      <br />
      <label>password</label>
      <input placeholder="abcd1234"></input>
    </div>
  );
}

export default LoginBox;
