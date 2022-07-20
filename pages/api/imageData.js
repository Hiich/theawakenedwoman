export default function handler(req, res) {
  res
    .status(200)
    .json([
      { image: "/team/imageOne.png" },
      { image: "/team/imageTwo.png" },
      { image: "/team/imageThree.png" },
      { image: "/team/imageFour.png" },
      { image: "/team/imageFive.png" },
    ]);
}
