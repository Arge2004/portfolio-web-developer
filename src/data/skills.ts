type Skill = {
  name: string;
  icon: string;
  url: string;
  variant?: "dark" | "light";
};

export const skillsData: Record<string, Skill[]> = {
  proficiency: [
    {
      name: "HTML",
      icon: "html5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: "css3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: "js",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss",
      url: "https://tailwindcss.com/",
    },
    {
      name: "React.js",
      icon: "react",
      url: "https://reactjs.org/",
    },
    {
      name: "Java",
      icon: "java",
      url: "https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html",
    },
    {
      name: "Spring Boot",
      icon: "spring",
      url: "https://spring.io/projects/spring-boot",
    },
  ],
  learning: [
    {
      name: "Docker",
      icon: "docker",
      url: "https://www.docker.com/",
    },
    {
      name: "Astro",
      icon: "astro",
      url: "https://astro.build/",
      variant: "dark",
    },
    {
      name: "TypeScript",
      icon: "typescript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Next.js",
      icon: "nextjs2",
      url: "https://nextjs.org/",
      variant: "dark",
    },
    {
      name: "Node.js",
      icon: "nodejs",
      url: "https://nodejs.org/",
    },
    {
      name: "GraphQL",
      icon: "graphql",
      url: "https://graphql.org/",
    },
    {
      name: "Express.js",
      icon: "expressjs",
      url: "https://expressjs.com/",
      variant: "dark",
    },
  ],
}
