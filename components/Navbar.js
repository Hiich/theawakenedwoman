import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ethers, utils } from "ethers";
import { Link } from "react-scroll";
import Image from "next/image";
import Logo from "../public/logo.svg";
// Icons
import Twitter from "../public/icons/twitter.svg";
import Instagram from "../public/icons/instagraam.svg";
import Discord from "../public/icons/discord.svg";
import Wallet from "../public/icons/Wallet.svg";
import useDappStore from "../hooks/useDappStore";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { account, setAccount } = useDappStore();

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        await provider.send(
          'wallet_switchEthereumChain',
          [
            {
              chainId: '0x1',
            }
          ]);
      } catch (err) {
        console.log(err);
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } else {
      toast.error("Install Metamask");
    }
  };

  const checkIfWalletIsConnected = async () => {
    console.log("Checking for account");
    if (window.ethereum) {
      //check if account is connected
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length !== 0) {
        console.log("🚀 ~ file: Navbar.js:33 ~ useEffect ~ accounts", accounts)
        setAccount(accounts[0]);


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
          await provider.send(
            'wallet_switchEthereumChain',
            [
              {
                chainId: '0x1',
              }
            ]);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
                      <a href="https://discord.gg/qnWpkv4tf8">
                        <Image src={Discord} alt="Discord" />
                      </a>
                    </li>
                    <li className="ml-8">
                      <a href="https://www.twitter.com/awakenedwomanft">
                        <Image src={Twitter} alt="Twitter" />
                      </a>
                    </li>
                    <li className="ml-8">
                      <a href="https://www.instagram.com/theawakenedwoman_nft/">
                        <Image src={Instagram} alt="Instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-40 text-xl font-bold cursor-pointer md:w-52">
                <Image src={Logo} alt="" />
              </div>
              {!account && (
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
              )}
            </div>
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
