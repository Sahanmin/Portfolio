import { Calendar, CheckCircle } from "lucide-react";

export const MilestonesSection = () => {
  const milestones = [
    {
      year: "Sep 2025",
      title: "Teaching Assistant",
      description: "Started conducting undergraduate laboratory sessions in analog and digital electronics at University of Moratuwa",
      status: "current",
    },
    {
      year: "Dec 2024",
      title: "Software Engineering Intern",
      description: "Joined London Stock Exchange Group (LSEG) as Software Engineering Intern, working on trading systems",
      status: "completed",
    },
    {
      year: "2024",
      title: "Dean's List Recognition",
      description: "Achieved Dean's List in Semester 6, maintaining 3.82/4.0 CGPA",
      status: "completed",
    },
    {
      year: "Jul 2022",
      title: "Started University",
      description: "Enrolled in Electronics & Telecommunication Engineering at University of Moratuwa",
      status: "completed",
    },
  ];

  return (
    <section
      id="milestones"
      className="py-20 px-4 md:px-8 lg:px-16 relative bg-card/30"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-blue">Milestones</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Key moments in my academic and professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Year indicator */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      milestone.status === "current"
                        ? "bg-pink-600 border-4 border-pink-400"
                        : "bg-purple-600 border-4 border-purple-400"
                    }`}>
                      {milestone.status === "current" ? (
                        <Calendar className="w-8 h-8 text-white" />
                      ) : (
                        <CheckCircle className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-[calc(50%+3rem)]"
                        : "md:pl-[calc(50%+3rem)]"
                    } md:w-full`}
                  >
                    <div className={`bg-card border border-border rounded-lg p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-lg ${
                      milestone.status === "current"
                        ? "hover:shadow-pink-500/20"
                        : "hover:shadow-purple-500/20"
                    }`}>
                      <div className="space-y-2">
                        <span className={`text-sm font-bold ${
                          milestone.status === "current"
                            ? "text-pink-500"
                            : "text-purple-400"
                        }`}>
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
