import { Project } from "@/props";

const Projects = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <Project
        title="ReKha"
        description="The web-app is for calculating expenses and income. It is a full-stack application with a React frontend and a Node.js backend."
        preview="/images/projects/rekha.png"
        githubLink="https://github.com/rachit-bharadwaj/ReKha"
        liveLink="https://rekha-rachit-bharadwaj.vercel.app"
        techLogo={["/logos/reactjs.svg", "/logos/node.svg"]}
        techStack={["React", "Node.js"]}
      />
    </div>
  );
};

export default Projects;
