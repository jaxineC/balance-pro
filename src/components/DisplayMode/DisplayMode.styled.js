import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledDisplayMode = styled.div`
	position: fixed;
	top: 60px;
	right: 20px;
	${MQ} {
		right: 10px;
	}
	button {
		background-color: transparent;
		margin: auto 2px;
		border-width: 0px 0px 5px 0px;
		border-style: solid;
		border-color: #eeeeee;
		cursor: pointer;
		${MQ} {
			border-style: none;
			padding: 2px;
		}
	}
	.Focus {
		border-color: ${(props) =>
			props.focus === "work" || props.focus === "life" ? "#e6f252" : "#eeeeee"};
		svg {
			path {
				fill: ${(props) =>
					props.focus === "work" || props.focus === "life"
						? "blueviolet"
						: "rgb(152,152,152)"};
			}
		}
	}
	.Balance {
		border-color: ${(props) =>
			props.focus === "balance" ? "#e6f252" : "#eeeeee"};
		svg {
			path {
				fill: ${(props) =>
					props.focus === "balance" ? "blueviolet" : "rgb(152,152,152)"};
			}
		}
	}
	.Overlay {
		border-color: ${(props) =>
			props.focus === "overlay" ? "#e6f252" : "#eeeeee"};
		svg {
			path {
				fill: ${(props) =>
					props.focus === "overlay" ? "blueviolet" : "rgb(152,152,152)"};
			}
		}
	}
`;
