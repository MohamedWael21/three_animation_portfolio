"use client";
import ProjectLayout from "./ProjectLayout";

import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center w-full px-4 mx-auto space-y-6 md:space-y-8 lg:px-16 xl:max-w-4xl"
    >
      {projects.map((project) => (
        <ProjectLayout key={project.id} {...project} />
      ))}
    </motion.div>
  );
};
export default ProjectList;
