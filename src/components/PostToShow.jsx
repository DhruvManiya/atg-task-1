import React, { memo, useContext } from "react";
import posts from "../posts/posts";
import postToShowContext from "../context/postToShowContext";
import PostCard from "./postCard";
const PostToShow = () => {
  let shownPosts;
  const { status } = useContext(postToShowContext);
  if (status === "All post") {
    shownPosts = posts;
  } else {
    shownPosts = posts.filter((post) => post.status === status);
  }

  return (
    <>
      <div className="flex flex-col w-[55%]">
        {shownPosts &&
          shownPosts.map((post) => (
            <PostCard post={post} />
          )
          )}
      </div>
    </>
  );
};

export default memo(PostToShow);
