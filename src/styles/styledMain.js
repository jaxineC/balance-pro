import styled from "styled-components";
import "./index.css";
import MQ from "./MQ.js";

//------------------- About Page--------------------//
export const StyledAboutPage = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 200px;
	.demo {
		box-shadow: 10px 10px 10px var(--lightGrey);
	}
	.backToTop {
		height: 100px;
		align-self: flex-end;
		padding: 20px;
		cursor: pointer;
	}

	.footerBackground {
		height: 150px;
		background-color: blueviolet;
	}

	${MQ} {
		height: auto;
	}
`;

//------------------- Index Page--------------------//
export const StyledIndexPage = styled.main`
	display: grid;
	column-gap: 2.5%;
	align-content: center;
	justify-content: center;
	grid-template-columns: 53% 27% 15%;
	grid-template-rows: 1fr;
	.WelcomeImg {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		margin: auto;
		z-index: -1;
		img {
			object-fit: cover;
			height: 95%;
			width: 120%;
			overflow: visible;
		}
		div {
			a {
				color: #dddddd;
			}
		}
	}
	.Logo {
		width: 100%;
		object-fit: scale-down;
		margin: auto;
	}
	.Background {
		display: ${(props) => (props.isDesktop ? "block" : "none")};
	}
	${MQ} {
		height: calc(100% - 45px);
		grid-template-columns: 100%;
		grid-template-rows: 70% 20%;
		align-content: flex-start;
		.WelcomeImg {
			height: 100% !important;
			width: 100% !important;
			object-fit: cover !important;
			margin: auto;
			overflow: hidden;
		}
		.Logo {
			display: none;
		}
	}
`;

//------------------- List Page--------------------//
export const StyledListPage = styled.main`
	height: calc(100vh - 45px);
	width: 100%;
	position: absolute;
	top: 45px;
	display: grid;
	column-gap: 2.5%;
	align-content: center;
	justify-content: center;
	grid-template-columns: 50% 15% 25%;
	grid-template-rows: repeat(2, 1fr);
	${MQ} {
		overflow: clip;
		grid-template-columns: 90%;
		grid-template-rows: 20% 20% 10% 20% 20%;
		row-gap: 2%;
	}
`;

//------------------- Project Page--------------------//
const handleModeDisplay = (focus) => {
	switch (focus) {
		case "balance":
			return "11% calc(39% - 1px) 11% calc(39% - 1px) 0%";
		case "work":
			return "11% calc(78% - 2px) 11% 0% 0%";
		case "life":
			return "11% 0% 11% calc(78% - 2px) 0%";
		case "overlay":
			return "11% 0% 11% 0% calc(78% - 2px)";
		default:
			return "11% calc(39% - 1px) 11% calc(39% - 1px) 0%";
	}
};

export const StyledProjectPage = styled.main`
	box-sizing: border-box;
	display: grid;
	column-gap: 2.5%;
	align-content: center;
	justify-content: center;
	grid-template-columns: 1fr;
	grid-template-rows: ${(props) => handleModeDisplay(props.focus)};
	width: 100%;
	margin: auto;
	text-align: start;
	${MQ} {
		height: calc(100vh - 45px);
		overflow: clip;
		grid-template-columns: 100%;
	}
`;
