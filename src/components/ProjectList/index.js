import React, { useState, useEffect } from "react";
import {
	collection,
	doc,
	getDocs,
	deleteDoc,
	query,
	where,
	onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import Switch from "../Switch";
import { StyledProjectList } from "./ProjectList.styled.js";

function ProjectList({
	cat,
	userID,
	checked,
	setChecked,
	selectedProjects,
	setSelectedProjects,
}) {
	const [projects, setProjects] = useState([]);
	const [txt, setTxt] = useState("");
	let col = userID.uid;

	async function fetchData() {
		const dataRef = query(collection(db, col));
		const q = query(dataRef, where("cat", "==", cat));
		const querySnapshot = await getDocs(q);
		let projectList = [];
		querySnapshot.forEach((doc) => {
			projectList = [...projectList, doc.data()];
		});
		setProjects(projectList);
	}

	function docListener() {
		const dataRef = collection(db, col);
		const q = query(dataRef, where("cat", "==", cat));
		onSnapshot(q, (changedSnapshot) => {
			let updatedProjects = [];
			changedSnapshot.forEach((doc) => {
				updatedProjects = [...updatedProjects, doc.data()];
			});
			setProjects(updatedProjects);
			setTxt(`${cat} projects will be listed here.`);
		});
	}

	useEffect(() => {
		fetchData();
		docListener();
	}, []);

	function handleHover(event) {
		if (
			cat === "work" &&
			selectedProjects[0] !== event.target.parentNode.getAttribute("value")
		) {
			let theBtn = event.target.parentNode.children[1].children[0];
			event.stopPropagation();
			if (theBtn.style.display === "none") {
				theBtn.style.display = "inline";
			} else {
				theBtn.style.display = "none";
			}
		} else if (
			cat === "life" &&
			selectedProjects[1] !== event.target.parentNode.getAttribute("value")
		) {
			let theBtn = event.target.parentNode.children[1].children[0];
			event.stopPropagation();
			if (theBtn.style.display === "none") {
				theBtn.style.display = "inline";
			} else {
				theBtn.style.display = "none";
			}
		}
	}

	async function handleDeleteTask(event) {
		let col = userID.uid;
		let docID = event.target.parentElement.parentElement.parentElement.getAttribute(
			"value"
		);
		await deleteDoc(doc(db, col, docID));
	}

	let hintTxt = <span className="TextS">{txt}</span>;

	let projectItems = projects.map((item) => (
		<li
			style={{ display: "flex", marginBottom: 10 }}
			key={item.projectID}
			value={item.projectID}
		>
			<span onMouseOver={handleHover}>{item.name}</span>
			<span className="18x22" style={{ width: 22, height: 18 }}>
				<svg
					className="DeleteBtn"
					onClick={(event) => {
						handleDeleteTask(event);
					}}
					style={{
						display: "none",
						height: 18,
						position: "relative",
						top: 4,
						left: 6,
						padding: 0,
						margin: 0,
					}}
					fill="none"
					height="18"
					viewBox="0 0 24 24"
					width="22"
				>
					<path
						clipRule="evenodd"
						d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm1.68415 6.55788c-.2243-.22431-.588-.22431-.81232 0-.22431.22432-.22431.58802 0 .81232l1.28612 1.2861-1.28612 1.2861c-.22431.2243-.22431.588 0 .8123.22432.2243.58802.2243.81232 0l1.2861-1.2861 1.2861 1.2861c.2243.2243.588.2243.8123 0s.2243-.588 0-.8123l-1.2861-1.2861 1.2861-1.2861c.2243-.2243.2243-.588 0-.81232-.2243-.22431-.588-.22431-.8123 0l-1.2861 1.28612z"
						fill="rgb(152,152,152)"
						fillRule="evenodd"
					/>
				</svg>
			</span>
			<Switch
				item={item}
				userID={userID}
				cat={cat}
				selectedProjects={selectedProjects}
				setSelectedProjects={setSelectedProjects}
				checked={checked}
				setChecked={setChecked}
			/>
		</li>
	));

	return (
		<StyledProjectList className={cat} attr={cat}>
			{projects[0] ? projectItems : hintTxt}
		</StyledProjectList>
	);
}

export default ProjectList;
