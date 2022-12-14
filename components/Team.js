import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";

// Icons
import Twitter from "../public/icons/twitter-logo.svg";
import Instagram from "../public/icons/instagram.svg";

function Team() {
  const [activeThumb, setActiveThumb] = useState(0);

  // Fetch Data Locally
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative flex justify-center min-h-screen py-20 overflow-hidden md:py-32 bg-team bg-bottom bg-contain bg-no-repeat bg-OT-pattern">
      <div className="relative z-10 w-1200">
        <div className="flex justify-center">
          <h1 className="text-center text-48 font-V-Bold">Our Team</h1>
        </div>
        <div className="flex flex-col justify-center mt-10 md:flex-row">
          <ul className="flex flex-row justify-center mt-4 md:mt-20 lg:mt-32 thumbs md:rotate-180 md:block">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`mx-2 sm-mx-0 mb-4 rounded-full  border-5 w-60 h-60 ${
                    activeThumb == index ? "border-orange" : "border-brown"
                  }`}
                >
                  <Image
                    className="object-contain rounded-full cursor-pointer border-5"
                    src={item.original}
                    alt=""
                    width={300}
                    height={300}
                    onClick={() => setActiveThumb(index)}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="md:ml-12 slide-wrap">
            {data.map((item, index) => {
              return (
                <li
                  className={`h-full flex py-12 md:py-20 slide w-full md:justify-center justify-start lg:items-center items-start ${
                    activeThumb == index ? "active" : ""
                  }`}
                  id={`slide-${index}`}
                  key={index}
                >
                  <div className="h-full imageSlider">
                    <Image
                      src={item.original}
                      alt=""
                      width={339}
                      height={454}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center justify-center ml-6 text-left md:ml-24 md:w-515 sm:w-100">
                    <div>
                      <h1 className="text-2xl font-V-Bold">{item.jobTitle}</h1>
                      <h3 className="text-sm font-Poppins-Light">
                        {item.name}
                      </h3>
                      <p className="mt-4 text-base leading-6 font-Poppins-Light">
                        {item.quoteOne}
                      </p>
                      <p className="mt-4 text-base leading-6 font-Poppins-Light">
                        {item.quoteTwo}
                      </p>
                      <div className="mt-4">
                        <ul className="flex socials">
                          <li className="mr-4">
                              <a href={item.socials.twitter} className="w-1.5">
                                <Image src={Twitter} alt="" />
                              </a>
                          </li>
                          <li className="mr-4">
                            <a href={item.socials.instagram} className="w-1.5">
                              <Image src={Instagram} alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
     
    </div>
  );
}

export default Team;
