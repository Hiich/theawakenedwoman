import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ethers, utils} from "ethers";
import { Link } from "react-scroll";
import Image from "next/image";
import Logo from "../public/logo.svg";

// Icons
import Twitter from "../public/icons/twitter.svg";
import Instagram from "../public/icons/instagraam.svg";
import Discord from "../public/icons/discord.svg";
import Wallet from "../public/icons/Wallet.svg";

function Navbar() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);

      let chainId = await ethereum.request({ method: 'eth_chainId' });
console.log("Connected to chain " + chainId);

// String, hex code of the chainId of the Rinkebey test network
const rinkebyChainId = "0x4"; 
if (chainId !== rinkebyChainId) {
	alert("You are not connected to the Rinkeby Test Network!");
}

} else {
  console.log("No authorized account found");
}
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 

    } catch (error) {
      console.log(error);
    }
  }


 



  return (
    <div>
      <nav className="fixed z-50 w-full bg-white shadow-sm">
        <div className="w-full">
          <div className="flex items-center container mx-auto lg:w-1200 sm:w-full px-10 h-20">
            <div className="flex items-center justify-between w-full">
              <div className="items-center justify-center flex-shrink-0 hidden md:flex">
                <div className="hidden text-xl font-bold cursor-pointer md:block">
                  <ul className="flex mr-1.5">
                  <li>
                  <a href="https://discord.gg/qnWpkv4tf8"><Image src={Discord} alt="Discord" /></a>
                </li>
                <li className="ml-8">
                 <a href="https://www.twitter.com/awakenedwomanft"><Image src={Twitter} alt="Twitter" /></a>
                </li>
                <li className="ml-8">
                  <a href="https://www.instagram.com/theawakenedwoman_nft/"><Image src={Instagram} alt="Instagram" /></a>
                </li>
                  </ul>
                </div>
              </div>
              <div  className="flex w-40 text-xl font-bold cursor-pointer md:w-52">
                  <Image src={Logo} alt="" />
              </div>
              <div className="block">
                <Link
                  activeClass="contact"
                  onClick={connectWallet}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="flex items-center justify-center px-3 py-4 space-x-4 text-sm font-medium text-white cursor-pointer md:h-56 rounded-xl bg-primary md:w-207 w-40"
                >
                  <h1 className="mr-2 md:mr-4">Connect Wallet</h1>
                  <Image className="mt-6" src={Wallet} alt="Wallet" />
                </Link>
              </div>
            </div>
            {/* <div className="flex mr-10 md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 text-white rounded-md bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block w-6 h-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block w-6 h-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div> */}
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 bg-white md:px-3"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
