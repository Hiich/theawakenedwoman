
export default function handler(req, res) {
    
    res.status(200).json({ 
        Hero_Title: "I’m woman phenomenally",
        Hero_Content: "The Awakened Woman is a thriving community focused on empowering women to live their most magnificent lives in all areas; Physically, Mentally, Spiritually & Financially As the lion’s portal opens on the 8th day of the 8th month, Gaia is activating 5,555 women to Awaken as the Keepers of earth for her & humanity’s survival.",
        HeroStatsOne:{
            title: "Minting",
            value: "8/8/12"
        },
        HeroStatsTwo:{
            title: "Collection",
            value: "5,555"
        },
        HeroStatsThree:{
            title: "Blockchain",
            value: "ETH"
        },
        Hero_btn:"Mint NFT"

        
    })
  }
  