export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My Hometown",
    date: "10/16/2025",
    description: "A blog about where I'm from!",
    image: "/images/GoldenGateBridge_IconicBridgePhoto.jpg",
    imageAlt: "An image of the Golden Gate Bridge",
    slug: "/my-hometown",
  },
  {
    title: "My Interests",
    date: "10/16/2025",
    description: "A blog about some of the things I'm interested in!",
    image: "/images/rallyaviation.jpg",
    imageAlt: "An image of a helicopter chasing a Rally car",
    slug: "/my-interests",
  },
];

export default blogs;