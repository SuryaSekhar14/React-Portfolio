import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: false,
        deleteSpeed: 50,
        typeSpeed: 10000000,
      }}
    />
  );
}

export default Type;
