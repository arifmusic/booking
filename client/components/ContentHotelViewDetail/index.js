import React from "react";

import Description from "./description";
import UserReview from "./userReview";

import styles from "./contentHotelViewDetail.module.scss";

const ViewDetail = () => {
	return (
		<div className={styles.detail}>
			<Description />
			<UserReview />
		</div>
	);
};

export default ViewDetail;
