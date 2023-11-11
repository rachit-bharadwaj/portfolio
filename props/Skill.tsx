import Image from "next/image";

// interfaces
import { SkillProps } from "@/interfaces";

const Skill = ({ domain, tech, logo }: SkillProps) => {
  return (
    <div className="bg-dark/75 dark:bg-dark rounded-3xl p-5 flex flex-col gap-3 mx-auto text-light">
      <p className="text-center text-lg">{domain}</p>

      <div className="flex flex-wrap gap-5 w-64 justify-center items-center h-full md:w-72">
        {Array.from({ length: logo.length }).map((_, i) => (
          <div
            key={i}
            className="bg-light p-3 rounded-full flex items-center justify-center"
          >
            <Image
              src={logo[i]}
              alt={tech[i]}
              width={100}
              height={100}
              className="h-10 w-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
