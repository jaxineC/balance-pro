import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledProjectDate = styled.div`
	input {
		border-width: 0px 0px 0px 0px;
		&::-webkit-calendar-picker-indicator {
			display: none;
			-webkit-appearance: none;
		}
	}
	.endInput {
		${MQ} {
			display: none;
		}
	}
`;
