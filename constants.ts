import { Ranger, TravelPhoto, Adventure } from './types';

export const TEAM_NAME = "Steel Town Power Rangers";
export const ORIGIN_STORY = "Forged in the fires of Hammer Hacks, the Steel Town Power Rangers united over a shared love for code, caffeine, and creating cool sh*t. Hailing from Hamilton, Ontario, we bring a blue-collar work ethic to white-collar tech problems.";

export const RANGERS: Ranger[] = [
  {
    id: 'ethan',
    name: "Ethan",
    role: "Developer",
    color: "bg-blue-500",
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
    color: "bg-yellow-400",
    bio: "Creative developer focused on UI/UX.",
    website: "https://mikaelagomez.vercel.app/",
    image: "https://picsum.photos/400/500?random=3",
    techStack: ["Design", "Frontend"]
  },
  {
    id: 'chayanth',
    name: "Chayanth",
    role: "Engineer",
    color: "bg-gray-800",
    bio: "Software Engineer.",
    website: "https://chayanths312.github.io/ChayanthSt/",
    image: "https://picsum.photos/400/500?random=4",
    techStack: ["Backend", "Cloud"]
  },
  {
    id: 'aaron',
    name: "Aaron",
    role: "Member",
    color: "bg-pink-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=5",
    techStack: ["Tech", "Strategy"]
  },
  {
    id: 'aneek',
    name: "Aneek",
    role: "Member",
    color: "bg-purple-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=6",
    techStack: ["Code", "Coffee"]
  },
  {
    id: 'ivy',
    name: "Ivy",
    role: "Member",
    color: "bg-green-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=7",
    techStack: ["Design", "Creative"]
  },
  {
    id: 'joel',
    name: "Joel",
    role: "Member",
    color: "bg-cyan-300",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=8",
    techStack: ["Tech", "Data"]
  },
  {
    id: 'selena',
    name: "Selena",
    role: "Member",
    color: "bg-red-500",
    bio: "Steel Town Power Ranger.",
    website: "#",
    image: "https://picsum.photos/400/500?random=9",
    techStack: ["Product", "Innovation"]
  },
  {
    id: 'zac',
    name: "Zac",
    role: "Member",
    color: "bg-gray-400",
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

export const ADVENTURES: Adventure[] = [
  {
    id: 'toronto',
    location: 'Toronto',
    date: 'Summer 2025',
    coverImage: 'https://picsum.photos/800/600?random=20',
    description: 'CN Tower views, street food adventures, and unforgettable memories in Canada\'s largest city.',
    color: 'bg-red-500',
    highlights: [
      'CN Tower Sunset Views',
      'St. Lawrence Market Food Tour',
      'Distillery District Exploration',
      'Toronto Islands Day Trip',
      'Night out at King Street'
    ],
    photos: [
      { id: 'tor1', url: 'https://picsum.photos/800/600?random=21', caption: 'CN Tower at sunset' },
      { id: 'tor2', url: 'https://picsum.photos/800/600?random=22', caption: 'Group photo at the waterfront' },
      { id: 'tor3', url: 'https://picsum.photos/800/600?random=23', caption: 'Street food adventures' },
      { id: 'tor4', url: 'https://picsum.photos/800/600?random=24', caption: 'Distillery District vibes' },
      { id: 'tor5', url: 'https://picsum.photos/800/600?random=25', caption: 'Toronto Islands fun' },
      { id: 'tor6', url: 'https://picsum.photos/800/600?random=26', caption: 'Night lights downtown' },
    ]
  },
  {
    id: 'san-francisco',
    location: 'San Francisco',
    date: 'Fall 2025',
    coverImage: 'https://picsum.photos/800/600?random=30',
    description: 'Golden Gate adventures, tech hub tours, and coastal California magic.',
    color: 'bg-blue-500',
    highlights: [
      'Golden Gate Bridge Walk',
      'Alcatraz Island Tour',
      'Fisherman\'s Wharf Seafood',
      'Tech Company Campus Visits',
      'Cable Car Rides',
      'Painted Ladies Photo Op'
    ],
    photos: [
      { id: 'sf1', url: 'https://picsum.photos/800/600?random=31', caption: 'Golden Gate Bridge crossing' },
      { id: 'sf2', url: 'https://picsum.photos/800/600?random=32', caption: 'Squad at Alcatraz' },
      { id: 'sf3', url: 'https://picsum.photos/800/600?random=33', caption: 'Fresh seafood at the wharf' },
      { id: 'sf4', url: 'https://picsum.photos/800/600?random=34', caption: 'Tech campus tour' },
      { id: 'sf5', url: 'https://picsum.photos/800/600?random=35', caption: 'Cable car adventure' },
      { id: 'sf6', url: 'https://picsum.photos/800/600?random=36', caption: 'Painted Ladies sunset' },
      { id: 'sf7', url: 'https://picsum.photos/800/600?random=37', caption: 'Chinatown exploration' },
      { id: 'sf8', url: 'https://picsum.photos/800/600?random=38', caption: 'Ocean Beach vibes' },
    ]
  }
];
