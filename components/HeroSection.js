import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import ScrollImage from "../components/Fragment/ScrollImage"

// Icons
import ImageIcon from "../public/icons/image.svg";

function HeroSection() {
	const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/Hero')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading StackedCard</p>
    if (!data) return <p>No data</p>
	return (
		<>
		<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-left-bottom bg-no-repeat bg-hero-pattern bg-16 pt-38">
		<h1 className="text-5xl font-normal md:text-6xl lg:text-headerText tracking-headerSpace font-V-Bold">
			{data.Hero_Title} 
		</h1>
		<p className="mt-4 font-Poppins lg:w-128 md:w-100 ">{data.Hero_Content}</p>
		<div className="flex items-center justify-center text-sm font-medium text-white cursor-pointer rounded-xl mt-7 bg-primary w-154 h-55">
			<h1 className="mr-4 text-center">{data.Hero_btn}</h1>
			<Image src={ImageIcon} alt="image icon" />
		</div>
		</div>
		<ScrollImage />

		</>
	);
}

export default HeroSection;
