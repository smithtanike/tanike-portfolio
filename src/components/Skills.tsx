import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: "frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 95 },
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "backend & tools",
      skills: [
        { name: "Git", level: 85 },

        { name: "SQL", level: 70 },
        { name: "PHP", level: 55 },
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      category: "currently learning",
      skills: [
        { name: "Tailwind CSS", level: 50 },
        { name: "React", level: 50 },
        { name: "TypeScript", level: 55 },
        { name: "REST APIs", level: 80 },
        { name: "Node.js", level: 75 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "other skills",
      skills: [
        { name: "WordPress", level: 98 },
        { name: "WooCommerce", level: 98 },
        { name: "Elementor", level: 95 },
      ],
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-100">
            skills
          </h2>
          <p className="text-xl text-stone-100">
            my technical expertise and learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`p-6 border-border/50 transition-all duration-500 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${categoryIndex * 0.3}s`,
              }}
            >
              {/* Floating Heading */}
              <h3
                className={`text-3xl font-semibold mb-6 text-primary animate-float ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${categoryIndex * 0.2}s`,
                  animationDuration: "4s",
                }}
              >
                {category.category}
              </h3>

              {/* Skill List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="space-y-2 animate-slide-in-left"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      animationDelay: `${
                        categoryIndex * 0.3 + skillIndex * 0.1
                      }s`,
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="custom"
                        className=" px-3 py-1 bg-secondary/60 hover:bg-secondary border border-primary/40 hover:scale-110 transition-transform duration-300 cursor-default"
                      >
                        {skill.name}
                      </Badge>
                      <span className="text-m text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 0.3 + skillIndex * 0.1 + 0.3
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
