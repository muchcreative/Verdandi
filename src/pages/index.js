import { useEffect, useState } from 'react'

import { format } from 'date-fns';
import Day from "../components/day.js";
import Night from "../components/night.js";

const day = () => <Day />;
const night = () => <Night />;

function setDayNight() {
    // Returns Day Page if daytime and Night Page if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour > 6 && currentHour < 18 ?
        <Night /> : <Night />);
}

export default function Home() {
  const [page, setPage] = useState(<Day />);
  useEffect(() => { setPage(setDayNight()) }, []);
  return (page);
};