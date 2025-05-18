import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Alejandro",
  lastName: "Rodriguez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/personal_selfie_avatar.jpg",
  email: "arodriguez11400@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/arod1104",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/arodriguez11400",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Aspiring Full-Stack Developer</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Alejandro, a former Software Engineer Intern at Arity,{" "}
      {/* <Logo
        icon={false}
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
      where I focused on improving upon ArityIQ services
      <br />
      After hours, I study system design and build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a computer science graduate from the University of Illinois at
        Chicago, where I studied low-level programming in C/C++ as well as
        high-level programming in JavaScript and Python. I have a strong
        interest in building scalable and efficient software solutions. I have
        experience working in languages such as Java, Go, TypeScript, C/C++, and
        Python.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Arity",
        timeframe: "May 2023 - August 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Refactored Java and Go PAIs to reduct technical debt and improve
            integration test coverage, boosting maintainability.
          </>,
          <>
            Automated Jenkins workflows using Swagger Ui and Groovy, reducing
            ArityIQ API deployment time.
          </>,
          <>
            Developed unit tests for API endpoints using JUnit and Mickito,
            ensuring accurate response validation.
          </>,
          <>
            Wrote SQL queries and Spring Boot logic for PostgreSQL database,
            streamlining backend data operations.
          </>,
          <>
            Diagnosed and resolved REST API issues via Postman, imporving
            service reliability.
          </>,
          <>
            Integrated AWS S# and Redhsift for lrge-scale data strage and
            analytics, enhancing dtaa accessbility and insight generation.
          </>,
          <>
            Contirbuted to Agile Scrum ceremonies, improving team coordination
            and delivery cadence using Jira.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/arity_predictive_mobility_image.jpg",
            alt: "An image of the Arity logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University of Illinois at Chicago",
        timeframe: "August 2023 - December 2023",
        role: "Undergraduate Teacher's Assistant",
        achievements: [
          <>
            Graded student assignments and kept records of student grades using
            Microsoft Excel before uploading to UIC blackboard.
          </>,
          <>
            Mentored 80+ students in advanced object-oriented programming,
            improving proficiency in C++, Java, and Ruby.
          </>,
          <>
            Led office hours on debugging, best practices, and problem solving,
            boosting student confidence and skills.
          </>,
          <>
            Streamlined setup of customized programming environments, optimizing
            student learning and workflow.
          </>,
        ],
        images: [
          {
            src: "/images/projects/university-of-illinois-at-chicago-uic-logo-vector.png",
            alt: "An image of the Arity logo",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Illinois at Chicago",
        description: <>B.S. in Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title:
          "Java, Go, C, C++, Python, JavaScript, TypeScript, Groovy, HTML, CSS, SQL (PostgreSQL), NoSQL (Firebase)",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      // {
      //   title: "Next.js",
      //   description: (
      //     <>Building next gen apps with Next.js + Once UI + Supabase.</>
      //   ),
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
