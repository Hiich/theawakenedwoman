import React from "react";
import Image from "next/image";


// Icons
import Twitter from "../public/icons/twitter.svg";
import Instagram from "../public/icons/instagram.svg";
import Discord from "../public/icons/discord.svg";
import Telegram from "../public/icons/telegram.svg";
import Facebook from "../public/icons/facebook.svg";

//AwakenedWoman
import AwakenedWoman from "../public/awakened/awakenedWoman.svg"


function Footer() {
	return (
		<div className="flex justify-center items-center flex-col footer-wrapper overflow-hidden">
            <div className=" bg-purple rounded-2xl flex justify-center items-center flex-col w-1200 h-650 bg-footer-pattern bg-no-repeat">
            <h1 className=" tracking-headerSpace font-normal md:text-6xl font-V-Bold text-white mt-48">
                Join our community
            </h1>
            <p className="font-Poppins font-extralight text-white text-center w-536 h-83">Iste animi consectetur dicta dolorem</p>
            <div className="flex justify-center items-center flex-shrink-0 mt-6">
                <div className="font-bold text-xl cursor-pointer">
                    <ul className="flex mr-px">
                        <li><Image src={Discord} alt="Discord" /></li>
                        <li className="ml-8"><Image src={Twitter} alt="Twitter" /></li>
                        <li className="ml-8"><Image src={Instagram} alt="Instagram" /></li>
                        <li className="ml-8"><Image src={Telegram} alt="Instagram" /></li>
                        <li className="ml-8"><Image src={Facebook} alt="Instagram" /></li>
                    </ul>
                </div>
			</div>
            <div>
                <Image src={AwakenedWoman} alt="AwakenedWoman" className="mt-12"/>
            </div><br /><br /><br /><br /><br /><br />
            <hr />
            <h1>AwakenedWoman</h1>
            &copy;2022 AwakenedWoman

		</div>
        </div>
 
	);
}

export default Footer;
