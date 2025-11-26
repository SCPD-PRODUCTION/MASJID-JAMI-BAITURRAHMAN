let jadwalSholat = [
    "Subuh 04:30",
    "Dhuha 06:00",
    "Dzuhur 12:00",
    "Ashar 15:15",
    "Maghrib 17:45",
    "Isya 19:00"
];

let welcomeCount = 0;
let currentSholat = 0;

startWelcome();

// =============================
// MODE SELAMAT DATANG
// =============================
function startWelcome() {
    runText.classList.remove("fade");
    runText.classList.add("marquee");
    runText.classList.remove("centered");
    runText.innerText = welcomeText;

    welcomeCount = 0;

    let interval = setInterval(() => {
        welcomeCount++;

        if (welcomeCount >= 5) {
            clearInterval(interval);
            runText.classList.remove("marquee");
            runText.classList.add("centered"); // ⬅ kembali ke tengah
            startJadwal();
        }
    }, 8000);
}

// =============================
// MODE JADWAL SHOLAT
// =============================
function startJadwal() {
    currentSholat = 0;
    changeSholat();

    let sholatInterval = setInterval(() => {
        currentSholat++;

        if (currentSholat >= jadwalSholat.length) {
            clearInterval(sholatInterval);
            startWelcome();
            return;
        }

        changeSholat();

    }, 5000);
}

function changeSholat() {
    runText.classList.add("fade");
    runText.innerText = "JADWAL SHOLAT: " + jadwalSholat[currentSholat];

    setTimeout(() => {
        runText.classList.remove("fade");
    }, 5000);
}
