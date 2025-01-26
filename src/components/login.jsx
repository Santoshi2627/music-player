import React, { useState } from "react";
import axios from "axios";

const Form = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false); // Default to Login
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onlyAlphabets = /^[a-zA-Z]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const validateFields = () => {
    const newErrors = {};

    if (isSignup) {
      if (!username) {
        newErrors.username = "Please enter a username";
      } else if (!onlyAlphabets.test(username)) {
        newErrors.username = "Username must contain only alphabets";
      }
    }

    if (!email) {
      newErrors.email = "Please enter an email";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Please enter a password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    const endpoint = isSignup
      ? "https://musicplayer-5b27a-default-rtdb.firebaseio.com/register.json"
      : "https://musicplayer-5b27a-default-rtdb.firebaseio.com/login.json";

    const payload = isSignup ? { username, email, password } : { email, password };

    try {
      const response = await axios.get(endpoint);
      const users = response.data;

      if (isSignup) {
        // Check if email already exists
        const isExistingUser = Object.values(users || {}).some((user) => user.email === email);

        if (isExistingUser) {
          alert("This email is already registered. Please log in.");
        } else {
          // Register new user
          await axios.post(endpoint, payload);
          alert("Signup successful! Please log in.");
          setIsSignup(false); // Switch to login form
          resetFields();
        }
      } else {
        // Check if user exists
        const isUserValid = Object.values(users || {}).some(
          (user) => user.email === email && user.password === password
        );

        if (isUserValid) {
          alert("Login successful!");
          onLogin(true); // Notify the parent component
        } else {
          alert("Invalid email or password. Please try again or signup.");
        }
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleGuestLogin = () => {
    alert("Logged in as Guest!");
    onLogin(true); // Notify the parent component
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{isSignup ? "Signup" : "Login"}</h2>

        {isSignup && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && <span className="text-red-500 text-xs">{errors.username}</span>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
        >
          {isSignup ? "Signup" : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGuestLogin}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login as Guest
        </button>

        <div className="mt-4 text-center">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignup(false);
                  resetFields();
                }}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignup(true);
                  resetFields();
                }}
                className="text-blue-500 hover:underline"
              >
                Signup here
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
