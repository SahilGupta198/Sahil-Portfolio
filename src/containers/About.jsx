import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import wave from '../assets/wave.svg';

const Skill = ({ value }) => {
  return (
    <div className=" px-0.5 py-0.5 shadow-md shadow-black flex items-center justify-center rounded-md bg-light/90">
      <div className="text-[0.6rem] md:text-xs font-playfair font-semibold uppercase px-3 md:px-5 py-1 md:py-3 flex items-center justify-center bg-dark rounded-md shadow-lg shadow-black hover:shadow-none transition duration-500">
        {value}
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="relative rounded-lg pt-4 pb-12 md:pb-24 bg-gradient-rainblue h-full md:h-[32rem]">

      <img src={wave} alt="wave" className="max-w-screen -top-1 md:-top-6 absolute" />

      {/* HEADER SECTION */}
      <div className="flex justify-center mt-8">
        <motion.div
          className="md:w-2/5 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-3xl md:text-4xl mb-2 md:mb-5 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-light to-white">
            ABOUT <span className="text-dark">ME</span>
          </p>
          <LineGradient value="bg-gradient-rainbow w-[8%]" />
          <p className="my-6 mx-8 md:mx-0 font-bold text-base leading-[1.2rem] text-center text-dark">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
          </p>
        </motion.div>
      </div>

      {/* about / skills */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-16 md:mx-28">
        {/* know me more */}
        <motion.div
          className="w-4/5 md:w-1/2 mt-10 p-4 bg-dark text-light rounded-sm shadow-xl shadow-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-base md:text-xl">Know me more !</p>
          <p className="text-sm md:text-lg leading-6 md:leading-8 tracking-wide mt-4 text-justify">
            As a <b>Frontend Developer</b> I'm quietly confident, naturally curious, and perpetually working on improving <b>skills</b> one design problem at a time. Check out some of my work in the <b>Projects</b> section. <br />

            When i am not coding, i am either playing Badminton, cycling or just having a calisthenic workout session. other times i am listening podcasts of experienced people in my field of <b>interest</b>. Feel free to <b>Connect</b> or Follow me on my Instagram where I post content about my life you might as well find something interested in that. <br />

            I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good <b>opportunity</b> that matches my skills and experience then don't hesitate to <b>contact</b> me.</p>
        </motion.div>

        {/* skills */}
        <motion.div
          className="relative w-4/5 md:w-1/2 md:h-[28.75rem] md:mt-10 p-4 bg-dark text-light shadow-xl shadow-black rounded-sm rounded-br-[10%] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <p className="font-playfair font-semibold text-base md:text-xl ">My skills</p>
          <div className="mt-5 flex flex-wrap gap-3 md:gap-4 ">
            <Skill value='HTML5' />
            <Skill value='CSS3' />
            <Skill value='JavaScript' />
            <Skill value='React Js' />
            <Skill value='Bootstrap' />
            <Skill value='Tailwind' />
            <Skill value='Responsive Design' />
            <Skill value='Github Basics' />
            <Skill value='Node Basics' />
            <Skill value='Mongo Basics' />
            <Skill value='Lightroom Mobile' />
          </div>
          <div className="hidden md:block md:w-[30%] p-2 tracking-wide bg-black text-main absolute bottom-10 right-0 rounded-l-xl text-center text-[0.4rem] md:text-xs font-playfair  uppercase italic">Adding more soon!</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
