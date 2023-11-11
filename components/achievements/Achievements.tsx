import { Achievement } from "@/props";

const Achievements = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      <Achievement
        logo="/logos/hacktoberfest.jpg"
        title="Hacktoberfest 2022"
        description="Successfully completed Hacktoberfest 2022 by contributing to open source projects on GitHub."
      />

      <Achievement
        logo="/logos/google-cloud.svg"
        title="Google Cloud Career Practitioners Campaign(GCCP) 2022"
        description="Contributed in the project developed for the GCCP campaign and received swags from Google Cloud."
      />
    </section>
  );
};

export default Achievements;
