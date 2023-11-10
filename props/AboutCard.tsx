import Link from "next/link";

// types
import { AboutProps } from "@/interfaces";

const AboutCard = ({ link, Icon, title, duration }: AboutProps) => {
  return (
    <Link href={link}>
      <button
        className="dark:bg-dark px-5 py-3 rounded-xl flex flex-col items-center justify-center gap-2 
                       bg-blur bg-dark/90 text-light hover:bg-dark transition-all duration-500"
      >
        <Icon className="text-xl text-secondary" />
        <p className="text-xl">{title}</p>
        <p className="text-xs text-gray-400">{duration}</p>
      </button>
    </Link>
  );
};

export default AboutCard;
