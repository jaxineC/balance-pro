import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hashtag({ cat, workInfo, lifeInfo }) {
  // const [ hashtag, setHashtag] = useState([]);
  let tags = "";
  if (cat == "work") {
    let x = workInfo.hashtag;
    tags = x.map((item, index) => (
      <span key={index} className="Hashtag TextS">
        #{item}
      </span>
    ));
  } else {
    console.log(lifeInfo.hashtag);
    let x = lifeInfo.hashtag;
    tags = x.map((item, index) => (
      <span key={index} className="Hashtag TextS">
        #{item}
      </span>
    ));
  }

  return (
    <ul className="Hashtags">
      <span>{tags}</span>
    </ul>
  );
}

export default Hashtag;
