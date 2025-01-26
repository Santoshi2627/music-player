import React, { useState } from "react";
import Form from "./login"; // Adjust the import path based on your file structure

const User = () => {
    const [user, setUser] = useState(null); // State to hold user details

    // This function will be called when the user logs in or signs up
    const handleLogin = (isLoggedIn, userDetails) => {
        if (isLoggedIn) {
            setUser(userDetails); // Set user details when logged in
        } else {
            setUser(null); // Clear user details when logged out
        }
    };

    return (
        <div className="User">
            {!user ? ( // If user is not logged in, show the Form
                <Form onLogin={handleLogin} />
            ) : (
                <div className="user-details"> {/* Display user details when logged in */}
                    <h2>Welcome, {user.username || user.email}</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={() => handleLogin(false)}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default User;
