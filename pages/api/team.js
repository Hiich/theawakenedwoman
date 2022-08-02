export default function handler(req, res) {
  res.status(200).json([
    {
      jobTitle: "Founder",
      name: "Anna Richards",
      quote:
        "If your actions create a legacy that inspires others to dream more, learn more, do more...",
      original: "/OurTeam/1.jpeg",
      thumbnail: "/OurTeam/1.jpeg",
      socials: {
        twitter:"https://twitter.com/AnnaRichards__",
        instagram:"https://www.instagram.com/thereal_annarose/",
      },
    },
    {
      jobTitle: "Artist",
      name: "Nika Bisuo",
      quote:
        "Nika is a Dominican Illustrator, Artist and Fashion Designer based in NYC. Nika finds inspiration in textures, shapes, materials, spaces, nature and words that fill her innovative work with colours and forms. For this she likes to start with intense creative research, working with music and the subconscious self as it is the part that most characterizes her work and what makes it unique and unrepeatable.",
        quote2:
        "I've always been very dreamy, creative and passionate about art and design since I was 5 years old. Now as the lead artist for the @theawakenedwoman_nft, I feel beyond proud and delighted to give life to these amazing and powerful 5,555 pieces of art. My vision behind The Awakened Woman collection is to empower women through art, giving inner meaning and power to women. ",
      original: "/OurTeam/2.jpeg",
      thumbnail: "/OurTeam/2.jpeg",
      // twitter: `https://twitter.com/nickabisou`,
      socials: {
        twitter:"https://twitter.com/nickabisou",
        instagram: "https://www.instagram.com/nickabisou",
      },
    },
    {
      jobTitle: "Software Developer",
      name: "Rosemary Nwosu-ihueze",
      quote:
        "My name is Rosemary Nwosu-ihueze, a Nigerian domiciled in the USA. I'm a computer programmer and a UX designer, currently a senior majoring in computer science. I started coding in 2020 as a frontend developer then started data science and machine learning before adding blockchain development and UX design to my retinue of skills.",
      quote2:
      "I love creating things from codes to arts to trying new recipes for food. My hobbies include traveling, cooking, coding and sleeping.",
        original: "/OurTeam/3.jpeg",
      thumbnail: "/OurTeam/3.jpeg",
      socials: {
        twitter: "https://twitter.com/adaihueze",
        instagram: "https://www.instagram.com/berryldilty",
      },
    },
    {
      jobTitle: "Community Manager",
      name: "Kandy",
      quote:
        "I’m Kandy Johnson, a 20 year old university undergraduate studying Guidance and Counseling. \n I am very positive about every aspect of life and love to see life as an adventure. \n I love the TAW project cos not only has it given me a sense of purpose but for the first time in my life, I’m loving and enjoying my work as a Discord Manager in the Web3 Space.", 
        quote2: "I love that through working as a Discord Manager for TAW project I’m finally able to do something valuable for others in my own little way and I’m contributing my time to a worthy course.",
      original: "/OurTeam/4.jpeg",
      thumbnail: "/OurTeam/4.jpeg",
      socials: {
        twitter: "https://twitter.com/KandyMeah",
        instagram: "",
      },
    },
  ]);
}
