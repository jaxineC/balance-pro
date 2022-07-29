import styled from "styled-components";
import "../../styles/index.css";

export const ConModal = styled.form`
	height: ${(props) => (props.size === "full" ? "100vh" : props.size)};
	width: ${(props) => (props.size === "full" ? "100vw" : props.size)};
	position: fixed;
	bottom: 0px;
	z-index: 999;
	display: ${(props) => (props.isContact === true ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	.Modal__Form {
		position: absolute;
		width: 340px;
		display: ${(props) => (props.isContact === true ? "flex" : "none")};
		flex-direction: column;
		background-color: rgb(242, 242, 242);
		box-shadow: black 5px 5px 10px;
		border: 1px solid #cccccc;
		border-radius: 10px;
		padding: 50px 12.5px;
		justify-content: flex-start;
		align-items: center;
		z-index: 999;
		div {
			text-align: center;
		}
		hr {
			width: 260px;
			text-align: center;
			margin: 25px 0px 12.5px 0px;
			border-color: blueviolet;
		}
		input {
			width: 225px;
			height: 30px;
			margin: 10px;
			padding: 5px 10px 1px 10px;
			border: 1px solid;
			border-radius: 10px;
			border-color: #dddddd;
			letter-spacing: 1px;
			&:hover {
				border-color: #8a2be2;
			}
		}
		textarea {
			width: 225px;
			border: 1px solid #dddddd;
			border-radius: 10px;
			padding: 5px 10px 1px 10px;
			margin: 10px;
			resize: vertical;
		}
		.Message {
			color: blueviolet;
			font-size: var(--TextS);
		}
		.closeBtn {
			height: 20px;
			position: absolute;
			top: 15px;
			right: 15px;
		}
	}
	.Modal__Background {
		height: 100vh;
		width: 100vw;
		background-color: #666666;
		opacity: 0.9;
		position: fixed;
		bottom: 0px;
		z-index: 998;
		display: ${(props) => (props.isContact === true ? "flex" : "none")};
		justify-content: center;
		align-items: center;
	}
`;
