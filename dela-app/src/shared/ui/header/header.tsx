import React from 'react';

import { motion, useAnimation } from 'framer-motion';

import styles from './header.module.scss';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  React.useEffect(() => {
    controls.start({ y: visible ? 0 : -75, transition: { duration: 0.2 } });
  }, [visible, controls]);

  return (
    <motion.header
      animate={controls}
      className={styles.header_container}
      layout
      layoutRoot
    >
      asdasdasdasd
    </motion.header>
  );
}
