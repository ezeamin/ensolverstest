import React from "react";
import { Form } from "react-bootstrap";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import { fetchData } from "../../api/fetchFunctions";
import ListButtons from "./ListButtons";

const PostItem = (props) => {
  const { text, isDone, id } = props;
  const [checked, setChecked] = React.useState(isDone || false);

  const { mutate } = useMutation(
    (info) => fetchData("put", `/api/posts/${id}`, info),
    {
      onSuccess: (data) => {
        if (!data || data.status !== 200) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: data.data.message ? data.data.message : "Error",
          });
        } else setChecked(!checked);
      },
      onError: (data) => {
        let msg = data.text();

        Swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
        });
      },
    }
  );

  const handleCheckbox = () => {
    mutate({
      isDone: !checked,
    });
  };

  return (
    <Form className="d-flex justify-content-between align-items-start">
      <Form.Check
        type="checkbox"
        label={text}
        value={checked}
        defaultChecked={isDone}
        onChange={handleCheckbox}
      />
      <ListButtons id={id} />
    </Form>
  );
};

export default PostItem;
