import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/fetchFunctions";
import Box from "../components/global/Box";
import LogoutButton from "../components/auth/LogoutButton";
import MainPanel from "../components/posts/MainPanel";
import Title from "../components/global/Title";

const Main = () => {
  const [posts, setPosts] = React.useState([]);

  const { isLoading, isSuccess } = useQuery(
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
