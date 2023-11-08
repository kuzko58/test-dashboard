import { twMerge } from "tailwind-merge";

interface PulseLoaderProps {
  wrapperClass?: string;
}

const PulseLoader: React.FC<PulseLoaderProps> = ({ wrapperClass }) => {
  const wrapperClasses = twMerge(
    "w-full h-full animate-pulse bg-gray-100",
    wrapperClass
  );

  return <span className={wrapperClasses} />;
};

export default PulseLoader;
