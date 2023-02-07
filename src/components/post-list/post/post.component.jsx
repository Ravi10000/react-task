// styles
import "./post.styles.scss";

export default function Post({ post }) {
  return (
    <div className="post">
      <h3 className="title">{post?.title}</h3>
      <p className="content">{post?.body}</p>

      <div className="likes">
        <p>{post?.reactions}</p>
        <img src="/heart.png" alt="like" />
      </div>
      <h4>tags</h4>
      <div className="tags">
        {post?.tags?.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
