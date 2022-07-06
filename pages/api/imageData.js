
export default function handler(req, res) {
    
    res.status(200).json({ 
        image1: "/scrollImage/imageOne.png",
        image2: "/scrollImage/imageTwo.png",
        image3: "/scrollImage/imageThree.png",
        image4: "/scrollImage/imageFour.png",
        image5: "/scrollImage/imageFive.png"
    })
  }
  