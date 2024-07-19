import { Project } from "@/props";

const Projects = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      <Project
        title="Devog"
        description="This blogging web-app leverages primarily Next.js, Tailwind CSS, MongoDB and
        more technologies. This robust platform offers full functionality for reading and
        creating blogs, featuring a user-friendly WYSIWYG text editor."
        preview="/images/projects/devog.png"
        githubLink="https://github.com/rachit-bharadwaj/devog"
        liveLink="https://devog.vercel.app/"
        techLogo={[
          "/logos/nextjs.svg",
          "/logos/node.svg",
          "/logos/mongodb.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={["Next JS", "Node JS", "Tailwind CSS"]}
      />

      <Project
        title="Chatox"
        description="Chatox is a feature-rich web application designed for seamless real-time communication. Built with modern technologies like MERN stack, TypeScript, MongoDB, Socket.IO and more, Chatox offers a smooth and responsive UI for users to connect and chat."
        preview="/images/projects/chatox.png"
        githubLink="https://github.com/rachit-bharadwaj/chatox"
        liveLink="https://chatox-vzh5.onrender.com/"
        techLogo={[
          "/logos/reactjs.svg",
          "/logos/node.svg",
          "/logos/express.svg",
          "/logos/mongodb.svg",
          "/logos/socketio.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={[
          "React JS",
          "Node JS",
          "Express JS",
          "MongoDB",
          "Socket.IO",
          "Tailwind CSS",
        ]}
      />

      <Project
        title="Simple Image Uploader"
        description="Simple Image Uploader: A sleek solution for seamless image uploading and management. Powered by Next.js and MongoDB, it guarantees secure, user-friendly functionality. Perfect for efficient image management."
        preview="/images/projects/simple-image-uploader.png"
        githubLink="https://github.com/rachit-bharadwaj/simple-image-uploader"
        liveLink="https://simple-image-uploader-project.vercel.app"
        techLogo={[
          "/logos/nextjs.svg",
          "/logos/node.svg",
          "/logos/mongodb.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={["Next JS", "Node JS", "Tailwind CSS"]}
      />

      <Project
        title="VBSPU Redesigned"
        description="In this project I revamped the frontend of my university's website using Next.js. The redesign enhances user experience and accessibility while maintaining the site's functionality and informative content."
        preview="/images/projects/vbspu2.png"
        githubLink="https://github.com/rachit-bharadwaj/vbspu-ui-redesign"
        liveLink=""
        techLogo={[
          "/logos/nextjs.svg",
          "/logos/node.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={["Next JS", "Node JS", "Tailwind CSS"]}
      />

      <Project
        title="Weather App"
        description="This is a full stack weather app built using HTML, CSS, Express JS and Node JS. It fetches weather data from OpenWeatherMap API and displays it to the user. It also allows users to search for weather of any city."
        preview="/images/projects/weather.png"
        githubLink="https://github.com/rachit-bharadwaj/weather-app"
        liveLink="https://weather-app-express-project.vercel.app/"
        techLogo={[
          "/logos/node.svg",
          "/logos/express.svg",
          "/logos/html.svg",
          "/logos/js.svg",
          "/logos/tailwind.svg",
        ]}
        techStack={["Node JS", "Express JS", "HTML", "JS", "Tailwind CSS"]}
      />

      <Project
        title="Todo App"
        description="This is a todo app built using core technologies like HTML, CSS and JS. It allows users to add, delete and edit tasks. This is full fledged CRUD application."
        preview="/images/projects/todo.png"
        githubLink="https://github.com/rachit-bharadwaj/to-do-app-html-js"
        liveLink="https://to-do-app-html-js.vercel.app/"
        techLogo={["/logos/html.svg", "/logos/js.svg", "/logos/tailwind.svg"]}
        techStack={["HTML", "JS", "Tailwind CSS"]}
      />
    </div>
  );
};

export default Projects;
