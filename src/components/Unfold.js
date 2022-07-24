import React from "react";

function Unfold({
	focus,
	setFocus,
	setMousePosition,
	instruction,
	setInstruction,
}) {
	let path;
	if (focus === "work") {
		path = (
			<path
				d="m20.4851 15.535-8.485-8.48495-8.48499 8.48495 1.414 1.415 7.07099-7.07195 7.071 7.07195z"
				fill="rgb(0,0,0)"
			/>
		);
	} else if (focus === "life") {
		path = (
			<path
				d="m3.51489 8.46495 8.48501 8.48505 8.485-8.48505-1.414-1.415-7.071 7.07205-7.07101-7.07205z"
				fill="rgb(0,0,0)"
			/>
		);
	}
	function handleInstruction(e) {
		let txt;
		if (instruction) {
			setInstruction("");
			setMousePosition([]);
		} else {
			focus === "work"
				? (txt = "Focus on Life project")
				: (txt = "Focus on Work project");
			setInstruction(txt);
			setMousePosition([e.clientX, e.clientY]);
		}
	}

	function changeFocus() {
		if (focus === "work") {
			setFocus("life");
		} else {
			setFocus("work");
		}
	}
	return (
		<svg
			onClick={changeFocus}
			onPointerEnter={handleInstruction}
			onPointerLeave={handleInstruction}
			className="Unfold "
			style={{
				display: focus === "work" || focus === "life" ? "block" : "none",
				position: "absolute",
				top: focus === "work" ? "87%" : "18%",
				zIndex: 999,
			}}
			fill="none"
			height="18"
			width="18"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			{path}
		</svg>
	);
}

export default Unfold;
