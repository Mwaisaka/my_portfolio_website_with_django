// import React, { useEffect } from "react";
// import "./clock.css"

// function Clock() {
//   useEffect(() => {
//     const hourHand = document.querySelector(".hour-hand");
//     const minuteHand = document.querySelector(".minute-hand");
//     const secondHand = document.querySelector(".second-hand");

//     function setDate() {
//       const now = new Date();

//       const seconds = now.getSeconds();
//       const secondsDegrees = (seconds / 60) * 360 + 90;
//       secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//       const minutes = now.getMinutes();
//       const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
//       minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

//       const hours = now.getHours();
//       const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
//       hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
//     }
//     const interval=setInterval(setDate, 1000);
//     setDate();

//     return ()=>clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div class="clock">
//       <div class="clock-face">
//         <div class="number number1">1</div>
//         <div class="number number2">2</div>
//         <div class="number number3">3</div>
//         <div class="number number4">4</div>
//         <div class="number number5">5</div>
//         <div class="number number6">6</div>
//         <div class="number number7">7</div>
//         <div class="number number8">8</div>
//         <div class="number number9">9</div>
//         <div class="number number10">10</div>
//         <div class="number number11">11</div>
//         <div class="number number12">12</div>
//         <div class="hand hour-hand"></div>
//         <div class="hand minute-hand"></div>
//         <div class="hand second-hand"></div>
//       </div>
//     </div>
//   );
// }

// export default Clock;

import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    }

    const interval = setInterval(updateTime, 1000);
    updateTime(); // Set initial time immediately

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="clock">
      <div className="digital-clock">{time}</div>
    </div>
  );
}

export default Clock;
