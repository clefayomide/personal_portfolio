import todo from "./assets/todo.png";
import exploreCountry from "./assets/country.png";
import thrifit from "./assets/thrifit.png";
import rtl from "./assets/rtl.png";
import redux from "./assets/redux.svg";
const Data = {
  nav: [
    {
      id: 1,
      title: "Home",
      route: "/",
    },

    {
      id: 2,
      title: "About Me",
      route: "/about",
    },

    {
      id: 3,
      title: "Experience",
      route: "/experience",
    },

    {
      id: 4,
      title: "Portfolio",
      route: "/portfolio",
    },

    {
      id: 5,
      title: "Contact Me",
      route: "/contact",
    },
  ],

  workExp: [
    {
      id: 1,
      company: "CallPhone Limited",
      title: "Frontend Engineer",
      date: "September, 2022 - Present",
      description: [
        {
          id: 1,
          text: "Leading the Airgate Api Integration Team on integrating the Airgate merchant services to the Airgate merchant web app",
        },
        {
          id: 2,
          text: "Building solutions to enable task automation, better productivity and experience from the internal support team",
        },
      ],
    },

    {
      id: 2,
      company: "Thrifit Africa",
      title: "Frontend Engineer (Contract)",
      date: "June, 2022 - Present",
      description: [
        {
          id: 1,
          text: "Contributing to the frontend of Thrifit, a marketplace that connect buyers and sellers of Thrift products. Currently working on the buyer's and seller's hub",
        },
      ],
    },
    {
      id: 3,
      company: "GenioPay",
      title: "Frontend Engineer (Contract)",
      date: "Febuary, 2022 - March, 2022",
      description: [
        {
          id: 1,
          text: "I was contracted to work on building MVP's which included UIs and client side authentication system for the company's core product",
        },
      ],
    },

    {
      id: 4,
      company: "Koogah Logistics",
      title: "Frontend Engineer (Contract)",
      date: "November, 2021 - January, 2022",
      description: [
        {
          id: 1,
          text: "Contributed to the automation of manually performed tasks by building the Koogah Admin Dashboard which included UIs and API Integrations",
        },
      ],
    },
  ],

  porfolio: [
    {
      projectName: "Thrifit",
      category: "on job",
      image: thrifit,
      technologies: "JavaScript, Reactjs, Redux Toolkit, Tailwind",
      liveLink: "https://dev-thrifit.netlify.app/",
      description: "eCommerce Web App for Thrifit Africa",
      github: "",
    },
    {
      projectName: "Country Rest Api",
      category: "personal",
      image: exploreCountry,
      technologies: "JavaScript, Reactjs, Tailwind",
      liveLink: "https://explore-country.netlify.app/",
      description: "Frontend Mentor - REST Countries API",
      github: "https://github.com/clefayomide/country_rest_api",
    },
    {
      projectName: "Dynamic Todo App",
      category: "personal",
      image: todo,
      technologies: "JavaScript, Reactjs, Tailwind, React Testing Library",
      liveLink: "https://todo-dnd.netlify.app/",
      description: "Frontend mentor - Todo app",
      github: "https://github.com/clefayomide/understanding-useReducer-hook",
    },
  ],

  languages: [
    {
      name: "HTML",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "Javascript",
      link: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    },
    {
      name: "React",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png",
    },
    {
      name: "React Testing Library",
      link: rtl,
    },
    {
      name: "Redux Toolkit",
      link: redux,
    },
    {
      name: "Tailwind CSS",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png",
    },
  ],

  tools: [
    {
      name: "vscode",
      link: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png",
    },
    {
      name: "firebase",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Firebase_Logo.png/800px-Firebase_Logo.png",
    },
    {
      name: "git",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Git_format.png/640px-Git_format.png",
    },
    {
      name: "ngrok",
      link: "https://ngrok.com/static/img/ngrok-black.svg",
    },
    {
      name: "graphQL",
      link: "https://www.pngfind.com/pngs/m/62-627254_i-wanted-to-give-graphql-a-shot-for.png",
    },
  ],
};
export default Data;
