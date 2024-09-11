"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MusicModalConsent from "./MusicModalConsent";

const Sound = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    if (!isPlaying) {
      audioRef.current.play();
    }
    if (isPlaying) {
      audioRef.current.pause();
    }
    setIsPlaying((prev) => {
      localStorage.setItem("musicConsent", !prev);
      return !prev;
    });
    setShowModal(false);
  };

  useEffect(() => {
    const handleInteraction = () => {
      const consent = localStorage.getItem("musicConsent");

      if (consent === "true" && !isPlaying) {
        audioRef.current.play();
      }

      ["click", "keydown", "touchstart"].forEach((event) => {
        document.removeEventListener(event, handleInteraction);
      });
    };

    const consent = localStorage.getItem("musicConsent");
    if (consent) {
      setIsPlaying(consent === "true");
      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) => {
          document.addEventListener(event, handleInteraction);
        });
      }
    } else {
      setShowModal(true);
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-4 right-2.5 z-50 xs:right-4 group">
      {showModal && (
        <MusicModalConsent
          onClose={() => setShowModal(false)}
          toggle={toggle}
        />
      )}
      <audio loop ref={audioRef}>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        your browser does not support the audio element
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14  text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"sound button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
