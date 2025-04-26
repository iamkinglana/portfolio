import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white px-4 pt-20">
      <div className="text-center max-w-xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm Enock — a Web Developer.
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I build responsive and engaging web applications using modern tools like React and Tailwind CSS.
        </motion.p>
        <motion.a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition-all duration-300\"
          whileHover={{ scale: 1.05 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
