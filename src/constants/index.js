import {
     mobile,
     backend,
     creator,
     web,
     javascript,
     typescript,
     html,
     css,
     reactjs,
     redux,
     tailwind,
     nodejs,
     mongodb,
     git,
     figma,
     docker,
     meta,
     starbucks,
     tesla,
     shopify,
     jobit,
     tripguide,
     threejs,
   } from "../assets";

   import project1 from '../assets/sma.png'
   import project2 from '../assets/smr.png'
   import project3 from '../assets/kafi.jpg'
   import project4 from '../assets/ecommerce.png'
   import project5 from '../assets/country_info.png'
   import project6 from '../assets/maaloum_blog.png'
   import microverse from '../assets/microverse.jpg'
   import content from '../assets/content.png'
   import ruby from '../assets/ruby.png'
   import rails from '../assets/ruby-on-rails.png'
   import ibrahim from '../assets/ibrahim.jpg'
   import Jerome from '../assets/Jerome.jpg'
   import Kennedy from '../assets/Kennedy.jpg'

   
   export const navLinks = [
     {
       id: "about",
       title: "About",
     },
     {
       id: "work",
       title: "Work",
     },
     {
       id: "contact",
       title: "Contact",
     },
   ];
   
   const services = [
     {
       title: "FrontEnd Developer",
       icon: web,
     },
     {
       title: "Backend Developer",
       icon: backend,
     },
     {
      title: "UI/UX Designer",
      icon: mobile,
    },
     {
       title: "AI Researcher",
       icon: creator,
     },
   ];
   
   const technologies = [
     {
       name: "HTML 5",
       icon: html,
     },
     {
       name: "CSS 3",
       icon: css,
     },
     {
       name: "JavaScript",
       icon: javascript,
     },
     {
       name: "React JS",
       icon: reactjs,
     },
     {
       name: "Redux Toolkit",
       icon: redux,
     },
     {
       name: "Tailwind CSS",
       icon: tailwind,
     },
     {
       name: "MongoDB",
       icon: mongodb,
     },
     {
       name: "Three JS",
       icon: threejs,
     },
     {
       name: "git",
       icon: git,
     },
     {
       name: "figma",
       icon: figma,
     },
     {
       name: "ruby",
       icon: ruby,
     },
     {
       name: "ruby on rails ",
       icon: rails,
     },
   ];
   
   const experiences = [
     {
       title: "Software dev",
       company_name: "Pap Connecting, Nouakchout, Mauritania",
       icon: content,
       iconBg: "#383E56",
       date: "February 2019 - June 2022",
       points: [
         "Boosted team productivity and efficiency by 30% through effective team leadership and project management.",
         " Developed high-quality software solutions, meeting project requirements and adhering to coding best practices."
       ],
     },
     {
       title: "Student Mentor",
       company_name: "Microverse",
       icon: microverse,
       iconBg: "#383E56",
       date: "December 2022 - Present",
       points: [
         " Assisted two junior developers weekly to ensure their mastery of web development, agile methodologies, and professional work behavior",
         "Assisted junior developers with debugging, educating them in coding best practices and providing them with technical support",
         "Built group project with junior developers to help them improve their skills",
         "Giving time to listen to their stories and experiences to give emotional support",
       ],
     },
     {
       title: "Intern Web dev",
       company_name: "General Treasury of the Kingdom, Rabat, Morocco",
       icon: tesla,
       iconBg: "#E6DEDD",
       date: "Jan 2017 -  Aug 2017",
       points: [
        "Design and Develop a responsive Security Operations Efficiency dashboard",
        "Designed and implemented a user-friendly interface for the dashboard, allowing security teams to easily monitor and manage security operations.",
        "Collaborated with the security operations team to gather requirements and understand their specific needs for the dashboard",

       ],
     },
     {
       title: "Full stack Developer",
       company_name: "Microverse",
       icon: microverse,
       iconBg: "#E6DEDD",
       date: "Sep 2023 - Present",
       points: [
         "recently graduated from Microverse, an online software development program that accepts less than 1% of applicants",
         "Spent 1300+ hours mastering algorithms, data structures, and full-stack web development. Developed skills in remote pair programming using industry-standard git-flow and daily standups to collaborate with international remote developers",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
       ],
     },
   ];
   
   const testimonials = [
     {
       testimonial:
         "Ely is a proactive team player who is always eager to learn and improve, and he would be a valuable asset to any development team...",
       name: "Ibrahim Diaby Mohammed",
       designation: "FullStack Developer",
       company: "Microverse",
       image: ibrahim,
     },
     {
       testimonial:
         "Ely Cheikh consistently exhibited unwavering dedication and a penchant for creativity throughout our association, infusing our projects with fresh and unconventional perspectives...",
       name: "Kennedy Owusu",
       designation: "Fullstack Developer",
       company: "Microverse",
       image: Kennedy,
     },
     {
       testimonial:
         "It was an absolute pleasure working with Ely as he is super friendly and helpful whenever he can. He has great communication and soft skills and his code is always well structured...",
       name: "Jerome Osman",
       designation: "Fullstack developer",
       company: "Microverse",
       image: Jerome,
     },
   ];
   
   const projects = [
     {
       name: "SmartDev",
       description:
         "It is a website for a company offering IT solutions and prestation services. The web site is showcase of what the company offers for its clients.",
       tags: [
         {
           name: "React",
           color: "blue-text-gradient",
         },
         {
           name: "ReduxToolKit",
           color: "green-text-gradient",
         },
         {
           name: "Bootstrap",
           color: "pink-text-gradient",
         },
       ],
       image: project1,
       source_code_link: "https://smartdev.ai/",
     },
     {
       name: "Smart MS SA",
       description:
         "This is a website for a company offering IT solutions and prestation services. The web site is ashowcase of what the  company offers for its clients.",
       tags: [
         {
           name: "React",
           color: "blue-text-gradient",
         },
         {
           name: "MUI",
           color: "green-text-gradient",
         },
         {
           name: "Tailwind",
           color: "pink-text-gradient",
         },
       ],
       image: project2,
       source_code_link: "https://www.smartmssa.com/",
     },
     {
       name: "KEFI Hotel Booking",
       description:
         "Captivating capstone project developed with React.js and Ruby on rails - This seamless app features a dynamic splash page, intuitive login/registration, comprehensive  dashboard, and user-friendly hotel management.",
       tags: [
         {
           name: "Ruby/Rails",
           color: "blue-text-gradient",
         },
         {
           name: "React",
           color: "green-text-gradient",
         },
         {
           name: "Postgres",
           color: "pink-text-gradient",
         },
       ],
       image: project3,
       source_code_link: "https://kefi-hotel-booking.netlify.app/",
     },
     {
       name: "E-commerce",
       description:
         "The application is built using the React library, which provides a fast and responsive user interface. The Bootstrap framework is used to create a modern and visually appealing design, while Skeleton provides a lightweight and responsive CSS boilerplate.",
       tags: [
         {
           name: "React",
           color: "blue-text-gradient",
         },
         {
           name: "Redux",
           color: "green-text-gradient",
         },
         {
           name: "Api",
           color: "pink-text-gradient",
         },
       ],
       image: project4,
       source_code_link: "https://641f963ae0999f35015dbab1--glittering-elf-15ef96.netlify.app/",
     },
     {
       name: "Country Info",
       description: "Countries Infos is a React and Redux SPA application that displays interesting information about various countries in the world. It fetches all the information that it displays using API request to a server.",
       tags: [
         {
           name: "React",
           color: "blue-text-gradient",
         },
         {
           name: "ReduxToolKit",
           color: "green-text-gradient",
         },
         {
           name: "Bootstrap",
           color: "pink-text-gradient",
         },
       ],
       image: project5,
       source_code_link: "https://6350036769ae9f160842f31c--musical-kitsune-a1d0c0.netlify.app/",
     },
     {
       name: "Maaloum Blog",
       description:
       "Maaloum Blog is a React SPA application that allows users to view and interact with blog posts and to add new posts. It fetches all the information that it displays using a local API creates with a JSON server.",       tags: [
         {
           name: "React",
           color: "blue-text-gradient",
         },
         {
           name: "JSON Server",
           color: "green-text-gradient",
         },
         {
           name: "API;",
           color: "pink-text-gradient",
         },
       ],
       image: project6,
       source_code_link: "https://main--super-paletas-b4ba8a.netlify.app/",
     },
   ];
   
   export { services, technologies, experiences, testimonials, projects };