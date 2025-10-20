import CircularText from "../components/ui/CircularText";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-7xl py-30 bg-black" id="about">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* LEFT COLUMN - Image with rotating text */}
        <div className="flex justify-center items-center mb-10 md:mb-0 md:w-1/2">
          <div className="relative flex justify-center items-center w-[450px] h-[450px]">
            {/* Rotating circular text */}
            <CircularText
              text="analytical • detailed • passionate • "
              onHover="slowDown"
              spinDuration={10}
              className="absolute w-full h-full"
            />

            {/* Profile Image */}
            <motion.img
              src="src/assets/tanike_smith.jpeg"
              alt="Tanike Smith"
              className="absolute w-[360px] h-[360px] rounded-full object-cover z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN - About text */}
        <div className="text-white md:w-1/2 px-4 justify-items-start">
          <motion.h2
            className="text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            about me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl leading-relaxed text-left"
          >
            i'm a passionate developer who loves blending clean design with
            technical precision. it's about building responsive websites,
            creating custom integrations, or refining user experiences, i enjoy
            turning ideas into functional results.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
