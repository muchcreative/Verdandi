'use client';

// Next.js
import { useEffect, useState } from 'react'
import { Lora } from 'next/font/google'

// CSS
import styles from 'src/styles/day/Day.module.css';

// External Libs
import { clsx } from 'clsx';
import { format } from 'date-fns';

const lora = Lora({
                subsets: ['latin'], 
                weight: ['400']
              });
              
export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx({[lora.className]: true, [styles.liveClock]: true})}>
      { format(time, 'h:mm:ss a') }
    </div>
  );
}