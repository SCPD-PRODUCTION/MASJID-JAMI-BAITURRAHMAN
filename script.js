// ===== LOAD BANNER =====
fetch("http://localhost:9000/api/banner")
  .then(res => res.json())
  .then(data => {
      document.getElementById("bannerImage").src = data.image_url;
  }).catch(()=>{});

// ===== LOAD FITUR =====
fetch("http://localhost:9000/api/features")
  .then(res => res.json())
  .then(fitur=>{
      const wrap = document.getElementById("fiturList");
      wrap.innerHTML = "";
      fitur.forEach(f=>{
          wrap.innerHTML += `<div class="fitur-card">
                                <img src="${f.image_url}">
                                <h3>${f.title}</h3>
                                <p>${f.desc}</p>
                             </div>`;
      });
  }).catch(()=>{});

// ===== LOAD GALERI =====
fetch("http://localhost:9000/api/gallery")
  .then(res=>res.json())
  .then(gallery=>{
      const wrap = document.getElementById("galeriWrapper");
      wrap.innerHTML="";
      gallery.forEach(item=>{
          wrap.innerHTML += `<img src="${item.image_url}">`;
      });
  }).catch(()=>{});

// ===== LOAD MAP =====
fetch("http://localhost:9000/api/map")
  .then(res=>res.json())
  .then(data=>{
      document.getElementById("mapEmbed").src = data.embed_url;
  }).catch(()=>{});

// ===== RUNTEXT OTOMATIS =====
function loadRunningText(){
    fetch("http://localhost:9000/api/acara")
        .then(res=>res.json())
        .then(acara=>{
            const now = new Date();
            let runtext = "MASJID JAMI BAITURRAHMAN";
            acara.forEach(ev=>{
                const start = new Date(ev.mulai);
                const end   = new Date(ev.selesai);
                if(now>=start && now<=end){
                    runtext = `${ev.judul} – ${ev.pemateri || ev.penanggung}`;
                }
            });
            document.getElementById("runningText").innerText = runtext;
        });
}
setInterval(loadRunningText,30000);
loadRunningText();
