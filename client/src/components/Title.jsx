import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className="mb-0 text-center fw-bold">{props.title}</h1>
      <hr className="mt-1 mb-3 text-dark" />
    </div>
  );
};

export default Title;
