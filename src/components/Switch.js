import React, { useState, useEffect } from "react";

function Switch({
  cat,
  selectedProjects,
  setSelectedProjects,
  checked,
  setChecked,
}) {
  function handleChecked(event) {
    event.target.checked
      ? setChecked((checked += 1))
      : setChecked((checked -= 1));

    let list = selectedProjects;
    if (event.target.checked) {
      // list.push(event.target.parentNode.parentNode.getAttribute("value"));
      cat === "work"
        ? (list[0] = event.target.parentNode.parentNode.getAttribute("value"))
        : (list[1] = event.target.parentNode.parentNode.getAttribute("value"));
      setSelectedProjects(list);
    } else {
      cat === "work" ? (list[0] = null) : (list[1] = null);
      setSelectedProjects(list);
    }
    // else {
    //   let list = selectedProjects.list.filter(
    //     (item) =>
    //       item !== event.target.parentNode.parentNode.getAttribute("value")
    //   );
    //   setSelectedProjects(list);
    // }
  }
  return (
    <label className="switch">
      <input onChange={handleChecked} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
