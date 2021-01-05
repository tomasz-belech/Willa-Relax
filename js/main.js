const navBtn = document.getElementById("nav-btn");
const cancelBtn = document.getElementById("cancel-btn");
const sideNav = document.getElementById("sidenav");
const modal = document.getElementById("modal");

navBtn.addEventListener("click", function () {
  sideNav.classList.add("show");
  modal.classList.add("showModal");
});

cancelBtn.addEventListener("click", function () {
  sideNav.classList.remove("show");
  modal.classList.remove("showModal");
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    sideNav.classList.remove("show");
    modal.classList.remove("showModal");
  }
});

function initMap() {
  const location = { lat: 49.941451, lng: 19.849048 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

//Get the button:
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
