"use client";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <motion.h1 className="text-7xl font-semibold tracking-wider">
        Country Trivia!
      </motion.h1>
    </div>
  );
};

export default Header;
