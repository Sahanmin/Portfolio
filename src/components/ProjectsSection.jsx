import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

const projects = [
  {
    id: 1,
    title: "RPPG based neonatal Health Monitoring System",
    description: "Developing a contactless neonatal monitoring system using rPPG signals to estimate heart rate, SpO2, blood pressure, and defect/jaundice detection. Designing a mobile-based solution with privacy-preserving techniques for non-invasive, practical, and parent-friendly neonatal care.",
    image: getImagePath("baby.png"),
    tags: ["Python", "Computer Vision", "Healthcare", "Raspberry Pi"],
    status: "Ongoing",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "FAISS-Vectorized Research Document QA Engine",
    description: "Built an end-to-end AI application for academic paper analysis featuring automated summarization and RAG-based QA. Integrated Groq's Llama 3.3 model with LangChain orchestration, FAISS vector search, and HuggingFace embeddings to enable semantic understanding of research documents. Implemented PDF processing pipeline and responsive web interface.",
    image: getImagePath("projects/research-portal.png"),
    tags: ["Python", "Flask", "LangChain", "Groq LLM", "FAISS", "HuggingFace", "PyMuPDF"],
    githubUrl: "https://github.com/Sahanmin/ResearchPortal-RAG-Flask",
  },
  {
    id: 3,
    title: "AI-Powered Transformer Maintenance System",
    description: "Developed an AI-powered web platform for predictive transformer maintenance, featuring automated thermal anomaly detection via baseline image comparison. Implemented a 'human-in-the-loop' workflow allowing engineers to refine AI detections for model retraining, and automated the generation of comprehensive maintenance records to streamline inspection documentation.",
    image: getImagePath("projects/transformer-thermal.png"),
    tags: ["React.js", "Python", "Spring Boot", "TensorFlow", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Web-Wizards-ENTC/Transformer",
  },
  {
    id: 4,
    title: "WealthWave: Modern Full-Stack Banking Platform",
    description: "Built a production-ready fintech platform for real-time banking and secure fund transfers using Next.js 14 and Appwrite. Integrated Plaid and Dwolla APIs to enable multi-bank account aggregation and seamless ACH payment processing. Implemented Server Actions and Zod validation to ensure enterprise-grade security and performance, featuring a responsive financial dashboard built with TailwindCSS and Chart.js.",
    image: getImagePath("projects/wealthwave-banking.png"),
    tags: ["Next.js 14", "TypeScript", "Appwrite", "Plaid", "Dwolla", "TailwindCSS", "Chart.js"],
    githubUrl: "https://github.com/Sahanmin/WealthWare-Banking-Application",
  },
  {
    id: 5,
    title: "VR Based Speech Practicing Platform",
    description: "Developed a VR application using Unity and Meta Quest platforms to help users overcome stage fear and improve public-speaking confidence. Features include multiple virtual venues, customizable audiences, real-time anxiety tracking, and AI-powered feedback for personalized performance improvement.",
    image: getImagePath("projects/vr-speech-platform.png"),
    tags: ["Unity", "React", "Python", "PostgreSQL", "Java"],
    githubUrl: "https://github.com/Sahanmin/VR-Public-Speaking-Trainer",
  },
  {
    id: 6,
    title: "Agni Robot",
    description: "Developed the AGNI Robot powered by Arduino Mega 2560, featuring precise line following, wall avoidance, maze navigation (20 degrees), object interaction with a mechanical arm, sound sensitivity, color detection, maze-traversing capabilities, and obstacle avoidance, including guard robots.",
    image: getImagePath("projects/agni-robot.jpg"),
    tags: ["Arduino", "Robotics", "Sensors", "Autonomous Navigation"],
    githubUrl: "https://github.com/Sahanmin/Agni",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Robotics, embedded systems, and AI projects showcasing innovation in healthcare, automation, and human-computer interaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.status && (
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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
            href="https://github.com/Sahanmin"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
