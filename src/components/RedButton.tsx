import React from "react";

interface RedButtonProps {
  buttonName: string;
  onClick: () => void;
}

const RedButton: React.FC<RedButtonProps> = ({ buttonName, onClick }) => {
  return (
    <button
      className="btn btn-wide custom-bgc hover:scale-105 hover:shadow-md transition-transform transition-shadow duration-500 ease-in-out"
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default RedButton;
