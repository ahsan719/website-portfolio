import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering Student",
          // "MERN Stack Developer",
          "Frontend Developer" ], autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
} 

export default Type;
