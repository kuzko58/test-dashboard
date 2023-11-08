import Image from "next/image";

interface AvatarImageProps {
  src: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src }) => {
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log("loaded", event);
  };

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.log("error", event);
  };

  return (
    <Image
      src={src}
      width={500}
      height={500}
      alt="user avatar"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default AvatarImage;
