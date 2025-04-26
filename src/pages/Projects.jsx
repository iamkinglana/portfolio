const projects = [
    {
      title: "SasaFoods",
      description: "A food pre-order system to streamline restaurant pickups.",
      image: "/images/sasafoods.png",
      github: "https://github.com/enockngetich/sasafoods",
      demo: "https://sasafoods.vercel.app",
    },
    {
      title: "Recruit Connect",
      description: "A platform to connect recruiters and jobseekers directly.",
      image: "/images/recruitconnect.png",
      github: "https://github.com/enockngetich/recruit-connect",
      demo: "https://recruitconnect.co",
    },
    {
      title: "TASTEDINE",
      description: "A recipe and pastry store platform built with WordPress & WooCommerce.",
      image: "/images/tastedine.png",
      github: "#",
      demo: "https://tastedine.co.ke",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="min-h-screen px-4 pt-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">My Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  