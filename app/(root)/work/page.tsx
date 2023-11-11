import Link from "next/link";

// components
import { Content, IndustryExperience, POR } from "@/components/work";

// shadcn
import { Button } from "@/components/ui/button";

const Work = () => {
  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">Work</h1>

      <Content />

      {/* ------------------ industry experience ------------ */}
      <IndustryExperience />

      {/* ------------------- Position of responsibility ------------ */}
      <POR />

      <div className="flex gap-5 lg:mt-10">
        <Link href="/contact">
          <Button variant="outline" size="lg">
            <p className="md:text-lg">Hire Me</p>
          </Button>
        </Link>

        <Link href="/projects">
          <Button variant="secondary" size="lg">
            <p className="md:text-lg">Projects</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Work;

export const generateMetadata = () => {
  return {
    title: "Work | Rachit Bharadwaj",
  };
};
