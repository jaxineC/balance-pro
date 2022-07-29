import React, { useState, useEffect } from "react";
import {
	collection,
	getDocs,
	query,
	orderBy,
	where,
	onSnapshot,
	collectionGroup,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import AddTaskModal from "../AddTaskModal/index.js";
import Task from "../Task/index.js";
import { StyledTaskList } from "./TaskList.styled";

function TaskList({
	userID,
	cat,
	clickPosition,
	clickDate,
	isAddTask,
	projectID,
	setClickPosition,
	XPosition,
	ZDay,
	setIsAddTask,
	setIsEditTask,
	setTargetTask,
	setEditTaskItem,
	isDrag,
	setIsDrag,
	currentMouseLocation,
	setCurrentMouseLocation,
	isStretch,
	setIsStretch,
	setCurrentZero,
	refContainer,
}) {
	const [Tasks, setTasks] = useState([]);
	let col = `${userID.uid}/${projectID}/tasks`;

	function handleChildClick(e) {
		e.stopPropagation();
	}

	async function fetchTasks(cat, projectID) {
		if (cat === "overlay") {
			let colGroup = "tasks";
			let initTasks = [];
			let x = projectID[0];
			let y = projectID[1];
			const dataRef = query(
				collectionGroup(db, colGroup),
				where("projectID", "in", [x, y]),
				orderBy("start")
			);
			const querySnapshot = await getDocs(dataRef);
			querySnapshot.forEach((doc) => {
				initTasks = [...initTasks, doc.data()];
			});
			setTasks(initTasks);
		} else {
			const dataRef = collection(db, col);
			const q = query(dataRef, orderBy("start"));
			const querySnapshot = await getDocs(q);
			let initTasks = [];
			querySnapshot.forEach((doc) => {
				initTasks = [...initTasks, doc.data()];
			});
			setTasks(initTasks);
		}
	}

	function docListener(cat, projectID) {
		if (cat === "overlay") {
			let colGroup = "tasks";

			let x = projectID[0];
			let y = projectID[1];
			const dataRef = query(
				collectionGroup(db, colGroup),
				where("projectID", "in", [x, y]),
				orderBy("start")
			);
			onSnapshot(dataRef, (changedSnapshot) => {
				let updatedTasks = [];
				changedSnapshot.forEach((doc) => {
					updatedTasks = [...updatedTasks, doc.data()];
				});
				setTasks(updatedTasks);
			});
		} else {
			const dataRef = collection(db, col);
			const q = query(dataRef, orderBy("start"));
			onSnapshot(q, (changedSnapshot) => {
				let updatedTasks = [];
				changedSnapshot.forEach((doc) => {
					updatedTasks = [...updatedTasks, doc.data()];
				});
				setTasks(updatedTasks);
			});
		}
	}

	useEffect(() => {
		fetchTasks(cat, projectID);
		docListener(cat, projectID);
	}, []);

	const taskItems = Tasks.map((item) => (
		<Task
			key={item.taskID}
			ZDay={ZDay}
			cat={cat}
			projectID={projectID}
			userID={userID}
			item={item}
			Tasks={Tasks}
			setTargetTask={setTargetTask}
			setIsEditTask={setIsEditTask}
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
	));

	return (
		<StyledTaskList onClick={handleChildClick} className="TaskList TextS">
			{taskItems}
			<AddTaskModal
				userID={userID}
				cat={cat}
				clickDate={clickDate}
				clickPosition={clickPosition}
				isAddTask={isAddTask}
				projectID={projectID}
				setClickPosition={setClickPosition}
				Tasks={Tasks}
				XPosition={XPosition}
				setIsAddTask={setIsAddTask}
			/>
		</StyledTaskList>
	);
}

export default TaskList;
