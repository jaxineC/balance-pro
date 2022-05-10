import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectList(props) {
  return (
    <ul className={`ProjectList ${props.cat}`}>
      <li>project 01</li>
      <li>project 02</li>
      <li>project 03</li>
    </ul>
  );
}

export default ProjectList;
