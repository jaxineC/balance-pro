import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hashtag from "./Hashtag";

function ProjectInfo() {
  const [inputText, setInputText] = useState(""); //inside ProjectTinfo or Hashtag component for addHashTag

  function addHashTag() {}
  return (
    <div className="ProjectInfo ">
      <div className="projectName">
        <div className="TextL">Project Name Could be Too Long</div>
        <div className="TextS">2021/12/27 ~ 2022/07/08</div>
      </div>
      <span className="Hashtags TextS">
        <Hashtag text="Hashtag01" />
        <Hashtag text="Hashtag02" />
        <button onClick={addHashTag} className="TextS theme bold">
          {" "}
          >>>+{" "}
        </button>
      </span>
    </div>
  );
}

export default ProjectInfo;
