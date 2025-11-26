// Data jadwal sholat
const jadwalSholat = [
    "Subuh : 04.30 WIB",
    "Dhuha : 06.00 WIB",
    "Dzuhur : 11.45 WIB",
    "Ashar : 15.10 WIB",
    "Maghrib : 17.55 WIB",
    "Isya : 19.10 WIB"
];

// Element teks
const textBox = document.getElementById("runteks2-text");

let index = 0;

// Fungsi tampilkan data baru
function showNextSholat() {
    textBox.style.opacity = 0; // fade out

    setTimeout(() => {
        textBox.innerText = jadwalSholat[index];
        textBox.style.opacity = 1; // fade in

        index = (index + 1) % jadwalSholat.length;
            setTimeout(() => {
                window.location.href = "runteks3.html";
    }, 4000);
}

// Start
showNextSholat();
setInterval(showNextSholat, 4000);
