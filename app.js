"use strict";
/* İniş Rehberi uygulama mantığı. Şehir ve ülke verisi data-*.js dosyalarından gelir. */
const COUNTRIES=[TH];
let K=TH, C=null, ZONE=null, APT=0;

const CUISINES=[
  {f:"🇹🇭",t:"Tay",q:"Thai restaurant",o:"thai"},{f:"🇹🇷",t:"Türk",q:"Turkish restaurant",o:"turkish|kebab"},
  {f:"🇮🇹",t:"İtalyan",q:"Italian restaurant",o:"italian|pizza"},{f:"🇯🇵",t:"Japon",q:"Japanese restaurant",o:"japanese|sushi|ramen"},
  {f:"🇮🇳",t:"Hint",q:"Indian restaurant",o:"indian"},{f:"🇨🇳",t:"Çin",q:"Chinese restaurant",o:"chinese"},
  {f:"🇰🇷",t:"Kore",q:"Korean restaurant",o:"korean"},{f:"🇲🇽",t:"Meksika",q:"Mexican restaurant",o:"mexican"},
  {f:"🇫🇷",t:"Fransız",q:"French restaurant",o:"french"},{f:"🇷🇺",t:"Rus",q:"Russian restaurant",o:"russian"},
  {f:"🇱🇧",t:"Orta Doğu",q:"Middle Eastern restaurant",o:"lebanese|arab|middle_eastern"},{f:"🇺🇸",t:"Burger",q:"burger restaurant",o:"burger|american"}
];
const DIETS=[{t:"Helal",q:"halal",o:'["diet:halal"="yes"]'},{t:"Vejetaryen",q:"vegetarian",o:'["diet:vegetarian"~"yes|only"]'},{t:"Deniz ürünü",q:"seafood",o:'["cuisine"~"seafood"]'}];

/* ---------- yardımcılar ---------- */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const enc=encodeURIComponent;
const store={get(k){try{return localStorage.getItem("inis."+k)}catch(e){return null}},set(k,v){try{localStorage.setItem("inis."+k,v)}catch(e){}}};
const apt=()=>C.airports[APT]||C.airports[0];
const gSearch=(q,near)=>"https://www.google.com/maps/search/?api=1&query="+enc(q+(near?" "+near:" near me"));
const gDir=(dest,mode)=>"https://www.google.com/maps/dir/?api=1&origin="+enc(apt().q)+"&destination="+enc(dest)+"&travelmode="+mode;
const link=(href,label,alt)=>`<a class="btn${alt?" alt":""}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>`;
const plate=(no,title)=>`<summary><span class="no">${esc(no)}</span><h2>${esc(title)}</h2><span class="chev" aria-hidden="true"></span></summary>`;
const tab=(id,no,title,body)=>`<details class="acc" id="${id}">${plate(no,title)}<div class="body">${body}</div></details>`;
const ul=items=>`<ul class="plain">${items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
function zoneObj(){ return C?C.zones.find(x=>x.id===ZONE)||null:null; }
function zoneLL(){ const z=zoneObj(); return z&&z.ll?z.ll:null; }
function zoneName(){ const z=zoneObj(); return z&&z.id!=="other"?z.n.split(" /")[0].split(" (")[0]:C.name; }

/* ---------- otele göre öneri ---------- */
function genericAdvise(zid,people,late){
  const z=C.zones.find(x=>x.id===zid)||{}, d=C.adv||{};
  return (late&&(z.late||d.late))||(people>=3&&(z.group||d.group))||z.day||d.day||{pick:"Taksi ya da Grab",why:"Tezgâhtaki fiyatla uygulamadaki fiyatı karşılaştır."};
}
const advise=(zid,people,late)=>(C.advise||genericAdvise)(zid,people,late);

/* ---------- çizim ---------- */
function render(){
  const pad=n=>String(n).padStart(2,"0");
  let h="";
  // ülke
  h+=tab("ulke",K.flag,K.name+": bilmen gerekenler",
    `<div class="stack">`+K.info.map(g=>`<div class="card"><h3>${esc(g.t)}</h3>${ul(g.items)}${g.link?`<div class="btns">${link(g.link[1],g.link[0])}</div>`:""}</div>`).join("")+`</div>`);
  // 1 çıkış
  h+=tab("cikis",pad(1),"Havalimanından çıkış",
    `<p class="intro">${esc(C.exitIntro)}</p><div class="verdict" id="exitme"></div>`
    +C.exitGroups.map(g=>(g.title?`<h3 class="sub">${esc(g.title)}</h3>`:"")+`<div class="stack">`
      +g.items.map(e=>`<div class="card"><h3>${esc(e.t)}</h3><div class="meta"><span class="tag where">${esc(e.where)}</span><span class="tag price">${esc(e.price)}</span><span class="tag">${esc(e.time)}</span>${e.pick?'<span class="tag pick">Öne çıkan</span>':""}</div><p>${esc(e.d)}</p></div>`).join("")+`</div>`).join("")
    +`<div class="verdict" style="margin-top:10px"><b class="h">Hangisi mantıklı</b>${esc(C.exitVerdict)}</div>`);
  // 2 otele git
  h+=tab("otel-yolu",pad(2),"Oteline nasıl gidersin",
    `<p class="intro">Otelini yaz. Seçtiğin bölgeye ve kaç kişi olduğunuza göre uygun yolu söyleyelim, rotayı da haritada çizelim.</p>
    <div class="card"><form class="go" id="goform">
      <div><label for="hotel">Otelinin adı</label><input type="text" id="hotel" placeholder="Otelinin adını yaz" autocomplete="off"></div>
      ${C.airports.length>1?`<div><label for="apt">Hangi havalimanına iniyorsun</label><select id="apt">${C.airports.map((a,i)=>`<option value="${i}">${esc(a.name+" ("+a.code+")")}</option>`).join("")}</select></div>`:""}
      <div class="two"><div><label for="people">Kaç kişisiniz</label><select id="people">${[1,2,3,4,5,6].map(n=>`<option value="${n}"${n===2?" selected":""}>${n}${n===6?" ve üstü":""}</option>`).join("")}</select></div>
      <div><label for="late">İniş saati</label><select id="late"><option value="0">Gündüz ya da akşam</option><option value="1">Gece 23:00'ten sonra</option></select></div></div>
    </form></div>
    <div class="verdict" id="advice" style="margin-top:10px"></div><div class="btns" id="gobtns"></div>
    <p class="note" style="margin-top:8px">İlk düğme rotayı bu sayfadaki haritada çizer, mesafeyi ve süreyi gösterir. Adım adım toplu taşıma tarifi açık haritada olmadığı için ikinci düğme Google Haritalar'ı açar.</p>`);
  // 3 uygulamalar
  h+=tab("uygulamalar",pad(3),"Ulaşım uygulamaları",
    `<p class="intro">${esc(C.name)} içinde bu uygulamalar kullanılıyor. Fiyatı binmeden gösterirler; ikisini de açıp karşılaştırmak en sağlamı.</p><div class="stack">`
    +(C.apps||K.apps).map(a=>`<div class="card"><h3>${esc(a.t)}</h3>${a.pick?`<div class="meta"><span class="tag pick">${esc(a.pick)}</span></div>`:""}<p>${esc(a.d)}</p><div class="btns">${link(a.url,a.t+" uygulamasını indir",1)}</div></div>`).join("")
    +`<div class="verdict caution"><b class="h">Bilmen gerekenler</b>${ul(["Uygulamaları inmeden önce indir ve kartını ekle; SMS doğrulaması gerekebilir.",...C.appNotes])}</div></div>`);
  // 4 döviz
  h+=tab("doviz",pad(4),"Döviz",
    `<div class="stack"><div class="verdict"><b class="h">En makulü</b>${esc(C.fx.verdict)}</div><div class="card" id="rate" hidden></div>`
    +C.fx.places.map(p=>`<div class="card"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`).join("")
    +`<div class="card"><h3>İpuçları</h3>${ul(C.fx.tips||K.fxTips)}<div class="btns"><button type="button" class="btn" data-act="fx">Döviz bürolarını haritada göster</button>${link(gSearch("currency exchange"),"Google'da puanlarına bak",1)}</div></div></div>`);
  // 5 gezi
  h+=tab("gezi",pad(5),"Gezilecek yerler",
    `<div class="stack">`+C.sights.map((s,i)=>`<div class="card sight"><div class="ph" data-q="${esc(s.wq||s.t+" "+C.name)}" data-alt="${esc(s.t)}"></div><div class="sx"><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p><div class="btns"><button type="button" class="btn" data-act="sight" data-i="${i}">Haritada göster</button></div></div></div>`).join("")
    +`</div><p class="note" style="margin-top:8px">Fotoğraflar Wikipedia'dan (Wikimedia Commons) otomatik gelir; bazı yerlerin fotoğrafı bulunmayabilir.</p>`);
  // 6 turlar
  h+=tab("turlar",pad(6),"Günlük turlar",
    `<p class="intro">Fiyatlar kişi başı, ortak tur için yaklaşık aralıktır. Aynı tur farklı sitelerde farklı fiyata satılır, almadan önce iki siteye bak.</p><div class="stack">`
    +C.tours.map(t=>`<div class="card"><h3>${esc(t.t)}</h3><div class="meta"><span class="tag where">${esc(t.from)}</span><span class="tag price">${esc(t.price)}</span></div><p>${esc(t.d)}</p></div>`).join("")
    +`<div class="verdict caution"><b class="h">Nasıl işliyor</b>${ul(C.tourNotes)}</div>
    <div class="btns">${link("https://www.getyourguide.com/s/?q="+enc(C.name),"GetYourGuide")}${link("https://www.klook.com/search/result/?query="+enc(C.name),"Klook")}${link("https://www.viator.com/searchResults/all?text="+enc(C.name),"Viator")}</div></div>`);
  // 7 uçuşlar
  h+=tab("ucuslar",pad(7),"İç hat uçuşlar",
    `<div class="stack"><div class="tw"><table><thead><tr><th>Nereye</th><th>Kimler uçuyor</th><th>Not</th></tr></thead><tbody>`
    +C.flights.map(f=>`<tr><td><b>${esc(f.to)}</b></td><td>${esc(f.who)}</td><td>${esc(f.note)}</td></tr>`).join("")
    +`</tbody></table></div><div class="verdict"><b class="h">Hangisi mantıklı</b>${esc(C.flightVerdict)}</div>
    <div class="btns">${link("https://www.google.com/travel/flights?q="+enc("Flights from "+C.name+" Thailand"),"Google Uçuşlar'da fiyat bak")}</div></div>`);
  // 8 konaklama
  h+=tab("konaklama",pad(8),"Oteller",
    `<div class="stack"><div class="verdict"><b class="h">Nereden bakmalı</b>${esc(C.stayVerdict)}</div>
    <div class="btns">${link("https://www.google.com/travel/hotels/"+enc(C.name),"Google Oteller: siteleri karşılaştır")}${link("https://www.agoda.com/search?textToSearch="+enc(C.name),"Agoda",1)}${link("https://www.booking.com/searchresults.html?ss="+enc(C.name),"Booking",1)}${link("https://www.trip.com/hotels/?keyword="+enc(C.name),"Trip.com",1)}</div>`
    +(C.stayPrices?`<div class="tw"><table><thead><tr><th>Fiyatlar nereden başlıyor</th><th>Gecelik</th></tr></thead><tbody>${C.stayPrices.map(p=>`<tr><td>${esc(p[0])}</td><td class="n">${esc(p[1])}</td></tr>`).join("")}</tbody></table></div>`:"")
    +C.stay.map(s=>`<div class="card"><h3>${esc(s.t)}</h3><div class="meta"><span class="tag">${esc(s.who)}</span></div><p>${esc(s.d)}</p></div>`).join("")+`</div>`);
  // 9 yemek
  h+=tab("yemek",pad(9),"Yemek",
    `<p class="intro">Bayrağa bas, o mutfağın restoranlarını bu sayfadaki haritada gör. Puanlar için yanındaki Google düğmesini kullan.</p>
    <div class="flags" id="flags" role="group" aria-label="Mutfak seç">${CUISINES.map((c,i)=>`<button type="button" class="flag" data-i="${i}" aria-pressed="false"><span class="f">${c.f}</span><span class="t">${esc(c.t)}</span></button>`).join("")}</div>
    <div class="chips" id="diets" role="group" aria-label="Beslenme tercihi">${DIETS.map((d,i)=>`<button type="button" class="chip" data-i="${i}" aria-pressed="false">${esc(d.t)}</button>`).join("")}</div>
    <div class="btns" id="foodbtns"></div>`);
  // 10 lazım
  const needs=C.needs||K.needs;
  h+=tab("lazim",pad(10),"Lazım olanlar",
    `<div class="stack">`+needs.map((n,i)=>`<div class="card"><h3>${esc(n.t)}</h3><p>${esc(n.d)}</p><div class="btns"><button type="button" class="btn onmap" data-need="${i}">Haritada göster</button>${link(gSearch(n.q),"Google'da puanlarına bak",1)}</div></div>`).join("")+`</div>`);
  // 11 harita
  h+=tab("harita",pad(11),"Harita",
    `<div id="mapwrap"><div id="map" aria-label="${esc(C.name)} haritası"></div>
    <div class="legend"><span><i class="dot" style="background:#111418"></i>Havalimanı</span><span><i class="dot" style="background:#c9a400"></i>Gezilecek yer</span><span><i class="dot" style="background:#1c7a4c"></i>Bölgeler</span><span><i class="dot" style="background:#c0392b"></i>Arama sonucu</span><span><i class="dot" style="background:#1a73e8"></i>Sen</span></div>
    <div class="btns"><button type="button" class="btn alt" id="locate">Konumumu göster</button></div><p class="note" id="mapmsg" role="status"></p><div class="stack" id="maplist"></div></div>
    <div class="verdict caution" id="mapnote"><b class="h">Harita yüklenemedi</b>Harita sunucusuna ulaşılamadı. İnternet bağlantını kontrol edip sayfayı yenile. O zamana kadar Google düğmeleri çalışır.</div>`);
  $("main").innerHTML=h;
  $("foot").innerHTML=`<p><b>Son kontrol: ${esc(K.checked)}.</b> Fiyatlar ve biniş noktaları değişir; buradaki rakamlar yaklaşık aralıktır, tabelada ve uygulamada gördüğün geçerlidir.</p><p>Kaynaklar: ${[...C.sources,...K.sources].map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(" · ")}</p><p>Harita verisi © OpenStreetMap katkıcıları. Fotoğraflar Wikimedia Commons.</p>`;
}

/* ---------- otel formu ---------- */
function updateGo(){
  const hotel=$("hotel").value.trim(), people=+$("people").value, late=$("late").value==="1";
  APT=$("apt")?+$("apt").value:0;
  const a=advise(ZONE,people,late), z=zoneObj();
  $("advice").innerHTML=`<b class="h">Sana önerimiz: ${esc(a.pick)}</b>${esc(a.why)}`;
  const dest=hotel?hotel+", "+C.name:(z&&z.id!=="other"?zoneName()+", "+C.name:C.name);
  $("gobtns").innerHTML=`<button type="button" class="btn" id="routebtn">Rotayı haritada çiz</button>`+link(gDir(dest,"transit"),"Adım adım toplu taşıma (Google)",1);
  $("routebtn").addEventListener("click",()=>routeTo(hotel,z));
  store.set("hotel."+C.id,hotel);
}

/* ---------- yemek ---------- */
let cui=1, diet=-1;
function updateFood(){
  document.querySelectorAll("#flags .flag").forEach(b=>b.setAttribute("aria-pressed",String(+b.dataset.i===cui)));
  document.querySelectorAll("#diets .chip").forEach(b=>b.setAttribute("aria-pressed",String(+b.dataset.i===diet)));
  const c=CUISINES[cui], d=diet>=0?DIETS[diet]:null;
  const q=(d?d.q+" ":"")+c.q, label=(d?d.t.toLowerCase()+" ":"")+c.t;
  $("foodbtns").innerHTML=`<button type="button" class="btn" id="foodmap">${esc(label)} restoranlarını haritada göster</button>`+link(gSearch(q),"Google puanlarıyla aç",1);
  $("foodmap").addEventListener("click",()=>{ const sel='nwr["amenity"~"restaurant|fast_food|cafe"]["cuisine"~"'+c.o+'",i]'+(d&&d.o.indexOf("cuisine")<0?d.o:""); overpass(sel,label+" restoranları"); });
  store.set("cui",String(cui));
}

/* ---------- fotoğraflar ---------- */
const photoCache={};
async function loadPhotos(){
  const els=[...document.querySelectorAll("#gezi .ph[data-q]")];
  for(const el of els){
    if(el.dataset.done) continue; el.dataset.done="1";
    const q=el.dataset.q;
    try{
      let src=photoCache[q]||store.get("ph."+q);
      if(!src){
        const r=await fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=320&gsrsearch="+enc(q));
        const j=await r.json(); const pg=j.query&&j.query.pages&&Object.values(j.query.pages)[0];
        src=pg&&pg.thumbnail&&pg.thumbnail.source; if(src) store.set("ph."+q,src);
      }
      if(!src){ el.classList.add("none"); continue; }
      photoCache[q]=src;
      const img=new Image(); img.alt=el.dataset.alt; img.onload=()=>{ el.appendChild(img); el.classList.add("ok"); }; img.onerror=()=>el.classList.add("none"); img.src=src;
    }catch(e){ el.classList.add("none"); }
  }
}

/* ---------- harita ---------- */
let map=null, results=null, me=null, meLL=null, mapDead=false, sightPins=[], lastItems=null;
function mapFail(){ $("mapwrap").style.display="none"; $("mapnote").style.display="block"; mapDead=true; }
function initMap(){
  if(typeof L==="undefined") return mapFail();
  try{
    map=L.map("map",{scrollWheelZoom:false}).setView(zoneLL()||C.center,zoneLL()?13:C.zoom);
    let loaded=0;
    const tiles=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'});
    tiles.on("tileload",()=>{loaded++;});
    tiles.addTo(map);
    setTimeout(()=>{ if(!loaded) mapFail(); },8000);
    const pin=(ll,color,html,r)=>L.circleMarker(ll,{radius:r||7,color:"#fff",weight:2,fillColor:color,fillOpacity:1}).addTo(map).bindPopup(html);
    C.airports.forEach(a=>pin(a.ll,"#111418","<b>"+esc(a.name)+" ("+esc(a.code)+")</b>",9));
    sightPins=C.sights.map(s=>pin(s.ll,"#c9a400","<b>"+esc(s.t)+"</b><br>"+esc(s.d)));
    C.zones.filter(z=>z.ll).forEach(z=>pin(z.ll,"#1c7a4c","<b>"+esc(z.n)+"</b>",6));
    results=L.layerGroup().addTo(map);
    if(meLL) me=L.circleMarker(meLL,{radius:9,color:"#fff",weight:3,fillColor:"#1a73e8",fillOpacity:1}).addTo(map).bindPopup("Buradasın");
  }catch(e){ mapFail(); }
}
function showMap(){ const d=$("harita"); d.open=true; if(!map&&!mapDead) initMap(); d.scrollIntoView(); if(map) setTimeout(()=>map.invalidateSize(),80); }
function dist(a,b){ const R=6371000,t=Math.PI/180,dl=(b[0]-a[0])*t,dn=(b[1]-a[1])*t; const x=Math.sin(dl/2)**2+Math.cos(a[0]*t)*Math.cos(b[0]*t)*Math.sin(dn/2)**2; return 2*R*Math.asin(Math.sqrt(x)); }
const fmtD=m=>m<1000?Math.round(m/10)*10+" m":(m/1000).toFixed(1).replace(".",",")+" km";
function drawList(){
  const list=$("maplist"); if(!list) return; if(!lastItems){ list.innerHTML=""; return; }
  const ref=meLL||zoneLL();
  if(ref){ lastItems.forEach(it=>it.d=dist(ref,it.ll)); lastItems.sort((a,b)=>a.d-b.d); }
  list.innerHTML=lastItems.slice(0,8).map((it,i)=>`<div class="card"><h3>${esc(it.name)}</h3><div class="meta">${it.d!=null?`<span class="tag price">${meLL?fmtD(it.d)+" uzakta":esc(zoneName())+" merkezine "+fmtD(it.d)}</span>`:""}</div><div class="btns"><button type="button" class="btn alt" data-r="${i}">Haritada göster</button></div></div>`).join("");
}
function focusSight(i){ showMap(); if(!map||mapDead) return; map.setView(C.sights[i].ll,15); if(sightPins[i]) sightPins[i].openPopup(); }
async function overpass(selector,label){
  showMap();
  if(!map||mapDead){ return; }
  const msg=$("mapmsg"); lastItems=null; drawList(); msg.textContent=label+" aranıyor…";
  const q="[out:json][timeout:20];"+selector+"("+C.bbox.join(",")+");out center 120;";
  try{
    const r=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:"data="+enc(q),headers:{"Content-Type":"application/x-www-form-urlencoded"}});
    if(!r.ok) throw new Error(r.status);
    const j=await r.json(); results.clearLayers();
    const items=[];
    (j.elements||[]).forEach(e=>{
      const lat=e.lat||(e.center&&e.center.lat), lon=e.lon||(e.center&&e.center.lon); if(!lat) return;
      const name=(e.tags&&(e.tags["name:en"]||e.tags.name))||label;
      const m=L.circleMarker([lat,lon],{radius:7,color:"#fff",weight:2,fillColor:"#c0392b",fillOpacity:1}).addTo(results)
        .bindPopup("<b>"+esc(name)+'</b><br><a href="https://www.google.com/maps/search/?api=1&query='+enc(name+" "+C.name)+'" target="_blank" rel="noopener">Google\'da puanını gör</a>');
      items.push({name:name,ll:[lat,lon],m:m,d:null});
    });
    if(items.length){
      lastItems=items; drawList();
      const ref=meLL||zoneLL();
      const fit=ref?lastItems.slice(0,10).map(i=>i.ll).concat([ref]):items.map(i=>i.ll);
      map.fitBounds(fit,{padding:[30,30],maxZoom:15});
      msg.textContent=items.length+" yer bulundu: "+label+". "+(meLL?"Sana en yakınlar aşağıda sıralı.":(ref?zoneName()+" merkezine en yakınlar aşağıda. ":"")+"'Konumumu göster'e basarsan sana göre sıralanır.");
    } else msg.textContent="Açık haritada kayıtlı "+label+" bulunamadı. Google düğmesini dene; Google'ın listesi daha geniştir.";
  }catch(e){ msg.textContent="Arama şu an yapılamadı. Biraz sonra tekrar dene."; }
}
async function routeTo(hotel,z){
  showMap(); if(!map||mapDead) return;
  const msg=$("mapmsg"); lastItems=null; drawList(); results.clearLayers(); msg.textContent="Rota hesaplanıyor…";
  try{
    let dest=null, name=hotel, approx=false;
    if(hotel){
      const vb=[C.bbox[1],C.bbox[2],C.bbox[3],C.bbox[0]].join(",");
      const r=await fetch("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&bounded=1&viewbox="+vb+"&q="+enc(hotel));
      const j=await r.json(); if(j&&j[0]) dest=[+j[0].lat,+j[0].lon];
    }
    if(!dest&&z&&z.ll){ dest=z.ll; approx=true; name=z.n; }
    if(!dest){ msg.textContent="Oteli açık haritada bulamadım. Adını İngilizce ve tam yaz ya da bölgeyi seç."; return; }
    const a=apt().ll;
    const r2=await fetch("https://router.project-osrm.org/route/v1/driving/"+a[1]+","+a[0]+";"+dest[1]+","+dest[0]+"?overview=full&geometries=geojson");
    const j2=await r2.json(); const rt=j2.routes&&j2.routes[0]; if(!rt) throw new Error("rota yok");
    const line=L.geoJSON(rt.geometry,{style:{color:"#1a73e8",weight:5,opacity:.85}}).addTo(results);
    L.circleMarker(dest,{radius:9,color:"#fff",weight:3,fillColor:"#c0392b",fillOpacity:1}).addTo(results).bindPopup("<b>"+esc(name)+"</b>").openPopup();
    map.fitBounds(line.getBounds(),{padding:[30,30]});
    msg.textContent=(approx?(hotel?"Oteli açık haritada bulamadım, "+name+" merkezine göre çizdim. ":name+" merkezine göre çizdim. "):"")+apt().code+" havalimanından "+Math.round(rt.distance/1000)+" km, trafiksiz yaklaşık "+Math.round(rt.duration/60)+" dk araç yolu.";
  }catch(e){ msg.textContent="Rota şu an çizilemedi. Biraz sonra tekrar dene."; }
}
function locate(){
  const msg=$("mapmsg");
  if(!navigator.geolocation||!map){ msg.textContent="Bu cihazda konum alınamıyor."; return; }
  msg.textContent="Konumun alınıyor…";
  navigator.geolocation.getCurrentPosition(p=>{
    const ll=[p.coords.latitude,p.coords.longitude]; meLL=ll;
    if(me) map.removeLayer(me);
    me=L.circleMarker(ll,{radius:9,color:"#fff",weight:3,fillColor:"#1a73e8",fillOpacity:1}).addTo(map).bindPopup("Buradasın");
    map.setView(ll,14); msg.textContent="Konumun haritada mavi nokta olarak işaretlendi."+(lastItems?" Liste sana en yakına göre sıralandı.":""); drawList();
  },()=>{ msg.textContent="Konum izni verilmedi. Tarayıcı ayarlarından izin verip tekrar dene."; },{enableHighAccuracy:true,timeout:10000});
}

/* ---------- canlı kur ---------- */
let rateData=null;
function drawRate(){
  const el=$("rate"); if(!el||!rateData) return;
  const j=rateData, cur=K.cur, v=j.rates[cur];
  const rows=[["1 dolar",v],["1 avro",j.rates.EUR?v/j.rates.EUR:null],["100 Türk lirası",j.rates.TRY?v/j.rates.TRY*100:null]].filter(x=>x[1]);
  el.hidden=false;
  el.innerHTML="<h3>Bugünkü piyasa kuru</h3><div class=\"meta\">"+rows.map(x=>`<span class="tag price">${esc(x[0])} = ${x[1].toFixed(2)} ${esc(cur)}</span>`).join("")+`</div><p class="note">${esc(j.date)} tarihli orta kur. Döviz bürosu bundan biraz düşüğünü verir; tabeladaki rakam buna ne kadar yakınsa kur o kadar iyidir.</p>`;
}
async function loadRate(){
  if(rateData) return drawRate();
  try{
    const r=await fetch("https://api.frankfurter.app/latest?from=USD&to="+K.cur+",TRY,EUR");
    if(!r.ok) return; const j=await r.json(); if(!j.rates||!j.rates[K.cur]) return;
    rateData=j; drawRate();
  }catch(e){}
}

/* ---------- bağlama: her çizimden sonra ---------- */
function bind(){
  const sh=store.get("hotel."+C.id); if(sh) $("hotel").value=sh;
  ["hotel","people","late","apt"].forEach(id=>{ const el=$(id); if(el&&el.addEventListener) el.addEventListener("input",updateGo); });
  $("goform").addEventListener("submit",e=>e.preventDefault());
  $("flags").addEventListener("click",e=>{const b=e.target.closest(".flag"); if(!b) return; cui=+b.dataset.i; updateFood();});
  $("diets").addEventListener("click",e=>{const b=e.target.closest(".chip"); if(!b) return; const i=+b.dataset.i; diet=(diet===i?-1:i); updateFood();});
  const needs=C.needs||K.needs;
  document.querySelectorAll(".onmap").forEach(b=>b.addEventListener("click",()=>{const n=needs[+b.dataset.need]; overpass(n.osm,n.t);}));
  $("locate").addEventListener("click",locate);
  $("maplist").addEventListener("click",e=>{const b=e.target.closest("[data-r]"); if(!b||!lastItems) return; const it=lastItems[+b.dataset.r]; if(!it) return; $("map").scrollIntoView({block:"center"}); map.setView(it.ll,16); it.m.openPopup();});
  document.querySelectorAll("details.acc").forEach(d=>d.addEventListener("toggle",()=>{
    if(!d.open) return;
    if(d.id==="harita"){ if(!map&&!mapDead) initMap(); else if(map) setTimeout(()=>map.invalidateSize(),60); return; }
    if(d.id==="gezi") loadPhotos();
    document.querySelectorAll("details.acc[open]").forEach(o=>{ if(o!==d&&o.id!=="harita") o.open=false; });
    d.scrollIntoView({block:"start"});
  }));
}

/* ---------- yer seçimi ---------- */
function applyDest(cityId,zid){
  const city=K.cities.find(c=>c.id===cityId); if(!city) return;
  C=city; ZONE=city.zones.some(z=>z.id===zid)?zid:city.zones[0].id; APT=0;
  store.set("city",C.id); store.set("zone",ZONE);
  if(map){ try{ map.remove(); }catch(e){} } map=null; me=null; sightPins=[]; lastItems=null; mapDead=false;
  render(); bind();
  const z=zoneObj(), zn=zoneName();
  $("chooser").hidden=true; $("where").hidden=false; $("change").hidden=false; $("main").hidden=false;
  $("crumb").textContent=K.flag+" "+K.name;
  $("h1").textContent=z.id==="other"?C.name:C.name+" · "+zn;
  $("lede").textContent=K.lede;
  $("facts").innerHTML=[["Havalimanı",C.airports.map(a=>a.code).join(" / ")],["Para",K.cur],...(C.facts||[]),["Son kontrol",K.checked]].map(f=>`<li><b>${esc(f[0])}</b>${esc(f[1])}</li>`).join("");
  const a=advise(ZONE,2,false);
  $("exitme").innerHTML=`<b class="h">${esc(zn)} için kısa cevap: ${esc(a.pick)}</b>${esc(a.why)} <span class="note">İki kişi ve gündüz inişine göre. Kendi durumun için 02 numaralı sekmeye bak.</span>`;
  updateGo(); updateFood(); loadRate();
  window.scrollTo(0,0);
}
function applyTheme(){
  const t=K.theme; if(!t) return; const s=document.documentElement.style;
  s.setProperty("--sign",t.accent); s.setProperty("--sign-ink",t.ink); $("stripe").style.background=t.stripe;
}
function fillZones(cityId){
  const city=K.cities.find(c=>c.id===cityId)||K.cities[0];
  $("d-zone").innerHTML=city.zones.map(z=>`<option value="${z.id}">${esc(z.n)}</option>`).join("");
}

/* ---------- başlat ---------- */
applyTheme();
$("d-country").innerHTML=COUNTRIES.map(c=>`<option value="${c.id}">${esc(c.flag+" "+c.name)}</option>`).join("")+`<option disabled>Diğer ülkeler yakında</option>`;
$("d-city").innerHTML=K.cities.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join("")+(K.soon||[]).map(n=>`<option disabled>${esc(n)} (yakında)</option>`).join("");
fillZones(K.cities[0].id);
$("d-city").addEventListener("change",()=>fillZones($("d-city").value));
$("destform").addEventListener("submit",e=>{ e.preventDefault(); applyDest($("d-city").value,$("d-zone").value); });
$("change").addEventListener("click",()=>{ $("chooser").hidden=false; $("where").hidden=true; $("main").hidden=true; $("change").hidden=true; if(C){ $("d-city").value=C.id; fillZones(C.id); $("d-zone").value=ZONE; } window.scrollTo(0,0); });
$("main").addEventListener("click",e=>{const b=e.target.closest("[data-act]"); if(!b) return; if(b.dataset.act==="sight") focusSight(+b.dataset.i); else if(b.dataset.act==="fx") overpass('nwr["amenity"="bureau_de_change"]',"döviz büroları");});
{ const sc=store.get("cui"); if(sc!==null&&CUISINES[+sc]) cui=+sc;
  const scity=store.get("city")||"phuket", sz=store.get("zone");
  if(sz&&K.cities.some(c=>c.id===scity&&c.zones.some(z=>z.id===sz))) applyDest(scity,sz); }
