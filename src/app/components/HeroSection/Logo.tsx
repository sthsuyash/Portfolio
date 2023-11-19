import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={50} height={50} alt="Suyash Shrestha" />
    </Link>
  );
};

export default Logo;
