import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
	try {
		const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
		console.log("response from api.js", response.data);
		return response.data;
	} catch (err) {
		console.log("ERROR IN API", err);
	}
};
