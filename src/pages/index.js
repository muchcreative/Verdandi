import { useState, useEffect } from 'react'

import { format } from 'date-fns';
import Day from 'src/components/day/day.js';
import Night from 'src/components/night/night.js';

function setDayNight() {
    // Returns Day Page if daytime and Night Page if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour > 6 && currentHour < 18 ?
        <Day /> : <Night />);
}

export default function Home() {
  const [page, setPage] = useState(<Night />);
  useEffect(() => { setPage(setDayNight()) }, []);
  return (page);
};