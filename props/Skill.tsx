import Image from "next/image";

// interfaces
import { SkillProps } from "@/interfaces";

const Skill = ({ tech, logo }: SkillProps) => {
  return (
    <div>
      <Image src={logo} alt={tech} width={100} height={100} />
    </div>
  );
};

export default Skill;
