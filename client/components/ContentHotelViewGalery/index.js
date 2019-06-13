import React from "react";

import styles from "./viewGalery.module.scss";

import hotel1 from "../../static/img/hotel-1.jpg";
import hotel2 from "../../static/img/hotel-2.jpg";
import hotel3 from "../../static/img/hotel-3.jpg";

const ViewGallery = () => {
	return (
		<div className={styles.galery}>
			<figure class="gallery__item">
				<img
					src={hotel1}
					alt="Photo of hotel 1"
					className={styles.galery__photo}
				/>
			</figure>
			<figure class="gallery__item">
				<img
					src={hotel2}
					alt="Photo of hotel 2"
					className={styles.galery__photo}
				/>
			</figure>
			<figure class="gallery__item">
				<img
					src={hotel3}
					alt="Photo of hotel 3"
					className={styles.galery__photo}
				/>
			</figure>
		</div>
	);
};

export default ViewGallery;
