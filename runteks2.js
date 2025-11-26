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

// Tampilkan jadwal pertama langsung
showNextSholat();

// Jalan setiap 3 detik
const interval = setInterval(() => {

    // Jika sudah menampilkan jadwal terakhir (Isya)
    if (index === jadwalSholat.length) {
        clearInterval(interval);

        // tunggu 3 detik lalu pindah ke runteks3.html
        setTimeout(() => {
            window.location.href = "runteks3.html";
        }, 3000);

        return;
    }

    showNextSholat();

}, 3000);


// ---- FUNGSI UTAMA ----
function showNextSholat() {
    textBox.style.opacity = 0; // fade out

    setTimeout(() => {
        textBox.innerText = jadwalSholat[index];
        textBox.style.opacity = 1; // fade in

        index++; // pindah ke jadwal berikutnya

    }, 700);
}
