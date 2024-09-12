import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <main className="md:col-span-2 space-y-8">
      <Navbar />
      <section>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I'm a Full Stack Web Developer with a passion for crafting robust and
          efficient backend systems. While adept in both front-end and back-end
          development, my true thrill lies in architecting the core
          functionalities that power a seamless user experience.
        </p>
        <p className="mb-4">
          A self-proclaimed tech enthusiast, I'm constantly invigorated by the
          ever-evolving landscape of the industry. My curiosity extends to
          emerging technologies like Blockchain and Machine Learning, allowing
          me to stay informed and integrate these advancements into my solutions
          when appropriate.
        </p>
        <p>
          Beyond the back-end, I've also gained valuable experience in UI/UX
          design. My freelance projects have garnered positive feedback,
          demonstrating my ability to bridge the gap between technical expertise
          and user-centric design principles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">What I'm Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>
              Building the future by developing Web Applications using a blend
              of front-end and back-end technologies.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Machine Learning (AI/ML)
            </h3>
            <p>
              Exploring the potential of Blockchain technology to revolutionize
              data security and transparency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
