'use client';

import clock from '../styles/day/Clock.module.css';
import { format } from 'date-fns';
import { useEffect, useState } from 'react'

import { Inter } from 'next/font/google'
const inter = Inter({
                subsets: ['latin'], 
                weight: ['400']
              });

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${inter.className} ${clock.clock}`}>
      {format(time, 'h:mm:ss a')}
    </div>
  );
}