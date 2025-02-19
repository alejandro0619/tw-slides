import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import WhatIsGrid from "./content/what-is-grid";
import HowToUse from "./content/how-to-use";
import GridxFlex from "./content/grid-vs-flex";
import SketchyNavbar from "./content/navbar-anatomy";
import Navbar from "./content/navbar-bootstrap";

const slides = [
  {
    title: "CSS Grid",
    show: (
      <WhatIsGrid
        title={"CSS Grid"}
        content={
          "CSS Grid es un sistema de diseño bidimensional para la web que te permite crear diseños complejos con facilidad. A diferencia de las técnicas de diseño tradicionales como Flexbox o floats, CSS Grid nos permite definir filas y columnas en una cuadrícula."
        }
      />
    ),
  },
  {
    title: "Cómo usarlo",
    content:
      "Define un contenedor como display: grid, configura filas y columnas, y coloca elementos en la cuadrícula.",
    show: <HowToUse />,
  },
  {
    title: "Grid vs Flex",
    content:
      "CSS Grid es una herramienta poderosa para diseños modernos y responsivos. ¡Experimenta y diviértete!",
    show: <GridxFlex />,
  },
  {
    title: "Navigation Bar",
    show: <SketchyNavbar />,
  },
  {
    title: "Bootstrap",
    show: <Navbar />,
  },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0 && index < slides.length - 1) {
        setIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && index > 0) {
        setIndex((prev) => prev - 1);
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [index]);

  useEffect(() => {
    controls.start({
      y: `-${index * 100}vh`,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [index, controls]);

  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans">
      {/* Background con líneas de cuadrícula */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      {/* Contenido principal */}
      <motion.div animate={controls} className="absolute w-full h-full">
        {slides.map((slide, i) => (
          <section
            key={i}
            className="h-screen flex flex-col justify-center items-center text-center px-6"
            style={{ position: "absolute", top: `${i * 100}vh`, width: "100%" }}
          >
            <motion.h2
              className="text-5xl font-bold tracking-wide text-gray-900 title owText"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slide.title}
            </motion.h2>

            {slide.show}
          </section>
        ))}
      </motion.div>

      {/* Botón Anterior */}
      {index > 0 && (
        <motion.button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          className="fixed left-6 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition w-[100px]"
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
      )}

      {/* Botón Siguiente */}
      {index < slides.length - 1 && (
        <motion.button
          onClick={() => setIndex((prev) => Math.min(prev + 1, slides.length - 1))}
          className="fixed right-6 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition w-[100px]"
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      )}
    </div>
  );
};

export default App;
