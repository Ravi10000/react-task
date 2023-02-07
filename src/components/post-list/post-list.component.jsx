import "./post-list.styles.scss";
// styles
import "./post-list.styles.scss";

// components
import Post from "./post/post.component";

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.length && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
