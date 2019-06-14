import React from "react";

import Svg from "../Svg";

import styles from "./viewOverrivew.module.scss";
import shared from "../Shared/main.module.scss";

const ViewOverview = () => {
	return (
		<div className={styles.overview}>
			<h1 className={styles.overview__heading}>Hotel Las Palmas</h1>
			<div className={styles.overview__stars}>
				<Svg name="star" prp={styles.overview__icon_star} />
				<Svg name="star" prp={styles.overview__icon_star} />
				<Svg name="star" prp={styles.overview__icon_star} />
				<Svg name="star" prp={styles.overview__icon_star} />
				<Svg name="star" prp={styles.overview__icon_star} />
			</div>
			<div className={styles.overview__location}>
				<Svg name="location-pin" prp={styles.overview__icon_location} />
				<button className={shared.btn_inline}>Albufeira, Portugal</button>
			</div>
			<div className={styles.overview__rating}>
				<div className={styles.overview__rating_average}>8.6</div>
				<div className={styles.overview__rating_count}>429 votes</div>
			</div>
		</div>
	);
};

export default ViewOverview;
