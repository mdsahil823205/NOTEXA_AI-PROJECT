import React from "react";

const Heading = () => {
  return (
    <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white/90">
      Generate{" "}
      <span className="bg-linear-to-r  from-orange-300  to-orange-500  bg-clip-text  text-transparent">
        Brilliant
      </span>{" "}
      Notes
      <br />
      In{" "}
      <span className="bg-linear-to-r  from-orange-300  to-orange-500  bg-clip-text  text-transparent">
        Seconds
      </span>
    </h1>
  );
};

export default Heading;
