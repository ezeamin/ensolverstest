import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/fetchFunctions";
import Box from "../components/global/Box";
import EditPanel from "../components/posts/EditPanel";
import Title from "../components/global/Title";

const EditPost = () => {
  const url = window.location.pathname;
  const split = url.split("/");
  const id = split[split.length - 1];

  const [post, setPost] = React.useState({});
  const [isError, setIsError] = React.useState(false);

  const { isSuccess } = useQuery(
    ["post", id],
    () => fetchData("get", `/api/posts/${id}`),
    {
      onSuccess: (data) => {
        if (data.status === 200 && data.data) {
          setPost(data.data);
        } else {
          setIsError(true);
        }
      },
      onError: () => {
        setIsError(true);
      },
    }
  );

  return (
    <Box>
      <Title title="Editing post" />
      <EditPanel post={post} isSuccess={isSuccess} isError={isError} />
    </Box>
  );
};

export default EditPost;
