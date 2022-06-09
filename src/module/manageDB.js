import {
  collection,
  doc,
  setDoc,
  getDoc, //get data once
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
  Timestamp,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase.js";

// Create ------------------------------------------------------------------------------------------
// const taskID = Date.now().toString();
// let docID = taskID;
async function addData(col, docID, data) {
  try {
    // const docRef = await addDoc(collection(db, col), data);
    await setDoc(doc(db, col, docID), data, { merge: true });
    console.log("Document written with ID: ", docID); //docRef.id if use addDoc with unknown doc id
  } catch (event) {
    console.error("Error adding document: ", event);
  }
}

// Read - get data once----------------------------------------------------------------------------
async function fetchData(col, docID) {
  const docRef = doc(db, col, docID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
    // console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Read - with query ------------------------------------------------------------------------
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

// Update -----------------------------------------------------------------------------------------
// async function updateData(col, docID, data) {
//   await db.collection(col).doc(docID).update(data);
// }

async function updateData(col, docID, data) {
  const queryRef = doc(db, col, docID);
  await updateDoc(queryRef, data);
}

async function updateFieldArray(col, docID, field, data) {
  const queryRef = doc(db, col, docID);

  // Atomically add a new region to the "regions" array field.
  await updateDoc(queryRef, {
    field: arrayUnion(data),
  });

  // Atomically remove a region from the "regions" array field.
  await updateDoc(queryRef, {
    field: arrayRemove(data),
  });
}

// Delete -----------------------------------------------------------------------------------------
async function deleteData(db, col, docID) {
  await deleteDoc(doc(db, col, docID));
}

// Listner
function docListener() {
  const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
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
