'use client';

import React from 'react';
import { useEffect, useState } from 'react'

import Day from "../components/day.js";
import Night from "../components/night.js";

import dayNightChecker from "../scripts/day_night_checker.js";

const day = () => <Day />;
const night = () => <Night />;

// import DayNightSelect from '../components/DayNightSelect.js';
// const dayNightSelect = () => <DayNightSelect />;

export default function Home() {
  const [color, setColor] = useState(<Day />);
  useEffect(() => { setColor(dayNightChecker()) }, []);
  return (<>{color}</>);
};

// server side rendering preffered
// you dont have a font family???
// does alara get overwriten here?

// consistent postion end on the image
// serve different image qualities based on screen res and size
// get that smile animation for the 6pm highlight
// has to feel smoother