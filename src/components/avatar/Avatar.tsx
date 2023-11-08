import AvatarIcon from "./components/AvatarIcon";
import AvatarInitials from "./components/AvatarInitials";
import AvatarImage from "./components/AvatarImage";
import { getColor } from "@/lib/utils/string-transform";
import PulseLoader from "../utils/loaders/PulseLoader";

interface AvatarProps {
  name?: string;
  size?: number;
  loading?: boolean;
  src?: string;
  userId?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name = "",
  size = 32,
  loading = false,
  src = "",
  userId = "",
}) => {
  const randomizer = name || userId;

  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: randomizer ? getColor(randomizer) : "rgb(203 213 225)",
      }}
    >
      {loading ? (
        <PulseLoader />
      ) : src ? (
        <AvatarImage src={src} />
      ) : name ? (
        <AvatarInitials name={name} />
      ) : (
        <AvatarIcon />
      )}
    </div>
  );
};

export default Avatar;
