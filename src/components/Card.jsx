import { motion } from "framer-motion"
export default function Card({ title, content }) {
  return (
    <motion.div
      className="relative border border-dashed border-zinc-400 dark:border-zinc-700 p-6 text-start max-w-4xl mt-[5%]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className="dark:text-white text-black size-6 absolute -top-3 -left-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className="dark:text-white text-black size-6 absolute -top-3 -right-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className="dark:text-white text-black size-6 absolute -bottom-3 -left-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className="dark:text-white text-black size-6 absolute -bottom-3 -right-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        />
      </svg>

      <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-xl">
        {content}
      </p>
    </motion.div>
  )
}