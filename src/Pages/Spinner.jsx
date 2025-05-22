import React from "react";
import Lottie from "lottie-react";
import sppiner from '../assets/sppiner.json';
const Spinner = () => {
  return (
    <>
      <div className="max-h-80 flex justify-center items-center">
        <Lottie animationData={sppiner} loop={true} />;
      </div>
    </>
  );
};

export default Spinner;
