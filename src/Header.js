import React, { useContext } from "react";
import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { DataContext } from "./shared/DataContext";

function Header() {
  const { onClearPosts } = useContext(DataContext);

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
