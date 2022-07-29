import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderSec from "./components/HeaderSec";
import FooterSec from "./components/FooterSec";
import IndexPage from "./pages/IndexPage";
import ListPage from "./pages/ListPage.js";
import ProjectPage from "./pages/ProjectPage.js";
import AboutPage from "./pages/AboutPage.js";
import SignUpModal from "./components/SignUpModal";
import { getAuth } from "firebase/auth";

function App() {
	const [isDesktop, setIsDeskTop] = useState(true);
	const [userID, setUserID] = useState(null);
	const [selectedProjects, setSelectedProjects] = useState([]);
	const [isSignUp, setIsSignUp] = useState(false);

	function getCurrentUserInfo() {
		const auth = getAuth();
		const user = auth.currentUser;
		if (user) {
			setUserID(user);
		}
	}
	useEffect(() => {
		getCurrentUserInfo();
	}, []);

	useEffect(() => {
		function checkDevice() {
			if (window.innerWidth <= 600) {
				setIsDeskTop(false);
			} else {
				setIsDeskTop(true);
			}
		}

		window.addEventListener("resize", checkDevice);
		checkDevice();
	}, []);

	return (
		<BrowserRouter onload={getCurrentUserInfo}>
			<HeaderSec
				isDesktop={isDesktop}
				setIsDeskTop={setIsDeskTop}
				userID={userID}
				setUserID={setUserID}
				isSignUp={isSignUp}
				setIsSignUp={setIsSignUp}
			/>
			<SignUpModal
				isSignUp={isSignUp}
				setIsSignUp={setIsSignUp}
				userID={userID}
				setUserID={setUserID}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<IndexPage
							isDesktop={isDesktop}
							userID={userID}
							setUserID={setUserID}
						/>
					}
				/>
				<Route
					path="/list"
					element={
						<ListPage
							userID={userID}
							setUserID={setUserID}
							selectedProjects={selectedProjects}
							setSelectedProjects={setSelectedProjects}
						/>
					}
				/>
				<Route
					path="/project"
					element={
						<ProjectPage
							isDesktop={isDesktop}
							userID={userID}
							setUserID={setUserID}
							selectedProjects={selectedProjects}
							setSelectedProjects={setSelectedProjects}
						/>
					}
				/>
				<Route path="/about" element={<AboutPage isDesktop={isDesktop} />} />
			</Routes>

			<FooterSec />
		</BrowserRouter>
	);
}

export default App;
