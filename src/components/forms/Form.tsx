import React, { FormEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface FormProps
  extends React.PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>> {
  className?: string;
  handleSubmit?: (form: HTMLFormElement) => void;
  handleChange?: (form: HTMLFormElement) => void;
}

const Form: React.FC<FormProps> = ({
  className,
  handleSubmit,
  handleChange,
  onChange,
  onSubmit,
  ...formProps
}) => {
  const handleFormChange: FormEventHandler<HTMLFormElement> = (event) => {
    if (onChange) {
      onChange(event);
    } else {
      const target = event.target as HTMLFormElement;
      handleChange && target && handleChange(target);
    }
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    } else {
      const target = event.target as HTMLFormElement;
      handleSubmit && target && handleSubmit(target);
    }
  };

  const classes = twMerge("w-full", className);

  return (
    <form
      className={classes}
      {...formProps}
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
    >
      {formProps.children}
    </form>
  );
};

export default Form;
