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
    image: "placeholder",
    imageAlt: "placeholder",
    slug: "my-hometown"
  },
  {
    title: "My Interests",
    date: "10/16/2025",
    description: "A blog about the things I'm interested in!",
    image: "placeholder",
    imageAlt: "placeholder",
    slug: "my-interests"
  },
];

const blogContainer = document.getElementById("blog-container");

function loadBlogs() {
  blogs.forEach((blog) => {
    const link = document.createElement("a")
    link.href = "blog-posts/" + blog.slug + ".html"
    blogContainer?.appendChild(link);

    const blogPost = document.createElement("div");
    blogPost.className = "post-preview"
    link.appendChild(blogPost)

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
    image.src = blog.image;
    image.alt = blog.imageAlt;
    blogPost.appendChild(image);
  });
}

loadBlogs();
