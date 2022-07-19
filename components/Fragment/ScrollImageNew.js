import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../public/stackImage/imageOne.png";
import image2 from "../../public/stackImage/imageTwo.png";
import image3 from "../../public/stackImage/imageThree.png";
import image4 from "../../public/stackImage/imageFour.png";
import image5 from "../../public/stackImage/imageFive.png";

function ScrollImage() {
  $(document).ready(function () {
    if (window.innerWidth > 928) {
      var che = document.getElementById("pslide-1");
      if (che != null) {
        var ypos, slide1, slide2;
        function parallex() {
          slide1 = document.getElementById("pslide-1");
          slide2 = document.getElementById("pslide-2");
          ypos = window.pageYOffset;
          if (slide1 != undefined && slide2 != undefined) {
            slide1.style.marginLeft = "+" + ypos * 0.14 + "px";
            slide2.style.marginLeft = "-" + ypos * 0.14 + "px";
          }
        }
        window.addEventListener("scroll", parallex), false;
      }
    }
  });
  return (
    <>
      {/* Right Slider */}
      <div className="relative grid w-full pt-40 m-auto overflow-hidden sm:pt-64 left-slider place-item-center">
        <div
          style={{ width: "calc(250px * 18)" }}
          className="flex"
          id="pslide-1"
        >
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>

          {/* Same 9 Slide */}
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* Left Slider */}
      <div className="relative grid w-full py-2 m-auto overflow-hidden left-slider place-item-center">
        <div
          style={{ width: "calc(250px * 18)" }}
          className="flex"
          id="pslide-2"
        >
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>

          {/* Same 9 Slide */}
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4 ">
            <Image
              className="border-2 ScrollImage"
              src={image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4">
            <Image
              className="border-2 ScrollImage"
              src={image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4">
            <Image
              className="border-2 ScrollImage"
              src={image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="mr-2 md:mr-4">
            <Image
              className="border-2 ScrollImage"
              src={image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollImage;
