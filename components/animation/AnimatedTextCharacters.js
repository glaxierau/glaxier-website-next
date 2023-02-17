import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text, children }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { delay: 0.4, staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                // delay: 0.5,
                duration: 0.2,
                // type: "spring",
                easings: 10
                // damping: 12,
                // stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 0,
            transition: {
                easings: 10
                // delay: 3,
                // type: "spring",
                // damping: 12,
                // stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextCharacter;