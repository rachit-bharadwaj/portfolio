// components
import { Content, Skills } from "@/components/skills";

const SkillsPage = () => {
  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">Skills</h1>

      <Content />

      <Skills />
    </div>
  );
};

export default SkillsPage;

export const generateMetadata = () => {
  return {
    title: "Skills | Rachit Bharadwaj",
  };
};
