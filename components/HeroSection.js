import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

import ScrollImage from "../components/Fragment/ScrollImageNew";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import toast, { Toaster } from "react-hot-toast";
// Icons
import ImageIcon from "../public/icons/image.svg";
import EthIcon from "../public/icons/eth.svg";
import abi from "../public/abi.json";

function HeroSection() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const [mintAmount, setMintAmount] = useState(1);

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      toast.error("Max mintable amount is 5 per transaction");
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const cost = 220000000000000000;
  const CONTRACT_ADDRESS = "0xC12803D3665b12940c2A7083c13CEB3cAa8c79FE";

  const mintNft = async () => {
    console.log("Minting...");
    await Moralis.enableWeb3();
    const totalWeiValue = String(cost * mintAmount);
    const sendOptions = {
      chain: "mainnet",
      contractAddress: CONTRACT_ADDRESS,
      functionName: "mint",
      abi: abi,
      params: {
        quantity: mintAmount,
      },
      msgValue: totalWeiValue,
    };

    const transaction = Moralis.executeFunction(sendOptions)
      .then((tx) => {
        toast.promise(tx.wait(), {
          loading: "Minting...",
          success: "Successfully minted !",
          error: "Error when minting",
        });
      })
      .catch((e) =>
        toast.error(
          "Could not mint, please check your balance or that you are connected."
        )
      );
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/Hero")
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
      <div className="flex flex-col items-center justify-center lg:pt-32 sm:pt-48 min-h-screen text-center bg-left-bottom bg-16 bg-no-repeat bg-hero-pattern -mb-32">
        <h1 className="text-5xl font-normal md:text-6xl lg:text-headerText tracking-headerSpace font-V-Bold">
          {data.Hero_Title}
        </h1>
        <p className="px-4 mt-4 font-Poppins lg:w-128 md:w-100">
          {data.Hero_Content}
        </p>
        <div className="grid grid-cols-3 gap-x-4 mt-6">
          <div>
            <h3 className="text-primary font-V-Bold text-lg">
              {data.HeroStatsOne.title}
            </h3>
            <p className="text-base text-Poppins-Light">
              {data.HeroStatsOne.value}
            </p>
          </div>
          <div>
            <h3 className="text-primary font-V-Bold text-lg">
              {data.HeroStatsTwo.title}
            </h3>
            <p className="text-base text-Poppins-Light">
              {data.HeroStatsTwo.value}
            </p>
          </div>
          <div>
            <h3 className="text-primary font-V-Bold text-lg">
              {data.HeroStatsThree.title}
            </h3>
            <p className="flex items-center justify-items-center text-base text-Poppins-Light mr-8">
              {data.HeroStatsThree.value}{" "}
              <Image src={EthIcon} alt="image icon" />
            </p>
          </div>
        </div>
        {account && (
          <div className="z-10">
            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  decrementMintAmount();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span className="text-3xl mx-4 ">{mintAmount}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  incrementMintAmount();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              <button
                className="flex items-center justify-center text-sm 
                font-medium text-white cursor-pointer rounded-xl mt-7 bg-primary w-154 h-55 z-20"
                onClick={() => {
                  console.log("Clicking on mint mobile");
                  mintNft(mintAmount);
                }}
              >
                {data.Hero_btn}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full overflow-hidden ">
        <ScrollImage />
      </div>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default HeroSection;
