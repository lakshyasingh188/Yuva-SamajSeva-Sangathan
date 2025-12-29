/* ===============================
   HERO SLIDER AUTO SCROLL
================================ */

let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    if (slides.length > 0) {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }
}, 2000);


/* ===============================
   MEMBER PHOTOS BUTTON TOGGLE
================================ */

const btn = document.getElementById("togglePhotosBtn");
const photos = document.getElementById("memberPhotosSection");

if (btn && photos) {
    btn.addEventListener("click", () => {
        photos.classList.toggle("hidden");

        if (photos.classList.contains("hidden")) {
            btn.innerText = "Member Photos";
        } else {
            btn.innerText = "Hide Photos";
        }
    });
}
