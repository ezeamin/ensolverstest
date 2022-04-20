import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.setError) props.setError(null);
    navigate(-1);
  };

  return (
    <div className="text-center mt-4">
      <button
        type="button"
        onClick={handleClick}
        className="signup__backButton"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
