"use client";
import { Clock, Construction, Heart } from "lucide-react";

import { useState, useEffect } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    fetch("/api/location")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLocation(data.city);
      });
  }, []);

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      // Create a date in AEST timezone (UTC+10)
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Australia/Sydney'
      };

      const timeString = new Date().toLocaleTimeString('en-AU', options);
      setCurrentTime(timeString);
    };

    // Update time immediately
    updateTime();

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="absolute top-[40px] inset-x-0 font-mono flex flex-row items-center justify-between h-[50px] w-full text-[14px] text-white/50 ">
      <section className="h-[20px] flex flex-row gap-1 items-center justify-start">
        <div className="relative h-full aspect-square flex items-center justify-center">
          <div className="w-1/2 h-1/2 absolute aspect-square rounded-full bg-green-600 " />
          <div className="w-1/2 h-1/2 absolute aspect-square rounded-full bg-green-600 animate-ping" />
        </div>
        Hi, visitor from {location}

      </section>
      <section className="flex items-center gap-2"><Clock /> {currentTime} <span className="opacity-50">(AEST)</span></section>
    </main>
  );
}