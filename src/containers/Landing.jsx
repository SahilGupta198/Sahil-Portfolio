import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from '../assets/cartoonProfile.png'

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home" className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-bottom-10 before:-left-10 before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:bg-black/30 before:border-main before:rounded-tr-xl before:rounded-sm before:z-[-1] ">
            <img
              alt="profile"
              className=" z-10 w-full max-w-[200px] md:max-w-[340px] shadow-lg shadow-black rounded-sm rounded-tr-xl hover:saturate-0 transition duration-500"
              src={profile}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px]"
            src={profile}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32 ">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-opensans mb-3 md:ml-1 text-lg text-center tracking-tight md:text-start">Hey there, i am</p>
          <p className="text-8xl w-10 leading-[3.5rem] tracking-tight font-playfair z-10 text-center ">
            Sahil {""}<span className="text-transparent bg-clip-text bg-gradient-rainblue">Gupta</span>
          </p>

          <p className="mt-10 mb-7 md:ml-1 md:text-lg leading-[1.4rem] tracking-tight text-center md:text-start">
            A Frontend focused <b>Web Developer</b> building the <b>Frontend</b> of Websites and <b>Web Applications</b> that leads to the success of the overall <b>product</b>.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-sm shadow-md shadow-black bg-gradient-rainblue md:ml-1 py-0.5 px-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-dark hover:scale-90 shadow-lg shadow-black transition duration-500 w-full h-full px-10 py-4 font-playfair">Let's talk.</div>
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
