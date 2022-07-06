import React from "react";
import Link from 'next/link'
import { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import Image from "next/image";




// Icons
import Twitter from "../public/icons/twitter-logo.svg";
import Linkedin from "../public/icons/linkedin.svg";
import Dribbble from "../public/icons/dribbble.svg";


function Team() {

const [activeThumb, setActiveThumb] = useState()

    // Fetch Data Locally
        const [data, setData] = useState(null)
        const [isLoading, setLoading] = useState(false)
      
        useEffect(() => {
          setLoading(true)
          fetch('/api/team')
            .then((res) => res.json())
            .then((data) => {
              setData(data)
              setLoading(false)
            })
        }, [])
      
        if (isLoading) return <p>Loading StackedCard</p>
        if (!data) return <p>No data</p>

	return ( 

         <div className="flex min-h-screen bg-team justify-center ">
            <ul className="thumbs lg:mt-52 sm:rotate-180">
                <li className="border-brown rounded-full border-5 w-60 h-60 mb-4"><a href="#slide-1"><Image className="border-5 rounded-full"  src={data.teamOne.original} alt="" width={300} height={300}/></a></li>
                <li className="border-brown rounded-full border-5 w-60 h-60 mb-4"><a href="#slide-2"><Image className="border-5 rounded-full"   src={data.teamTwo.original} alt="" width={300} height={300}/></a></li>
                <li className="border-brown rounded-full border-5 w-60 h-60 mb-4"><a href="#slide-3"><Image className="border-5 rounded-full"   src={data.teamThree.original} alt="" width={300} height={300}/></a></li>
                <li className="border-brown rounded-full border-5 w-60 h-60 mb-4"><a href="#slide-4"><Image className="border-5 rounded-full"   src={data.teamFour.original} alt="" width={300} height={300}/></a></li>   
            </ul>
             <ul className="slide mt-24 ml-24">
                <li className="first flex mt-24" id="slide-1">
                    <Image src={data.teamOne.original} alt="" width={339} height={424}/>
                    <div className="justify-center flex items-center ml-24 text-left w-515">
                            <div>
                                <h1 className="font-V-Bold text-2xl">{data.teamOne.jobTitle}</h1>
                                <h3 className="font-Poppins-Light text-sm">{data.teamOne.name}</h3>
                                <p className="font-Poppins-Light text-base leading-6 mt-4">{data.teamOne.qoute}</p>
                                <div className="mt-4">
                                    <ul className="flex">
                                        <li className="mr-4"><Link href="/"><a><Image src={Twitter} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Linkedin} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Dribbble} alt="" /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </li>
                <li id="slide-2" className="flex mt-24">
                <Image src={data.teamTwo.original} alt="" width={339} height={424}/>
                    <div className="justify-center flex items-center ml-24 text-left w-515">
                            <div>
                                <h1 className="font-V-Bold text-2xl">{data.teamTwo.jobTitle}</h1>
                                <h3 className="font-Poppins-Light text-sm">{data.teamTwo.name}</h3>
                                <p className="font-Poppins-Light text-base leading-6 mt-4">{data.teamTwo.qoute}</p>
                                <div className="mt-4">
                                    <ul className="flex">
                                        <li className="mr-4"><Link href="/"><a><Image src={Twitter} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Linkedin} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Dribbble} alt="" /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </li>
                <li id="slide-3" className="flex mt-24">
                <Image src={data.teamThree.original} alt="" width={339} height={424}/>
                    <div className="justify-center flex items-center ml-24 text-left w-515">
                            <div>
                                <h1 className="font-V-Bold text-2xl">{data.teamThree.jobTitle}</h1>
                                <h3 className="font-Poppins-Light text-sm">{data.teamThree.name}</h3>
                                <p className="font-Poppins-Light text-base leading-6 mt-4">{data.teamThree.qoute}</p>
                                <div className="mt-4">
                                    <ul className="flex">
                                        <li className="mr-4"><Link href="/"><a><Image src={Twitter} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Linkedin} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Dribbble} alt="" /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </li>
                <li id="slide-4" className="flex mt-24">
                <Image src={data.teamFour.original} alt="" width={339} height={424}/>
                    <div className="justify-center flex items-center ml-24 text-left w-515">
                            <div>
                                <h1 className="font-V-Bold text-2xl">{data.teamFour.jobTitle}</h1>
                                <h3 className="font-Poppins-Light text-sm">{data.teamFour.name}</h3>
                                <p className="font-Poppins-Light text-base leading-6 mt-4">{data.teamFour.qoute}</p>
                                <div className="mt-4">
                                    <ul className="flex">
                                        <li className="mr-4"><Link href="/"><a><Image src={Twitter} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Linkedin} alt="" /></a></Link></li>
                                        <li className="mr-4"><Link href="/"><a><Image src={Dribbble} alt="" /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </li>
            </ul> 
        </div>


        
	);
}

export default Team;
