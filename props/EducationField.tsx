import { EducationFieldProps } from "@/interfaces";

const EducationField = ({
  institute,
  degree,
  startDate,
  endDate,
  percentage,
}: EducationFieldProps) => {
  return (
    <div className="max-w-xs flex flex-col gap-2 bg-blur px-5 py-3 rounded-2xl shadow-xl">
      <p className="text-lg font-bold">{degree}</p>
      <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-1">
        <p>{institute}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <p className="font-bold">{percentage}&#37;</p>
      </div>
    </div>
  );
};

export default EducationField;
