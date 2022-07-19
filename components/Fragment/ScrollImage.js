import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

function ScrollImage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/imageData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading StackedCard</p>;
  if (!data) return <p>No data</p>;

  return (
    <>
      {/* Right Slider */}
      <div className="relative grid w-full m-auto overflow-hidden slider place-item-center">
        <div style={{ width: "calc(250px * 18)" }} className="flex slide-track">
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5 flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>

          {/* Same 9 Slide */}
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* Left Slider */}
      <div className="relative grid w-full m-auto overflow-hidden left-slider place-item-center">
        <div
          style={{ width: "calc(250px * 18)" }}
          className="flex slide-track-left"
        >
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5 flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>

          {/* Same 9 Slide */}
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image5}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image1}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image2}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image3}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="slide flex items-center p-3.5">
            <Image
              className="mr-10 ScrollImage"
              src={data.image4}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* <div
			className="container relative p-40 overflow-hidden" >
		// 	<div className="absolute left-0 flex items-center animate logo">
		// 			<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>

        //   <Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>

		// 			<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
		// 		</div>
				{/* <div className="flex items-center justify-around logo">
        <Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>

          <Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>

          <Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image1} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image2} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image3} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image4} alt="" width={200} height={200}/>
					<Image className="mr-10 ScrollImage" src={data.image5} alt="" width={200} height={200}/>
				</div> 
			</div>
	*/}
    </>
  );
}

export default ScrollImage;
