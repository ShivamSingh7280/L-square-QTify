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
