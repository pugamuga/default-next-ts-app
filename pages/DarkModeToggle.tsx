import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SvgMoon from "../components/SvgMoon";
import SvgSun from "../components/SvgSun";

export default function DarkModeToggle(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="p-10 flex flex-row items-center gap-x-3 bg-slate-500">
      <h1
        className={` font-extrabold  ${
          !toggle ? "text-slate-800" : "text-slate-800/20"
        }`}
      >
        Light
      </h1>
      <div
        className={`h-[40px] w-[70px] rounded-full  ${
          toggle ? "bg-slate-800" : "bg-cyan-300"
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
          <AnimatePresence initial={false}>
            {!toggle && (
              <>
                <SvgSun toggle={toggle} />
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -60, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-2 h-2 absolute right-[-30px] top-[3px] bg-white rounded-full"></div>
                  <div className="w-1 h-1 absolute right-[-18px] top-[10px] bg-white rounded-full"></div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false}>
            {toggle && (
              <>
                <SvgMoon toggle={toggle} />
                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 60, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-[2px] h-[2px] absolute right-[30px] top-[10px] bg-white rounded-full"></div>
                  <div className="w-[2px] h-[2px] absolute right-[40px] top-[20px] bg-white rounded-full"></div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <h1
        className={` font-extrabold ${
          toggle ? "text-slate-800" : "text-slate-800/20"
        }`}
      >
        Dark
      </h1>
    </div>
  );
}
