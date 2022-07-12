import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";

// Icons
import Twitter from "../public/icons/twitter-logo.svg";
import Linkedin from "../public/icons/linkedin.svg";
import Dribbble from "../public/icons/dribbble.svg";

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
        console.log(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative flex justify-center py-32 overflow-hidden bg-team">
      <div className="relative z-10 w-1200">
        <div className="flex justify-center">
          <h1 className="text-3xl text-center font-V-Bold">Our Team</h1>
        </div>
        <div className="flex justify-center mt-10">
          <ul className="mt-32 thumbs sm:rotate-180">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`mb-4 rounded-full  border-5 w-60 h-60 ${
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
          <ul className="ml-12 slide-wrap">
            {data.map((item, index) => {
              return (
                <li
                  className={`h-40 flex py-20 slide w-full ${
                    activeThumb == index ? "active" : ""
                  }`}
                  id={`slide-${index}`}
                  key={index}
                >
                  <div className="h-40">
                    <Image
                      src={item.original}
                      alt=""
                      width={339}
                      height={454}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center justify-center ml-24 text-left w-515">
                    <div>
                      <h1 className="text-2xl font-V-Bold">{item.jobTitle}</h1>
                      <h3 className="text-sm font-Poppins-Light">
                        {item.name}
                      </h3>
                      <p className="mt-4 text-base leading-6 font-Poppins-Light">
                        {item.quote}
                      </p>
                      <div className="mt-4">
                        <ul className="flex socials">
                          <li className="mr-4">
                            <a href="#" className="w-1.5">
                              <Image src={Twitter} alt="" />
                            </a>
                          </li>
                          <li className="mr-4">
                            <a href="#" className="w-1.5">
                              <Image src={Linkedin} alt="" />
                            </a>
                          </li>
                          <li className="mr-4">
                            <a href="#" className="w-1.5">
                              <Image src={Dribbble} alt="" />
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
      <img
        src="/Background/RM_bg.svg"
        className="absolute z-0 w-full opacity-40 top-32"
      />
    </div>
  );
}

export default Team;
