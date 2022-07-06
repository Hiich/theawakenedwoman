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
		<div className="flex justify-center bg-hero-pattern bg-no-repeat min-h-screen bg-left-bottom bg-16 items-center flex-col pt-48 text-center">
		<h1 className="lg:text-headerText tracking-headerSpace font-normal text-6xl font-V-Bold">
			{data.Hero_Title} 
		</h1>
		<p className="font-Poppins lg:w-128 md:w-100 mt-4">{data.Hero_Content}</p>
		<div className="flex justify-center items-center rounded-xl cursor-pointer mt-7  text-sm font-medium text-white bg-primary w-154 h-55">
			<h1 className="text-center mr-4">{data.Hero_btn}</h1>
			<Image src={ImageIcon} alt="image icon" />
		</div>
		</div>
		<ScrollImage />

		</>
	);
}

export default HeroSection;
