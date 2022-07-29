import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledProjectList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flexEnd;
	align-self: ${(props) => (props.attr === "work" ? "end" : "start")};
	${MQ} {
		width: 75%;
	}
`;
