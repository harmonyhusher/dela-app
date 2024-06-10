import { useScrollVisibility } from '@src/shared/helpers/hooks/useScrollVisibility';

import { motion } from 'framer-motion';

import styles from './Header.module.scss';

export function Header() {
  const { controls } = useScrollVisibility({ height: -75, duration: 0.2, startPos: 0 });

  return (
    <motion.header animate={controls} className={styles.header_container}>
      Дела
    </motion.header>
  );
}
