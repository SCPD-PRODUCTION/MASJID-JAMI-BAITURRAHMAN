// Runteks dinamis dari admin
let defaultRunteks = "SELAMAT DATANG DI MASJID JAMI BAITURRAHMAN KEL KEMIRIMUKA";
let runteks = localStorage.getItem("runteks") || defaultRunteks;
document.getElementById("runteks-text").textContent = runteks;

// Banner dinamis dari admin
let defaultBanner = "https://via.placeholder.com/1200x300.png?text=Banner+Masjid";
let banner = localStorage.getItem("bannerMasjid") || defaultBanner;
document.getElementById("banner-image").src = banner;
