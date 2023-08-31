import React, { useState, useEffect } from "react";

const CountdownTimer = ({ time }: any) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(countdownInterval);
        return;
      }

      setSeconds((prevSeconds: any) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [seconds, time]);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="text-black text-4xl font-bold tracking-[3.60px]">
      {minutes} : {remainingSeconds < 10 ? "0" : ""}
      {remainingSeconds}
    </div>
  );
};

export default CountdownTimer;
