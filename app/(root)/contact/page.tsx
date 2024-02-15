import Link from "next/link";

// components
import { ContactSection, Socials } from "@/components/contact";

// shadcn
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">Let&apos;s Connect</h1>

      {/* --------- social links --------- */}
      <ContactSection />

      <Socials />

      <div className="flex gap-5 lg:mt-10">
        <Link href="/work">
          <Button variant="outline" size="lg">
            <p className="md:text-lg">My Work</p>
          </Button>
        </Link>

        <Link href="/about">
          <Button variant="secondary" size="lg">
            <p className="md:text-lg">About me</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

export function generateMetadata() {
  return {
    title: "Contact | Rachit Bharadwaj",
  };
}
