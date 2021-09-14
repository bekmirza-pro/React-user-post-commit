import React from "react";
import { useParams } from "react-router-dom";

import "../Profile/Profile.scss";
function Post() {
  const { id } = useParams();
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((post) => setPost(post));
    console.log(id);
  }, [id]);
  return (
    <>
      <div className="post-box">
        {post && (
          <>
            <h2>Post</h2>

            <div className="post-box">
              <p>{post.id}</p>
              <p>{post.body}</p>
              <p>{post.title}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Post;
