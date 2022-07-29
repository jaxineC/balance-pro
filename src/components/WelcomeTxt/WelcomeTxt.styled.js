import styled from "styled-components";

export const StyledWelcomeTxt = styled.div`
	grid-row: ${(props) => (props.attr === "WelcomeTxt1" ? "1 / 2" : "2 / 3")};
	align-self: ${(props) =>
		props.attr === "WelcomeTxt1" ? "flex-end" : "flex-start"};
	position: relative;
	width: 80%;
	margin: 10px auto;
	input {
		width: 100%;
		height: 80px;
		color: #222500;
		border-style: none;
		margin-left: 0px;
		padding-left: 10px;
		font-family: Segoe UI, sans-serif;
	}
	textarea {
		width: 100%;
		height: 160px;
		color: #222500;
		border-style: none;
		margin-left: 0px;
		margin-block-start: 0.67em;
		margin-block-end: 0.67em;
		padding-left: 10px;
		font-family: Segoe UI, sans-serif;
		vertical-align: top;
		overflow-wrap: break-word;
		hyphens: auto;
	}
	span {
		height: 6px;
		display: ${(props) => (props.updateAlert === "ok" ? "block" : "none")};
		position: absolute;
		left: 0px;
		top: ${(props) => (props.attr === "WelcomeTxt1" ? "-12px" : "-6px")};
		padding: 0px 4px;
		background-color: #fae6ff;
		.updated {
			font-size: 14px;
			color: blueviolet;
			position: relative;
			top: ${(props) => (props.attr === "WelcomeTxt1" ? "-10px" : "-6px")};
		}
		.failed {
			display: ${(props) => (props.updateAlert === "fail" ? "block" : "none")};
			position: absolute;
			left: 0px;
			top: ${(props) => (props.attr === "WelcomeTxt1" ? "-12px" : "-6px")};
			padding: 0px 4px;
		}
	}
`;
