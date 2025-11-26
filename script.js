// DATA SEMENTARA (akan diganti admin)
let jadwalSholat = [
    "Subuh 04:30",
    "Dhuha 06:00",
    "Dzuhur 12:00",
    "Ashar 15:15",
    "Maghrib 17:45",
    "Isya 19:00"
];

// Data kajian dari admin
let kajian = JSON.parse(localStorage.getItem("kajianData")) || [];

// Default text
const defaultRunteks = "SELAMAT DATANG DI MASJID JAMI BAITURRAHMAN KEL KEMIRIMUKA";

const runText = document.getElementById("runteks-text");

// SISTEM PERGANTIAN RUNTEKS
let indexSholat = 0;
let mode = "default";

function updateRunteks() {
    let liveKajian = kajian.find(k => k.linkLive && k.linkLive.trim() !== "");

    // Jika ada live
    if (liveKajian) {
        mode = "live";
        runText.classList.add("fade");
        runText.innerText = "KAJIAN LIVE: " + liveKajian.judul.toUpperCase();
        checkLiveStatus(liveKajian.linkLive);
        return;
    }

    if (mode === "default") {
        runText.innerText = defaultRunteks;
        mode = "sholat";
    }

    else if (mode === "sholat") {
        runText.classList.add("fade");
        runText.innerText = "JADWAL SHOLAT: " + jadwalSholat[indexSholat];
        indexSholat++;

        if (indexSholat >= jadwalSholat.length) {
            indexSholat = 0;
            if (kajian.length > 0) mode = "kajian";
            else mode = "default";
        }
    }

    else if (mode === "kajian") {
        const randomKajian = kajian[Math.floor(Math.random() * kajian.length)];
        runText.classList.add("fade");
        runText.innerText = "KAJIAN: " + randomKajian.judul.toUpperCase();
        mode = "default";
    }

    setTimeout(() => {
        runText.classList.remove("fade");
    }, 1000);
}

setInterval(updateRunteks, 5000);


// CEK STATUS LIVE
function checkLiveStatus(url) {
    let videoId = null;

    if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1];
    } else if (url.includes("youtu.be")) {
        videoId = url.split("youtu.be/")[1];
    }

    if (!videoId) return;

    // Tanpa YouTube API → fallback waktu 10 menit
    setTimeout(() => { mode = "default"; }, 600000);
}
