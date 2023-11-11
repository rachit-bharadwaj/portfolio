import { Content, Projects } from "@/components/projects";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <Content />
      <Projects />
      and more to be added soon...
    </div>
  );
};

export default ProjectsPage;

export const generateMetadata = () => {
  return {
    title: "Projects | Rachit Bharadwaj",
  };
};
