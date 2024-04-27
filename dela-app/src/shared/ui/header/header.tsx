import React from "react";
import styles from "./header.module.scss";
import { motion, useAnimation } from "framer-motion";

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  React.useEffect(() => {
    controls.start({ y: visible ? 0 : -75, transition: { duration: 0.2 } });
  }, [visible, controls]);

  return (
    <motion.header
      layout
      layoutRoot
      className={styles.header_container}
      animate={controls}
    >
      asdasdasdasd
    </motion.header>
  );
}
