const NatalChart = () => {
  const chart = [
    {
      planet: 'rising',
      sign: 'scorpio',
      unicode: '\u264F',
      id: 1,
    },
    {
      planet: 'sun',
      sign: 'virgo',
      unicode: '\u264D',
      id: 2,
    },
    {
      planet: 'moon',
      sign: 'sagittarius',
      unicode: '\u2650',
      id: 3,
    },
    {
      planet: 'mercury',
      sign: 'virgo',
      unicode: '\u264D',
      id: 4,
    },
    {
      planet: 'venus',
      sign: 'libra',
      unicode: '\u264E',
      id: 5,
    },
    {
      planet: 'mars',
      sign: 'leo',
      unicode: '\u264C',
      id: 6,
    },
  ];

  const chartList = chart.map((item) => {
    return (
      <div key={item.id} className="planet">
        <span className="planet-name">{item.planet}</span>
        <span>{item.sign}</span>
        <span>{item.unicode}</span>
      </div>
    );
  });

  return (
    <div className="natal-chart">
      <span className="title">натало4ка</span>
      <div className="chart">{chartList}</div>
    </div>
  );
};

export default NatalChart;
