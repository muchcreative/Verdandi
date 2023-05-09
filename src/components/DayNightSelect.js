import { useState } from 'react';
import { format } from 'date-fns';

// import Day from "../pages/day.js";
// import Night from "../pages/night.js"

// const day = () => <Day />;
// const night = () => <Night />;

function checkDayOrNight() {
    //Returns true if daytime and false if nighttime.
    const currentHour = format(new Date(), 'H');
    return (currentHour > 6 && currentHour < 18 ? true : false);
}

// export default function DayNightSwitch() {
//     const [dayNight, setHTML] = useState(true);
//     setHTML(checkDayOrNight());
//     return dayNight ? <Day /> : <Night />;
// }