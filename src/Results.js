import useDataContext from "./shared/useDataContext";

function Results() {
  const { posts } = useDataContext();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
