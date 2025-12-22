import { Trophy, Award, Medal, Star } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Dean's List",
      description: "Achieved Dean's List honors in Semesters 1, 2, 4, and 6 for academic excellence",
      year: "2022-2025",
    },
    {
      icon: <Award className="w-12 h-12 text-pink-500" />,
      title: "High CGPA",
      description: "Maintained 3.82/4.0 CGPA throughout undergraduate studies",
      year: "2024",
    },
    {
      icon: <Medal className="w-12 h-12 text-purple-500" />,
      title: "LSEG Internship",
      description: "Software Engineering Intern at London Stock Exchange Group",
      year: "2024-2025",
    },
    {
      icon: <Star className="w-12 h-12 text-blue-500" />,
      title: "Teaching Assistant",
      description: "Teaching Assistant at University of Moratuwa ENTC Department",
      year: "2025",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-4 md:px-8 lg:px-16 relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and awards throughout my academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-background rounded-full">
                  {achievement.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                  <span className="text-xs text-pink-500 font-medium">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
