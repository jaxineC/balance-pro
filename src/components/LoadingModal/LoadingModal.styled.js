import styled from "styled-components";
import "../../styles/index.css";

export const StyledLoading = styled.div`
	svg {
		height: 50px;
		width: 50px;
		text-align: center;
	}
	.Modal__Background {
		height: 100vh;
		width: 100vw;
		background-color: #666666;
		opacity: 0.9;
		position: fixed;
		bottom: 0px;
		z-index: 998;
		display: ${(props) => (props.isSignUp === true ? "flex" : "none")};
		justify-content: center;
		align-items: center;
	}
`;
