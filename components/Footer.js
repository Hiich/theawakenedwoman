import React from "react";
import Image from "next/image";

// Icons
import Twitter from "../public/icons/twitter.svg";
import Instagram from "../public/icons/instagram.svg";
import Discord from "../public/icons/discord.svg";
import Telegram from "../public/icons/telegram.svg";
import Facebook from "../public/icons/facebook.svg";

//AwakenedWoman
import AwakenedWoman from "../public/awakened/awakenedWoman.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-20 overflow-hidden footer-wrapper">
      <div className="w-1200">
        <div className="flex flex-col items-center justify-center bg-no-repeat bg-purple rounded-2xl bg-footer-pattern">
          <h1 className="pt-24 text-white pfont-normal tracking-headerSpace md:text-5xl font-V-Bold">
            Join our community
          </h1>
          <p className="text-center text-white font-Poppins font-extralight w-536">
            Iste animi consectetur dicta dolorem
          </p>
          <div className="flex items-center justify-center flex-shrink-0 mt-6">
            <div className="text-xl font-bold cursor-pointer">
              <ul className="flex mr-px">
                <li>
                  <Image src={Discord} alt="Discord" />
                </li>
                <li className="ml-8">
                  <Image src={Twitter} alt="Twitter" />
                </li>
                <li className="ml-8">
                  <Image src={Instagram} alt="Instagram" />
                </li>
                <li className="ml-8">
                  <Image src={Telegram} alt="Instagram" />
                </li>
                <li className="ml-8">
                  <Image src={Facebook} alt="Instagram" />
                </li>
              </ul>
            </div>
          </div>
          <div className="relative bt">
            <Image
              src={AwakenedWoman}
              alt="AwakenedWoman"
              className="relative mt-12"
            />
          </div>
        </div>
        <div className="w-11/12 h-1 mx-auto mt-16 border-t-2 rounded-sm opacity-5"></div>
        <div className="flex items-center justify-center pt-5">
          <p className="text-sm color-orange"> Ⓒ Awakened Woman</p>
          <div className="w-2.5 h-2.5 rounded-full bg-brown mx-3.5"></div>
          <p className="text-sm color-orange">All Rights Reserved</p>
          <div className="w-2.5 h-2.5 rounded-full bg-brown mx-3.5"></div>
          <p className="text-sm color-orange">Made by AdaIhueze</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
