const db = require("../config/db");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/token");

// REGISTER USER
exports.registerUser = async (req, res) => {
	try {
		const { full_name, email, password, role } = req.body;

		if (!full_name || !email || !password) {
			return res.status(400).json({
				message: "Please fill all required fields",
			});
		}

		// Check existing user
		const checkUserQuery = "SELECT * FROM users WHERE email = ?";

		db.query(checkUserQuery, [email], async (err, result) => {
			if (err) {
				return res.status(500).json({
					message: err.message,
				});
			}

			if (result.length > 0) {
				return res.status(400).json({
					message: "User already exists",
				});
			}

			// Hash password
			const hashedPassword = await bcrypt.hash(password, 10);

			const insertQuery = `
				INSERT INTO users (full_name, email, password, role)
				VALUES (?, ?, ?, ?)
			`;

			db.query(
				insertQuery,
				[full_name, email, hashedPassword, role || "manager"],
				(insertErr) => {
					if (insertErr) {
						return res.status(500).json({
							message: insertErr.message,
						});
					}

					return res.status(201).json({
						message: "User registered successfully",
					});
				}
			);
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

// LOGIN USER
exports.loginUser = (req, res) => {
	try {
		const { email, password } = req.body;

		const query = "SELECT * FROM users WHERE email = ?";

		db.query(query, [email], async (err, result) => {
			if (err) {
				return res.status(500).json({
					message: err.message,
				});
			}

			if (result.length === 0) {
				return res.status(404).json({
					message: "User not found",
				});
			}

			const user = result[0];

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(401).json({
					message: "Invalid credentials",
				});
			}

			const token = generateToken(user);

			return res.status(200).json({
				message: "Login successful",
				token,
				user: {
					id: user.user_id,
					full_name: user.full_name,
					email: user.email,
					role: user.role,
				},
			});
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};
