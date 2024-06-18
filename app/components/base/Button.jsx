"use client";

export const StdButton = ({ children = "button", onClick }) => {
  return (
    <button
      className={`bg-primary border-secondary hover:scale-[102%] active:scale-[98%] transition-all text-font rounded-md font-semibold border px-6 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const AltButton = ({ children = "button", onClick }) => {
  return (
    <button
      className="bg-secondary border-tertiary hover:scale-[102%] active:scale-[98%] transition-all text-font-dark rounded-md font-semibold border px-6 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

//! Try to make a very flexible button where you can use attributes to choose the colors.
export const FlexibleButton = ({
  children = "button",
  onClick,
  color = "bg-primary",
}) => {
  return (
    <button
      className={`${color} border-secondary hover:scale-[102%] active:scale-[98%] transition-all text-font rounded-md font-semibold border px-6 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
