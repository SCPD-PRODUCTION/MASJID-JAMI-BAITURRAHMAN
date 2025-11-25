// Runteks default
let defaultRuntext = "MASJID JAMI BAITURRAHMAN";

// Data acara yang dimasukkan admin (bisa dari database / JSON / Firebase)
let events = [
    // Contoh:
    // {
    //   title: "Kajian Ba'da Maghrib",
    //   startTime: "2025-11-26 18:00",
    //   endTime: "2025-11-26 20:00"
    // }
];

// Fungsi update runteks
function updateRuntext() {
    let now = new Date();
    let marquee = document.getElementById("runteks");

    // Cari acara yang sedang aktif
    let activeEvents = events.filter(event => {
        let start = new Date(event.startTime);
        let end = new Date(event.endTime);
        return now >= start && now <= end;
    });

    // Jika ada acara yang sedang berlangsung
    if (activeEvents.length > 0) {
        marquee.innerText = activeEvents[0].title;
        return;
    }

    // Jika tidak ada acara aktif → default
    marquee.innerText = defaultRuntext;
}

// Cek setiap 1 detik
setInterval(updateRuntext, 1000);
updateRuntext();
