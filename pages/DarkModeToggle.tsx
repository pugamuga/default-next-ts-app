import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SvgMoon from "../components/SvgMoon";
import SvgSun from "../components/SvgSun";

export default function DarkModeToggle(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="p-10 flex flex-row items-center gap-x-3 bg-slate-500">
      <h1 className={` font-extrabold text-blue-900`}>Light</h1>
      <div
        className={`h-[40px] w-[70px] rounded-full  ${
          toggle ? "bg-slate-800" : "bg-sky-400"
        } flex tr-300 items-center`}
      >
        <motion.div
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          initial={{ x: 0 }}
          animate={{ x: toggle ? 30 : 0 }}
          className="w-6 h-6 cursor-pointer relative"
        >
          <AnimatePresence>
            <SvgSun toggle={toggle}/>
          </AnimatePresence>
          <AnimatePresence>
            <SvgMoon toggle={toggle}/>
          </AnimatePresence>
        </motion.div>
      </div>
      <h1 className={` font-extrabold text-blue-900`}>Dark</h1>
    </div>
  );
}
