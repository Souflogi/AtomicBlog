import React, { useState } from "react";
import { createRandomPost } from "./utils";

const DataContext = React.createContext({
  posts: [],
  onAddPost: () => {},
  onClearPosts: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
});

const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 10 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter(post =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <DataContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
