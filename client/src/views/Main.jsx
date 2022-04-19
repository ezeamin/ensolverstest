import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/fetchFunctions";
import Box from "../components/Box";
import List from "../components/List";
import LogoutButton from "../components/LogoutButton";
import NewPost from "../components/NewPost";
import Title from "../components/Title";

const Main = () => {
  const [posts, setPosts] = React.useState([]);

  const { isLoading, isFetching } = useQuery(
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
        <h3>Posts</h3>
        <div className="list__container">
          {(posts.length !== 0 && !(isFetching || isLoading)) ? <List posts={posts} /> : <p>No data</p>}
        </div>
        <NewPost type="new"/>
      </Box>
      <LogoutButton />
    </>
  );
};

export default Main;
