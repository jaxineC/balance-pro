import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import DeleteBtn from "../Button/DeleteBtn";
import StretchBtn from "../Button/StretchBtn";
import { StyledTask } from "./Task.styled";

function Task({
	ZDay,
	cat,
	projectID,
	userID,
	item,
	Tasks,
	setTargetTask,
	setIsEditTask,
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
	const [initMouseClientX, setInitMouseClientX] = useState(0);
	const [stretchType, setStretchType] = useState("");
	const [isActive, setIsActive] = useState(false);
	let col = `${userID.uid}/${item.projectID}/tasks`;

	useEffect(() => {
		if (isDrag === false && isActive === true) {
			endDrag();
		}
	}, [isDrag]);

	useEffect(() => {
		if (isStretch === false && isActive === true) {
			endStretch();
		}
	}, [isStretch]);

	function initDrag(event) {
		setInitMouseClientX(event.clientX);
		setCurrentMouseLocation(event.clientX);
		setIsDrag(true);
		setIsActive(true);
	}

	function endDrag(event) {
		let x =
			Math.round((currentMouseLocation - initMouseClientX) / 20) *
			1000 *
			60 *
			60 *
			24;
		updateData(db, col, item.taskID, {
			end: new Date(item.end.seconds * 1000 + x),
			start: new Date(item.start.seconds * 1000 + x),
		});
		setInitMouseClientX(null);
		setCurrentMouseLocation(null);
		setTimeout(function() {
			setIsActive(false);
		}, 500);
	}

	function endStretch() {
		let data = {};
		let x =
			Math.round((currentMouseLocation - initMouseClientX) / 20) *
			1000 *
			60 *
			60 *
			24;
		if (stretchType === "start") {
			data = { start: new Date(item.start.seconds * 1000 + x) };
		} else if (stretchType === "end") {
			data = { end: new Date(item.end.seconds * 1000 + x) };
		}
		updateData(db, col, item.taskID, data);
		setInitMouseClientX(null);
		setCurrentMouseLocation(null);
		setStretchType("");
		setTimeout(function() {
			setIsActive(false);
		}, 500);
	}

	async function updateData(db, col, docID, data) {
		const queryRef = doc(db, col, docID);
		await updateDoc(queryRef, data);
	}

	function handleHover(event) {
		let stretchBtnStartNode = event.currentTarget.children[0];
		if (stretchBtnStartNode) {
			if (stretchBtnStartNode.style.display === "none") {
				stretchBtnStartNode.style.display = "inline";
			} else {
				stretchBtnStartNode.style.display = "none";
			}
		}

		let taskNoteNode = event.currentTarget.children[2];
		if (taskNoteNode.style.display) {
			if (taskNoteNode.style.display === "none") {
				taskNoteNode.style.display = "inline";
			} else {
				taskNoteNode.style.display = "none";
			}
		}

		let editBtnNode = event.currentTarget.children[3];
		if (editBtnNode) {
			if (editBtnNode.style.display === "none") {
				editBtnNode.style.display = "inline";
			} else {
				editBtnNode.style.display = "none";
			}
		}

		let stretchBtnEndNode = event.currentTarget.children[4];
		if (stretchBtnEndNode) {
			if (stretchBtnEndNode.style.display === "none") {
				stretchBtnEndNode.style.display = "inline";
			} else {
				stretchBtnEndNode.style.display = "none";
			}
		}

		let delteBtnNode = event.currentTarget.children[5];
		if (delteBtnNode) {
			if (delteBtnNode.style.display === "none") {
				delteBtnNode.style.display = "inline";
			} else {
				delteBtnNode.style.display = "none";
			}
		}
	}

	function renderEditTaskModal(event) {
		console.log(item.projectID);
		let docID = item.taskID;
		setEditTaskItem(item);
		setCurrentZero(refContainer.current.scrollLeft);
		setTargetTask(docID);
		setIsEditTask(true);
	}

	return (
		<StyledTask
			item={item}
			cat={cat}
			isActive={isActive}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			className="Task TextS"
			value={item.taskID}
			style={{
				width:
					Math.floor((item.end - item.start) / (60 * 60 * 24)) * 20 +
					19 -
					(isActive && stretchType === "start"
						? currentMouseLocation - initMouseClientX
						: 0) +
					(isActive && stretchType === "end"
						? currentMouseLocation - initMouseClientX
						: 0),
				top: Tasks.indexOf(item) * (cat === "overlay" ? 31 : 26),
				left:
					20 * (8 * 7 - 1 + ZDay.DAY + 1) +
					Math.floor((item.start.toDate() - Date.now()) / 86400000) * 20 +
					(isActive && isDrag ? currentMouseLocation - initMouseClientX : 0) +
					(isActive && stretchType === "start"
						? currentMouseLocation - initMouseClientX
						: 0),
			}}
		>
			<StretchBtn
				date="start"
				setIsStretch={setIsStretch}
				setCurrentMouseLocation={setCurrentMouseLocation}
				setIsActive={setIsActive}
				setInitMouseClientX={setInitMouseClientX}
				setStretchType={setStretchType}
			/>
			<div
				className="TaskContent"
				onMouseDown={(event) => {
					if (isStretch === false) {
						initDrag(event);
					}
				}}
				style={{
					width: Math.floor((item.end - item.start) / (60 * 60 * 24)) * 20,
				}}
			>
				{item.content}
			</div>
			<span className="taskNote TextXS">{item.note}</span>
			<svg
				onClick={renderEditTaskModal}
				className="editBtn"
				fill="none"
				height="26"
				viewBox="0 0 24 24"
				width="22"
			>
				<path
					clipRule="evenodd"
					d="m14.9703 3.3437c-1.9537-.45827-3.9869-.45827-5.94055 0-2.82134.66179-5.02425 2.86471-5.68605 5.68604-.45827 1.95366-.45827 3.98686 0 5.94056.6618 2.8213 2.86472 5.0242 5.68605 5.686 1.95365.4583 3.98685.4583 5.94055 0 2.8213-.6618 5.0242-2.8647 5.686-5.686.4583-1.9537.4583-3.9869 0-5.94055-.6618-2.82133-2.8647-5.02426-5.686-5.68605zm-2.3484 4.90161c.4154-.41543.9789-.64882 1.5664-.64882 1.2234 0 2.2152.99179 2.2152 2.21522 0 .58749-.2334 1.15099-.6488 1.56639l-2.4997 2.4997c-1.1603 1.1603-2.6142 1.9835-4.20611 2.3815l-.48314.1207c-.57119.1428-1.08859-.3745-.94579-.9457l.12078-.4832c.39799-1.5919 1.22115-3.0458 2.38146-4.2061zm1.5664.49992c-.2829 0-.5541.11236-.7541.31237l-.3625.36252c-.0358.28507.1066.68298.4659 1.04228s.7572.5017 1.0423.466l.3625-.3626c.2-.2.3124-.4712.3124-.75409 0-.589-.4775-1.06648-1.0665-1.06648zm-.5712 3.14587c-.3414-.1502-.6486-.3732-.8918-.6164s-.4662-.5503-.6164-.8918l-1.1744 1.1744c-.98523.9852-1.69205 2.2128-2.04979 3.558 1.34519-.3577 2.57279-1.0646 3.55799-2.0498z"
					fill="rgb(138,43,226)"
					fillRule="evenodd"
				/>
			</svg>

			<StretchBtn
				date="end"
				setIsStretch={setIsStretch}
				setCurrentMouseLocation={setCurrentMouseLocation}
				setIsActive={setIsActive}
				setInitMouseClientX={setInitMouseClientX}
				setStretchType={setStretchType}
			/>
			<DeleteBtn cat={cat} item={item} userID={userID} projectID={projectID} />
		</StyledTask>
	);
}

export default Task;