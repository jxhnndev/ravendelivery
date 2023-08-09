"use client"
import { useState, useEffect } from 'react'

type Props = {
  endDate: string
}

const CountDown = ({endDate}: Props) => {
  let difference = +new Date(endDate) - +new Date();
  const [delay, setDelay] = useState(difference);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      {difference > 0 ? 
      <span className="flex flex-wrap justify-center font-bold text-xl lg:text-3xl text-yellow-300 w-full" suppressHydrationWarning>
        {d > 0 && <>D:{d} </> }
        {h > 0 && <>H:{h} </> }
        {m > 0 && <>M:{m} </> }
        <>S:{s}</>
      </span>
      : 
      <></>
      }
    </>
  )
}

export default CountDown