"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx("flex p-8 custom-bg rounded-xl space-y-8", className)}
    >
      {children}
    </motion.div>
  );
};
export default ItemLayout;
