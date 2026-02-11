import { Ranger, TravelPhoto } from './types';

export const TEAM_NAME = "Steel Town Power Rangers";
export const ORIGIN_STORY = "Forged in the fires of Hammer Hacks, the Steel Town Power Rangers united over a shared love for code, caffeine, and creating cool sh*t. Hailing from Hamilton, Ontario, we bring a blue-collar work ethic to white-collar tech problems.";

export const RANGERS: Ranger[] = [
  {
    id: 'ethan',
    name: "Ethan",
    role: "Developer",
    color: "bg-blue-600",
    bio: "Full Stack Developer. Check out my work.",
    website: "https://ethantran.ca",
    image: "https://picsum.photos/400/500?random=1",
    techStack: ["React", "Next.js"]
  },
  {
    id: 'william',
    name: "William",
    role: "Developer",
    color: "bg-yellow-500",
    bio: "Building cool things on the web.",
    website: "https://wcagas.com",
    image: "https://picsum.photos/400/500?random=2",
    techStack: ["Engineering", "Systems"]
  },
  {
    id: 'mikael',
    name: "Mikael",
    role: "Designer & Dev",
    color: "bg-pink-500",
    bio: "Creative developer focused on UI/UX.",
    website: "https://mikaelagomez.vercel.app/",
    image: "https://picsum.photos/400/500?random=3",
    techStack: ["Design", "Frontend"]
  },
  {
    id: 'chayanth',
    name: "Chayanth",
    role: "Engineer",
    color: "bg-green-500",
    bio: "Software Engineer.",
    website: "https://chayanths312.github.io/ChayanthSt/",
    image: "https://picsum.photos/400/500?random=4",
    techStack: ["Backend", "Cloud"]
  },
  {
    id: 'aaron',
    name: "Aaron",
    role: "Member",
    color: "bg-red-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=5",
    techStack: ["Tech", "Strategy"]
  },
  {
    id: 'aneek',
    name: "Aneek",
    role: "Member",
    color: "bg-purple-600",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=6",
    techStack: ["Code", "Coffee"]
  },
  {
    id: 'ivy',
    name: "Ivy",
    role: "Member",
    color: "bg-indigo-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=7",
    techStack: ["Design", "Creative"]
  },
  {
    id: 'joel',
    name: "Joel",
    role: "Member",
    color: "bg-cyan-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=8",
    techStack: ["Tech", "Data"]
  },
  {
    id: 'selena',
    name: "Selena",
    role: "Member",
    color: "bg-orange-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=9",
    techStack: ["Product", "Innovation"]
  },
  {
    id: 'zac',
    name: "Zac",
    role: "Member",
    color: "bg-teal-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=10",
    techStack: ["Hardware", "Software"]
  }
];

export const TRAVEL_PHOTOS: TravelPhoto[] = [
  { id: '1', url: "https://picsum.photos/600/400?random=10", location: "Berlin", description: "Tech & Travel" },
  { id: '2', url: "https://picsum.photos/600/800?random=11", location: "Munich", description: "Oktoberfest" },
  { id: '3', url: "https://picsum.photos/600/400?random=12", location: "Hamburg", description: "Port City" },
  { id: '4', url: "https://picsum.photos/600/600?random=13", location: "Cologne", description: "Cathedral Views" },
];
