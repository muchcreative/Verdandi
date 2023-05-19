'use client';

import { format } from 'date-fns';
import { useEffect, useState } from 'react'
import clock from '../styles/day/Clock.module.css';

import { Lora } from 'next/font/google'
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
    <div className={`${lora.className} ${clock.liveClock}`}>
      { format(time, 'h:mm:ss a') }
    </div>
  );
}