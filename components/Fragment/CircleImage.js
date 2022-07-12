import React from "react";
import Image from "next/image";

// Icons
import RotateIcon from "../../public/Rotate/RotateImage.svg";

function RotateBadge() {
	return (
        <div id="circle" className="w-24 h-24">
          <Image src={RotateIcon} alt="Awaken Badge" />
        </div>
  );
}

export default RotateBadge;
