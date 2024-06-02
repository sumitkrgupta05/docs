import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      // transition={{ ease: "easeOut", duration: 2 }}
      className="relative w-full h-screen bg-zinc-800"
    >
      <Background />
      <Foreground />
    </motion.div>
  );
}

export default App;
