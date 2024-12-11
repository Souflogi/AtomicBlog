import useDataContext from "./shared/useDataContext";

function SearchPosts() {
  const { searchQuery, setSearchQuery } = useDataContext();
  return (
    <input
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
