import styled from "styled-components";
import "../../styles/index.css";

export const StyledSwitch = styled.label`
	margin: auto;
	margin-left: 30px;
	position: relative;
	top: 3px;
	display: inline-block;
	width: 32px;
	padding: 0px;
	height: 18px;
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
		padding: 1px;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: -1px;
		left: 0;
		right: -1px;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.2s;
		transition: 0.2s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 13px;
		width: 13px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		-webkit-transition: 0.2s;
		transition: 0.2s;
	}

	input:checked + .slider {
		background-color: #e6f252;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #e6f252;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(13px);
		-ms-transform: translateX(13px);
		transform: translateX(13px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 32px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;
