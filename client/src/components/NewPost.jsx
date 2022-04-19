import React from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import { fetchData } from "../api/fetchFunctions";

const NewPost = () => {
  const [post, setPost] = React.useState("");
  const [loadingPost, setLoadingPost] = React.useState(false);

  const { mutate } = useMutation(
    (info) => fetchData("post", "/api/posts", info),
    {
      onSuccess: (data) => {
        setLoadingPost(false);
        if (!data || data.status !== 200) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: data.data.message ? data.data.message : "Error creating post",
          });
        } else {
          Swal.fire({
            title: "Success",
            text: "Post saved",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      },
      onError: (data) => {
        setLoadingPost(false);
        let msg = data.text();
        Swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!post) {
      Swal.fire({
        title: "Error",
        text: "Post cannot be empty",
        icon: "error",
      });
      return;
    }

    setLoadingPost(true);
    mutate({
      text: post,
      isDone: false,
    });

    setPost("");
  };

  return (
    <Form className="d-flex formArea" onSubmit={handleSubmit}>
      <Form.Group controlId="newPostForm" className="me-2 w-100">
        <Form.Control
          type="text"
          placeholder="Post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" disabled={loadingPost}>
        Save
      </Button>
    </Form>
  );
};

export default NewPost;
