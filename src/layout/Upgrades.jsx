import Upgrade from '../components/Upgrade';
// import upgrade_list from '../components/upgrade_list.json';
import { v4 as uuidv4 } from 'uuid';

function Upgrades({ upgradeClicks, userData }) {
  const upgrade_list = {
    upgrades: [
      {
        name: 'basic',
        price: 5,
        increase: 2,
        colors: {
          bg: 'bg-green-300',
          border: 'border-green-300',
          text: 'text-green-300',
        },
        description: 'Boost your tapping with a basic power-up!',
      },
      {
        name: 'rare',
        price: 50,
        increase: 5,
        colors: {
          bg: 'bg-blue-300',
          border: 'border-blue-300',
          text: 'text-blue-300',
        },
        description:
          'Unleash the power of rare artifacts to amplify your taps!',
      },
      {
        name: 'stealthy-ninja',
        price: 200,
        increase: 10,
        colors: {
          bg: 'bg-gray-200',
          border: 'border-gray-200',
          text: 'text-gray-200',
        },
        description: 'Channel your inner ninja for swift and silent taps!',
      },
      {
        name: 'epic',
        price: 250,
        increase: 25,
        colors: {
          bg: 'bg-purple-300',
          border: 'border-purple-300',
          text: 'text-purple-300',
        },
        description:
          'Embark on an epic journey and discover hidden tapping secrets!',
      },
      {
        name: 'firestorm-fury',
        price: 1200,
        increase: 50,
        colors: {
          bg: 'bg-red-400',
          border: 'border-red-400',
          text: 'text-red-400',
        },
        description:
          'Ignite a fiery storm with each tap and scorch your way to victory!',
      },
      {
        name: 'glacial-touch',
        price: 3000,
        increase: 150,
        colors: {
          bg: 'bg-blue-400',
          border: 'border-blue-400',
          text: 'text-blue-400',
        },
        description:
          'Tap with the chilling power of glaciers and freeze your targets!',
      },
      {
        name: 'thunderous-boom',
        price: 8000,
        increase: 500,
        colors: {
          bg: 'bg-yellow-700',
          border: 'border-yellow-700',
          text: 'text-yellow-700',
        },
        description:
          'Unleash thunderous booms with each tap, creating shockwaves!',
      },
      {
        name: 'time-warp',
        price: 15000,
        increase: 1500,
        colors: {
          bg: 'bg-indigo-400',
          border: 'border-indigo-400',
          text: 'text-indigo-400',
        },
        description:
          'Bend the fabric of time and tap with the speed of time-warping!',
      },
      {
        name: 'funky-beats',
        price: 30000,
        increase: 3000,
        colors: {
          bg: 'bg-yellow-400',
          border: 'border-yellow-400',
          text: 'text-yellow-400',
        },
        description:
          'Groove to the funky beats and synchronize your taps for maximum rhythm!',
      },
      {
        name: 'chaos-infusion',
        price: 100000,
        increase: 10000,
        colors: {
          bg: 'bg-red-500',
          border: 'border-red-500',
          text: 'text-red-500',
        },
        description:
          'Infuse chaos into your taps and watch as unpredictable tapping power unfolds!',
      },
      {
        name: 'celestial-harmony',
        price: 500000,
        increase: 50000,
        colors: {
          bg: 'bg-pink-800',
          border: 'border-pink-800',
          text: 'text-pink-800',
        },
        description:
          'Achieve celestial harmony and synchronize your taps with the cosmos!',
      },
      {
        name: 'time-void',
        price: 2000000,
        increase: 200000,
        colors: {
          bg: 'bg-cyan-300',
          border: 'border-cyan-800',
          text: 'text-cyan-800',
        },
        description:
          'Dive into the time void and manipulate time for unbeatable tapping speed!',
      },
      {
        name: 'stormbreaker',
        price: 10000000,
        increase: 1000000,
        colors: {
          bg: 'bg-indigo-800',
          border: 'border-indigo-800',
          text: 'text-indigo-800',
        },
        description:
          'Wield the mighty Stormbreaker to unleash devastating tapping storms!',
      },
      {
        name: 'doomsday-clock',
        price: 50000000,
        increase: 5000000,
        colors: {
          bg: 'bg-gray-400',
          border: 'border-gray-400',
          text: 'text-gray-400',
        },
        description:
          'Control the doomsday clock and tap your way to apocalyptic power!',
      },
      {
        name: 'pandemonium',
        price: 200000000,
        increase: 20000000,
        colors: {
          bg: 'bg-red-800',
          border: 'border-red-800',
          text: 'text-red-800',
        },
        description:
          'Unleash pandemonium with chaotic taps that defy conventional order and logic, creating an unpredictable tapping frenzy!',
      },
      {
        name: 'cosmic-whirlwind',
        price: 1000000000,
        increase: 100000000,
        colors: {
          bg: 'bg-teal-400',
          border: 'border-teal-400',
          text: 'text-teal-400',
        },
        description:
          'Summon a cosmic whirlwind that propels your taps into the cosmic winds of power!',
      },
      {
        name: 'dreamweaver',
        price: 5000000000,
        increase: 500000000,
        colors: {
          bg: 'bg-purple-600',
          border: 'border-purple-600',
          text: 'text-purple-600',
        },
        description:
          'Become the dreamweaver and shape reality with each tap in the dream realm!',
      },
      {
        name: 'prismatic-pulse',
        price: 20000000000,
        increase: 2000000000,
        colors: {
          bg: 'bg-yellow-700',
          border: 'border-yellow-700',
          text: 'text-yellow-700',
        },
        description:
          'Emit a prismatic pulse with each tap, painting the universe with vibrant hues!',
      },
      {
        name: 'neural-nexus',
        price: 100000000000,
        increase: 10000000000,
        colors: {
          bg: 'bg-cyan-300',
          border: 'border-cyan-800',
          text: 'text-cyan-800',
        },
        description:
          'Connect to the neural nexus and tap with the combined power of all minds!',
      },
      {
        name: 'dimensional-dynamo',
        price: 500000000000,
        increase: 50000000000,
        colors: {
          bg: 'bg-orange-200',
          border: 'border-orange-200',
          text: 'text-orange-200',
        },
        description:
          'Activate the dimensional dynamo for taps that traverse through multiple realities!',
      },
      {
        name: 'transcendent-typhoon',
        price: 2000000000000,
        increase: 200000000000,
        colors: {
          bg: 'bg-purple-200',
          border: 'border-purple-200',
          text: 'text-purple-200',
        },
        description:
          'Tap with the force of a transcendent typhoon, sweeping through dimensions!',
      },
      {
        name: 'infinity-inspiration',
        price: 10000000000000,
        increase: 1000000000000,
        colors: {
          bg: 'bg-teal-200',
          border: 'border-teal-200',
          text: 'text-teal-200',
        },
        description:
          'Draw inspiration from the infinity itself, transforming your taps into limitless creativity!',
      },
      {
        name: 'cosmic-cacophony',
        price: 50000000000000,
        increase: 5000000000000,
        colors: {
          bg: 'bg-yellow-200',
          border: 'border-yellow-200',
          text: 'text-yellow-200',
        },
        description:
          'Create a cosmic cacophony with taps that resonate across the universe in chaotic harmony!',
      },
      {
        name: 'timeless-triumph',
        price: 1000000000000000,
        increase: 100000000000000,
        colors: {
          bg: 'bg-indigo-800',
          border: 'border-indigo-700 shadow-md shadow-indigo-900',
          text: 'text-indigo-400',
        },
        description:
          'Achieve timeless triumph as the ultimate tapper, leaving an indelible mark on the sands of time!',
      },
    ],
  };

  const upgrades = upgrade_list.upgrades;

  const upgElems = upgrades.map((upg) => (
    <Upgrade
      userData={userData}
      upgradeClicks={upgradeClicks}
      name={upg.name}
      price={upg.price}
      increase={upg.increase}
      desc={upg.description}
      colors={upg.colors}
      key={uuidv4()}
    />
  ));

  return (
    <div className="md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-3xl md:h-[80vh] overflow-y-auto p-4 md:px-6 h-full w-full bg-black rounded-md bg-clip-padding bg-opacity-60 border-2 border-white no-scrollbar flex flex-col">
      <h1 className="font-bold text-3xl p-2">Upgrades</h1>
      {userData.taps > 2 ? (
        upgElems
      ) : (
        <p className="text-lg text-white p-2">
          No upgrades available yet. Keep tapping to unlock more!
        </p>
      )}
    </div>
  );
}

export default Upgrades;
