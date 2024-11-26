import React, { useContext } from "react";
import { DataContext } from "./shared/DataContext";

function List() {
  const { posts } = useContext(DataContext);
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
