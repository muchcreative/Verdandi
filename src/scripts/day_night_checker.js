'use client';

import { format } from 'date-fns';
import Day from "../components/day.js";
import Night from "../components/night.js";

const day = () => <Day />;
const night = () => <Night />;

export default function checkDayOrNight() {
    //Returns Day Page if daytime and NIght Page if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour > 6 && currentHour < 18 ?
        <Day /> : <Night />);
}