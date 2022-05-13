import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hashtag(props) {
  return (
    // <div className="Hashtags">
    <span className="Hashtag TextS"># {props.text}</span>
    // {/* <span className="TextM theme bold"> >>> +</span> */}
    // </div>
  );
}

export default Hashtag;
