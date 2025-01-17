// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Form = ({ onLogin }) => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errors, setErrors] = useState({});

// //   const onlyAlphabets = /^[a-zA-Z]+$/;
// //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Reset errors
// //     setErrors({});

// //     // Validate input fields
// //     const newErrors = {};
// //     if (!username) {
// //       newErrors.username = 'Please enter a username';
// //     } else if (!onlyAlphabets.test(username)) {
// //       newErrors.username = 'Username must contain only alphabets';
// //     }

// //     if (!email) {
// //       newErrors.email = 'Please enter an email';
// //     } else if (!emailPattern.test(email)) {
// //       newErrors.email = 'Please enter a valid email';
// //     }

// //     if (!password) {
// //       newErrors.password = 'Please enter a password';
// //     }

// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors);
// //       return;
// //     }

// //     // Submit the data to your server
// //     try {
// //       const response = await axios.post(
// //         'https://musicplayer-5b27a-default-rtdb.firebaseio.com/register.json',
// //         { username, email, password }
// //       );
// //       console.log('Server Response:', response.data);

// //       // Simulate successful login
// //       alert('Login successful!');
// //       onLogin(true); // Notify the App component
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       alert('Login failed. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <form onSubmit={handleSubmit}>
// //         <h2>Login</h2>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
// //         </div>

// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
// //         </div>

// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
// //         </div>

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Form;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Form = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const onlyAlphabets = /^[a-zA-Z]+$/;
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setErrors({});

//     // Validate input fields
//     const newErrors = {};
//     if (!username) {
//       newErrors.username = 'Please enter a username';
//     } else if (!onlyAlphabets.test(username)) {
//       newErrors.username = 'Username must contain only alphabets';
//     }

//     if (!email) {
//       newErrors.email = 'Please enter an email';
//     } else if (!emailPattern.test(email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!password) {
//       newErrors.password = 'Please enter a password';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Submit the data to your server
//     try {
//       const response = await axios.post(
//         'https://musicplayer-5b27a-default-rtdb.firebaseio.com/register.json',
//         { username, email, password }
//       );
//       console.log('Server Response:', response.data);

//       // Simulate successful login
//       alert('Login successful!');
//       onLogin(true); // Notify the App component
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-md">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
//           />
//           {errors.username && <span className="text-red-500 text-xs">{errors.username}</span>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//           />
//           {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
//           />
//           {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
//         </div>

//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onlyAlphabets = /^[a-zA-Z]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate input fields
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Please enter a username';
    } else if (!onlyAlphabets.test(username)) {
      newErrors.username = 'Username must contain only alphabets';
    }

    if (!email) {
      newErrors.email = 'Please enter an email';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Please enter a password';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit the data to your server
    try {
      const response = await axios.post(
        'https://musicplayer-5b27a-default-rtdb.firebaseio.com/register.json',
        { username, email, password }
      );
      console.log('Server Response:', response.data);

      // Simulate successful login
      alert('Login successful!');
      onLogin(true); // Notify the App component
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleGuestLogin = () => {
    // Simulate guest login
    alert('Logged in as Guest!');
    onLogin(true); // Notify the App component
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.username && <span className="text-red-500 text-xs">{errors.username}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2">
          Submit
        </button>

        <button 
          type="button" 
          onClick={handleGuestLogin} 
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Login as Guest
        </button>
      </form>
    </div>
  );
};

export default Form
