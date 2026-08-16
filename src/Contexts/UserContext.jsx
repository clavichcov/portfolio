import React, { useState, useEffect } from "react";


const UserContext = React.createContext();

//temporal para validacion de login
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Cargar usuario del localStorage al iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (email, password, role) => {
        // Simulación: cualquier email/password funciona
        const userData = {
            email,
            name: email.split('@')[0],
            role: role, // "admin" o "user"
            id: Date.now().toString()
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
    };

    const handleRegister = (email, password, role) => {
        const userData = {
            email,
            name: name,
            role: role || "user",
            id: Date.now().toString()
        };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
    }

    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ 
            user, 
            isLoggedIn,
            handleLogin,
            handleRegister,
            handleLogout 
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

