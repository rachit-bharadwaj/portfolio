// props
import { EducationField } from "@/props";

const Education = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-secondary mb-3 mt-7 text-left w-full">Education</h2>

      <div className="flex flex-wrap gap-7">
        <EducationField
          institute="Veer Bahadur Singh Purvanchal University, Jaunpur"
          degree="B.Tech. Information Technology"
          startDate="DEC 2020"
          endDate="PRESENT"
          percentage={62.19}
        />

        <EducationField
          institute="Harmilap Mission School, Kanpur"
          degree="Class 12"
          startDate="APR 2019"
          endDate="MAR 2020"
          percentage={69}
        />

        <EducationField
          institute="Harmilap Mission School, Kanpur"
          degree="Class 10"
          startDate="APR 2017"
          endDate="MAR 2018"
          percentage={91}
        />
      </div>
    </section>
  );
};

export default Education;
