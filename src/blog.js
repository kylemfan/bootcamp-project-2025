var blogs = [
    {
        title: "My Hometown",
        date: "10/16/2025",
        description: "A blog about where I'm from!",
        image: "images/GoldenGateBridge_IconicBridgePhoto.jpg",
        imageAlt: "An image of the Golden Gate Bridge",
        slug: "my-hometown",
    },
    {
        title: "My Interests",
        date: "10/16/2025",
        description: "A blog about some of the things I'm interested in!",
        image: "images/rallyaviation.jpg",
        imageAlt: "An image of a helicopter chasing a Rally car",
        slug: "my-interests",
    },
];
var blogContainer = document.getElementById("blog-container");
function loadBlogs() {
    blogs.forEach(function (blog) {
        var link = document.createElement("a");
        link.className = "post-link";
        link.href = blog.slug + ".html";
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(link);
        var blogPost = document.createElement("div");
        blogPost.className = "post-preview";
        link.appendChild(blogPost);
        var title = document.createElement("h1");
        title.innerHTML = blog.title;
        blogPost.appendChild(title);
        var date = document.createElement("h3");
        date.innerHTML = blog.date;
        blogPost.appendChild(date);
        var description = document.createElement("p");
        date.innerHTML = blog.description;
        blogPost.appendChild(description);
        var image = document.createElement("img");
        image.className = "post-preview-img";
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogPost.appendChild(image);
    });
}
loadBlogs();
