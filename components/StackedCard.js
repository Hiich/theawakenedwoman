import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

// RotateBadge
import RotateBadge from "../components/Fragment/CircleImage";
// Icons
import ImageIcon from "../public/icons/image.svg";
import DOMPurify from "dompurify";
// Fetch Data
function StackedCard() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [rotate, setRotate] = useState(false);
  const sanitizer = DOMPurify.sanitize;
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(true);
      if (activeTab == 0) {
        setActiveTab(1);
      }
      if (activeTab == 1) {
        setActiveTab(2);
      }
      if (activeTab == 2) {
        setActiveTab(0);
      }
      setTimeout(() => {
        setRotate(false);
      }, 4000);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);
  useEffect(() => {
    setLoading(true);
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading StackedCard</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="relative flex items-center justify-center overflow-hidden text-white pb-28 py-28 bg-purple font-Poppins">
      <div className="text-center font-V-Bold">
        <h1 className="mb-4 md:text-48 md:mb-16 font-V-Bold text-36">
          {data[0].stackHeader}
        </h1>
        <div className="relative flex flex-col grid-cols-2 md:flex-row md:grid-cols-1 gap-x-12">
          <div className="mt-4 lg:w-2/4 md:w-2/4 md:w-100 loading">
            <ul className="relative flex justify-center w-full pr-12 md:pr-32 md:pt-8 stackCards">
              <li
                className={`stack ${activeTab == 0 ? "active" : "inactive"} ${
                  activeTab == 0 ? "li1" : activeTab == 1 ? "li3" : "li2"
                }`}
                onClick={() => setActiveTab(0)}
              >
                <Image
                  className="object-cover"
                  src={data[0].stack_image}
                  alt="Stackimage"
                  width={300}
                  height={300}
                />
              </li>
              <li
                className={`stack ${activeTab == 1 ? "active" : "inactive"} ${
                  activeTab == 1 ? "li1" : activeTab == 0 ? "li2" : "li3"
                }`}
                onClick={() => setActiveTab(1)}
              >
                <Image
                  className="object-cover"
                  src={data[1].stack_image}
                  alt="Stackimage"
                  width={300}
                  height={300}
                />
              </li>
              <li
                className={`stack ${activeTab == 2 ? "active" : "inactive"} 
                ${activeTab == 2 ? "li1" : activeTab == 1 ? "li2" : "li3"}`}
                onClick={() => setActiveTab(2)}
              >
                <Image
                  className="object-cover"
                  src={data[2].stack_image}
                  alt="Stackimage"
                  width={300}
                  height={300}
                />
              </li>
            </ul>
            <div
              className={`absolute z-10 lg:right-80 top-64 md:top-96 ${
                rotate ? "rotate" : ""
              }`}
            >
              <RotateBadge />
            </div>
          </div>

          <div className="relative w-80 md:w-90 lg:w-2/4">
            <div className="relative flex justify-center overflow-hidden text-left text-white h-122 h-600 min font-32 lg:w-554 font-Poppins-Light">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`absolute w-full stackInfo ${
                      activeTab == index ? "active" : ""
                    }`}
                  >
                    <h3 className="pb-4 text-lg font-bold uppercase">
                      {item.stackTitle}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.stackText),
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <img
          src="/Background/bt.svg"
          className="absolute w-full opacity-20 top-2/4 st-img"
        />
      </div>
    </div>
  );
}

export default StackedCard;
