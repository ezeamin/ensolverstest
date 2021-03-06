import React from "react";
import List from "./List";
import Loading from "../global/Loading";
import Error from "../global/Error";
import NewPost from "./NewPost";

const MainPanel = (props) => {
  const { posts, isLoading, isFetching, isSuccess, isError } = props;

  const loading = () => {
    return isLoading || (isFetching && posts.length === 0)
  }

  if (isError) {
    return <Error />;
  }
  if (loading()) {
    return <Loading />;
  }
  return (
    <div>
      <h3>Posts</h3>
      <div className="list__container">
        {posts.length === 0 && isSuccess ? (
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
