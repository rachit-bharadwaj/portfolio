import { techDomain } from "@/constants";
import { Skill } from "@/props";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">
        Technologies
      </h2>

      {/* mapping the technologies */}
      {techDomain.map((domainObj, index) => {
        const domainData = Object.values(domainObj)[0];

        return (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{domainData.name}</h3>
            <div className="flex flex-wrap gap-5 bg-dark lg:flex-row">
              {domainData.tech.map((tech: string, techIndex: number) => (
                <Skill
                  key={techIndex}
                  tech={tech}
                  logo={domainData.logo[techIndex]}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
