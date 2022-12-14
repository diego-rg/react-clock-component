import { useState, useEffect } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return <div>{time}</div>;
};

export default LocalTime;
