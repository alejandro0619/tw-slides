import { motion } from "framer-motion";

export default function SketchyNavbar() {
  return (
    <motion.nav
      className="relative mx-auto mt-[10%] max-w-3xl border border-dashed border-zinc-400 dark:border-zinc-700 p-4 flex justify-between items-center rounded-md w-[70%] h-fit"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Esquinas decorativas */}
      <CornerIcon className="-top-3 -left-3" />
      <CornerIcon className="-top-3 -right-3" />
      <CornerIcon className="-bottom-3 -left-3" />
      <CornerIcon className="-bottom-3 -right-3" />

      {/* Logo */}
      <div className="relative text-lg font-bold text-gray-900 dark:text-gray-100">
        Logo
        <SketchCircle className="-top-2 -left-3 w-[68px]" />
        <Annotation text="Logo" position="top-10 left-0" />
      </div>

      {/* Menú */}
      <ul className="relative flex space-x-6 text-gray-700 dark:text-gray-300">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <SketchCircle className="top-[-12px] left-[-50px] w-[300px]" />
        <Annotation text="Menú" position="top-10 left-1/3 font-bold" />
      </ul>

      {/* Botón */}
      <button className="relative px-4 py-2 border border-zinc-400 dark:border-zinc-700 rounded-md text-gray-900 dark:text-gray-100">
        Sign In
        <SketchCircle className="-top-2 right-[-12px] w-[110px] h-[60px]" />
        <Annotation text="Botón" position="top-12 right-0 font-bold" />
      </button>
    </motion.nav>
  );
}

// Icono en las esquinas
const CornerIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`dark:text-white text-black size-6 absolute ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

// Círculos sketchy para resaltar partes
const SketchCircle = ({ className }) => (
  <motion.div
    className={`absolute  h-[50px]  border-2 border-dashed border-gray-500 dark:border-gray-400 rounded-full ${className}`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3, delay: 0.3 }}
  />
);

// Anotaciones tipo sketchy
const Annotation = ({ text, position }) => (
  <motion.span
    className={`absolute text-sm text-gray-600 dark:text-gray-400 ${position}`}
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.4 }}
  >
    {text}
  </motion.span>
);
