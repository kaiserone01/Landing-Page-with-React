import React from "react";
import PropTypes from "prop-types";

export const Card = ({ title, imageURL, description }) => {
	return (
		<>
			<div className="card">
				<img
					className="card-img-top"
					src={imageURL}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	imageURL: PropTypes.string,
	description: PropTypes.string,
};
