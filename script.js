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

let countWelcome = 0;
let idxSholat = 0;

/* MAIN */
startWelcome();

/* --- Marquee 1x --- */
function playMarqueeOnce() {
    return new Promise(resolve => {
        // set teks
        runText.innerText = welcomeText;

        // reset posisi
        runText.style.transform = "translateX(100vw) translateY(-50%)";

        // restart animasi
        runText.classList.remove("marquee");
        void runText.offsetWidth; // reflow
        runText.classList.add("marquee");

        // selesai animasi
        runText.addEventListener("animationend", function end() {
            runText.removeEventListener("animationend", end);
            resolve();
        });
    });
}

/* --- Selamat datang 5 kali --- */
async function startWelcome() {
    countWelcome = 0;

    for (let i = 0; i < 5; i++) {
        await playMarqueeOnce();
    }

    // stop marquee → kembali ke tengah
    runText.classList.remove("marquee");
    runText.style.transform = "translate(-50%, -50%)";
    runText.style.left = "50%";

    startJadwal();
}

/* --- Jadwal sholat --- */
function startJadwal() {
    idxSholat = 0;
    showSholat();

    let interval = setInterval(() => {
        idxSholat++;

        if (idxSholat >= jadwalSholat.length) {
            clearInterval(interval);
            startWelcome();
            return;
        }

        showSholat();
    }, 4000);
}

function showSholat() {
    runText.classList.remove("marquee");
    runText.classList.remove("fade");
    void runText.offsetWidth;
    runText.classList.add("fade");

    setTimeout(() => {
        runText.innerText = "JADWAL SHOLAT: " + jadwalSholat[idxSholat];
        runText.classList.add("show");
    }, 80);

    runText.style.transform = "translate(-50%, -50%)";
    runText.style.left = "50%";
}
