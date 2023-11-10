import Link from "next/link";
import { SocialProps } from "@/interfaces";

const Social = ({ Icon, link }: SocialProps) => {
  return (
    <Link href={link}>
      <Icon className="text-4xl hover:text-secondary/50" />
    </Link>
  );
};

export default Social;
