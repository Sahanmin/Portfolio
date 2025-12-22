import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Data Migration Automation",
    description: "Automated changelog creation for data migration tasks between Oracle and PostgreSQL databases using Python tools.",
    image: "/projects/project1.png",
    tags: ["Python", "PostgreSQL", "Oracle", "Automation"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "System Modernization",
    description: "Converted a legacy trading system from C++ to Rust, leading to improved performance and resource efficiency.",
    image: "/projects/project2.png",
    tags: ["Rust", "C++", "System Design", "Trading Systems"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Kubernetes Deployment",
    description: "Contributed to deploying a high-performance trading system in Kubernetes, enhancing scalability and maintainability.",
    image: "/projects/project3.png",
    tags: ["Kubernetes", "Docker", "DevOps", "Cloud"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Chaos Engineering",
    description: "Performed resilience testing on Kubernetes-deployed trading system using LitmusChaos to identify vulnerabilities.",
    image: "/projects/project1.png",
    tags: ["LitmusChaos", "Kubernetes", "Testing", "Reliability"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Work <span className="text-primary"> Experience </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Key projects and contributions from my internship at London Stock Exchange Group (LSEG) 
          and academic work at University of Moratuwa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
