
export default function handler(req, res) {
    
    res.status(200).json({ 
        image1: "/team/imageOne.png",
        image2: "/team/imageTwo.png",
        image3: "/team/imageThree.png",
        image4: "/team/imageFour.png",
        image5: "/team/imageFive.png"
    })
  }
  