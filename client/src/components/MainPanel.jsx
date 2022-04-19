import React from "react";
import List from "./List";
import Loading from "./Loading";
import NewPost from "./NewPost";

const MainPanel = (props) => {
  const { posts, isLoading, isSuccess } = props;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3>Posts</h3>
      <div className="list__container">
        {posts.length === 0 && !isSuccess ? (
          <p>No data</p>
        ) : (
          <List posts={posts} />
        )}
      </div>
      <NewPost type="new" />
    </div>
  );
};

export default MainPanel;
