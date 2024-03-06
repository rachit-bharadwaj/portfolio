import { Position } from "@/props";

const POR = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">
        Position of Responsibility
      </h2>

      <div className="flex flex-wrap gap-10">
        <Position
          event="Google Developer Student Clubs, VBSPU"
          position="Management Lead"
          startDate="SEP 2022"
          endDate="APR 2023"
          description="I managed the GDSC at my university, overseeing projects and events, and driving
          growth through effective teamwork and strategic planning."
        />

        <Position
          event="SIH Internal Hackathon, VBSPU"
          position="Team Lead"
          startDate="SEP 2023"
          endDate="OCT 2023"
          description="I led a team of 6 members for the internal hackathon of Smart India Hackathon 2023, 
          and as of the reviews by the jury members, we stood the first position in the event."
        />
      </div>
    </section>
  );
};

export default POR;
