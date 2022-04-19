import React from "react";

const ListButtons = (props) => {
  const handleEdit = () => {
    console.log("edit", props.id);
  };

  const handleDelete = () => {
    console.log("delete", props.id);
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
