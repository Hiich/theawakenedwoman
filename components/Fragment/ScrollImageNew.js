import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../public/AutoslideImages/1.png";
import image2 from "../../public/AutoslideImages/2.png";
import image3 from "../../public/AutoslideImages/3.png";
import image4 from "../../public/AutoslideImages/4.png";
import image5 from "../../public/AutoslideImages/5.png";
import image6 from "../../public/AutoslideImages/6.png";
import image7 from "../../public/AutoslideImages/7.png";
import image8 from "../../public/AutoslideImages/8.png";
import image9 from "../../public/AutoslideImages/9.png";
import image10 from "../../public/AutoslideImages/10.png";
import image11 from "../../public/AutoslideImages/11.png";
import Marquee from "react-fast-marquee";
function ScrollImage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [sm, setSm] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 769) {
      console.log("ye");
      setSm(true);
    }
  }, []);

  return (
    <>
      {/* Right Slider */}
      <div
        className="relative grid w-full pt-40 pb-4 m-auto overflow-hidden sm:pt-64 left-slider place-item-center"
        id="pslide"
      >
        <Marquee gradientWidth={0} speed={20}>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image1}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image2}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image3}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image4}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image5}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image6}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image7}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image8}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image9}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image10}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image11}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image3}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image7}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image5}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
        </Marquee>
        <Marquee gradient={false} speed={20} direction="right">
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image11}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image3}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image4}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image2}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image1}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image9}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image7}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image8}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image6}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image10}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image5}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image3}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image1}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
          <div className="flex items-center p-1 md:p-2">
            <Image
              className=""
              src={image8}
              alt=""
              width={sm ? 140 : 210}
              height={sm ? 150 : 220}
            />
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default ScrollImage;