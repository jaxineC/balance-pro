import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hashtag from "../components/Hashtag";

function ProjectList(props) {
  return (
    <ul className={`ProjectList ${props.cat}`}>
      <li>
        project 01 <Hashtag text="balanced" />
      </li>
      <li>project 02</li>
      <li>project 03</li>
    </ul>
  );
}

export default ProjectList;
