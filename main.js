const API = "http://localhost:3000";

// RUNTEKS 1
fetch(API + "/runteks1")
    .then(r => r.json())
    .then(d => document.getElementById("r1-text").innerText = d.text);

// JADWAL SHOLAT FADE
setInterval(() => {
    fetch(API + "/jadwal-sholat")
        .then(r => r.json())
        .then(d => {
            const el = document.getElementById("jadwal-sholat");
            el.style.opacity = 0;
            setTimeout(() => {
                el.innerText = d.jadwal;
                el.style.opacity = 1;
            }, 400);
        });
}, 3500);

// RUNTEKS 3
fetch(API + "/runteks3")
    .then(r => r.json())
    .then(d => document.getElementById("r3-text").innerText = d.text);

// BANNER
fetch(API + "/banner")
    .then(r => r.json())
    .then(d => {
        document.getElementById("banner-image").src = d.url;
    });
