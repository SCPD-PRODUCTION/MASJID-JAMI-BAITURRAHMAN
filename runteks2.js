const jadwalSholat = [
    "Subuh : 04.30 WIB",
    "Dhuha : 06.00 WIB",
    "Dzuhur : 11.45 WIB",
    "Ashar : 15.10 WIB",
    "Maghrib : 17.55 WIB",
    "Isya : 19.10 WIB"
];

const textBox = document.getElementById("runteks2-text");
let index = 0;

// FUNGSI UTAMA
function tampilkanJadwal() {

    // Fade out
    textBox.style.opacity = 0;

    setTimeout(() => {

        // Set teks baru
        textBox.innerText = jadwalSholat[index];

        // Fade in
        textBox.style.opacity = 1;

        // Kalau sudah ISYA → stop & pindah halaman
        if (index === jadwalSholat.length - 1) {

            setTimeout(() => {
                window.location.href = "runteks3.html";
            }, 3000);  // tunggu 3 detik biar kebaca

            return; // stop tanpa lanjut interval
        }

        // Lanjut ke jadwal berikutnya
        index++;

        // Tunggu 3 detik lalu tampilkan lagi
        setTimeout(tampilkanJadwal, 3000);

    }, 700); // fade-out duration
}

// Mulai
tampilkanJadwal();
