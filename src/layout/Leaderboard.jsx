import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLeaderboard(data.data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const getColor = (index) => {
    switch (index) {
      case 0:
        return 'gold';
      case 1:
        return 'silver';
      case 2:
        return 'brown';
      default:
        return 'white';
    }
  };

  return (
    <div className="page-container flex justify-center items-center">
      <div className="md:max-w-[60vw] xl:max-w-3xl md:h-[80vh] overflow-y-auto p-4 md:px-6 h-full w-full bg-black rounded-md bg-clip-padding bg-opacity-60 border-2 border-white no-scrollbar flex flex-col items-start gap-4">
        <h1 className="font-bold text-3xl p-2">Leaderboard</h1>

        <div className="flex justify-between items-center p-4 rounded-md bg-opacity-10 border w-full">
          <div className="text-xl font-bold flex-1 text-center">Place</div>
          <div className="text-lg font-semibold flex-1 text-center">
            Username
          </div>
          <div className="text-xl font-semibold flex-1 text-center">Taps</div>
        </div>

        {leaderboard.map((user, index) => (
          <div
            key={uuidv4()}
            className="flex justify-between items-center p-4 rounded-md bg-opacity-10 border transition hover:scale-95 w-full"
          >
            <div
              style={{ color: getColor(index) }}
              className="text-2xl font-bold flex-1 text-center"
            >
              {index + 1}
            </div>
            <div className="text-lg font-semibold flex-1 text-center">
              {user.username}
            </div>
            <div className="text-xl font-semibold flex-1 text-center">
              {user.taps}
            </div>
          </div>
        ))}

        <Link to="/" className="hideoverlay self-end">
          <button className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Leaderboard;
