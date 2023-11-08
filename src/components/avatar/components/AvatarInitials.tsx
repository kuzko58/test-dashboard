import { getInitials } from "@/lib/utils/string-transform";

interface InitialsProps {
  name: string;
}

const AvatarInitials: React.FC<InitialsProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center w-full h-full text-current">
      {getInitials(name)}
    </div>
  );
};

export default AvatarInitials;
