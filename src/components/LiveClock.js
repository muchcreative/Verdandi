'use client';

import React from 'react';
import Clock from 'react-live-clock';
import clock from '../styles/day/Clock.module.css';

import { Allura } from 'next/font/google'
const allura = Allura({
                subsets: ['latin'], 
                weight: ['400']
              });

export default function LiveClock() {
  return (
    <div>
      <Clock
          format={'h:mm:ss'}
          ticking={true}
          className={`${clock.liveClock} ${allura.className}`} />
    </div>
  );
}