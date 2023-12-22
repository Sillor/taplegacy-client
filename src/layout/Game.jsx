import React, { useEffect } from 'react';
import Upgrades from './Upgrades';
import Clicker from './Clicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Game({
  userData,
  setUserData,
  countedCps,
  setPerSec,
  addTaps,
  updateLocalStorage,
}) {
  const upgradeClicks = (amount, name, price) => {
    if (price <= userData.taps) {
      if (userData.upgrades[name] > 0) {
        toast.warning('You already have this upgrade!');
      } else {
        setUserData((oldUserData) => ({
          ...oldUserData,
          upgrades: {
            ...oldUserData.upgrades,
            [name]: amount,
          },
          taps: oldUserData.taps - price,
          stats: {
            ...oldUserData.stats,
            upgradesPurchased: oldUserData.stats.upgradesPurchased + 1,
          },
        }));
        updateLocalStorage();
        toast.success('Upgrade purchased!');
      }
    } else {
      toast.error('Not enough taps!');
    }
  };

  const buttonClicked = () => {
    setUserData((oldUserData) => ({
      ...oldUserData,
      stats: {
        ...oldUserData.stats,
        buttonClicked: oldUserData.stats.buttonClicked + 1,
      },
    }));
  };

  useEffect(() => {
    let total = 0;
    Object.values(userData.upgrades).forEach((val) => (total += val));
    setPerSec(total);
  }, [userData]);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Clicker
        taps={userData.taps}
        addTaps={addTaps}
        countedCps={countedCps}
        buttonClicked={buttonClicked}
      />
      <Upgrades upgradeClicks={upgradeClicks} userData={userData} />
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
}

export default Game;
