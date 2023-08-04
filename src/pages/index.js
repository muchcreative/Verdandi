// Next.js
import { useState, useEffect } from 'react'

// External Libraries
import { format } from 'date-fns';

// Day and Night Pages
import Day from 'src/pages/day.js';
import Night from 'src/pages/night.js';

function setDayNight() {
    // Returns Day Page if daytime and Night Page if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour < 11 ?
        <Day /> : <Night />);
}

export default function Home() {
  const [page, setPage] = useState(<Day />);
  useEffect(() => { setPage(setDayNight()) }, []);
  return (page);
};
