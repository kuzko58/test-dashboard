import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  name,
  value,
  onInput,
  onBlur,
  ...inputProps
}) => {
  className = twMerge("focus:outline-none", className);
  value = value ?? "";

  return (
    <input
      className={className}
      name={name}
      value={value}
      onChange={onInput}
      onBlur={onBlur}
      {...inputProps}
    />
  );
};

export default Input;
