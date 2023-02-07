// styles
import "./posts.styles.scss";

// hooks
import { useEffect, useState } from "react";

// components
import PostList from "../../components/post-list/post-list.component";
import Spinner from "../../components/spinner/spinner.component";

// api requests
import { fetchPosts, fetchMorePosts } from "../../api/posts.requests";

export default function PostsPage() {
  // state
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsFetching(true);
        const { data } = await fetchPosts();

        setPosts(data.posts);
        setSkip(data.posts.length);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        console.log(error.message);
      }
    })();
  }, []);

  async function handleFetchMorePosts() {
    try {
      setIsFetching(true);
      const { data } = await fetchMorePosts({ skip, limit: 30 });

      setSkip((skip) => skip + data.posts.length);
      setPosts((posts) => [...posts, ...data.posts]);
      setIsFetching(false);

      if (posts.length >= data.total) {
        setHasMorePosts(false);
      }
    } catch (error) {
      setIsFetching(false);
      console.log(error.message);
    }
  }

  return (
    <div className="posts-page">
      <header>
        <div className="heading">
          <h1>Posts</h1>
          <p className="subtitle">
            Unleash Your Imagination,
            <br /> Explore the World of Creativity
          </p>
        </div>
        <img src="/hero.jpg" alt="hero" />
      </header>
      <main>
        <h2>latest</h2>
        {posts.length > 0 ? <PostList posts={posts} /> : ""}
        <div className="actions">
          {isFetching ? (
            <Spinner />
          ) : !hasMorePosts ? (
            <p className="end-msg">you've seen it all.</p>
          ) : (
            <p className="show-more" onClick={handleFetchMorePosts}>
              show more
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
