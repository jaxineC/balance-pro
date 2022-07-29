import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.js";
import { updateData } from "../../module/manageDB.js";
import { StyledSwitch } from "./Switch.styled.js";

function Switch({ item, userID, cat, selectedProjects, setSelectedProjects }) {
	const [isChecked, setIsChecked] = useState(false);
	let col = userID.uid;
	let docID = "selectedProjects";
	let list = selectedProjects;

	const refTarget = useRef(false);

	useEffect(() => {
		fetchData();
		docListener();
	}, []);

	async function fetchData() {
		try {
			const docSnap = await getDoc(doc(db, col, docID));
			if (docSnap.exists()) {
				if (cat === "work") {
					if (docSnap.data().work === item.projectID) {
						refTarget.checked = true;
						setIsChecked(true);
						list[0] = item.projectID;
						setSelectedProjects(list);
					}
				} else if (cat === "life") {
					if (docSnap.data().life === item.projectID) {
						refTarget.checked = true;
						setIsChecked(true);
						list[1] = item.projectID;
						setSelectedProjects(list);
					}
				}
			} else {
				console.log("No such document!");
			}
		} catch (error) {
			console.log("Error getting cached document:", error);
		}
	}

	function docListener() {
		const docRef = doc(db, col, docID);
		onSnapshot(docRef, (doc) => {});
	}

	function handleChecked(event) {
		event.target.checked ? setIsChecked(true) : setIsChecked(false);

		let list = selectedProjects;
		if (event.target.checked) {
			cat === "work" ? (list[0] = item.projectID) : (list[1] = item.projectID);
			setSelectedProjects(list);
		} else {
			cat === "work" ? (list[0] = null) : (list[1] = null);
			setSelectedProjects(list);
		}

		let data;
		if (cat === "work") {
			data = { work: item.projectID };
		} else {
			data = { life: item.projectID };
		}
		try {
			updateData(col, docID, data);
		} catch (error) {
			console.log("recored selected project failed:", error);
		}
	}

	return (
		<StyledSwitch className="switch">
			<input
				onChange={handleChecked}
				type="radio"
				name={cat}
				ref={refTarget}
				checked={isChecked ? true : false}
			/>
			<span className="slider round"></span>
		</StyledSwitch>
	);
}

export default Switch;