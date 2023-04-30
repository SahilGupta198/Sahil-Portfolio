import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import pro1 from '../assets/project-1.png'
import pro2 from '../assets/project-2.png'
import pro3 from '../assets/project-3.png'
import pro4 from '../assets/project-4.png'
import pro5 from '../assets/project-5.png'
import pro6 from '../assets/project-6.png'
import pro7 from '../assets/project-7.png'
import pro8 from '../assets/project-8.png'

const project = [
  {
    id: 1,
    img: pro1,
    title: 'TEEHUSTLER',
    tech: 'Wordpress | Canva'
  },
  {
    id: 2,
    img: pro2,
    title: 'VDS IT SOLUTIONS',
    tech: 'Wordpress'
  },
  {
    id: 3,
    img: pro3,
    title: 'TEXT UTILS',
    tech: 'React | React-Router-DOM'
  },
  {
    id: 4,
    img: pro4,
    title: 'HOOBANK',
    tech: 'React | Tailwind | Vite'
  },
  {
    id: 5,
    img: pro5,
    title: 'EXPENSE TRACKER',
    tech: 'React'
  },
  {
    id: 6,
    img: pro6,
    title: 'CRYPTHREE',
    tech: 'React | Chakra UI'
  },
  {
    id: 7,
    img: pro7,
    title: 'NEWSTAG',
    tech: 'React | React-Inifinite-Scroll'
  },
  {
    id: 8,
    img: pro8,
    title: 'GRINDELWALD',
    tech: 'React'
  },
]


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-20 md:pt-48">

      {/* HEADINGS */}
      <motion.div
        className="md:w-1/2 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-3xl md:text-4xl mb-2 md:mb-5 tracking-tight text-light">
          PRO<span className="text-main">JECTS</span>
        </p>
        <LineGradient value="bg-gradient-rainblue w-[8%] mx-auto" />
        <p className="my-6 md:mx-0 font-bold text-base leading-[1.2rem] text-center ">
          Here you will find some of the personal and clients projects that I have created, check out!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {project.map(({ id, img, title, tech }) => (

            // project box
            <div key={id} className="relative group overflow-hidden border-1  border-black rounded-md shadow-lg shadow-black my-8 md:my-0">

              <div className="absolute group-hover:bg-black/80 w-full h-full z-10 transition-all duration-1000 "></div>
              <img className="group-hover:scale-110 transition-all duration-1000" src={img} key={id} alt="test" />

              {/* hover text */}
              <div className="absolute bottom-16 -left-full group-hover:left-8 transition-all duration-1000 z-[12]">
                <span className="text-transparent bg-clip-text bg-gradient-rainblue text-xl font-bold font-playfair">{title}</span>
              </div>
              <div className="absolute bottom-12 -left-full group-hover:left-8 transition-all duration-1000 z-[12]">
                <span className="text-light text-sm font-semibold ">{tech}</span>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
