import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";


function ScrollImage() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/imageData')
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
{/* Right Slider */}
	<div className="slider m-auto relative grid place-item-center w-full overflow-hidden">
		<div style={{'width': 'calc(250px * 18)'}} className="slide-track flex">

			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5 flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>

			{/* Same 9 Slide */}
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>
		</div>
	</div>
{/* Left Slider */}
	<div className="left-slider m-auto relative grid place-item-center w-full overflow-hidden">
		<div style={{'width': 'calc(250px * 18)'}} className="slide-track-left flex">

			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5 flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>

			{/* Same 9 Slide */}
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
			</div>
			<div className="slide flex items-center p-3.5">
				<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
			</div>
		</div>
	</div>
		{/* <div
			className="container p-40 overflow-hidden relative" >
		// 	<div className="flex animate absolute left-0 flex items-center logo">
		// 			<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>

        //   <Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>

		// 			<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
		// 			<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
		// 		</div>
				{/* <div className="flex justify-around items-center logo">
        <Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>

          <Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>

          <Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image1} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image2} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image3} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image4} alt="" width={200} height={200}/>
					<Image className="ScrollImage mr-10" src={data.image5} alt="" width={200} height={200}/>
				</div> 
			</div>
	*/}


     
     </>
 
	);
}

export default ScrollImage;
