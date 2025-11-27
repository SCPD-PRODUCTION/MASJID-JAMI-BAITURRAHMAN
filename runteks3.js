async function loadAgenda() {
    try {
        // Ambil data agenda dari server (admin upload)
        let response = await fetch("runteks.json?time=" + Date.now());
        let data = await response.json();

        let now = new Date();
        let start = new Date(data.mulai);
        let end = new Date(data.selesai);

        // Jika waktu belum masuk atau sudah lewat → kembali ke runteks1
        if (now < start || now > end) {
            window.location.href = "runteks1.html";
            return;
        }

        // TAMPILKAN RUNTEX 3
        tampilkanRuntext(data);

    } catch (e) {
        // Kalau JSON tidak ada → balik ke runteks1
        window.location.href = "index.html";
    }
}

function tampilkanRuntext(data) {
    const box = document.getElementById("runteks3-text");

    // Isi teks runteks 3
    box.innerText = `${data.judul} | ${data.pembicara} | LIVE: ${data.live}`;

    // Animasi berjalan (kayak runteks 1)
    box.classList.add("marquee");
}

// Mulai
loadAgenda();
