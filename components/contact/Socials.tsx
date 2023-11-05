import Social from "@/props/Social";

// icons
import { RxLinkedinLogo } from "react-icons/rx";
import { BiLogoGithub } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">
        Other Social Links
      </h2>

      {/* social links */}
      <div className="flex gap-7">
        <Social
          Icon={RxLinkedinLogo}
          link="https://www.linkedin.com/in/rachitbharadwaj"
        />
        <Social
          Icon={BiLogoGithub}
          link="https://github.com/rachit-bharadwaj"
        />
        <Social Icon={FaSquareXTwitter} link="https://twitter.com/rrachiitt" />
      </div>
    </section>
  );
};

export default Socials;
