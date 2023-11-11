import Image from "next/image";
import { AchievementProps } from "@/interfaces";

const Achievement = ({ logo, title, description }: AchievementProps) => {
  return (
    <div className="bg-dark rounded-2xl flex flex-col gap-3 p-5 max-w-xs">
      <div className="flex flex-col gap-3 ">
        <Image
          src={logo}
          alt={title}
          width={100}
          height={100}
          className="h-10 w-10 rounded-full"
        />
        <p className="text-xl font-bold text-light">{title}</p>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default Achievement;
