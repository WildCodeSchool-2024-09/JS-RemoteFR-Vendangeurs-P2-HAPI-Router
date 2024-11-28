interface HouseFilterProps {
  houses: string[];
  setCurrentHouse: (v: string) => void;
}

const HouseFilter: React.FC<HouseFilterProps> = ({
  houses,
  setCurrentHouse,
}) => {
  const handleClick = (value: string) => setCurrentHouse(value);

  return (
    <select
      name="Houses"
      onChange={(event) => handleClick(event.target.value)}
      onKeyUp={() => {}}
      className="sorting"
    >
      <option value="">--Choose a house--</option>
      {houses
        .filter((c) => c !== "")
        .map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
    </select>
  );
};

export default HouseFilter;
