"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);

const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href="/"
      target={"_self"}
      className="fixed z-40 flex items-center justify-center rounded-full text-foreground custom-bg left-4 top-4"
      aria-label={"home"}
      name={"home"}
    >
      <span className="relative p-4 w-14 h-14 hover:text-accent">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="absolute inset-0 peer"></span>
        <span className="absolute hidden px-2 py-1 mx-2 text-sm -translate-y-1/2 rounded-md shadow-lg peer-hover:block left-full top-1/2 bg-background text-foreground whitespace-nowrap">
          Home
        </span>
      </span>
    </NavLink>
  );
};
export default HomeBtn;
