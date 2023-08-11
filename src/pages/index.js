// Next.js
import { useState, useEffect } from 'react'

// External Libraries
import { format } from 'date-fns';

// Day and Night Pages
import Day from 'src/pages/day.js';
import Night from 'src/pages/night.js';
import Blank from 'src/pages/blank.js';

function setDayNight() {
    // Returns Day Page if daytime and Night Page if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour < 9 || currentHour >= 19 ?
        <Day /> : <Night />);
}

export default function Home() {
  const [page, setPage] = useState(<Blank />);
  useEffect(() => { setPage(setDayNight()) }, []);
  return (page);
};
