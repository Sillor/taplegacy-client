import { Link, useNavigate } from 'react-router-dom';

function Settings({ userData, setUserData }) {
  const navigate = useNavigate();

  const handleRemoveData = () => {
    // localStorage.removeItem('user');

    fetch('http://localhost:5000/api/user/data', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData({ taps: 0, upgrades: {}, stats: {} });
        navigate('/login');
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleLogout = () => {
    fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((response) => {
      if (response.ok) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');
        window.location.reload();
      }
    });
  };

  return (
    <div className="page-container flex justify-center items-center">
      <div className="md:max-w-[60vw] xl:max-w-3xl overflow-y-auto p-4 md:px-6 h-full w-full bg-black rounded-md bg-clip-padding bg-opacity-60 border-2 border-white no-scrollbar flex flex-col items-start gap-4">
        <h1 className="font-bold text-3xl mt-2 ml-2">Settings</h1>
        <h1 className="font-bold text-2xl ml-6">Stats:</h1>
        <div className="data sm:text-xl ml-10">
          <p>
            <span className="font-bold">Taps:</span> {userData.taps}
          </p>
          <p>
            <span className="font-bold">Time spent: </span>
            {(userData.stats.timeSpent / 60).toFixed(2)} minutes
          </p>
          <p>
            <span className="font-bold">Button Clicked:</span>{' '}
            {userData.stats.buttonClicked} times
          </p>
          <p>
            <span className="font-bold">Upgrades Purchased:</span>{' '}
            {userData.stats.upgradesPurchased}
          </p>
          <p>
            <span className="font-bold">Max Taps per Second:</span>{' '}
            {userData.stats.maxCps}
          </p>
        </div>

        <div className="flex justify-between gap-4 w-full">
          <div className="flex gap-4">
            <button
              className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2 text-red-600 mt-8"
              onClick={handleRemoveData}
            >
              Remove data
            </button>
            <button
              className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2 mt-8"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
          <Link to="/" className="hideoverlay self-end">
            <button className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Settings;
