import { Database, Wrench, Rocket, Server, GraduationCap, Users } from "lucide-react";
import lsegLogo from "../assets/lseg_logo-removebg-preview.png";
import uomLogo from "../assets/uom_logo-removebg-preview.png";
import { getImagePath } from "../utils/imagePath";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "London Stock Exchange Group",
      abbr: "LSEG",
      role: "Software Engineering Intern",
      location: "Sri Lanka",
      period: "Dec 2024 - May 2025",
      description: "Contributing to high-performance trading systems at one of the world's leading financial market infrastructures.",
      logo: lsegLogo,
      images: [getImagePath("lseg2.png"), getImagePath("lseg1.png"), getImagePath("lseg3.png")],
      highlights: [
        {
          icon: Database,
          title: "Data Migration & Automation",
          description: "Built automated changelog creation tools for seamless data migration between Oracle and PostgreSQL databases, streamlining enterprise data workflows."
        },
        {
          icon: Wrench,
          title: "Chaos Engineering",
          description: "Strengthened system resilience by conducting comprehensive fault tolerance testing on Kubernetes-deployed trading systems using LitmusChaos."
        },
        {
          icon: Rocket,
          title: "System Modernization",
          description: "Transformed legacy C++ trading systems to Rust, achieving significant performance gains and enhanced resource efficiency."
        },
        {
          icon: Server,
          title: "Kubernetes Deployment",
          description: "Architected and deployed scalable, high-performance trading infrastructure on Kubernetes, ensuring enterprise-grade reliability."
        }
      ],
      tech: ["Python", "Rust", "C++", "Kubernetes", "PostgreSQL", "Oracle"]
    },
    {
      company: "University of Moratuwa",
      abbr: "ENTC",
      role: "Teaching Assistant",
      location: "Sri Lanka",
      period: "Sep 2025 - Dec 2025",
      description: "Mentoring the next generation of engineers in electronics and telecommunication engineering.",
      logo: uomLogo,
      highlights: [
        {
          icon: uomLogo,
          title: "Laboratory Instruction",
          description: "Led hands-on laboratory sessions in analog and digital electronics, helping students bridge theory with practical implementation."
        },
        {
          icon: Users,
          title: "Project Mentorship",
          description: "Guided students through telecommunications fundamentals and Raspberry Pi-based embedded systems projects."
        }
      ],
      tech: ["Electronics", "Telecommunications", "Raspberry Pi", "Embedded Systems"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building robust systems and empowering future engineers
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="gradient-border p-8 md:p-10 card-hover relative overflow-hidden"
            >
              {/* Company Header */}
              <div className="flex flex-col items-center text-center mb-8 relative z-10">
                {exp.logo && (
                  <div className="mb-6">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-24 md:h-32 w-auto object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                    {exp.abbr}
                  </span>
                </div>
                <p className="text-xl text-primary font-semibold mb-2">
                  {exp.role}
                </p>
                <p className="text-muted-foreground max-w-2xl">
                  {exp.description}
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary/10">
                        {typeof highlight.icon === 'string' ? (
                          <img src={highlight.icon} alt="" className="h-5 w-5 object-contain" />
                        ) : (
                          <highlight.icon className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Internship Images Gallery */}
              {exp.images && (
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-primary mb-4 text-center">Internship Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.images.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative overflow-hidden rounded-lg group aspect-video"
                      >
                        <img
                          src={image}
                          alt={`${exp.company} internship ${imgIdx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-primary/5 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
