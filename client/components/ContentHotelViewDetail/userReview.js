import React from "react";

import styles from "./userReview.module.scss";
import shared from "../Shared/main.module.scss";

import user1 from "../../static/img/user-1.jpg";

const UserReview = () => {
	return (
		<figure className={styles.user_reviews}>
			<figure className={styles.review}>
				<blockquote className={styles.review__text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Fuga doloremque architecto dicta animi, totam, itaque
					officia ex.
				</blockquote>
				<figcaption className={styles.review__user}>
					<img
						src={user1}
						alt="User 1"
						className={styles.review__photo}
					/>
					<div className={styles.review__user_box}>
						<p className={styles.review__user_name}>Nick Smith</p>
						<p className={styles.review__user_date}>Feb 23rd, 2017</p>
					</div>
					<div className={styles.review__rating}>7.8</div>
				</figcaption>
			</figure>

			<figure className={styles.review}>
				<blockquote className={styles.review__text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Fuga doloremque architecto dicta animi.
				</blockquote>
				<figcaption className={styles.review__user}>
					<img
						src={user1}
						alt="User 1"
						className={styles.review__photo}
					/>
					<div className={styles.review__user_box}>
						<p className={styles.review__user_name}>Mary Thomas</p>
						<p className={styles.review__user_date}>Sept 13th, 2017</p>
					</div>
					<div className={styles.review__rating}>9.3</div>
				</figcaption>
			</figure>

			<button className={shared.btn_inline}>
				Show all <span>&rarr;</span>
			</button>
		</figure>
	);
};

export default UserReview;
