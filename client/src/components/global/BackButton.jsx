import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-4">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="signup__backButton"
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
