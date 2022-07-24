import {
	collection,
	doc,
	setDoc,
	getDoc,
	getDocs,
	updateDoc,
	deleteDoc,
	query,
	where,
	onSnapshot,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase.js";

async function addData(col, docID, data) {
	try {
		await setDoc(doc(db, col, docID), data, { merge: true });
		console.log("Document written with ID: ", docID);
	} catch (event) {
		console.error("Error adding document: ", event);
	}
}

async function fetchData(col, docID) {
	const docRef = doc(db, col, docID);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		console.log("No such document!");
	}
}

async function fetchQueryResult(cat, col, docID) {
	const dataRef = query(collection(db, col));
	const q = query(dataRef, where("cat", "==", cat));
	const querySnapshot = await getDocs(q);
	let projectList = [];

	querySnapshot.forEach((doc) => {
		projectList = [...projectList, doc.data()];
	});
	return projectList;
}

async function updateData(col, docID, data) {
	const queryRef = doc(db, col, docID);
	await updateDoc(queryRef, data);
}

async function updateFieldArray(col, docID, field, data) {
	const queryRef = doc(db, col, docID);

	await updateDoc(queryRef, {
		field: arrayUnion(data),
	});

	await updateDoc(queryRef, {
		field: arrayRemove(data),
	});
}

async function deleteData(db, col, docID) {
	await deleteDoc(doc(db, col, docID));
}

function docListener() {
	onSnapshot(doc(db, "cities", "SF"), (doc) => {
		console.log("Current data: ", doc.data());
	});
}

export {
	addData,
	fetchData,
	fetchQueryResult,
	updateData,
	deleteData,
	docListener,
	updateFieldArray,
};
