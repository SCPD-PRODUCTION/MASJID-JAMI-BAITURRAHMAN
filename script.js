const runText = document.getElementById("runteks-text");

const welcomeText = "SELAMAT DATANG DI MASJID JAMI BAITURRAHMAN KEL KEMIRIMUKA";

let jadwalSholat = [
    "Subuh 04:30",
    "Dhuha 06:00",
    "Dzuhur 12:00",
    "Ashar 15:15",
    "Maghrib 17:45",
    "Isya 19:00"
];

// Counter SELAMAT DATANG
let welcomeCount = 0;

// Mode sistem
let mode = "welcome";  // welcome → jadwal → welcome…

let currentSholat = 0;

// MULAI RUNTEKS
startWelcome();

function startWelcome() {
    mode = "welcome";
    runText.innerText = welcomeText;
    runText.classList.remove("fade");
    runText.classList.add("marquee");

    let interval = setInterval(() => {
        welcomeCount++;

        if (welcomeCount >= 5) {
            // STOP WELCOME
            clearInterval(interval);
            runText.classList.remove("marquee");
            runText.style.left = "0";  // diam di tengah
            startJadwal();
        }
    }, 8000); // 8 detik = durasi marquee
}

function startJadwal() {
    mode = "jadwal";
    changeSholat();

    let sholatInterval = setInterval(() => {
        currentSholat++;

        // Jika semua jadwal selesai → balik ulang lagi ke welcome
        if (currentSholat >= jadwalSholat.length) {
            clearInterval(sholatInterval);
            currentSholat = 0;
            welcomeCount = 0;
            startWelcome();
            return;
        }

        changeSholat();

    }, 4000); // ganti jadwal setiap 4 detik
}

function changeSholat() {
    runText.classList.add("fade");
    runText.innerText = "JADWAL SHOLAT: " + jadwalSholat[currentSholat];

    setTimeout(() => {
        runText.classList.remove("fade");
    }, 1000);
}
