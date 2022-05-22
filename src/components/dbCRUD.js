import {
  collection,
  doc,
  setDoc,
  getDoc, //get data once
  getDocs,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";

// Create ------------------------------------------------------------------------------------------
// const taskID = Date.now().toString();
// let docID = taskID;
async function addData(db, col, docID, data) {
  try {
    // const docRef = await addDoc(collection(db, col), data);
    await setDoc(doc(db, col, docID), data);
    console.log("Document written with ID: ", docID); //docRef.id if use addDoc with unknown doc id
  } catch (event) {
    console.error("Error adding document: ", event);
  }
}

// Read - get data once----------------------------------------------------------------------------
async function fetchAllData(db, col, docID) {
  const docRef = doc(db, col, docID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Read - with query ------------------------------------------------------------------------
async function fetchData(db, col, cat) {
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
async function updateData(db, col, docID, data) {
  await db.collection(col).doc(docID).update(data);
}

// Delete -----------------------------------------------------------------------------------------
async function deleteData(db, col, docID) {
  await deleteDoc(doc(db, col, docID));
}

// Listner
function docListener() {}

export {
  addData,
  fetchAllData,
  fetchData,
  updateData,
  deleteData,
  docListener,
};
