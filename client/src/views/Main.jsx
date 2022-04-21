import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/fetchFunctions";
import Box from "../components/global/Box";
import LogoutButton from "../components/auth/LogoutButton";
import MainPanel from "../components/posts/MainPanel";
import Title from "../components/global/Title";

const Main = () => {
  const [posts, setPosts] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  const { isLoading, isSuccess, isFetching } = useQuery(
    ["posts"],
    () => fetchData("get", "/api/posts"),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          setPosts(data.data);
        }
        else {
          setIsError(true);
        }
      },
      onError: () => {
        setIsError(true);
      }
    }
  );

  return (
    <>
      <Box>
        <Title title="To-Do List" />
        <MainPanel posts={posts} isSuccess={isSuccess} isLoading={isLoading} isFetching={isFetching} isError={isError}/>
      </Box>
      <LogoutButton />
    </>
  );
};

export default Main;
