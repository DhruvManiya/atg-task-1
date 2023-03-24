import React, { memo, useContext } from "react";
import posts from "../posts/posts";
import postToShowContext from "../context/postToShowContext";
import PostCard from "./Post";
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
      <div className="flex flex-col 2xl:w-[55%] md:w-[60%] w-full">
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
