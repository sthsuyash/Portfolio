import Image from "next/image";

type MyImageProps = {
  containerStyles: string;
  imgSrc: string;
};

const MyImage = ({ containerStyles, imgSrc }: MyImageProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Suyash Shrestha" />
    </div>
  );
};

export default MyImage;
