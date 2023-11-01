import Image from "next/image";

const MainSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 my-10 gap-10">
      <div className="flex flex-col gap-3">
        <p>Hello, I&apos;m</p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Rachit Bharadwaj
        </h1>

        <p>Fullstack Developer | B.Tech Undergrad</p>
      </div>

      <Image
        src="/images/me.png"
        alt="Rachit Bharadwaj"
        width={500}
        height={500}
        className="rounded-full h-52 w-fit ring-4 ring-secondary "
      />
    </section>
  );
};

export default MainSection;
