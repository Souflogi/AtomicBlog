import React, { useContext } from "react";
import List from "./List";
import { DataContext } from "./shared/DataContext";

function Posts() {
  const { posts } = useContext(DataContext);
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
