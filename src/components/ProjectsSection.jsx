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
    title: "VR based Speech Practicing Platform",
    description: "Developed a VR application using Unity and Meta Quest platforms to help users overcome stage fear and improve public-speaking confidence. Features include multiple virtual venues, customizable audiences, real-time anxiety tracking, and AI-powered feedback for personalized performance improvement.",
    image: getImagePath("projects/project3.png"),
    tags: ["Unity", "VR", "C#", "Meta Quest"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Analog Wall Following Robot",
    description: "Designed and built an analog wall following robot that navigates the midpoint between two walls using IR sensors and a PID control circuit, without microcontrollers. Key tasks included designing instrumentation amplifiers, PID circuits, PWM generators and motor drivers.",
    image: getImagePath("projects/project1.png"),
    tags: ["Electronics", "PID Control", "Embedded Systems", "Circuit Design"],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Smart Plug",
    description: "Developed smart extension cord, an IoT integrated smart extension cord powered by ESP8266 and Atmega328. Features include voice control with Google Assistant and Amazon Alexa, Google Home integration, scheduling via Google Calendar, remote control and USB adaptive charging. Addressed safety concerns by creating an automatic power down feature for irons.",
    image: getImagePath("projects/project2.png"),
    tags: ["IoT", "ESP8266", "Arduino", "Google Home", "Alexa"],
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Agni Robot",
    description: "Developed the AGNI Robot powered by Arduino Mega 2560, featuring precise line following, wall avoidance, maze navigation (20 degrees), object interaction with a mechanical arm, sound sensitivity, color detection, maze-traversing capabilities, and obstacle avoidance, including guard robots.",
    image: getImagePath("projects/project3.png"),
    tags: ["Arduino", "Robotics", "Sensors", "Autonomous Navigation"],
    githubUrl: "#",
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
