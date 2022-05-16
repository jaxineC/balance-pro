import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AddProject() {
  const [inputText, setInputText] = useState("");

  function handleAddProject() {}
  return (
    <div className="AddProject">
      <button type="button" className="TextM">
        + New Project
      </button>
    </div>
  );
}

export default AddProject;
