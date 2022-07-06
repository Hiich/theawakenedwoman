import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";


// RotateBadge
import RotateBadge from "../components/Fragment/CircleImage";
// Icons
import ImageIcon from "../public/icons/image.svg";

// Fetch Data
function StackedCard() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/data')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading StackedCard</p>
    if (!data) return <p>No data</p>
    
	return (
		<div className="flex justify-center min-h-screen bg-purple items-center text-white font-Poppins">
            <div className="text-center font-V-Bold">
	            <h1 className="mb-20">{data.stackHeader}</h1>
            
                <div className="flex relative grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-12">
                    <div className="lg:w-2/4 md:w-2/4 sm:w-100 loading">
                        <div>
                        <div style={{ '--i': 1 }} className="top-10  transform transition-all  absolute -left-12 rounded-lg">
                                <Image className="rotateImage" src={data.stack_image3} alt="Stackimage" width={300} height={300}/>
                        </div>
                        <div style={{ '--i': 2 }} className="top-6 transform transition-all absolute  -left-16 rounded-lg">
                                <Image className="rotateImage" src={data.stack_image2} alt="Stackimage" width={300} height={350}/>
                        </div>
                        <div style={{ '--i': 3 }} className=" -top-2 flex justify-center items-center  transform transition-all absolute  -left-28 rounded-lg">
                                <Image className="rotateImage" src={data.stack_image1} alt="Stackimage" width={320} height={420}/>
                        </div>
                        <div style={{ '--i': 4 }} className="top-10  transform transition-all  absolute -left-12 rounded-lg">
                                <Image className="rotateImage" src={data.stack_image3} alt="Stackimage" width={300} height={300}/>
                        </div>
                        <div style={{ '--i': 5 }}   className="top-6 transform transition-all absolute  -left-16 rounded-lg">
                                <Image className="rotateImage" src={data.stack_image2} alt="Stackimage" width={300} height={350}/>
                        </div>
                        <div style={{ '--i': 6 }} className=" -top-2 flex justify-center items-center  transform transition-all absolute  -left-28 rounded-lg">
                                <Image className="rotateImage" src={data.stack_image1} alt="Stackimage" width={320} height={420}/>
                        </div>
                        </div>
                        <div className="relative right-64  top-346">
                        <RotateBadge />
                        </div>
                    </div>
                    
                    <div className="lg:w-2/4 md:w-2/4 sm:w-100">
                        <div className="flex justify-center font-32 text-white text-left lg:w-554 font-Poppins-Light ">
                        {data.stackText}
                        </div>
                    </div>
                </div>
    </div>
</div>
 
	);
}

export default StackedCard;

