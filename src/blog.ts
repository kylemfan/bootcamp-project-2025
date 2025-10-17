type Blog = {
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
    image: "blog-images/GoldenGateBridge_IconicBridgePhoto.jpg",
    imageAlt: "An image of the Golden Gate Bridge",
    slug: "my-hometown",
  },
  {
    title: "My Interests",
    date: "10/16/2025",
    description: "A blog about the things I'm interested in!",
    image: "blog-images/rallyaviation.jpg",
    imageAlt: "An image of a helicopter chasing a Rally car",
    slug: "my-interests",
  },
];

const blogContainer = document.getElementById("blog-container");

function loadBlogs() {
  blogs.forEach((blog) => {
    const link = document.createElement("a");
    link.className = "post-link";
    link.href = "blog-posts/" + blog.slug + ".html";
    blogContainer?.appendChild(link);

    const blogPost = document.createElement("div");
    blogPost.className = "post-preview";
    link.appendChild(blogPost);

    const title = document.createElement("h1");
    title.innerHTML = blog.title;
    blogPost.appendChild(title);

    const date = document.createElement("h3");
    date.innerHTML = blog.date;
    blogPost.appendChild(date);

    const description = document.createElement("p");
    date.innerHTML = blog.description;
    blogPost.appendChild(description);

    const image = document.createElement("img");
    image.className = "post-preview-img"
    image.src = blog.image;
    image.alt = blog.imageAlt;
    blogPost.appendChild(image);
  });
}

loadBlogs();
