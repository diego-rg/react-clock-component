import { useState, useEffect } from "react";

const LocalDate = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 60000);
  });

  return <div>{date}</div>;
};

export default LocalDate;
