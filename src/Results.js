import React, { useContext } from "react";
import { DataContext } from "./shared/DataContext";

function Results() {
  const { posts } = useContext(DataContext);

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
