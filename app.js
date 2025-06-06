// target the project video elements //
const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");

// Sidebar elements //
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// Hover effect for video elements //
const hoverSign = document.querySelector(".hover-sign");

// Create an array of video elements //
const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// add event listerner to open the sidebar //
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

// add event listener to close the sidebar //
closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// target the contact me button in hero section //
const contactMeBtn = document.querySelector(".hero button");

// function to scroll to contact section //
function scrolltoContactSection() {
  const contactSection = document.getElementById("contact-section");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

// add event listener to scroll to contact section //
contactMeBtn.addEventListener("click", scrolltoContactSection);

// target the contact me button in about section //
const contactMeBtnAbout = document.querySelector(".info-section button");

// add event listener to scroll to contact section //
contactMeBtnAbout.addEventListener("click", scrolltoContactSection);

// target the skill Sprint Project Button //
const skillSprintBtn = document.getElementById("skillSprintProject");

// add event listener to redirect to skill sprint project website //
skillSprintBtn.addEventListener("click", () => {
  redirectToProjectWebsite("https://mjskillsprint.vercel.app/");
});

// target the career path finder project button //
const careerPathFinderBtn = document.getElementById("careerPathFinderProject");

// add event listener to redirect to career path finder project website //
careerPathFinderBtn.addEventListener("click", () => {
  redirectToProjectWebsite("https://mjcareerpath.vercel.app/");
});

// target the e-commerce shop.co project button //
const eCommerceShopBtn = document.getElementById("shopCoProject");

// add event listener to redirect to e-commerce shop.co project website //
eCommerceShopBtn.addEventListener("click", () => {
  redirectToProjectWebsite("https://mjshopco.vercel.app/");
});

// function to redirect to skill sprint project //
function redirectToProjectWebsite(link) {
  window.open(link, "_blank");
}

// Function to send email using EmailJS //
function sendEmail(name, email, message) {
  emailjs
    .send(
      "service_iu0pbcp",
      "template_dkid99g",
      {
        name: name,
        email: email,
        message: message,
      },
      "ART4tZD9aS_voEnoJ"
    )
    .then(
      (response) => {
        document.querySelector(".success-popup").style.display = "block"; // Show success popup
        setTimeout(() => {
          document.querySelector(".success-popup").style.display = "none"; // Hide success popup after 3 seconds
        }, 1500);
      },
      (err) => {
        document.querySelector(".failed-popup").style.display = "block"; // Show error popup
        setTimeout(() => {
          document.querySelector(".failed-popup").style.display = "none"; // Hide error popup after 3 seconds
        }, 1500);
      }
    );
}

// target the contact form submit button //
const contactFormSubmitBtn = document.querySelector(".contact-box button");

// add event listener to send email on form submit //
contactFormSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  sendEmail(name, email, message); // Call the sendEmail function
});
