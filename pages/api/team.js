export default function handler(req, res) {
  res.status(200).json([
    {
      jobTitle: "Web Devloper",
      name: "James Robinson",
      quote:
        "If your actions create a legacy that inspires others to dream more, learn more, do more...",
      original: "/OurTeam/1.png",
      thumbnail: "/OurTeam/1.png",
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
      original: "/OurTeam/2.png",
      thumbnail: "/OurTeam/2.png",
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
      original: "/OurTeam/3.png",
      thumbnail: "/OurTeam/3.png",
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
      original: "/OurTeam/4.png",
      thumbnail: "/OurTeam/4.png",
      socials: {
        linkedin: "icons/linkedin.svg",
        twitter: "icons/twitter-logo.svg",
        dribbble: "icons/dribbble.svg",
      },
    },
  ]);
}
