import React, { useEffect } from "react";

function DateBar({ ZDay, setZDay }) {
	let options = { month: "long" };
	let prevRows = [];
	let nextRows = [];

	useEffect(() => {
		let TODAY = Date.now();
		let date = new Date(TODAY);
		let [YYYY, MM, DD, DAY] = [
			date.getFullYear(),
			new Intl.DateTimeFormat("en-US", options).format(date),
			date
				.getDate()
				.toString()
				.padStart(2, "0"),
			date.getDay(),
		];
		let ZMonday = TODAY - (DAY - 1) * 86400 * 1000;
		let ZMondayDate = new Date(ZMonday)
			.getDate()
			.toString()
			.padStart(2, "0");
		setZDay({
			TODAY: TODAY,
			YYYY: YYYY,
			MM: MM,
			DD: DD,
			DAY: DAY,
			MondayDate: ZMondayDate,
		});
	}, []);

	function Prev() {
		let prevWk = 8;
		let prevDAY = Date.now() - (ZDay.DAY + 6 + prevWk * 7) * 86400 * 1000;

		for (let i = 1; i <= prevWk; i++) {
			let prevDate = new Date(prevDAY + 7 * 86400 * 1000 * (i - 1));
			let [prevYYYY, prevMM] = [
				prevDate.getFullYear(),
				new Intl.DateTimeFormat("en-US", options).format(prevDate),
			];
			let nextDate = new Date(prevDAY + 7 * 86400 * 1000 * i);
			let [nextYYYY, nextMM, nextDD] = [
				nextDate.getFullYear(),
				new Intl.DateTimeFormat("en-US", options).format(nextDate),
				nextDate
					.getDate()
					.toString()
					.padStart(2, "0"),
				nextDate.getDay(),
			];
			if (nextYYYY === prevYYYY) {
				nextYYYY = null;
			}
			if (nextMM === prevMM) {
				nextMM = ".";
			}
			prevRows.push(
				<div className="TextS d" key={i}>
					<div>
						{nextYYYY} {nextMM}
					</div>
					<div>{nextDD}</div>
				</div>
			);
		}
	}

	function Next() {
		let totalWk = 16;

		for (let i = 0; i <= totalWk; i++) {
			let prevDate = new Date(
				ZDay.TODAY + (8 - ZDay.DAY) * 86400 * 1000 + 7 * 86400 * 1000 * (i - 1)
			);
			let [prevYYYY, prevMM] = [
				prevDate.getFullYear(),
				new Intl.DateTimeFormat("en-US", options).format(prevDate),
			];
			let nextDate = new Date(
				ZDay.TODAY + (8 - ZDay.DAY) * 86400 * 1000 + 7 * i * 86400 * 1000
			);
			let [nextYYYY, nextMM, nextDD] = [
				nextDate.getFullYear(),
				new Intl.DateTimeFormat("en-US", options).format(nextDate),
				nextDate
					.getDate()
					.toString()
					.padStart(2, "0"),
				nextDate.getDay(),
			];
			if (nextYYYY === prevYYYY) {
				nextYYYY = null;
			}
			if (nextMM === prevMM) {
				nextMM = ".";
			}
			nextRows.push(
				<div className="TextS d" key={i}>
					<div>
						{nextYYYY} {nextMM}
					</div>
					<div>{nextDD}</div>
				</div>
			);
		}
	}

	// ---------------------------------------------call functions/ divstyle
	Prev();
	Next();
	const divStyle = {
		color: "black",
		fontWeight: 500,
		width: (8 - ZDay.DAY) * 20 - 3,
		overflow: "visible",
	};

	return (
		<div className="TextS DateBar ">
			{prevRows}
			<div
				style={{
					width: (ZDay.DAY - 1) * 20,
					borderLeft: "1px solid #eeeeee",
					borderBottom: "1px solid #666666",
				}}
			>
				{ZDay.DAY === 1 ? "" : ZDay.MondayDate}
			</div>
			<div className="TextS d" style={divStyle}>
				<div>
					{ZDay.YYYY} {ZDay.MM}
				</div>
				{ZDay.DD}
			</div>
			{nextRows}
		</div>
	);
}

export default DateBar;
