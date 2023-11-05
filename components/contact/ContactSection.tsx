import { ContactOption } from "@/props";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallBold } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Social = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5">
      <ContactOption
        Icon={HiOutlineMail}
        title="Email"
        detail="rachitbharadwaj52@gmail.com"
        link="mailto:rachitbharadwaj52@gmail.com"
      />

      <ContactOption
        Icon={PiPhoneCallBold}
        title="Phone"
        detail="+91 7905144331"
        link="tel:+917905144331"
      />

      <ContactOption
        Icon={AiOutlineWhatsApp}
        title="WhatsApp"
        detail="+91 9918191369"
        link="https://wa.me/+919918191369"
      />
    </section>
  );
};

export default Social;
