import React from "react";
import BackButton from "./BackButton";
import Loading from "./Loading";
import NewPost from "./NewPost";

const EditPanel = (props) => {
  const { post, isSuccess } = props;

  if (!isSuccess) {
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
