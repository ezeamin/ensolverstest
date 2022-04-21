import React from "react";
import BackButton from "../global/BackButton";
import Loading from "../global/Loading";
import Error from "../global/Error";
import NewPost from "./NewPost";

const EditPanel = (props) => {
  const { post, isSuccess, isError } = props;

  if (isError) {
    return <Error />;
  }
  if (Object.keys(post).length === 0 || !isSuccess) {
    return <Loading />;
  }
  return (
    <div>
      <p className="mb-0">Old: {post.text}</p>
      <p className="mb-0">New:</p>
      <NewPost type="edit" {...post} />
      <BackButton />
    </div>
  );
};

export default EditPanel;
