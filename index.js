import { blogArray } from "./data.js";

const mainContentEl = document.getElementById("main-content");
const blogClasses = document.getElementsByClassName("blog-post");


// the below function takes in the blog array from the data.js file.
// it then looks at the width of the browser window to determine how
// big the width is for viewing. based on the size, the function then
// determines how many blog posts should be rendered.

function renderBlogArray() {
  let innerWidth = window.innerWidth;
  let blogString = "";
  if (innerWidth < 481) {
    for (let i = 0; i < 3; i++) {
      blogString += blogArray[i];
    }
  } else if (innerWidth >= 481 && innerWidth <= 718) {
    for (let i = 0; i < 4; i++) {
      blogString += blogArray[i];
    }
  } else if (innerWidth >= 719 && innerWidth <= 964) {
    for (let i = 0; i < 5; i++) {
      blogString += blogArray[i];
    }
  } else if (innerWidth >= 965) {
    for (let i = 0; i < 6; i++) {
      blogString += blogArray[i];
    }
  }
  addFlexChange();
  mainContentEl.innerHTML = blogString;
}

// the below function is an attempt to make the blog posts bigger
// on very wide screens. It changes the flex-basis of the blog posts
// by adding a class to those elements.

function addFlexChange() {
  for (let i = 0; i < blogClasses.length; i++) {
    if (innerWidth >= 965) {
      blogClasses[i].classList.add("flex-change");
    } else {
      blogClasses[i].classList.remove("flex-change");
    }
  }
}

window.addEventListener("resize", renderBlogArray);
window.addEventListener("load", renderBlogArray);
window.addEventListener("resize", addFlexChange);
window.addEventListener("load", addFlexChange);

