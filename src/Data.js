import todo from "./assets/todo.png";
import exploreCountry from "./assets/country.png";
import thrifit from "./assets/thrifit.png";
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
          text: "Building solutions to enable better productivity and experience from the internal admin team",
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
      technologies: "JavaScript, Reactjs, Redux Toolkit",
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
      description:
        "Frontend Mentor - REST Countries API",
      github: "https://github.com/clefayomide/country_rest_api",
    },
    {
      projectName: "Dynamic Todo App",
      category: "personal",
      image: todo,
      technologies: "JavaScript, Reactjs, Tailwind",
      liveLink: "https://todo-dnd.netlify.app/",
      description: "Frontend mentor - Todo app",
      github: "https://github.com/clefayomide/understanding-useReducer-hook",
    },
  ],

  logo: [
    {
      name: "html",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "css",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "javascript",
      link: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    },
    {
      name: "react",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png",
    },
    {
      name: "tailwind",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "material UI",
      link: "data:image/png;base64,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",
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
