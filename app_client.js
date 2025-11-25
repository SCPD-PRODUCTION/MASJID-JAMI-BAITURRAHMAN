// URL folder data
const BASE_DATA_URL = "./data";

// ========== Ambil Runteks Aktif ========== //
async function loadRunteks() {
  try {
    const events = await fetch(`${BASE_DATA_URL}/events.json`).then(r => r.json());
    const settings = await fetch(`${BASE_DATA_URL}/settings.json`).then(r => r.json());

    const now = new Date();
    let activeEvent = null;

    // CARI EVENT YANG SEDANG AKTIF
    for (const ev of events) {
      const start = new Date(ev.startISO);
      const end = new Date(ev.endISO);

      if (now >= start && now <= end) {
        activeEvent = ev;
        break;
      }
    }

    const runtek = document.getElementById("runteks");

    // JIKA ADA EVENT AKTIF → tampilkan JUDUL acara
    if (activeEvent) {
      runtek.textContent = activeEvent.title;
    } else {
      // TIDAK ADA EVENT AKTIF → tampilkan default
      runtek.textContent =
        settings.defaultRunteks || "Selamat Datang Di Masjid Jami Baiturrahman.";
    }

  } catch (e) {
    console.error(e);
    document.getElementById("runteks").textContent =
      "Gagal memuat runteks.";
  }
}

// ========== Ambil Banner ========== //
async function loadBanners() {
  try {
    const banners = await fetch(`${BASE_DATA_URL}/banners.json`).then(r => r.json());

    const box = document.getElementById("bannerContainer");
    box.innerHTML = "";

    if (banners.length === 0) {
      box.innerHTML = "<p>Tidak ada banner.</p>";
      return;
    }

    banners.forEach(b => {
      const img = document.createElement("img");
      img.src = "./public/banners/" + b.image;
      box.appendChild(img);
    });

  } catch (e) {
    console.error(e);
    document.getElementById("bannerContainer").innerHTML =
      "<p>Error memuat banner.</p>";
  }
}

// ========== Ambil Agenda ========== //
async function loadAgenda() {
  try {
    const events = await fetch(`${BASE_DATA_URL}/events.json`).then(r => r.json());
    const ul = document.getElementById("agendaList");

    ul.innerHTML = "";

    events.forEach(ev => {
      const li = document.createElement("li");
      li.textContent =
        `${ev.title} — ${new Date(ev.startISO).toLocaleString()} s/d ${new Date(ev.endISO).toLocaleString()}`;
      ul.appendChild(li);
    });

  } catch (e) {
    console.error(e);
    document.getElementById("agendaList").innerHTML =
      "<li>Error memuat agenda.</li>";
  }
}

// ========== INIT ========== //
document.addEventListener("DOMContentLoaded", () => {
  loadRunteks();
  loadBanners();
  loadAgenda();

  // Runteks dicek ulang tiap 20 detik
  setInterval(loadRunteks, 20000);
});
