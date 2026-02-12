export interface Ranger {
  id: string;
  name: string;
  role: string;
  color: string;
  bio: string;
  website: string;
  image: string;
  techStack: string[];
}

export interface TravelPhoto {
  id: string;
  url: string;
  location: string;
  description: string;
}

export interface AdventurePhoto {
  id: string;
  url: string;
  caption: string;
}

export interface Adventure {
  id: string;
  location: string;
  date: string;
  coverImage: string;
  description: string;
  color: string;
  photos: AdventurePhoto[];
  highlights: string[];
}


