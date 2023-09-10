import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { errorHandler } from "../../config/helper-methods";
import axios from "axios";

const AlbumDetails = () => {
	const navigate = useNavigate();

	const { slug } = useParams();
	const [albumDetails, setalbumDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const fetchAlbumDetails = async () => {
		try {
			setIsLoading(true);

			const response = await axios.get(
				`https://qtify-backend-labs.crio.do/album/${slug}`
			);

			setalbumDetails(response?.id ? response : {});
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			errorHandler(err);
			navigate("/");
		}
	};

	useEffect(() => {
		if (slug) {
			fetchAlbumDetails();
		} else {
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug]);

	return (
		<div>
			{albumDetails?.id
				? "albumDetails"
				: isLoading
				? "Laoding..."
				: "NO data found"}
		</div>
	);
};

export default AlbumDetails;
