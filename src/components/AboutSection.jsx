import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineering Intern & ENTC Undergraduate
            </h3>

            <p className="text-muted-foreground">
              Currently pursuing my undergraduate degree in Electronics and Telecommunication Engineering 
              at the University of Moratuwa (CGPA: 3.82/4.0). I'm passionate about software development, 
              system design, and cutting-edge technologies.
            </p>

            <p className="text-muted-foreground">
              At London Stock Exchange Group (LSEG), I work on data migration automation, chaos engineering, 
              system modernization, and Kubernetes deployment. I've gained hands-on experience in Python, 
              Rust, C++, and various cloud technologies while contributing to high-performance trading systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="mailto:sahanabey1234@gmail.com"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    Data migration, chaos engineering, and system modernization with Python, Rust, and C++.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Embedded Systems</h4>
                  <p className="text-muted-foreground">
                    Electronics design, IoT development, and Raspberry Pi-based projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Kubernetes deployment, containerization, and scalable system architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
