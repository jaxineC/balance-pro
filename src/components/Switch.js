import React, { useState, useEffect } from "react";

function Switch({
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
    console.log(list);
    if (event.target.checked) {
      list.push(event.target.parentNode.parentNode.getAttribute("value"));
      setSelectedProjects(list);
    } else {
      let list = selectedProjects.list.filter(
        (item) =>
          item !== event.target.parentNode.parentNode.getAttribute("value")
      );
      setSelectedProjects(list);
      console.log(selectedProjects);
    }
  }
  return (
    <label className="switch">
      <input onChange={handleChecked} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
