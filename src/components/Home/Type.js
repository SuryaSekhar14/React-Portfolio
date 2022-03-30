import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Python Geek",
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          "Open Source Enthusiast",
          "Networking Nerd",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // typeSpeed: 10000000,
      }}
    />
  );
}

export default Type;
