"use client";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import useScreenSize from "@/hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const Navigation = () => {
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="fixed z-40 flex items-center w-full h-screen xs:justify-center">
      <ResponsiveComponent className="w-full">
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative flex items-center justify-center animate-spin-slow hover:pause group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";

                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                return <NavButton x={x} y={y} {...btn} key={btn.link} />;
              })}
            </motion.div>
          ) : (
            <div className="flex">
              <motion.div
                className="w-full xs:w-max px-2.5 xs:p-0 flex-col items-start relative flex xs:items-center gap-4 justify-center"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton x={0} y={0} {...btn} key={btn.link} />;
                })}
              </motion.div>
              <motion.div
                className="w-full xs:w-max px-2.5 xs:p-0 flex-col items-end relative flex xs:items-center gap-4 justify-center"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {BtnList.slice(BtnList.length / 2).map((btn) => {
                  return (
                    <NavButton
                      x={0}
                      y={0}
                      {...btn}
                      key={btn.link}
                      labelDir="left"
                    />
                  );
                })}
              </motion.div>
            </div>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};
export default Navigation;
