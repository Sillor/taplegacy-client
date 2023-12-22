import Game from './layout/Game';
import Achievements from './layout/Achievements';
import Settings from './layout/Settings';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [countedCps, setCountedCps] = useState(0);
  const [perSec, setPerSec] = useState(0);
  const [userData, setUserData] = useState({
    taps: 0,
    upgrades: {},
    stats: {
      buttonClicked: 0,
      upgradesPurchased: 0,
      maxCps: 0,
      timeSpent: 0,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((oldSeconds) => oldSeconds + 1);
    }, 1000);

    if (localStorage.getItem('user'))
      setUserData(JSON.parse(localStorage.getItem('user')));
    else localStorage.setItem('user', JSON.stringify(userData));

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds >= 1) {
      setCountedCps((clicks / seconds).toFixed(2));
      setSeconds(0);
      setClicks(0);
      addTaps(perSec);

      if (countedCps > userData.stats.maxCps)
        userData.stats.maxCps = countedCps;

      setUserData((oldUserData) => ({
        ...oldUserData,
        stats: {
          ...oldUserData.stats,
          timeSpent: oldUserData.stats.timeSpent + 1,
        },
      }));
    }
  }, [seconds, clicks]);

  const addTaps = (amount) => {
    setUserData((oldUserData) => ({
      ...oldUserData,
      taps: oldUserData.taps + amount,
    }));
    updateLocalStorage();
    setClicks((oldClicks) => oldClicks + amount);
  };

  const updateLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Game
                userData={userData}
                setUserData={setUserData}
                countedCps={countedCps}
                setPerSec={setPerSec}
                addTaps={addTaps}
                updateLocalStorage={updateLocalStorage}
              />
            }
          />
          <Route
            path="/achievements"
            element={<Achievements userData={userData} />}
          />
          <Route path="/settings" element={<Settings userData={userData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
