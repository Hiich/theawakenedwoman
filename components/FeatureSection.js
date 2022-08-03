import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import FeaturesIcon from "../public/icons/features.svg";
import FeatureSide from "../public/features/Content.png";
import SecondFeatureSide from "../public/features/features.png";


// Fetch Data
function FeatureSection() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/Features")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading Features Section</p>;
  if (!data) return <p>No data</p>;

  return (
    <>
   <div className="min-h-screen p-6 mb-8">
    <h1 className="lg:pl-16 text-4xl font-bold font-V-Bold lg:w-2/5  sm:pl-16 mb-6">{data.HeaderOne}</h1>
    <p className="lg:pl-16 lg:w-768 sm:w-100 font-Poppins-Light mb-12">{data.subHeader}</p>

    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-px">
      <div className="flex items-center justify-items-center">
        <ul className="lg:pl-16">
          <li className="flex flex-wrap mb-6 lg:mb-0">
            <Image className="pb-6" src={FeaturesIcon} alt="FeaturesIcon" />
            <div className="lg:w-498 sm:w-100 lg:mt-12 sm:mt-6  ml-2">
              <h4 className="text-Poppins font-bold text-xl">{data.FeatureList1.title}</h4>
              <p className="font-Poppins-Light text-base">{data.FeatureList1.body}</p>
            </div>
          </li>
          <li className="flex flex-wrap mb-6 lg:mb-0">
            <Image src={FeaturesIcon} alt="FeaturesIcon" />
            <div className="lg:w-498 sm:w-100 lg:mt-12 mt-6  ml-2">
              <h4 className="text-Poppins font-bold text-xl">{data.FeatureList2.title}</h4>
              <p className="font-Poppins-Light text-base">{data.FeatureList2.body}</p>
            </div>
          </li>
          <li className="flex flex-wrap mb-12 lg:mb-0">
            <Image src={FeaturesIcon} alt="FeaturesIcon" />
            <div className="lg:w-498 sm:w-100 lg:mt-12 sm:mt-6  ml-2 mb-12">
              <h4 className="text-Poppins font-bold text-xl">{data.FeatureList3.title}</h4>
              <p className="font-Poppins-Light  text-base">{data.FeatureList3.body}</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Image src={FeatureSide} className="sm:w-100 lg:w-568 lg:h-560" alt=""/>
      </div>
    </div>
   </div>

   <div className="min-h-screen p-6 ">
    <h1 className="lg:pl-16 text-4xl font-bold font-V-Bold lg:w-2/5  sm:pl-16 mb-6">{data.HeaderTwo}</h1>
    <p className="lg:pl-16 lg:w-768 sm:w-100 font-Poppins-Light mb-12">{data.subHeader}</p>

    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-px">
    <div>
        <Image src={SecondFeatureSide} className="sm:w-100 lg:w-568 lg:h-560" alt=""/>
      </div>
      <div className="flex items-center justify-items-center">
        <ul className="lg:pl-16">
          <li className="flex flex-wrap mt-6 lg:mt-0 mb-6 lg:mb-0">
            <Image className="pb-6" src={FeaturesIcon} alt="FeaturesIcon" />
            <div className="lg:w-498 sm:w-100 lg:mt-12 sm:mt-6  ml-2">
              <h4 className="text-Poppins font-bold text-xl">{data.FeatureList4.title}</h4>
              <p className="font-Poppins-Light text-base">{data.FeatureList4.body}</p>
            </div>
          </li>
          <li className="flex flex-wrap mb-6 lg:mb-0">
            <Image src={FeaturesIcon} alt="FeaturesIcon" />
            <div className="lg:w-498 sm:w-100 lg:mt-12 sm:mt-6 ml-2">
              <h4 className="text-Poppins font-bold text-xl">{data.FeatureList5.title}</h4>
              <p className="font-Poppins-Light text-base">{data.FeatureList5.body}</p>
            </div>
          </li>
          <li className="flex flex-wrap mb-12 lg:mb-0">
            <Image src={FeaturesIcon} alt="FeaturesIcon" />
            <div className="lg:w-498 sm:w-100 lg:mt-12 sm:mt-6  ml-2">
              <h4 className="text-Poppins font-bold text-xl">{data.FeatureList6.title}</h4>
              <p className="font-Poppins-Light  text-base">{data.FeatureList6.body}</p>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
   </div>
   </>
  );
}

export default FeatureSection;
