import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import service1 from '../assets/ser1.png'
import service2 from '../assets/ser2.png'
import service3 from '../assets/ser3.png'

const Services = () => {
  return (
    <section id="services" className="pt-32">

      {/* HEADING */}
      <motion.div
        className="md:w-1/2 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-3xl md:text-4xl mb-2 md:mb-5 tracking-tight text-light">SER<span className="text-main">VICES</span></p>
        <LineGradient value="bg-gradient-rainblue w-[8%] mx-auto" />
        <p className="my-6 md:mx-0 font-bold text-base leading-[1.2rem] text-center ">
          These are some services executed by me to help my client's projects stand out.</p>
      </motion.div>

      {/* services */}
      <div className="md:flex md:justify-between gap-10">

        {/* Design */}
        <motion.div
          className=" md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full flex flex-col justify-evenly items-center p-8 rounded-md shadow-xl hover:shadow-md transition duration-500 shadow-black border-[0.1rem] border-light bg-black/40">
            <img className="w-2/5" src={service1} alt="design" />
            <p className="font-playfair font-semibold text-3xl my-6">
              Design
            </p>
            <p className="mt-5 text-center font-semibold text-lg leading-5">
              Creating highly functional and visually stunning designs that will leave you speechless.
            </p>
          </div>
        </motion.div>

        {/* Develop */}
        <motion.div
          className="md:w-1/3 mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full flex flex-col justify-evenly items-center p-8 rounded-md shadow-xl shadow-black hover:shadow-md transition duration-500 border-[0.1rem] border-light bg-black/40">
            <img className="w-2/5" src={service2} alt="design" />
            <p className="font-playfair font-semibold text-3xl my-6">
              Develop
            </p>
            <p className="mt-5 text-center font-semibold text-lg leading-5">
              Creating intuitive yet simple interfaces with focus on the experience of end user.
            </p>
          </div>
        </motion.div>
        {/* maintain */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full flex flex-col justify-evenly items-center p-8 rounded-md shadow-xl shadow-black hover:shadow-md transition duration-500 border-[0.1rem] border-light bg-black/40">
            <img className="w-2/5" src={service3} alt="design" />
            <p className="font-playfair font-semibold text-3xl my-6">
              Maintain
            </p>
            <p className="mt-5 text-center font-semibold text-lg leading-5">
              Creating responsive Websites for flexible performance at every screen size possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
