const projects = [
  {
    title: "Tanike Smith Portfolio",
    date: "2025",
    tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    image: "/src/assets/tanikesmithprofile.png",
    link: "/",
  },
  {
    title: "Simutron",
    date: "2025",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/simutronwebsite.png",
    link: "https://simutron.co.za/",
  },

  {
    title: "Judy's Nails",
    date: "2025",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/judysnailswebsite.png",
    link: "https://judysnails.co.za/",
  },
  {
    title: "Lukat Consulting",
    date: "2025",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/lukat.png",
    link: "https://lukat.co.za/",
  },
  {
    title: "MECAD Manufacturing",
    date: "2024",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/mecad_mfg.png",
    link: "https://mecadmfg.co.za/",
  },
  {
    title: "MECAD Technologies",
    date: "2024",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/mecadtechnologies.png",
    link: "https://mecadtechnologies.co.za/",
  },
  {
    title: "NSKF South Africa",
    date: "2023",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/nskf.png",
    link: "https://nskf.co.za/",
  },
  {
    title: "Capture Nature",
    date: "2023",
    tech: ["WordPress", "Gutenberg"],
    image: "/src/assets/capturenature.png",
    link: "https://capturenature.co.za/",
  },
  {
    title: "Best Karate",
    date: "2022",
    tech: ["WordPress", "Elementor"],
    image: "/src/assets/bestwebsite.png",
    link: "https://bestkaratepretoria.co.za/",
  },
];

const ProjectModals = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-stone-100">
          projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden group bg-gray-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-54 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300 text-lg">{project.date}</p>
              </div>
              <div className="space-x-2 space-y-2 mb-4">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 p-[2px] inline-block"
                  >
                    <span className="inline-block bg-white dark:bg-gray-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-90 m-auto mb-4 px-4 py-2 text-white rounded border border-white hover:bg-white hover:text-gray-900 group-hover:scale-105 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectModals;
