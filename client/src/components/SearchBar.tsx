import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        id="searchBar"
        name="searchBar"
        placeholder="Search..."
        onChange={handleSearchTerm}
      />
    </div>
  );
};

export default Search;
