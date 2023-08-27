import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    let style = {
      fontSize: "25px",
      padding: "2px",
      backgroundColor: "#3737cb",
      color: "#fff",
      margin: "0 5px",
    };

    if (interval === "days") {
      style.backgroundColor = "#c13e4d";
    } else if (interval === "hours") {
      style.backgroundColor = "#44aadd";
    } else if (interval === "min") {
      style.backgroundColor = "#34a865";
    }

    return (
      <span style={style}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[#d34444] text-[25px]">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
