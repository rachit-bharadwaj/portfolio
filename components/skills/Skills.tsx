import { Skill } from "@/props";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 max-w-3xl xl:max-w-6xl">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">
        Technologies
      </h2>

      {/* mapping the technologies */}

      <div className="flex flex-wrap gap-10">
        <Skill
          domain="Frontend Dev"
          logo={[
            "/logos/nextjs.svg",
            "/logos/reactjs.svg",
            "/logos/ts.svg",
            "/logos/js.svg",
            "/logos/redux.svg",
            "/logos/tailwind.svg",
            "/logos/html.svg",
            "/logos/css.svg",
          ]}
          tech={[
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "Redux",
            "Tailwind CSS",
            "HTML",
            "CSS",
          ]}
        />

        <Skill
          domain="Backend Dev"
          logo={[
            "/logos/node.svg",
            "/logos/express.svg",
            "/logos/nextjs.svg",
            "/logos/nextauth.png",
            "/logos/clerk.svg",
          ]}
          tech={["Node.js", "Express.js", "Next.js", "Next Auth", "Clerk"]}
        />

        <Skill
          domain="Database"
          logo={["/logos/mongodb.svg", "/logos/mongoose.svg"]}
          tech={["MongoDB", "Mongoose"]}
        />

        <Skill
          domain="Tools"
          logo={[
            "/logos/git.svg",
            "/logos/github.svg",
            "/logos/vscode.svg",
            "/logos/postman.svg",
          ]}
          tech={["Git", "Github", "VS Code", "Postman"]}
        />
      </div>
    </section>
  );
};

export default Skills;
