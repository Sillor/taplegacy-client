import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('rgb(34, 139, 34)');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setMessageColor(
          data.status === 'success' ? 'rgb(34, 139, 34)' : 'rgb(178, 34, 34)'
        );
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="page-container flex justify-center pt-20">
      <div className="flex flex-col items-center justify-center h-full p-10 md:max-w-[40vw] lg:max-w-[30vw] w-full bg-black rounded-md bg-opacity-60 border-2 border-white">
        <h1 className="mb-6 text-4xl font-bold text-center text-white">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 text-black"
        >
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-md focus:outline-none duration-300 focus:scale-110"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md focus:outline-none duration-300 focus:scale-110"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 rounded-md bg-opacity-60 border-2 border-white text-white font-semibold active:bg-white active:text-black active:bg-opacity-100"
          >
            Sign Up
          </button>
        </form>
        {message && <p style={{ color: messageColor }}>{message}</p>}
        <div className="mt-6">
          <Link to="/login" className="text-white underline">
            Already have an account? Log in.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
