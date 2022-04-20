import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchData } from "../../api/fetchFunctions";

const ListButtons = (props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (id) => fetchData("delete", `/api/posts/${id}`),
    {
      onSuccess: (data) => {
        if (!data || data.status !== 200) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: data.data.message ? data.data.message : "Error",
          });
        } else {
          Swal.fire({
            title: "Success",
            text: "Post deleted",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });

          // Update the list of posts
          queryClient.invalidateQueries("posts");
        }
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

  const handleEdit = () => {
    navigate(`/edit/${props.id}`);
  };

  const handleDelete = () => {
    mutate(props.id);
  };

  return (
    <div className="d-flex ms-2">
      <button
        onClick={handleEdit}
        type="button"
        className="list__button--reset me-4"
      >
        <i className="fa-solid fa-pencil text-secondary"></i>
      </button>
      <button
        onClick={handleDelete}
        type="button"
        className="list__button--reset"
      >
        <i className="fa-solid fa-trash text-secondary"></i>
      </button>
    </div>
  );
};

export default ListButtons;
