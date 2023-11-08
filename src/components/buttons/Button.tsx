import React, { MouseEvent, ButtonHTMLAttributes } from "react";
import BasicSpinner from "@/components/utils/spinners/BasicSpinner";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  loading = false,
  ...buttonProps
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!loading && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={twMerge("flex items-center justify-center", className)}
      onClick={handleClick}
      {...buttonProps}
    >
      {loading ? (
        <div className="flex gap-1 items-center">
          <div className="w-[1.3em] h-[1.3em]">
            <BasicSpinner />
          </div>
          loading..
        </div>
      ) : (
        <>{buttonProps.children}</>
      )}
    </button>
  );
};

export default Button;
