import Achievement from '../components/Achievement';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Achievements({ userData }) {
  const achievements = [
    {
      title: '🚀 Beginner Clicker',
      description: 'Play the game for 1 minute.',
      completed: userData.stats.timeSpent >= 60,
    },
    {
      title: '⏰ Dedicated Clicker',
      description: 'Play the game for 10 minutes.',
      completed: userData.stats.timeSpent >= 60 * 10,
    },
    {
      title: '😴 Get Some Rest',
      description: 'Play the game for 1 hour.',
      completed: userData.stats.timeSpent >= 60 * 60,
    },
    {
      title: '👆 Click Novice',
      description: 'Click the button 100 times.',
      completed: userData.stats.buttonClicked >= 100,
    },
    {
      title: '👊 Click Master',
      description: 'Click the button 1,000 times.',
      completed: userData.stats.buttonClicked >= 1000,
    },
    {
      title: '⚡ Speedy Clicker',
      description: 'Achieve a clicking rate of 100 clicks per second.',
      completed: userData.stats.maxCps >= 100,
    },
    {
      title: '💸 Upgrade Enthusiast',
      description: 'Purchase 5 upgrades.',
      completed: userData.stats.upgradesPurchased >= 5,
    },
    {
      title: '🛍️ Upgrade Guru',
      description: 'Purchase 10 upgrades.',
      completed: userData.stats.upgradesPurchased >= 10,
    },
    {
      title: '🌟 Upgrade Prodigy',
      description: 'Unlock and purchase all 24 upgrades.',
      completed: userData.stats.upgradesPurchased === 24,
    },
    {
      title: '💰 Wealth Accumulator',
      description: 'Accumulate a total of 1,000 Taps.',
      completed: userData.taps >= 1000,
    },
    {
      title: '💼 Tapping Tycoon',
      description: 'Accumulate a total of 10,000 Taps.',
      completed: userData.taps >= 10000,
    },
    {
      title: '🌐 Millionaire Tapper',
      description: 'Accumulate a total of 1,000,000 Taps.',
      completed: userData.taps >= 1000000,
    },
  ];

  const achElements = achievements.map((ach) => (
    <Achievement
      title={ach.title}
      description={ach.description}
      completed={ach.completed}
      key={uuidv4()}
    />
  ));

  return (
    <div className="page-container flex justify-center items-center">
      <div className="md:max-w-[60vw] xl:max-w-3xl md:h-[80vh] overflow-y-auto p-4 md:px-6 h-full w-full bg-black rounded-md bg-clip-padding bg-opacity-60 border-2 border-white no-scrollbar flex flex-col items-start gap-4">
        <h1 className="font-bold text-3xl p-2">Achievements</h1>
        {achElements}

        <Link to="/" className="hideoverlay self-end">
          <button className="text-md font-extrabold border-2 bg-black bg-opacity-30 rounded-md p-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Achievements;
