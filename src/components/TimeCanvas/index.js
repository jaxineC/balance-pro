import React, { useState } from "react";
import TaskList from "../TaskList/index.js";
import EditTaskModal from "../EditTaskModal/index.js";
import { StyledTimeCanvas } from "./TimeCanvas.styled";

function TimeCanvas({
	userID,
	cat,
	clickPosition,
	clickDate,
	projectID,
	setClickPosition,
	XPosition,
	ZDay,
	isAddTask,
	setIsAddTask,
	isDrag,
	setIsDrag,
	currentMouseLocation,
	setCurrentMouseLocation,
	isStretch,
	setIsStretch,
	isEditTask,
	setIsEditTask,
	refContainer,
}) {
	const [targetTask, setTargetTask] = useState("");
	const [editTaskItem, setEditTaskItem] = useState("");
	const [currentZero, setCurrentZero] = useState(XPosition);
	let totalWks = 26;
	let totalDays = totalWks * 7;
	let frames = [];

	for (let i = 1; i <= totalDays; i++) {
		if (i % 7 === 0 || (i + 1) % 7 === 0) {
			frames.push(<div className="timeFrame weekend" key={i}></div>);
		} else {
			frames.push(<div className="timeFrame" key={i}></div>);
		}
	}

	return (
		<StyledTimeCanvas className="TimeCanvas ">
			<TaskList
				userID={userID}
				cat={cat}
				ZDay={ZDay}
				XPosition={XPosition}
				clickPosition={clickPosition}
				clickDate={clickDate}
				setClickPosition={setClickPosition}
				projectID={projectID}
				isAddTask={isAddTask}
				setIsAddTask={setIsAddTask}
				isEditTask={isEditTask}
				setIsEditTask={setIsEditTask}
				targetTask={targetTask}
				setTargetTask={setTargetTask}
				setEditTaskItem={setEditTaskItem}
				isDrag={isDrag}
				setIsDrag={setIsDrag}
				currentMouseLocation={currentMouseLocation}
				setCurrentMouseLocation={setCurrentMouseLocation}
				isStretch={isStretch}
				setIsStretch={setIsStretch}
				setCurrentZero={setCurrentZero}
				refContainer={refContainer}
			/>
			<EditTaskModal
				userID={userID}
				isEditTask={isEditTask}
				setIsEditTask={setIsEditTask}
				targetTask={targetTask}
				setTargetTask={setTargetTask}
				projectID={projectID}
				editTaskItem={editTaskItem}
				setEditTaskItem={setEditTaskItem}
				XPosition={XPosition}
				refContainer={refContainer}
				currentZero={currentZero}
				setCurrentZero={setCurrentZero}
			/>
			{frames}
		</StyledTimeCanvas>
	);
}

export default TimeCanvas;
