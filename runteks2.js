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

// Fungsi tampilkan jadwal berikutnya
function showNextSholat() {
    textBox.style.opacity = 0; // fade out

    setTimeout(() => {
        textBox.innerText = jadwalSholat[index];
        textBox.style.opacity = 1; // fade in

        // Jika jadwal sudah sampai "Isya"
        if (index === jadwalSholat.length - 1) {
            // Tunggu 3 detik lalu pindah
            setTimeout(() => {
                window.location.href = "runteks3.html";
            }, 3000);
            return;
        }

        index++;

    }, 800);
}

// Mulai
showNextSholat();

// Interval pindah jadwal setiap 3 detik
const interval = setInterval(() => {
    if (index < jadwalSholat.length - 1) {
        showNextSholat();
    } else {
        clearInterval(interval);
    }
}, 3000);
