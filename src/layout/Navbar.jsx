import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center p-6">
      <h1 className="nav--title font-extrabold text-2xl md:text-4xl hideoverlay mr-auto">
        <Link to="/">TapLegacy</Link>
      </h1>
      <Link to="achievements" className="hideoverlay">
        <button className="nav--achievements text-lg md:text-2xl font-extrabold border-2 border-white-400 backdrop-filter backdrop-blur-sm bg-black bg-opacity-10 rounded-xl p-2 sm:p-4 mr-4 transition hover:scale-105">
          <span className="hidden lg:inline">Achievements</span> 🏆
        </button>
      </Link>
      <Link to="leaderboard" className="hideoverlay">
        <button className="nav--achievements text-lg md:text-2xl font-extrabold border-2 border-white-400 backdrop-filter backdrop-blur-sm bg-black bg-opacity-10 rounded-xl p-2 sm:p-4 mr-4 transition hover:scale-105">
          <span className="hidden lg:inline">Leaderboard</span> 🏅
        </button>
      </Link>
      <Link to="settings" className="hideoverlay">
        <button className="nav--achievements text-lg md:text-2xl font-extrabold border-2 border-white-400 backdrop-filter backdrop-blur-sm bg-black bg-opacity-10 rounded-xl p-2 sm:p-4 transition hover:scale-105">
          <span className="hidden lg:inline">Settings</span> ⚙️
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
