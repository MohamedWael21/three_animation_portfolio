"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const getScreenSize = () => window.innerWidth;

    const handleResizeScreen = () => setScreenSize(getScreenSize());

    handleResizeScreen();

    window.addEventListener("resize", handleResizeScreen);

    return () => window.removeEventListener("resize", handleResizeScreen);
  }, []);

  return screenSize;
};
export default useScreenSize;
