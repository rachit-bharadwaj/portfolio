import { Achievements } from "@/components/achievements";

const AchievementsPage = () => {
  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">Achievements</h1>
      <p className="text-gray-400">Some of my achievements are listed below</p>
      <Achievements />

      <p className="text-gray-400">and more to be added soon...</p>
    </div>
  );
};

export default AchievementsPage;
