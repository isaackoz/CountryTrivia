"use client";

import { motion, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fillOpacity: 1,
    transition: {
      pathLength: {
        delay: 2.5,
        duration: 1,
        type: "spring",
        bounce: 0,
      },
      fillOpacity: {
        delay: 3,
        duration: 1,
      },
    },
  },
};

const PlayButton = () => {
  return (
    <motion.div className="hover:cursor-pointer">
      <motion.svg
        width={200}
        height={60}
        className="overflow-visible"
        initial="hidden"
        animate="visible"
      >
        <motion.rect
          width={"100%"}
          height={"100%"}
          rx={"20"}
          variants={draw}
          className="stroke-white stroke-2 overflow-visible fill-white"
        />
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline={"middle"}
          textAnchor={"middle"}
          className="text-xl font-bold"
          transition={{
            delay: 3.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        >
          Play now!
        </motion.text>
      </motion.svg>
    </motion.div>
  );
};

export default PlayButton;
