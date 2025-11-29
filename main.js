const API = "http://localhost:6000";

// RUNTEKS 
fetch(API + "/Runteks")
    .then(r => r.json())
    .then(d => document.getElementById("r3-text").innerText = d.text);

// BANNER
fetch(API + "/Banner")
    .then(r => r.json())
    .then(d => {
        document.getElementById("banner-image").src = d.url;

// Profil
fetch(API + "/Profil")
    .then(r => r.json())
    .then(d => {
        document.getElementById("banner-image").src = d.url;
    });
