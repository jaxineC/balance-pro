import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ConModal } from "./ContactModal.styled.js";

function ContactModal({ isContact, setIsContact }) {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [textareaInput, setTextareaInput] = useState("");
	const [message, setMessage] = useState("");

	function closeModal() {
		setIsContact(false);
	}

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		try {
			emailjs
				.sendForm(
					"service_da86wqm",
					"template_um6v3my",
					form.current,
					"LoKIzut9EdFNqs_7j"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			setMessage("Thank you, message sent!");
			setTimeout(() => {
				setIsContact(false);
				setMessage("");
				setNameInput("");
				setEmailInput("");
				setTextareaInput("");
			}, 2000);
		} catch (error) {}
	};

	return (
		<ConModal
			size="full"
			isContact={isContact}
			ref={form}
			onSubmit={sendEmail}
			className="closeModal TextM Modal"
		>
			<div className="Modal__Form">
				<div
					className="TextL bold"
					style={{
						textAlign: "center",
						marginBottom: 5,
					}}
				>
					Hello!
				</div>
				<div
					className="TextM"
					style={{
						gridColumn: "1/3",
						textAlign: "center",
					}}
				>
					Any thoughts? Let me know!
				</div>
				<hr />{" "}
				<input
					type="text"
					name="user_name"
					onChange={(event) => setNameInput(event.target.value)}
					value={nameInput}
					placeholder="name"
					className="nameInput"
				></input>
				<input
					onChange={(event) => setEmailInput(event.target.value)}
					value={emailInput}
					type="email"
					name="user_email"
					placeholder="email"
					className="emailInput"
				></input>
				<textarea
					name="message"
					onChange={(event) => setTextareaInput(event.target.value)}
					value={textareaInput}
					type="text"
					rows="4"
					placeholder="Leave message here"
					className="messageInput"
					style={{}}
				></textarea>
				<hr />
				<div className="TextS Message">{message}</div>
				<input
					type="submit"
					value="Send"
					style={{
						border: "1px solid #cccccc",
						backgroundColor: "blueviolet",
						color: "white",
					}}
				></input>
				<svg
					onClick={closeModal}
					className="closeBtn"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 298.667 298.667"
					fill="rgb(152,152,152)"
				>
					<polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   " />
				</svg>
			</div>
			<div className="Modal__Background"></div>
		</ConModal>
	);
}

export default ContactModal;
