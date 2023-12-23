import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="page-container flex justify-center pt-20">
      <div className="flex flex-col items-center justify-center h-full p-10 md:max-w-[40vw] lg:max-w-[30vw] w-full bg-black rounded-md bg-opacity-60 border-2 border-white">
        <h1 className="mb-6 text-4xl font-bold text-center text-white">
          Log In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 text-black"
        >
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-md focus:outline-none duration-300 focus:scale-110"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md focus:outline-none duration-300 focus:scale-110"
          />
          <button
            type="submit"
            className="p-3 rounded-md bg-opacity-60 border-2 border-white text-white font-semibold active:bg-white active:text-black active:bg-opacity-100"
          >
            Log In
          </button>
        </form>
        <div className="mt-6">
          <Link to="/signup" className="text-white underline">
            No account yet? Sign up.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
