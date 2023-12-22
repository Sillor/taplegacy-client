function Upgrade({
  name,
  price,
  colors,
  upgradeClicks,
  increase,
  userData,
  desc,
}) {
  const isUpgradeBought = userData.upgrades[name] > 0;

  return (
    (userData.taps > price / 3 || isUpgradeBought) && (
      <div
        className={`mt-4 p-4 upgrade ${colors.bg} rounded-md bg-opacity-10 border ${colors.border} transition hover:scale-105 flex-shrink-1 w-full`}
      >
        <h1 className={`font-bold text-xl mb-2 ${colors.text}`}>
          {name[0].toUpperCase() + name.slice(1)} Upgrade
        </h1>
        <p className="text-sm font-light mb-4">
          <span className="italic font-medium">
            +
            {Intl.NumberFormat('en-US', {
              notation: 'compact',
              maximumFractionDigits: 3,
            }).format(increase)}{' '}
            <span className={colors.text}>Taps per Second</span>
          </span>
          <br />
          {desc}
        </p>
        <div className="flex justify-between items-center">
          <p className={`text-sm font-bold ${colors.text}`}>
            Price:{' '}
            <span className="font-normal text-white">
              {Intl.NumberFormat('en-US', {
                notation: 'compact',
                maximumFractionDigits: 3,
              }).format(price)}{' '}
              Taps
            </span>
          </p>
          {isUpgradeBought ? (
            <span className="text-sm font-bold text-green-500">Bought</span>
          ) : (
            <button
              className="px-2 py-1 text-xs rounded border border-white bg-white bg-opacity-10"
              onClick={() => upgradeClicks(increase, name, price)}
            >
              Upgrade!
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default Upgrade;
