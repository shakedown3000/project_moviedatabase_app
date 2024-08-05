// RedButton.jsx
import React from "react";

interface RedButtonProps {
  buttonName: string;
}

const RedButton: React.FC<RedButtonProps> = ({ buttonName }) => {
  return (
    <button className="btn btn-wide custom-bgc hover:scale-105 hover:shadow-md transition-transform transition-shadow duration-500 ease-in-out">
      {buttonName}
    </button>
  );
};

export default RedButton;
