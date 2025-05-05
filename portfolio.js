const filterButtons = document.querySelectorAll(".filter-btn");
const photos = document.querySelectorAll(".photo");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    photos.forEach(photo => {
      if (category === "all" || photo.classList.contains(category)) {
        photo.style.display = "block";
      } else {
        photo.style.display = "none";
      }
    });
  });
});
