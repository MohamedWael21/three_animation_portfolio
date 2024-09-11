"use client";
import Link from "next/link";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item}
      className="relative flex items-center justify-between w-full p-4 overflow-hidden text-sm rounded-lg cursor-pointer md:text-base md:p-6 custom-bg"
      href={demoLink}
      target="_blank"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="hidden text-muted sm:block">{description}</p>
      </div>
      <div className="self-center flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground ">
        {new Date(date).toDateString()}
      </p>
    </NavLink>
  );
};
export default ProjectLayout;
