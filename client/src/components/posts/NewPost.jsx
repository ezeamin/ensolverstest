import React from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchData } from "../../api/fetchFunctions";

const NewPost = (props) => {
  const [post, setPost] = React.useState("");
  const [loadingPost, setLoadingPost] = React.useState(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // For editing posts
  React.useEffect(() => {
    if(props.type === "edit") setPost(props.text);
  }, [props.type,props.text]);

  const method = props.type === "edit" ? "put" : "post";
  const url = props.type === "edit" ? `/api/posts/${props.id}` : "/api/posts";

  const { mutate } = useMutation((info) => fetchData(method, url, info), {
    onSuccess: (data) => {
      setLoadingPost(false);
      if (!data || data.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.data.message ? data.data.message : "Error",
        });
      } else {
        setPost("");
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          if (props.type === "edit") {
            navigate("/"); //back to main page
          }
        });

        // Update the list of posts
        queryClient.invalidateQueries("posts");
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
  });

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
      id: props.type === "new" ? null : props.id,
      text: post,
      isDone: props.id ? props.isDone : false,
    });
  };

  return (
    <Form className="d-flex formArea" onSubmit={handleSubmit}>
      <Form.Group controlId="newPostForm" className="me-2 w-100">
        <Form.Control
          type="text"
          placeholder="Post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          maxLength="255"
        />
      </Form.Group>
      <Button variant="success" type="submit" disabled={loadingPost}>
        Save
      </Button>
    </Form>
  );
};

export default NewPost;
