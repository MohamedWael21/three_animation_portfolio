"use client";

import { useEffect, useState } from "react";

const createFireFly = () => ({
  id: crypto.randomUUID(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});
const FireFliesBackground = () => {
  const [fireflies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFlyPeriodical = () => {
      const fireFly = createFireFly();
      setFireFlies((prev) => [...prev.slice(-14), fireFly]);
    };
    const interval = setInterval(addFireFlyPeriodical, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {fireflies.map((fireFly) => (
        <div
          key={fireFly.id}
          className="absolute bg-fireFly-radial w-[10px] h-[10px] rounded-full"
          style={{
            top: fireFly.top,
            left: fireFly.left,
            animation: `move ${fireFly.animationDuration} infinite alternate`,
          }}
        ></div>
      ))}
    </div>
  );
};
export default FireFliesBackground;
