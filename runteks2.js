const jadwal = [
    "SUBUH 04:31",
    "DZUHUR 11:49",
    "ASHAR 15:13",
    "MAGHRIB 17:52",
    "ISYA 19:02"
];

let idx = 0;
const box = document.getElementById("jadwalBox");

function showNext() {
    // Fade out
    box.style.opacity = 0;

    setTimeout(() => {
        // Update teks
        box.textContent = jadwal[idx];

        // Fade in
        box.style.opacity = 1;

        idx++;

        // Jika selesai semua → pindah runteks 3
        if (idx >= jadwal.length) {
            setTimeout(() => {
                window.location.href = "runteks3.html";
            }, 3500);
        }
    }, 800);
}

// Mulai tampilan pertama
showNext();

// Ganti setiap 4 detik
setInterval(() => {
    if (idx < jadwal.length) showNext();
}, 4000);

