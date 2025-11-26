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

        index++;

        // Jika semua jadwal sudah tampil → lanjut ke halaman berikutnya
        if (index >= jadwalSholat.length) {
            setTimeout(() => {
                window.location.href = "runteks3.html";
            }, 3000); // jeda sebelum pindah halaman
        }

    }, 800);
}

// Mulai
showNextSholat();

// Interval hanya berjalan sampai index < length
const interval = setInterval(() => {
    if (index < jadwalSholat.length) {
        showNextSholat();
    } else {
        clearInterval(interval);
    }
}, 3000);
