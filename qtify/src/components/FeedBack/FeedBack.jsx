import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./FeedBack.module.css";
import Button from "../Button/Button";
import { ReactComponent as CrossBtn } from "../../assets/crossBtn.svg";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const FeedBack = ({ open }) => {
	const [openClose, setOpenClose] = useState(open);
	const [formFields, setFormFields] = useState({
		fullName: "",
		emailId: "",
		description: "",
	});
	const [submitFeedback, setSubmitFeedback] = useState(false);

	const _handleClose = () => {
		setOpenClose(false);
	};

	const _handleChange = (name, event) => {
		const value = event.target.value;
		setFormFields((prevFormFields) => ({
			...prevFormFields,
			[name]: value,
		}));
	};

	const _handleSubmit = () => {
		if (!fullName || !emailId || !subject || !description) {
			alert("Please fill in all required fields.");
			return;
		}

		console.log(formFields);
		setFormFields({
			fullName: "",
			emailId: "",
			subject: "",
			description: "",
		});
		setSubmitFeedback(true);
	};

	const { fullName, emailId, subject, description } = formFields;
	return (
		<div>
			<Modal
				className={styles.modalWrapper}
				open={openClose}
				onClose={_handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				{!submitFeedback ? (
					<Box sx={style} className={styles.wrapper}>
						<div className={styles.header}>
							<h3>Feedback</h3>
							<h4 onClick={_handleClose}>{<CrossBtn />}</h4>
						</div>

						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								placeholder="Full name"
								type="text"
								value={fullName}
								name="fullName"
								onChange={(e) => {
									_handleChange("fullName", e);
								}}
							/>
							<input
								className={styles.input}
								placeholder="Email ID"
								type="email"
								value={emailId}
								name="emailId"
								onChange={(e) => {
									_handleChange("emailId", e);
								}}
							/>
							<input
								className={styles.input}
								placeholder="Subject"
								type="text"
								value={subject}
								name="subject"
								onChange={(e) => {
									_handleChange("subject", e);
								}}
							/>
							<input
								className={styles.description}
								placeholder="Description"
								type="text"
								value={description}
								name="description"
								onChange={(e) => {
									_handleChange("description", e);
								}}
							/>
						</div>

						<div className={styles.btnContainer}>
							<Button
								btnText="Submit Feedback"
								onClickHandler={_handleSubmit}
							/>
						</div>
					</Box>
				) : (
					<>
						<Box sx={style} className={styles.thanksWrapper}>
							Thank you for your valuable feedback!
						</Box>
					</>
				)}
			</Modal>
		</div>
	);
};

export default FeedBack;
