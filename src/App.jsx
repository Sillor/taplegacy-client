import Game from './layout/Game';
import Achievements from './layout/Achievements';
import Settings from './layout/Settings';
import Layout from './layout/Layout';
import Login from './layout/Login';
import Signup from './layout/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [countedCps, setCountedCps] = useState(0);
  const [perSec, setPerSec] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
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

  function fetchData() {
    fetch('http://localhost:5000/api/user/complete', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => console.error('Error:', error));
  }

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setSeconds((oldSeconds) => oldSeconds + 1);
    // }, 1000);

    fetchData();

    return () => stopInterval();
  }, []);

  const startInterval = () => {
    setIntervalId(
      setInterval(() => {
        setSeconds((oldSeconds) => oldSeconds + 1);
      }, 1000)
    );
  };

  const stopInterval = () => {
    clearInterval(intervalId);
  };

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
    const token = localStorage.getItem('accessToken');
    fetch('http://localhost:5000/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          fetch('http://localhost:5000/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: localStorage.getItem('refreshToken'),
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              localStorage.setItem('accessToken', data.accessToken);
              updateLocalStorage();
            })
            .catch((error) => console.error('Error:', error));
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Login fetchData={fetchData} startInterval={startInterval} />
          }
        />
        <Route path="/signup" element={<Signup />} />
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
          <Route
            path="/settings"
            element={<Settings userData={userData} setUserData={setUserData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
