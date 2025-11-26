const runText = document.getElementById("runteks-text");

const welcomeText = "SELAMAT DATANG DI MASJID JAMI BAITURRAHMAN KEL KEMIRIMUKA";

let welcomeCount = 0;

startWelcome();

function startWelcome() {
    runText.innerText = welcomeText;
    welcomeCount = 0;

    let interval = setInterval(() => {
        welcomeCount++;

        if (welcomeCount >= 5) {
            clearInterval(interval);
            window.location.href = "runteks2.html";
        }

    }, 8000);
}
