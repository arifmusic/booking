import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import queryString from "query-string";

import storage from "../../utils/storageHelper";
import contextShape from "../../context/shape";

const Register = () => {
	const [formData, setForm] = useState({
		username: "",
		password: "",
		confrimPassword: ""
	});
	const [error, setError] = useState(null);
	const hadleInputChange = event => {
		setForm({
			...formData,
			[event.target.name]: event.target.value
		});
	};
	const { username, password, confrimPassword } = formData;
	const hadleSubmit = event => {
		event.preventDefault();
		axios
			.post("/api/auth/register", {
				username: username,
				password: password,
				confirmPassword: confrimPassword
			})
			.then(
				response => {
					storage.setData({
						user: response.data.user,
						token: response.data.token
					});
				},
				error => {
					const isValidationError =
						error.response.status >= 400 &&
						error.response.status < 500;
					if (isValidationError) {
						setError(error.response.data.error);
					} else {
						window.alert(error);
					}
				}
			);
	};
	console.log(error);
	return (
		<div>
			<form onSubmit={hadleSubmit}>
				<input
					value={username}
					name="username"
					onChange={hadleInputChange}
				/>
				<input
					value={password}
					name="password"
					onChange={hadleInputChange}
				/>
				<input
					value={confrimPassword}
					name="confrimPassword"
					onChange={hadleInputChange}
				/>
				<button type="submit">
					Show all <span>&rarr;</span>
				</button>
			</form>
		</div>
	);
};

Register.propTypes = {
	history: PropTypes.object.isRequired,
	context: contextShape.isRequired
};

export default Register;
