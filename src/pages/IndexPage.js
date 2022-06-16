import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cover from "../icon/2201_w039_n003_74b_p1_74 [Converted].png";
import LogoImage from "../media/Logo144.png";
import Background from "../components/Background";
import WelcomBack from "../components/WelcomeBack";
import LoginBox from "../components/LoginBox";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { MainIndex } from "../styles/styledComponents.js";
import { GoButton } from "../styles/SharedStyled.js";

function IndexPage({ userID, setUserID, isDesktop, setIsDeskTop }) {
  // const user = useContext(UserContext);
  const [isReady, setIsReady] = useState(false);

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

  return (
    <MainIndex className="IndexPage">
      <div className="WelcomeImg">
        <img src={cover} alt="welcome" />
        <div>
          <a
            className="TextXS"
            href="https://www.freepik.com/vectors/working-time"
          >
            Working time vector created by upklyak - www.freepik.com
          </a>
        </div>
      </div>
      {userID ? (
        <WelcomBack
          userID={userID}
          setUserID={setUserID}
          isDesktop={isDesktop}
          setIsDeskTop={setIsDeskTop}
        />
      ) : (
        <LoginBox userID={userID} setUserID={setUserID} />
      )}
      <div className="Logo">
        <img src={LogoImage} alt="logo for images" className="image" />
      </div>
      {isDesktop ? <Background /> : ""}

      <Link className="Link" to="/list">
        <GoButton attr="primary" userID={userID} className="bold">
          Enter
        </GoButton>
      </Link>
    </MainIndex>
  );
}

export default IndexPage;
