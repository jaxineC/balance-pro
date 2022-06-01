import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function handleSignUp() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function handleSignIn() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function handleUpdateProfile() {
  user
    .updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(
      function () {
        // Profile updated successfully!
        // "Jane Q. User"
        var displayName = user.displayName;
        // "https://example.com/jane-q-user/profile.jpg"
        var photoURL = user.photoURL;
      },
      function (error) {
        // An error happened.
      }
    );
}

function handleSignOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

//By "using an observer", you ensure that the Auth object isn't in an intermediate state —
//such as initialization—when you get the current user.
//When you use signInWithRedirect,
//the onAuthStateChanged observer waits until getRedirectResult resolves before triggering.
function getUserInfo() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

//You can also get the currently signed-in user by "using the currentUser propert"y.
//If a user isn't signed in, currentUser is null:
function getCurrentUserInfo() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
  }
}

//Get a user's profile ---------------------------------------------------------
//Get a user's profile ---------------------------------------------------------
function getUserProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
}
