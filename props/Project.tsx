import Link from "next/link";
import Image from "next/image";

import { ProjectProps } from "@/interfaces";

// icons
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";

const Project = ({
  title,
  description,
  preview,
  githubLink,
  liveLink,
  techLogo,
  techStack,
}: ProjectProps) => {
  return (
    <div className="bg-gray-200 dark:bg-dark p-5 rounded-2xl flex flex-col gap-5 max-w-sm">
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold dark:text-light">{title}</p>
        <p className="text-sm dark:text-gray-400">{description}</p>
      </div>
      <Image
        src={preview}
        alt={title}
        width={500}
        height={500}
        className="h-44 w-fit mx-auto rounded-xl"
      />

      <div className="flex flex-wrap gap-2 dark:bg-white w-fit p-2 rounded-full">
        {Array.from({ length: techLogo.length }).map((_, i) => (
          <Image
            key={i}
            src={techLogo[i]}
            alt={techStack[i]}
            width={100}
            height={100}
            className="h-7 w-7"
          />
        ))}
      </div>

      {/* links section */}
      <div className="flex justify-between">
        <Link
          className="rounded-full flex gap-1 items-center bg-gray-100 py-2 px-3 text-dark"
          href={githubLink}
        >
          <BsGithub /> <p className="text-xs">Star the project</p>
        </Link>

        {liveLink && (
          <Link
            className="rounded-full bg-gray-100 px-3 py-2 text-dark flex gap-1 items-center"
            href={liveLink}
          >
            <p className="text-xs">Live</p> <HiMiniArrowTopRightOnSquare />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
