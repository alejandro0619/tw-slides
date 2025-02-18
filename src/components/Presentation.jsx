import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const slides = [
  {
    title: "CSS Grid",
    content:
      "CSS Grid es un sistema de diseño bidimensional para la web que te permite crear diseños complejos con facilidad. A diferencia de las técnicas de diseño tradicionales como Flexbox o floats, CSS Grid le permite definir filas y columnas en una cuadrícula",
  },

  {
    title: "Cómo usarlo",
    content:
      "Define un contenedor como display: grid, configura filas y columnas, y coloca elementos en la cuadrícula.",
  },
  {
    title: "Ejemplo",
    content: "Desliza para ver cómo cambia el grid dinámicamente.",
  },
  {
    title: "Conclusión",
    content:
      "CSS Grid es una herramienta poderosa para diseños modernos y responsivos. ¡Experimenta y diviértete!",
  },
  {
    title: "Autores",
    content: "Alejandro Lopez y Neyderlin Rivas",
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
      {/* New background with linear-gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      {/* Contenido */}
      <motion.div animate={controls} className="absolute w-full h-full">
        {slides.map((slide, i) => (
          <section
            key={i}
            className="h-screen flex flex-col justify-start items-center text-center px-6 pt-[150px]"
            style={{ position: "absolute", top: `${i * 100}vh`, width: "100%" }}
          >
            <motion.h2
              className="text-5xl font-bold tracking-wide text-white owText title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slide.title}
            </motion.h2>
            <motion.h3
              className="w-fit h-1 text-[#3c0d43] my-4 font-bold text-2xl tracking-wide text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hecho por: Alejandro López & Neyderlin Rivas
            </motion.h3>
            <motion.p
              className=" text-xl text-gray-700 font-medium tracking-wide text-center max-w-3xl px-4 mt-[5%]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slide.content}
            </motion.p>
          </section>
        ))}
      </motion.div>
    </div>
  );
};

export default App;
