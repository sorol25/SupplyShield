import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
	const [token, setToken] = useState(localStorage.getItem("token") || null);

	const login = (userData, authToken) => {
		localStorage.setItem("token", authToken);
		localStorage.setItem("user", JSON.stringify(userData));
		setToken(authToken);
		setUser(userData);
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setToken(null);
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
