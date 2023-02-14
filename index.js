const blogPosts = document.querySelectorAll(".blog-post");
const viewMoreBtn = document.getElementById("view-more-btn");



function viewMoreBlogs() {
    for (let blog of blogPosts) {
     blog.classList.toggle("display-post");
  }
  if (viewMoreBtn.innerText === "View More") {
    viewMoreBtn.innerText = "View Less"
   } else if (viewMoreBtn.innerText === "View Less") {
    viewMoreBtn.innerText = "View More"
   }
}

viewMoreBtn.addEventListener("click", viewMoreBlogs)