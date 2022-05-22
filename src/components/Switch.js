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
    if (event.target.checked) {
      let list = [...selectedProjects, event.target.parentNode.value];
      setSelectedProjects(list);
    } else {
      let list = selectedProjects.filter(
        (item) => item !== event.target.parentNode.value
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
