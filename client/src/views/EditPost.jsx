import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/fetchFunctions";
import BackButton from "../components/BackButton";
import Box from "../components/Box";
import NewPost from "../components/NewPost";
import Title from "../components/Title";

const EditPost = () => {
  const url = window.location.pathname;
  const split = url.split("/");
  const id = split[split.length - 1];

  const [post, setPost] = React.useState({});

  const { isLoading, isFetching } = useQuery(
    ["post", id],
    () => fetchData("get", `/api/posts/${id}`),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          setPost(data.data);
        }
      },
    }
  );

  return (
    <Box>
      <Title title="Editing post" />
      <p className="mb-0">Old: {post.text}</p>
      <p className="mb-0">New:</p>
      <NewPost type="edit" {...post} />
      <BackButton />
    </Box>
  );
};

export default EditPost;
