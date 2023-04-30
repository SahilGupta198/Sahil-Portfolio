import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mt-12 md:mt-28 p-10 bg-pattern3 flex flex-col items-center justify-center shadow-lg shadow-black rounded-t-xl">

      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center md:mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-3xl md:text-4xl mb-2 md:mb-5 tracking-tight text-light">CONT<span className="text-main">ACT ME</span></p>
        <LineGradient value="bg-gradient-rainblue w-[8%] mx-auto" />
        <p className="my-6 mx-8 md:mx-0 font-bold text-base leading-[1.2rem] text-center">Feel free to Contact me and I will get back to you as soon as possible.</p>
      </motion.div>

      <div className="md:w-1/2 p-6 bg-dark rounded-md shadow-lg shadow-black">

        {/* FORM */}
        <div className="flex justify-center md:first-letter:mt-5">
          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/guptasahil198@gmail.com"
              method="POST"
            >
              <input
                className="w-full bg-light font-semibold placeholder-gray-500 p-1 md:p-3 text-sm md:text-base text-dark rounded-sm shadow-md shadow-black outline-none"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red-600 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-light font-semibold placeholder-gray-500 p-1 md:p-3 text-sm md:text-base mt-5 text-dark rounded-sm shadow-md shadow-black outline-none"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-light font-semibold placeholder-gray-500 p-1 md:p-3 text-sm md:text-base mt-5 text-dark rounded-sm shadow-md shadow-black outline-none"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="px-3 md:px-5 py-1 md:py-3 text-xs md:text-base bg-main font-bold text-dark mt-5 hover:scale-90 transition duration-500 rounded-md shadow-md shadow-black"
                type="submit"
              >SUBMIT</button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
