import { Experience } from "@/props";

const IndustryExperience = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">
        Industry Experience
      </h2>

      <div className="flex flex-wrap gap-7">
        <Experience
          company="ELVDRIVE"
          position="Web Developer"
          startDate="MAY 2023"
          endDate="AUG 2023"
          description="At ELVDRIVE, my web development internship focused on HTML, CSS, React JS, and
          JavaScript. I gained practical experience through real-world projects, improving
          my front-end skills and problem-solving abilities."
        />
      </div>
    </section>
  );
};

export default IndustryExperience;
