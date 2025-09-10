const link = "http://localhost:3000#projects"

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modern Movie Platform",
    des: "Explore the most recent movies with their trailers, ratings, and more. Add what you want to your watchlist and enjoy.",
    img: "/pr1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/y0riii/disney",
  },
  {
    id: 2,
    title: "Learning Management System",
    des: "Simplify keeping track of all what you need in your learning process for courses, colleges, and more.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Ahmed99125/LMS",
  },
  {
    id: 3,
    title: "Online Library System",
    des: "A platform that allows the users to browse the latest books for their favourite authors, borrow books, and more.",
    img: "/pr3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/y0riii/online-library",
  },
  {
    id: 4,
    title: "Gomoku game with integrated AI",
    des: "Built the game Gomoku which can be played against another player or against a bot with different difficulties.",
    img: "/pr4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/George-Raafat/AI_Project",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Youssef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youssef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youssef is the ideal partner.",
    name: "Mohamed Mostafa",
    title: "Senior Game Developer",
  },
  {
    quote:
      "Working with Youssef was seamless from start to finish. His ability to translate ideas into functional, user-friendly solutions exceeded my expectations. Beyond the technical expertise, his clear communication and proactive approach made the collaboration smooth and enjoyable. I'd highly recommend Youssef for any development project.",
    name: "George Raafat",
    title: "Senior Backend Developer",
  },
  
  {
    quote:
      "Youssef brought incredible value to our project with his deep knowledge of full-stack development and keen eye for detail. He consistently went above and beyond to ensure deadlines were met without compromising quality. His commitment to excellence and innovative mindset make him an outstanding developer and teammate.",
    name: "Ahmed Tamer",
    title: "Senior Full-Stack Developer",
  },
  // {
  //   quote:
  //     "Collaborating with Youssef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youssef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youssef is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Built multiple projects with modern UI and incredible UX using the latest technologies in the market.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer",
    desc: "Built multiple backends while ensuring high performance, robustness, and ease of usage.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    desc: "Designed and developed mobile apps for both iOS & Android platforms using Flutter and React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Collaborated with Teams",
    desc: "Can collaborate with teams to build any project with complete professionalism and effeciecny.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/y0riii"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/youssef-nasser-a9487030b/"
  },
];