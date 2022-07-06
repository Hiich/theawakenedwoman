import React from "react";
import Image from "next/image";

// Icons
import RotateIcon from "../../public/Rotate/RotateImage.svg";

function RotateBadge() {
	return (
        <div>
        <div id="container">
          <div id="circle">
           <Image src={RotateIcon} alt="Awaken Badge" />
          </div>
        </div>
      </div>
 
	);
}

export default RotateBadge;
