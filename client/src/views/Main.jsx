import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/fetchFunctions";
import Box from "../components/Box";
import LogoutButton from "../components/LogoutButton";
import MainPanel from "../components/MainPanel";
import Title from "../components/Title";

const Main = () => {
  const [posts, setPosts] = React.useState([]);

  const { isLoading, isFetching, isSuccess } = useQuery(
    ["posts"],
    () => fetchData("get", "/api/posts"),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          setPosts(data.data);
        }
      },
    }
  );

  return (
    <>
      <Box>
        <Title title="To-Do List" />
        <MainPanel posts={posts} isSuccess={isSuccess} isLoading={isLoading} />
      </Box>
      <LogoutButton />
    </>
  );
};

export default Main;
