// Data jadwal sholat
const jadwalSholat = [
    "Subuh : 04.30 WIB",
    "Dzuhur : 11.45 WIB",
    "Ashar : 15.10 WIB",
    "Maghrib : 17.55 WIB",
    "Isya : 19.10 WIB"
];

// Element teks
const textBox = document.getElementById("runteks1-text");

let index = 0;

// Fungsi tampilkan data baru
function showNextSholat() {
    textBox.style.opacity = 0; // fade out

    setTimeout(() => {
        textBox.innerText = jadwalSholat[index];
        textBox.style.opacity = 1; // fade in

        index = (index + 1) % jadwalSholat.length;
    }, 1000);
}

// Start
showNextSholat();
setInterval(showNextSholat, 3500);
