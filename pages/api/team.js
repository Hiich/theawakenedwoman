export default function handler(req, res) {
  res.status(200).json([
    {
      jobTitle: "Web Devloper",
      name: "James Robinson",
      quote:
        "If your actions create a legacy that inspires others to dream more, learn more, do more...",
      original: "/team/teamMember.png",
      thumbnail: "/team/teamMember.png",
      socials: {
        linkedin: "icons/linkedin.svg",
        twitter: "icons/twitter-logo.svg",
        dribbble: "icons/dribbble.svg",
      },
    },
    {
      jobTitle: "Software Devloper",
      name: "Ebiwari Meshach",
      quote:
        "If your actions create a legacy that inspires others to dream more, learn more, do more...",
      original: "/team/imageTwo.png",
      thumbnail: "/team/imageTwo.png",
      socials: {
        linkedin: "icons/linkedin.svg",
        twitter: "icons/twitter-logo.svg",
        dribbble: "icons/dribbble.svg",
      },
    },
    {
      jobTitle: "Product Designer",
      name: "Benjamin Onyebuchi",
      quote:
        "If your actions create a legacy that inspires others to dream more, learn more, do more...",
      original: "/team/imageThree.png",
      thumbnail: "/team/imageThree.png",
      socials: {
        linkedin: "icons/linkedin.svg",
        twitter: "icons/twitter-logo.svg",
        dribbble: "icons/dribbble.svg",
      },
    },
    {
      jobTitle: "Software Developer",
      name: "Ada Ihueze",
      quote:
        "If your actions create a legacy that inspires others to dream more, learn more, do more...",
      original: "/team/imageFour.png",
      thumbnail: "/team/imageFour.png",
      socials: {
        linkedin: "icons/linkedin.svg",
        twitter: "icons/twitter-logo.svg",
        dribbble: "icons/dribbble.svg",
      },
    },
  ]);
}
