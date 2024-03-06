import { ExperienceProps } from "@/interfaces";

const Experience = ({
  company,
  position,
  startDate,
  endDate,
  description,
}: ExperienceProps) => {
  return (
    <div className="max-w-xs flex flex-col gap-3 bg-blur p-5 rounded-2xl shadow-xl">
      <p className="text-lg font-bold">{company}</p>
      <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-2">
        <p className="font-bold text-secondary">{position}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Experience;
