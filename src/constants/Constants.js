import angular from "../assets/tech-logos/angular.png";
import aws from "../assets/tech-logos/aws.png";
import django from "../assets/tech-logos/django.png";
import node from "../assets/tech-logos/node.png";
import react from "../assets/tech-logos/react.png";
import springBoot from "../assets/tech-logos/spring-boot.png";

export class Constants {
  static navs = [
    {
      icon: "fa fa-home",
      title: "Home",
      id: "home-link",
      link: "/",
    },
    {
      icon: "fa fa-user",
      title: "About",
      id: "about-link",
      link: "/about",
    },
    {
      icon: "fa fa-code",
      title: "Projects",
      id: "work-link",
      link: "/projects",
    },
    {
      icon: "fa fa-envelope",
      title: "Contact",
      id: "contact-link",
      link: "/contact",
    },
  ];

  static technologies = [
    {
      title: "Spring Boot",
      icon: springBoot,
      proficiency: 90,
      fillerColor: "rgb(255, 37, 37)",
    },
    {
      title: "NodeJS",
      icon: node,
      proficiency: 70,
      fillerColor: "rgb(0, 230, 0)",
    },
    {
      title: "Django",
      icon: django,
      proficiency: 60,
      fillerColor: "rgb(45, 212, 196)",
    },
    {
      title: "Angular",
      icon: angular,
      proficiency: 90,
      fillerColor: "rgb(255, 103, 47)",
    },
    {
      title: "React",
      icon: react,
      proficiency: 80,
      fillerColor: "rgb(156, 54, 252)",
    },
    {
      title: "AWS",
      icon: aws,
      proficiency: 50,
      fillerColor: "rgba(245, 245, 245, 0.952)",
    },
  ];

  static projects = [
    {
      pic: "pathfinder.png",
      title: "Pathfinder",
      desc: "A visualization of maze generation and pathfinding algorithms. A maze is first generated in real time. Then the maze will be traversed, marking each visited cell. Finally, the optimal path to the escape route will be highlighted.",
      stack: [
        {
          name: "React",
        },
        {
          name: "JavaScript",
        },
      ],
      code: "https://github.com/KevinSaephanh/Pathfinder",
      site: "https://kevinsaephanh.github.io/Pathfinder/",
    },
    {
      pic: "sortVisualizer.png",
      title: "Sort Visualizer",
      desc: "This app also produces algorithm visualizations. A graph is displayed containing a random array of bars of varying length. After starting, bars begin moving left and right to imitate how the sorting algorithm works. Once sorting is completed, all bars will be highlighted.",
      stack: [
        {
          name: "React",
        },
        {
          name: "TypeScript",
        },
      ],
      code: "https://github.com/KevinSaephanh/Sort_Visualizer",
      site: "https://kevinsaephanh.github.io/Sort_Visualizer/",
    },
    {
      pic: "quizMe.png",
      title: "QuizMe",
      desc: "A quizlet-esque app only in the sense that it has a similar quizzing style (flashcard system). Features include user signup/login, quiz creation, and quiz view/attempts.",
      stack: [
        {
          name: "Django",
        },
        {
          name: "React",
        },
        {
          name: "PostgreSQL",
        },
        {
          name: "JavaScript",
        },
        {
          name: "Python",
        },
      ],
      code: "https://github.com/KevinSaephanh/Quiz_Me_Backend",
      site: "https://hiquizme.herokuapp.com/",
    },
  ];

  static socials = [
    {
      icon: "fa fa-linkedin-square",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kevin-saephanh",
    },
    {
      icon: "fa fa-github-square",
      title: "Github",
      link: "https://github.com/KevinSaephanh",
    },
    {
      icon: "fab fa-discord",
      title: "Discord",
      link: "https://www.discord.com/users/360657658270973956",
    },
  ];
}
