import { PORProps } from "@/interfaces";

const Position = ({
  event,
  position,
  startDate,
  endDate,
  description,
}: PORProps) => {
  return (
    <div className="max-w-xs flex flex-col gap-2 bg-blur p-5 rounded-2xl shadow-xl">
      <p className="text-lg font-bold">{event}</p>
      <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-1">
        <p className="font-bold text-secondary">{position}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Position;
