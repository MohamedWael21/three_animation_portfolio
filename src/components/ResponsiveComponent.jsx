"use client";

import useScreenSize from "@/hooks/useScreenSize";
import clsx from "clsx";

const ResponsiveComponent = ({ children, className }) => {
  const size = useScreenSize();

  return <div className={clsx(className)}>{children({ size })}</div>;
};
export default ResponsiveComponent;
