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
              Code. Communicate. Create
            </h3>

            <p className="text-muted-foreground">
              I am a highly motivated developer driven by a passion for bridging the gap between complex algorithms and human-centric solutions.
            </p>

            <p className="text-muted-foreground">
              With a dual focus on Machine Learning and Software Development, I view code as a tool for storytelling—transforming raw data into actionable insights. I pride myself on being an agile learner, capable of mastering new tech stacks rapidly to meet project demands.
            </p>

            <p className="text-muted-foreground">
              My technical foundation was solidified during my time as a Software Engineering Intern at the London Stock Exchange Group (LSEG). There, I gained invaluable exposure to enterprise-grade software development, working within high-availability environments where precision and scalability are paramount.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1RHiUJk_tonbIsPQSZT5cx0m9OweBOZa2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                VIEW RESUME
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
                    Experience in working with scrum teams, Problem solving skills, Reliability.
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
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience, RAG, Computer Vision.
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
                  <h4 className="font-semibold text-lg">Embedded Systems</h4>
                  <p className="text-muted-foreground">
                    Electronics design, IoT development, and Raspberry Pi-based projects.
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
