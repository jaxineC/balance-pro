import React, { useState, useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";
import { updateData } from "../module/manageDB.js";
import { StyledWelcomeTxt } from "../styles/WelcomeTxt.styled.js";

function WelcomeTxt1({ userID }) {
	const [txt1Input, setTxt1Input] = useState("");
	const [txt2Input, setTxt2Input] = useState("");
	const [updateAlert, setUpdateAlert] = useState("");

	let col = userID.uid;
	let docID = "welcomeTXT";

	async function fetchData() {
		try {
			const docSnap = await getDoc(doc(db, col, docID));
			if (docSnap.exists()) {
				setTxt1Input(docSnap.data().txt1);
				setTxt2Input(docSnap.data().txt2);
			} else {
				console.log("No such document!");
			}
		} catch (error) {
			console.log("Error getting cached document:", error);
		}
	}

	function docListener() {
		const docRef = doc(db, col, docID);
		onSnapshot(docRef, (doc) => {
			setTxt1Input(doc.data().txt1);
			setTxt2Input(doc.data().txt2);
		});
	}

	function handleGreetingUpdate() {
		let data = { txt1: txt1Input, txt2: txt2Input };
		try {
			updateData(col, docID, data);
			setUpdateAlert("ok");
			setTimeout(() => {
				setUpdateAlert("");
			}, 1000);
		} catch (event) {
			setUpdateAlert("fail");
			setTimeout(() => {
				setUpdateAlert("");
			}, 1000);
		}
	}

	useEffect(() => {
		fetchData();
		docListener();
	}, []);

	return (
		<StyledWelcomeTxt className="WelcomeTxt1" updateAlert={updateAlert}>
			<input
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						handleGreetingUpdate();
					}
				}}
				className="TextXL bold txt1Input"
				onChange={(event) => {
					setTxt1Input(event.target.value);
				}}
				value={txt1Input}
			></input>
			<span>
				<span className="updated">updated!</span>
				<span className="failed">Oops, try again!</span>
			</span>
		</StyledWelcomeTxt>
	);
}

export default WelcomeTxt1;
