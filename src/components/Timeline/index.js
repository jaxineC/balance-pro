import React, { useState, useEffect, useRef } from "react";
import DateBar from "../DateBar";
import TimeCanvas from "../TimeCanvas";
import { StyledTimeline } from "./Timeline.styled";

function Timeline({ userID, cat, projectID, XPosition, setXPosition }) {
	const [isAddTask, setIsAddTask] = useState(false);
	const [isEditTask, setIsEditTask] = useState(false);
	const [isDrag, setIsDrag] = useState(false);
	const [isStretch, setIsStretch] = useState("");
	const [currentMouseLocation, setCurrentMouseLocation] = useState(null);
	const [clickPosition, setClickPosition] = useState(null);
	const [clickDate, setClickDate] = useState(0);
	const [ZDay, setZDay] = useState({
		TODAY: 0,
		YYYY: 0,
		MM: 0,
		DD: 0,
		DAY: 0,
		MondayDate: 0,
	});
	const refContainer = useRef();
	useEffect(() => {
		refContainer.current.scrollLeft = XPosition;
	}, []);

	function handleAddTask(event) {
		if (!isEditTask) {
			getDate(event);
			console.log(Date.now() / (1000 * 60 * 60 * 24));
		}
		if (isAddTask) {
			setIsAddTask(false);
		}
	}

	function getDate(event) {
		setXPosition(refContainer.current.scrollLeft);
		setClickPosition(event.clientX);

		function renderAddTaskModal() {
			setClickDate(
				ZDay.TODAY +
					(Math.floor(
						(event.clientX +
							refContainer.current.scrollLeft -
							20 * (8 * 7 - 1)) /
							20
					) -
						ZDay.DAY) *
						(1000 * 60 * 60 * 24)
			);
			setIsAddTask(true);
		}

		renderAddTaskModal();
	}

	return (
		<StyledTimeline
			onClick={() => {
				if (isAddTask === true) {
					setIsAddTask(false);
				}
			}}
			onDoubleClick={handleAddTask}
			onMouseUp={() => {
				setIsDrag(false);
				setIsStretch(false);
			}}
			onMouseMove={(event) => {
				if (isDrag) {
					setCurrentMouseLocation(event.clientX);
				}
				if (isStretch) {
					setCurrentMouseLocation(event.clientX);
				}
			}}
			className="Timeline "
			ref={refContainer}
		>
			<DateBar setZDay={setZDay} ZDay={ZDay} />
			<TimeCanvas
				userID={userID}
				cat={cat}
				ZDay={ZDay}
				XPosition={XPosition}
				clickPosition={clickPosition}
				clickDate={clickDate}
				setClickPosition={setClickPosition}
				projectID={projectID}
				isAddTask={isAddTask}
				isDrag={isDrag}
				setIsDrag={setIsDrag}
				currentMouseLocation={currentMouseLocation}
				setCurrentMouseLocation={setCurrentMouseLocation}
				isStretch={isStretch}
				setIsStretch={setIsStretch}
				setIsAddTask={setIsAddTask}
				isEditTask={isEditTask}
				setIsEditTask={setIsEditTask}
				refContainer={refContainer}
			/>
		</StyledTimeline>
	);
}

export default Timeline;
