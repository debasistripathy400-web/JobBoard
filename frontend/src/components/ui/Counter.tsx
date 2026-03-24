import { animate, useInView, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export const Counter = ({ from = 0, to, duration = 2, suffix = '', decimals = 0 }: CounterProps) => {
  const [display, setDisplay] = useState(from.toFixed(decimals));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: 'easeOut',
        onUpdate: (value) => {
          setDisplay(value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, decimals]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
};
