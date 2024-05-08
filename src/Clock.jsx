import React, { useState, useEffect } from 'react';

const Clock = () => {
  // Create state to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Define an interval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Only run this effect once when the component is mounted

  // Format the time as a string
  const timeString = currentTime.toLocaleTimeString();

  return <div>{timeString}</div>;
};

export default Clock;
