import Link from "next/link";

// react icons
import { RiHomeSmileLine, RiStarSmileLine } from "react-icons/ri";
import { FaClipboardUser, FaTrophy } from "react-icons/fa6";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";

// shadcn
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <nav className="text-gray-200 bottom-5 fixed z-[90] flex w-full justify-center items-center
                    lg:w-fit lg:h-screen lg:p-5">
      <TooltipProvider>
        <ul className="flex gap-5 text-2xl max-w-fit py-3 px-5 rounded-full bg-dark transition-opacity bg-opacity-60 bg-blur items-center
                       lg:flex-col lg:py-5 xl:text-3xl">
          <li>
            <Link href="/">
              <Tooltip>
                <TooltipTrigger>
                  <RiHomeSmileLine />
                </TooltipTrigger>
                <TooltipContent>Home</TooltipContent>
              </Tooltip>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <Tooltip>
                <TooltipTrigger>
                  <FaClipboardUser />
                </TooltipTrigger>
                <TooltipContent>About</TooltipContent>
              </Tooltip>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <Tooltip>
                <TooltipTrigger>
                  <BiMessageSquareDetail />
                </TooltipTrigger>
                <TooltipContent>Contact</TooltipContent>
              </Tooltip>
            </Link>
          </li>

          <li>
            <Link href="/skills">
              <Tooltip>
                <TooltipTrigger>
                  <RiStarSmileLine />
                </TooltipTrigger>
                <TooltipContent>Skills</TooltipContent>
              </Tooltip>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <Tooltip>
                <TooltipTrigger>
                  <BsFillFileEarmarkCodeFill />
                </TooltipTrigger>
                <TooltipContent>Projects</TooltipContent>
              </Tooltip>
            </Link>
          </li>

          <li>
            <Link href="/work">
              <Tooltip>
                <TooltipTrigger>
                  <HiOutlineBriefcase />
                </TooltipTrigger>
                <TooltipContent>Work</TooltipContent>
              </Tooltip>
            </Link>
          </li>

          <li>
            <Link href="/achievements">
              <Tooltip>
                <TooltipTrigger>
                  <FaTrophy />
                </TooltipTrigger>
                <TooltipContent>Achievements</TooltipContent>
              </Tooltip>
            </Link>
          </li>
        </ul>
      </TooltipProvider>
    </nav>
  );
};

export default Navbar;
