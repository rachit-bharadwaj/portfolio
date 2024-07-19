import { Experience } from "@/props";

const IndustryExperience = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">
        Industry Experience
      </h2>

      <div className="flex flex-wrap gap-10">
        <Experience
          company="CodeXcelerate"
          position="Full-Stack Web Developer Intern"
          startDate="FEB 2024"
          endDate="MAY 2024"
          description=" Worked on AWS services like DynamoDB, S3 etc for full-stack
          industry-level projects. I built optimized web-applications using trending technologies like
          Next.js, Tailwind CSS, Shadcn and other relevant technologies."
        />
        <Experience
          company="ELVDRIVE"
          position="Web Developer Intern"
          startDate="MAY 2023"
          endDate="OCT 2023"
          description="Worked on multiple projects for various companies, focusing on React.js for frontend development and other core technologies like EJS and Express.js. Led frontend development, optimizing functionality and performance
          with React.js."
        />
      </div>
    </section>
  );
};

export default IndustryExperience;
