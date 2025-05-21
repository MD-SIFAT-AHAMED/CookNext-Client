import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 space-y-2 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">About
          Cook<span className="text-orange-500">Nest</span></h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          CookNest is your go-to place for easy, tasty, and healthy recipes.
          Whether you're a beginner or a pro, we bring you inspiration to make
          magic in your kitchen.
        </p>
      </div>
    </div>
  );
};

export default About;
