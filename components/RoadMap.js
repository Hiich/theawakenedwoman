import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";




// RotateBadge
import RotateBadge from "../components/Fragment/CircleImage";
// Icons
import ImageIcon from "../public/icons/image.svg";

// Fetch Data
function RoadMap() {



    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/RoadMapData')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading StackedCard</p>
    if (!data) return <p>No data</p>
    
	return (

    
		<section id="roadmap" className="flex min-h-screen text-center justify-center bg-RM-pattern bg-size-cover bg-no-repeat overflow-hidden">
      <div>
         <div className="w-761 pt-20">
                <h1 className="font-V-Bold text-36">{data.RM_Title}</h1>
                <p className="font-Poppins-Light text-xl">{data.RM_Content}</p>
            </div>
        <div id="roadmap-timeline">
          <div className="timeline">
            <ul>
              <li>
                <div className="done">
                  <time>Phase 1</time>
                  <h1>Whitelist</h1>
                  <p>
                    This is the <em>current phase</em> of the project. Follow us
                    on <a href="https://twitter.com/Dickheads_Club">Twitter</a>,
                    <a href="https://instagram.com/DickheadsClub">Instagram</a>,
                    or join
                    <a href="https://discord.gg/Zaa4r8yZyd">our Discord</a> to
                    get a spot on our <strong>white list</strong>.
                  </p>
                </div>
              </li>
              <li>
                <div className="done">
                  <time>Phase 2</time>
                  <h1>Pre-sale</h1>
                  <p>
                    <strong>100 whitelisted members</strong> will be able to
                    mint dicks (max 20 per address) at a discounted price during
                    a 2 days only!
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <time>Phase 3</time>
                  <h1>Public Sale</h1>
                  <p>
                    On launch day, everybody can mint as many dicks as they want
                    at public sale price. Only
                    <strong>2,222 dicks available</strong>!
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <time>50% Minted</time>
                  <h1>Giveaways</h1>
                  <p>
                    At 50% mint sale, well
                    <strong>randomly airdrop</strong> some Dickheads NFT to
                    holders!
                  </p>
                  <p>Call it a <em>penises rain</em>.</p>
                </div>
              </li>
              <li>
                <div>
                  <time>After Mint</time>
                  <h1>1 ETH Giveaway!</h1>
                  <p>
                    After sell out we will give away 1 ETH to a randomly picked
                    person that minted a dickhead.
                  </p>
                  <p>The more you mint, the higher are your chances to win!</p>
                </div>
              </li>
              <li>
                <div>
                  <time>After Mint</time>
                  <h1>The Dickheads Wall™</h1>
                  <p>
                    Holders of a dickhead will be able to express themselves on
                    a <strong>white wall</strong>, directly on this website.
                    Draw anything you like: a dick, a pussy, a link to your
                    website, anything!
                  </p>
                  <p>The first <em>dApp toilet wall</em>!</p>
                </div>
              </li>
              <li>
                <div>
                  <time>After Mint</time>
                  <h1>Gen 2 (Enlarge your NFTs)</h1>
                  <p>
                    Well probably not make serums and mutant dicks, our goal is
                    to start working on a <strong>GEN2 collection</strong>, a 3D
                    or an animated version for example.<br />The idea is to make
                    a collection of <strong>4,444 NFTs</strong> and airdop 50%
                    of the collection to GEN1 holders <strong>for free</strong>!
                    The remaining 50% will be sold.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <time>After Mint</time>
                  <h1>Unfair Advantages</h1>
                  <p>
                    This is probably the most important part of our roadmap.
                  </p>
                  <p>
                    The Dickheads Club is the first project of the
                    <a href="https://0xodyssey.com" target="blank"
                      >0x Odyssey studio</a
                    >
                    and we have a lot of projects in the boxes.
                  </p>
                  <p>
                    Having a dickhead in your wallet means you were an early
                    investor of the studio. And as an investor, be sure that
                    well always give you
                    <strong>crazy unfair advantages</strong> on all future
                    projects...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </section>
	);
}

export default RoadMap;