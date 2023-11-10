import { ContactProps } from "@/interfaces";
import Link from "next/link";

const ContactOption = ({ Icon, title, link, detail }: ContactProps) => {
  return (
    <Link
      href={link}
      className="bg-dark/90 py-5 rounded-xl shadow-xl flex flex-col items-center gap-2 w-80 text-light bg-blur
      dark:hover:bg-secondary/50 hover:bg-dark transition-all duration-500"
    >
      <Icon className="text-3xl" />
      <p className="text-lg">{title}</p>

      <p>{detail}</p>
    </Link>
  );
};

export default ContactOption;
