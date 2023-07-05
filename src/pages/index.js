// Next.js
import { useState, useEffect } from 'react'

// External Libraries
import { format } from 'date-fns';

// Day and Night Pages
import Day from 'src/components/day/day.js';
import Night from 'src/components/night/night.js';

function setDayNight() {
    // Returns Day Page if daytime and Night Page if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour > 1 && currentHour < 13 ?
        <Night /> : <Night />);
}

export default function Home() {
  const [page, setPage] = useState(<Night />);
  useEffect(() => { setPage(setDayNight()) }, []);
  return (page);
};