
export default function handler(req, res) {
    
    res.status(200).json({ 
        teamOne: {
            jobTitle:"Web Devloper",
            name:"James Robinson",
            qoute:"If your actions create a legacy that inspires others to dream more, learn more, do more...",
            original:"/team/teamMember.png",
            thumbnail:"/team/teamMember.png",
            socials:{
                linkedin: 'icons/linkedin.svg',
                twitter: 'icons/twitter-logo.svg',
                dribbble: 'icons/dribbble.svg',
            }
        },
        teamTwo: {
            jobTitle:"Software Devloper",
            name:"Ebiwari Meshach",
            qoute:"If your actions create a legacy that inspires others to dream more, learn more, do more...",
            original:"/team/imageTwo.png",
            thumbnail:"/team/imageTwo.png",
            socials:{
                linkedin: 'icons/linkedin.svg',
                twitter: 'icons/twitter-logo.svg',
                dribbble: 'icons/dribbble.svg',
            }
        },
        teamThree: {
            jobTitle:"Product Designer",
            name:"Benjamin Onyebuchi",
            qoute:"If your actions create a legacy that inspires others to dream more, learn more, do more...",
            original:"/team/imageThree.png",
            thumbnail:"/team/imageThree.png",
            socials:{
                linkedin: 'icons/linkedin.svg',
                twitter: 'icons/twitter-logo.svg',
                dribbble: 'icons/dribbble.svg',
            }
        },
        teamFour: {
            jobTitle:"Software Developer",
            name:"Ada Ihueze",
            qoute:"If your actions create a legacy that inspires others to dream more, learn more, do more...",
            original:"/team/imageFour.png",
            thumbnail:"/team/imageFour.png",
            socials:{
                linkedin: 'icons/linkedin.svg',
                twitter: 'icons/twitter-logo.svg',
                dribbble: 'icons/dribbble.svg',
            }
        },

    })
  }
  