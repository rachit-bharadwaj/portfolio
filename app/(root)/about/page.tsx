import Link from "next/link";
import Image from "next/image";

// icons
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

// props
import { AboutCard } from "@/props";

// components
import { Education } from "@/components/about";

// shadcn
import { Button } from "@/components/ui/button";

import { getBase64 } from "@plaiceholder/base64";
import fs from "fs";

const About = async () => {
  const image = fs.readFileSync(
    "C:/Users/Rachit/Documents/Code/Web-dev/portfolio/public/images/me-sidelook.jpeg"
  );
  const base64String = await getBase64(image);

  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">About Me</h1>

      <section className="flex flex-col gap-7 items-center md:flex-row lg:gap-16">
        <Image
          src="/images/me-sidelook.jpeg"
          alt="Rachit Bharadwaj"
          width={1000}
          height={1000}
          className="h-52 w-fit rounded-xl lg:h-64 xl:h-80"
          placeholder="blur"
          blurDataURL={base64String}
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-5">
            <AboutCard
              link="/work"
              Icon={HiOutlineBriefcase}
              title="Experience"
              duration="6 months"
            />

            <AboutCard
              link="/projects"
              Icon={BsFillFileEarmarkCodeFill}
              title="Projects"
              duration="10+"
            />
          </div>

          <p className="max-w-md text-gray-400">
            I am a full stack developer based in India. I have worked on
            multiple projects and have experience in working with different
            technologies. I am a B.Tech undergrad and have been working on web
            development for the past 2 years. I have worked with ReactJS,
            NextJS, NodeJS, ExpressJS, MongoDB, TailwindCSS and many more.
            Always looking up for opportunities.
          </p>
        </div>
      </section>

      {/* ................... education section ............ */}
      <Education />

      <div className="flex gap-5 lg:mt-10">
        <Button variant="outline" size="lg">
          <Link href="/skills" className="md:text-lg">
            Skills
          </Link>
        </Button>

        <Button variant="secondary" size="lg">
          <Link href="/contact" className="md:text-lg">
            Contact me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default About;

export const generateMetadata = () => {
  return {
    title: "About | Rachit Bharadwaj",
  };
};
