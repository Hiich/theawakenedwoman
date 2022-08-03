import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import ScrollImage from "../components/Fragment/ScrollImageNew";

// Icons
import ImageIcon from "../public/icons/image.svg";
import EthIcon from "../public/icons/eth.svg";

function HeroSection() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/Hero")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading StackedCard</p>;
  if (!data) return <p>No data</p>;
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-64 sm:pt-44 min-h-screen text-center bg-left-bottom bg-16 bg-no-repeat bg-hero-pattern -mb-32">
        <h1 className="text-5xl font-normal md:text-6xl lg:text-headerText tracking-headerSpace font-V-Bold">
          {data.Hero_Title}
        </h1>
        <p className="px-4 mt-4 font-Poppins lg:w-128 md:w-100">
          {data.Hero_Content}
        </p>
        <div className="grid grid-cols-3 gap-x-4 mt-6">
          <div>
            <h3 className="text-primary font-V-Bold text-lg">{data.HeroStatsOne.title}</h3>
            <p className="text-base text-Poppins-Light">{data.HeroStatsOne.value}</p>
          </div>
          <div>
            <h3 className="text-primary font-V-Bold text-lg">{data.HeroStatsTwo.title}</h3>
            <p className="text-base text-Poppins-Light">{data.HeroStatsTwo.value}</p>
          </div>
          <div>
            <h3 className="text-primary font-V-Bold text-lg">{data.HeroStatsThree.title}</h3>
            <p className="flex items-center justify-items-center text-base text-Poppins-Light mr-8">{data.HeroStatsThree.value} <Image src={EthIcon} alt="image icon"/></p>
          </div>
        </div>
        <div className="flex items-center justify-center text-sm font-medium text-white cursor-pointer rounded-xl mt-7 bg-primary w-154 h-55">
          <h1 className="mr-4 text-center">{data.Hero_btn}</h1>
          <Image src={ImageIcon} alt="image icon" />
        </div>
        
      </div>
      <div className="w-full overflow-hidden ">
          <ScrollImage />
        </div>
    </>
  );
}

export default HeroSection;
