import React from "react";

const Button = ({ type = 'button', title = '', icon, variant = '', full = false }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};

export default Button;
