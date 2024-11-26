import { useContext } from "react";
import { DataContext } from "./shared/DataContext";

function SearchPosts() {
  const { searchQuery, setSearchQuery } = useContext(DataContext);
  return (
    <input
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
