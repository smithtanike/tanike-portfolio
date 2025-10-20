import TextType from "../components/ui/TextType";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-white"
    >
      <div>
        <TextType
          text={["hello", "i'm tanike smith", "a web developer"]}
          typingSpeed={115}
          pauseDuration={1300}
          showCursor={true}
          cursorCharacter="_"
          deletingSpeed={30}
        />
      </div>
      <div>
        <p className="mt-6 text-xl text-gray-300 text-center">
          blending design, functionality, and a bit of curiosity into every
          build
        </p>
      </div>
    </section>
  );
};

export default Hero;
