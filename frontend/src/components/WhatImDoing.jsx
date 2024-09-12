import React from "react";

const WhatImDoing = () => {
  return (
    <section id="projects" className="mt-8 p-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-4">What I'm Doing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-400">
            Building web applications using a blend of front-end and back-end
            technologies.
          </p>
        </div>
        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Machine Learning (AI/ML)
          </h3>
          <p className="text-gray-400">
            Exploring the potential of Blockchain and AI/ML technologies to
            enhance data security and transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatImDoing;
