import toast from "react-hot-toast";

export const showToast = (message, type = "error", duration = 4000) => {
	toast[type](message, { duration });
};

export const errorHandler = (error) => {
	console.log("error>>", error);
	showToast(
		error?.reason?.length
			? error?.reason
			: "Something went wrong, Try again after some time."
	);
};

function padTo2Digits(num) {
	return num.toString().padStart(2, "0");
}

export function convertMsToTime(ms) {
	if (!ms) {
		return "";
	}

	let seconds = Math.floor(ms / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);

	seconds = seconds % 60;
	minutes = minutes % 60;
	hours = hours % 24;

	console.log("hrs", hours);

	console.log(
		`${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
	);

	if (!hours) {
		return `${padTo2Digits(minutes)} min ${padTo2Digits(seconds)} sec`;
	} else {
		return `${padTo2Digits(hours)} hr ${padTo2Digits(minutes)} min`;
	}
}
