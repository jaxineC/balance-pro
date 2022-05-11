import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hashtag() {
  return (
    <div className="Hashtags">
      <span className="Hashtag TextS">#Hashtag</span>
      <span className="Hashtag TextS">#Hashtag again</span>
      <span className="Hashtag TextS">#Hashtag again and again</span>
      <span className="TextM theme bold">+</span>
    </div>
  );
}

export default Hashtag;
