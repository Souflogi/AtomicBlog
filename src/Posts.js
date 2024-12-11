import List from "./List";
import useDataContext from "./shared/useDataContext";

function Posts() {
  const { posts } = useDataContext();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
