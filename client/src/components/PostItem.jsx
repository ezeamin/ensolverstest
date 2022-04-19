import React from "react";
import { Form } from "react-bootstrap";
import ListButtons from "./ListButtons";

const PostItem = (props) => {
  const { text, isDone, id } = props;

  return (
    <Form className="d-flex justify-content-between align-items-start">
      <Form.Check type="checkbox" label={text} defaultChecked={isDone} />
      <ListButtons id={id}/>
    </Form>
  );
};

export default PostItem;
