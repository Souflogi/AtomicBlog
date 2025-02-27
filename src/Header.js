import Results from "./Results";
import SearchPosts from "./SearchPosts";
import useDataContext from "./shared/useDataContext";

function Header() {
  const { onClearPosts } = useDataContext();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
