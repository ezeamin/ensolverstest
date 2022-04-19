import React from "react";
import PostItem from "./PostItem";

const List = (props) => {
  return (
    <ul className="postList">
      {props.posts.map((item, index) => {
        return <PostItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default List;
