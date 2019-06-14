import React from "react";

import styles from "./description.module.scss";

import friend1 from "../../static/img/user-1.jpg";

const Description = () => {
	return (
		<div className={styles.description}>
			<p className={styles.paragraph}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
				nisi dignissimos debitis ratione sapiente saepe. Accusantium
				cumque, quas, ut corporis incidunt deserunt quae architecto
				voluptate.
			</p>
			<p className={styles.paragraph}>
				Accusantium cumque, quas, ut corporis incidunt deserunt quae
				architecto voluptate delectus, inventore iure aliquid aliquam.
			</p>
			<ul className={styles.list}>
				<li className={styles.list__item}>Close to the beach</li>
				<li className={styles.list__item}>Breakfast included</li>
				<li className={styles.list__item}>Free airport shuttle</li>
				<li className={styles.list__item}>Free wifi in all rooms</li>
				<li className={styles.list__item}>Air conditioning and heating</li>
				<li className={styles.list__item}>Pets allowed</li>
				<li className={styles.list__item}>We speak all languages</li>
				<li className={styles.list__item}>Perfect for families</li>
			</ul>
			<div className={styles.recommend}>
				<p className={styles.recommend__count}>
					Lucy and 3 other friends recommend this hotel.
				</p>
				<div className={styles.recommend__friends}>
					<img
						src={friend1}
						alt="Friend 1"
						className={styles.recommend__photo}
					/>
					<img
						src={friend1}
						alt="Friend 2"
						className={styles.recommend__photo}
					/>
					<img
						src={friend1}
						alt="Friend 3"
						className={styles.recommend__photo}
					/>
					<img
						src={friend1}
						alt="Friend 4"
						className={styles.recommend__photo}
					/>
				</div>
			</div>
		</div>
	);
};

export default Description;
