interface AncestryFilterProps {
  ancestry: string[];
  setCurrentAncestry: (v: string) => void;
}

const AncestryFilter: React.FC<AncestryFilterProps> = ({
  ancestry,
  setCurrentAncestry,
}) => {
  const handleClick = (value: string) => setCurrentAncestry(value);

  return (
    <select
      name="Ancestry"
      onChange={(event) => handleClick(event.target.value)}
      onKeyUp={() => {}}
      className="sorting"
    >
      <option value=""> --Choose an ancestry--</option>
      {ancestry
        .filter((c) => c !== "")
        .map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
    </select>
  );
};

export default AncestryFilter;
