import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface AccordionProps extends React.PropsWithChildren {
  title?: string;
  wrapperClass?: string;
  buttonWrapperClass?: string;
  Button: React.FC<AccordionBtnProps>;
}

export interface AccordionBtnProps {
  open: boolean;
  title?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  wrapperClass,
  buttonWrapperClass,
  Button,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={twMerge("w-full", wrapperClass)}>
      <div
        className={twMerge("w-full", buttonWrapperClass)}
        onClick={toggleAccordion}
      >
        <Button title={title} open={isOpen} />
      </div>
      {isOpen && <div className="w-full">{children}</div>}
    </div>
  );
};

export default Accordion;
