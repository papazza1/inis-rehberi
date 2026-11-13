"use strict";
/* Tayland verisi. Yeni şehir eklemek: aşağıdaki gibi bir nesne yaz, TH.cities listesine ekle. */

/* ---------------- PHUKET ---------------- */
const PHUKET = {
  id:"phuket", name:"Phuket", country:"Tayland", flag:"🇹🇭", theme:{ink:"#221c4a",accent:"#e8b23a",stripe:"linear-gradient(#a51931 0 16.66%,#f4f5f8 0 33.33%,#2d2a4a 0 66.66%,#f4f5f8 0 83.33%,#a51931 0)"}, checked:"13 Kasım 2026",
  airports:[{name:"Phuket Uluslararası Havalimanı", code:"HKT", q:"Phuket International Airport", ll:[8.1132,98.3169]}],
  bbox:[7.74,98.25,8.20,98.45], center:[7.95,98.34], zoom:11,
  headline:"Phuket'e indin. Şimdi ne yapacaksın?",
  lede:"Havalimanından çıkıştan otele, dövizden turlara kadar ilk gün lazım olan her şey tek sayfada.",
  facts:[["Raylı sistem","Yok"]],
  exitIntro:"Phuket'te metro ve tren yok. Havalimanından otobüs, taksi ya da uygulamayla çıkılır. Fiyatlar araç başıdır, otobüs ve minibüs hariç.",
  exitGroups:[{items:[
    {t:"Phuket Smart Bus", where:"Çıkışta Smart Bus tabelası", price:"100 THB / kişi", time:"Patong 1,5–2 saat",
     d:"Batı sahili boyunca gider: Cherngtalay, Surin, Kamala, Patong, Karon, Kata, Rawai. Saat başı kalkar, son sefer 23:30. Nereye inersen in fiyat aynı."},
    {t:"Havalimanı otobüsü (Phuket Town)", where:"Terminal önü otobüs durağı", price:"100 THB / kişi", time:"Yaklaşık 1 sa 30 dk",
     d:"Old Town'daki 1 numaralı otobüs terminaline gider. Yaklaşık 08:30–20:30 arası saat başı."},
    {t:"Sabit fiyatlı taksi tezgâhı", where:"Geliş salonunun içinde", price:"Patong 800 · Kata/Karon 1.000 THB", time:"Patong yaklaşık 50 dk", pick:1,
     d:"Phuket Airport Limousine. Fiyat bölgeye göre tabelada yazar, pazarlık yok. 3 kişilik araç fiyatıdır; 4 kişilik SUV Patong'a 1.200, 10 kişilik minibüs 1.400 THB."},
    {t:"Taksimetre", where:"Geliş salonu dışı, taksi durağı", price:"Patong 600–700 + 100 THB", time:"Patong yaklaşık 50 dk",
     d:"Taksimetrenin üstüne 100 THB havalimanı ücreti eklenir. Binmeden taksimetrenin açıldığını gör."},
    {t:"Grab", where:"Dış hatlar: 8 no'lu çıkış, yeşil çatılı nokta · İç hatlar: 1 no'lu çıkış yanı", price:"Patong yaklaşık 750–950 THB", time:"Patong yaklaşık 50 dk",
     d:"Havalimanında resmi biniş noktası olan tek uygulama. Fiyatı binmeden görürsün. Biniş noktası değişebilir, uygulamanın gösterdiği yolu izle."},
    {t:"Bolt", where:"Terminalden yaklaşık 300 m yürüyüş", price:"Patong yaklaşık 550–680 THB", time:"Patong yaklaşık 50 dk",
     d:"Genelde Grab'den %15–30 ucuz ama havalimanına resmi girişi yok; bavulla yürümen gerekir, sürücü sayısı da daha az."},
    {t:"Paylaşımlı minibüs", where:"Geliş salonundaki tezgâhlar", price:"Yaklaşık 180 THB / koltuk", time:"Diğer yolcuları bekler",
     d:"Koltuk dolunca kalkar ve herkesi oteline tek tek bırakır. Ucuz ama süresi belirsiz."}
  ]}],
  exitVerdict:"Bir ya da iki kişiysen ve acelen yoksa Smart Bus açık ara en ucuzu. Üç kişi ve üstü, gece inişi ya da ağır bavul varsa salondaki sabit fiyatlı tezgâh en zahmetsizi. Uygulama kullanacaksan yağmurda ve bavulla Grab, hafif çantayla Bolt.",
  zones:[
    {id:"patong", n:"Patong", bus:"smart", fixed:800, ll:[7.8961,98.2966]},
    {id:"karon", n:"Karon", bus:"smart", fixed:1000, ll:[7.8467,98.2948]},
    {id:"kata", n:"Kata", bus:"smart", fixed:1000, ll:[7.8206,98.2985]},
    {id:"kamala", n:"Kamala", bus:"smart", ll:[7.9506,98.2836]},
    {id:"surin", n:"Surin / Bang Tao (Cherngtalay)", bus:"smart", ll:[7.9760,98.2790]},
    {id:"rawai", n:"Rawai / Nai Harn", bus:"smart", ll:[7.7790,98.3250]},
    {id:"town", n:"Phuket Old Town", bus:"town", ll:[7.8847,98.3890]},
    {id:"near", n:"Nai Yang / Mai Khao (havalimanı yanı)", bus:"none", ll:[8.0900,98.2990]},
    {id:"other", n:"Başka bir bölge", bus:"none"}
  ],
  apps:[
    {t:"Grab", pick:"En yaygın", d:"Turistlerin en çok kullandığı uygulama. En çok sürücü burada, havalimanında resmi biniş noktası var. Genelde en pahalısı.", url:"https://www.grab.com/th/en/download/"},
    {t:"Bolt", pick:"Daha ucuz", d:"Yerlilerin ve uzun kalanların tercihi. Plajlar arası kısa yolculuklarda fiyat farkı belirgin. Sürücü bulmak bazen uzun sürer.", url:"https://bolt.eu/"},
    {t:"inDrive", d:"Fiyatı sen teklif edersin, sürücü kabul eder ya da karşı teklif verir. Pazarlığı sevenler için.", url:"https://indrive.com/"}
  ],
  appNotes:["Uygulamaları inmeden önce indir ve kartını ekle; Tayland'da SMS doğrulaması gerekebilir.","Phuket'te taksi Bangkok'a göre pahalıdır, fiyatlara şaşırma.","Songthaew (üstü kapalı kamyonet) Kata, Karon ve Patong arasında kişi başı 30–50 THB.","Mavi yerel otobüsler Phuket Town'dan plajlara gider ama plajlar arasında çalışmaz.","Sokaktaki tuk-tuk'a binmeden fiyatı konuş."],
  fx:{
    verdict:"Havalimanında sadece ilk masraflara yetecek kadar bozdur, gerisini Patong ya da Phuket Town'daki döviz bürolarında boz. Şehirdeki kur belirgin şekilde daha iyi.",
    places:[
      {t:"Havalimanı", d:"Geliş katındaki banka gişeleri en kötü kuru verir. İç hatlar geliş salonundaki SuperRich'in şehirle aynı kuru verdiği bildiriliyor (07:00–22:30)."},
      {t:"Patong", d:"Rat-U-Thit yolu ve sahil yolu boyunca onlarca büro yan yana. Rekabet kuru iyileştiriyor; iki üç tabelaya bakıp en iyisinde boz.", q:"currency exchange Patong"},
      {t:"Phuket Town", d:"SuperRich'in Chaofa yolu şubesi adanın en iyi kurlarından birini verir. Sırf bunun için taksiyle gitmeye değmez, yolun düşerse uğra.", q:"Superrich Phuket Town Chaofa Road"},
      {t:"Otel resepsiyonu", d:"Kur genelde kötüdür, zorda kalmadıkça kullanma."}
    ],
    tips:["Pasaportunu yanına al, döviz bozdururken istenir.","Büyük banknotlar (100 dolar, 100 avro) daha iyi kur alır.","Yırtık, lekeli ya da eski seri banknotlar kabul edilmeyebilir.","Yabancı kartla ATM'den çekimde her işlemde sabit ücret kesilir; az sayıda büyük çekim yap."]
  },
  sights:[
    {t:"Big Buddha", wq:"Phuket Big Buddha", d:"Tepedeki 45 metrelik heykel, adanın güneyini gören manzara. Omuz ve diz kapalı gir.", ll:[7.8276,98.3128]},
    {t:"Wat Chalong", wq:"Wat Chalong", d:"Adanın en büyük ve en çok ziyaret edilen tapınağı. Giriş ücretsiz.", ll:[7.8468,98.3369]},
    {t:"Phuket Old Town", wq:"Old Phuket Town", d:"Renkli Çin-Portekiz evleri, kafeler, Thalang yolu. Pazar akşamı yürüyüş pazarı kurulur.", ll:[7.8847,98.3890]},
    {t:"Promthep Burnu", wq:"Laem Phromthep", d:"Adanın en güney ucu, gün batımının klasik noktası.", ll:[7.7632,98.3055]},
    {t:"Karon Seyir Noktası", wq:"Karon Beach Phuket", d:"Kata Noi, Kata ve Karon koylarını aynı karede görürsün.", ll:[7.8080,98.3020]},
    {t:"Bangla Yolu", wq:"Patong Bangla Road", d:"Patong'un gece hayatı caddesi, akşam trafiğe kapanır.", ll:[7.8935,98.2965]},
    {t:"Nai Harn Plajı", wq:"Nai Harn Beach", d:"Güneyde, Patong'a göre sakin, yerlilerin sevdiği plaj.", ll:[7.7780,98.3040]},
    {t:"Kata Noi Plajı", wq:"Kata Noi Beach", d:"Küçük, temiz ve görece sakin bir koy.", ll:[7.8080,98.2980]}
  ],
  tours:[
    {t:"Phi Phi Adaları", price:"1.800–3.500 THB", from:"Royal Phuket Marina, Chalong ya da Rassada iskelesi", d:"Maya Koyu, Pileh Lagünü, şnorkel. Sürat teknesiyle 45 dk, büyük tekneyle 1,5–2 saat. En erken kalkan tur Maya Koyu'na kalabalıktan önce varır."},
    {t:"James Bond Adası ve Phang Nga Koyu", price:"1.400–3.500 THB", from:"Ao Po iskelesi ya da Royal Phuket Marina", d:"Kireçtaşı kayalar, mağaralarda kano, suyun üstündeki Panyee köyü. Deniz sakin, çocuklu ve deniz tutanlar için en rahat tur."},
    {t:"Similan Adaları", price:"2.500–4.500 THB", from:"Khao Lak'taki Tab Lamu iskelesi (otelden araçla 1,5–2 saat)", d:"Tayland'ın en berrak suyu, şnorkel ve dalış. Sadece sezonda açık, yaklaşık kasım–nisan."},
    {t:"Racha ve Coral adaları", price:"Tur sitelerinden bak", from:"Chalong iskelesi", d:"Yakın adalar, yarım gün ya da tam gün. Phi Phi'ye göre kısa tekne yolu."}
  ],
  tourNotes:["Turların çoğu otelden alır: 06:00–08:00 arası minibüs gelir, iskeleye götürür, akşam geri bırakır.","Fiyata öğle yemeği genelde dahil. Milli park ücreti (kişi başı 100–400 THB) bazen ayrıca istenir, rezervasyonda sor.","'VIP' etiketi çoğu zaman aynı tekne demek; fiyat farkına değil tekne tipine ve grup büyüklüğüne bak.","Yoğun sezonda Phi Phi ve Similan turları 3–5 gün önceden dolar."],
  flights:[
    {to:"Bangkok Suvarnabhumi (BKK)", who:"Thai AirAsia, Bangkok Airways, Thai Airways, Thai Vietjet", note:"Günde yaklaşık 25 uçuş"},
    {to:"Bangkok Don Mueang (DMK)", who:"Thai AirAsia, Nok Air, Thai Lion Air", note:"Düşük maliyetli firmaların ana üssü"},
    {to:"Chiang Mai", who:"Thai AirAsia, Thai Vietjet", note:"Günde yaklaşık 5 direkt uçuş, 2 saat"},
    {to:"Koh Samui", who:"Bangkok Airways", note:"Tek firma uçar, günde 8 uçuş, pahalı hat"},
    {to:"Hat Yai", who:"Bangkok Airways", note:"Günde 1 uçuş"},
    {to:"Chiang Rai, Khon Kaen, Udon Thani", who:"Thai Vietjet, Thai AirAsia", note:"Haftada birkaç gün"}
  ],
  flightVerdict:"Bangkok'a en ucuz biletler genelde AirAsia, Nok Air ve Thai Lion Air'de; erken alınırsa tek yön 600–1.800 THB bandında. Bu firmalarda bavul ayrı ücretli, toplam fiyata öyle bak. Bangkok'ta hangi havalimanına ineceğine dikkat et, ikisi şehrin ayrı uçlarında.",
  stay:[
    {t:"Patong", who:"Gece hayatı, alışveriş, ilk kez gelenler", d:"En hareketli ve en kalabalık bölge."},
    {t:"Kata", who:"Aileler, dengeli tatil", d:"Güzel plaj, yeterince restoran, Patong'dan sakin."},
    {t:"Karon", who:"Sakinlik, uzun plaj", d:"Gecelik 1.000–3.000 THB bandında çok seçenek."},
    {t:"Kamala / Surin", who:"Sessiz ve biraz üst segment", d:"Butik oteller, berrak su."},
    {t:"Bang Tao / Laguna", who:"Lüks tatil köyleri", d:"Büyük resort'lar, golf, uzun plaj."},
    {t:"Phuket Old Town", who:"Kültür, yemek, düşük bütçe", d:"Adanın en ucuz konaklaması; plaj yok, denize araçla gidilir."},
    {t:"Rawai / Nai Harn", who:"Uzun kalanlar, yerel hava", d:"Güney ucu, sakin, motosikletle gezenlere uygun."}
  ],
  stayPrices:[["Hostel yatağı","400–600 THB"],["Old Town pansiyon","Yaklaşık 19–25 dolar"],["İyi orta sınıf otel","Yaklaşık 50–70 dolar"],["Havuzlu lüks villa","8.000 THB ve üstü"]],
  stayVerdict:"Aynı otelin fiyatı siteden siteye değişir. Google Oteller bütün siteleri yan yana gösterir, oradan başla; Asya'da Agoda çoğu zaman en ucuzunu verir. Yüksek sezonda (kasım–mart) fiyatlar düşük sezonun 2–3 katına çıkar.",
  needs:[
    {t:"SIM kart", q:"AIS shop OR True shop", osm:'node["shop"="mobile_phone"]', d:"Havalimanı geliş salonunda AIS ve True tezgâhları var; sınırsız internetli turist hattı 299–599 THB. Pasaport gerekir. Şehirdeki 7-Eleven'larda da satılır."},
    {t:"Market", q:"supermarket", osm:'nwr["shop"~"supermarket|convenience"]', d:"7-Eleven her köşede ve 24 saat açık. Büyük alışveriş için Big C, Lotus's ve Makro; ithal ürün için Villa Market."},
    {t:"Eczane", q:"pharmacy", osm:'nwr["amenity"="pharmacy"]', d:"Boots ve Watsons zincirleri turistik bölgelerde yaygın, çalışanlar İngilizce konuşur. Sürekli kullandığın ilacı yanında getir."},
    {t:"Helal yemek", q:"halal restaurant", osm:'nwr["amenity"~"restaurant|fast_food"]["diet:halal"="yes"]', d:"Phuket'te büyük bir Müslüman nüfus var; helal restoran bulmak kolay, özellikle Kamala, Bang Tao ve Phuket Town'da."},
    {t:"ATM", q:"ATM", osm:'node["amenity"="atm"]', d:"Her yerde var. Yabancı kartla her çekimde sabit ücret kesilir."},
    {t:"Hastane", q:"hospital", osm:'nwr["amenity"="hospital"]', d:"Acil ambulans 1669, turist polisi 1155. Özel hastaneler seyahat sigortasıyla çalışır."}
  ],
  sources:[
    ["Phuket 101: havalimanı transferi","https://www.phuket101.net/phuket-airport-transfer/"],
    ["Visit Thailand Today: havalimanından Patong'a","https://www.visitthailandtoday.com/guides/phuket-airport-to-patong"],
    ["Now Phuket: Grab, Bolt, inDrive","https://nowphuket.com/?p=24055"],
    ["Aster of Asia: taksi fiyatları","https://asterofasia.com/blog/phuket-taxi-grab-bolt-tuktuk-prices"],
    ["Phuket 101: döviz","https://phuket101.net/phuket-exchange-rates"],
    ["Thailand Starter Kit: döviz","https://www.thailandstarterkit.com/exclusive-content/best-places-to-exchange-money-in-thailand/"],
    ["Travel Guides Tip: günlük turlar","https://travelguidestip.com/best-day-trips-phuket/"],
    ["Aviability: Phuket uçuş noktaları","https://aviability.com/en/airport/hkt-phuket/destinations"],
    ["Phuket Expat Guide: ucuz uçuşlar","https://phuketexpatguide.pages.dev/blog/cheap-flights-from-phuket/"],
    ["Nomado: nerede kalınır","https://www.nomadotravel.app/en/guides/where-to-stay-in-phuket"]
  ]
};
function phuketAdvise(zoneId,people,late){
  const z=PHUKET.zones.find(x=>x.id===zoneId)||PHUKET.zones[PHUKET.zones.length-1];
  const fixed=z.fixed?` (${z.fixed.toLocaleString("tr-TR")} THB, 3 kişilik araç)`:"";
  const car=`Salondaki sabit fiyatlı taksi tezgâhı${fixed} ya da Grab`;
  if(z.id==="near") return {pick:"Taksi ya da Grab", why:"Otelin havalimanına birkaç kilometre. Otobüs bu yöne uğramıyor, kısa bir araç yolculuğu yeter. Oteline ücretsiz servisi olup olmadığını da sor."};
  if(z.bus==="none") return {pick:car, why:"Bu bölgeye doğrudan otobüs yok. Tezgâhtaki fiyat tablosuna bak, Grab'deki fiyatla karşılaştır, ucuz olanı al."};
  if(late) return {pick:car, why:z.bus==="smart"?"Smart Bus'ın son seferi 23:30. Gece inişinde tezgâh en zahmetsizi; sürücü aramakla uğraşmazsın.":"Phuket Town otobüsü yaklaşık 20:30'da biter. Gece için tezgâh ya da Grab."};
  if(people>=3) return {pick:car, why:`${people} kişi için otobüs ${people*100} THB tutar ama otelin kapısına bırakmaz ve uzun sürer. Araç kapıdan kapıya götürür${z.fixed?"; kişi başı yaklaşık "+Math.round(z.fixed/Math.min(people,3))+" THB'ye gelir":""}. ${people>3?"4 kişi ve üstü için SUV ya da minibüs iste.":""}`};
  if(z.bus==="town") return {pick:"Havalimanı otobüsü (100 THB)", why:"Old Town'daki 1 numaralı terminale gider, yaklaşık 1 saat 30 dakika. Terminalden otele yürü ya da kısa bir Grab çağır. Acelen varsa araç tut."};
  return {pick:"Phuket Smart Bus (100 THB)", why:`${z.n} güzergâh üzerinde. Otele en yakın durakta in, kalanını yürü ya da kısa bir Grab çağır. Yol 1,5–2 saat sürebilir; acelen ya da ağır bavulun varsa ${car.toLowerCase()} daha rahat.`};
}
PHUKET.advise=phuketAdvise;

/* ---------------- BANGKOK ---------------- */
const BANGKOK = {
  id:"bangkok", name:"Bangkok",
  airports:[
    {name:"Suvarnabhumi Havalimanı", code:"BKK", q:"Suvarnabhumi Airport", ll:[13.6900,100.7501]},
    {name:"Don Mueang Havalimanı", code:"DMK", q:"Don Mueang International Airport", ll:[13.9126,100.6068]}
  ],
  bbox:[13.60,100.40,13.95,100.80], center:[13.7466,100.5347], zoom:11,
  facts:[["Raylı sistem","BTS, MRT, Airport Rail Link"]],
  exitIntro:"Bangkok'un iki havalimanı var ve şehrin ayrı uçlarındalar. Önce biletinde hangisinin yazdığına bak: BKK büyük uluslararası havalimanı, DMK düşük maliyetli firmaların havalimanı.",
  exitGroups:[
    {title:"Suvarnabhumi (BKK)", items:[
      {t:"Airport Rail Link (tren)", where:"B1 katı, 'Train to City' tabelası", price:"Phaya Thai'ye 45 THB", time:"26–30 dk", pick:1,
       d:"Trafiğe takılmayan tek seçenek. 05:30–24:00 arası çalışır. Phaya Thai'de BTS'ye, Makkasan'da MRT'ye geçilir."},
      {t:"Taksimetre", where:"1. kat, 4–7 no'lu kapılar arası", price:"Merkeze 300–500 THB", time:"45–60 dk",
       d:"24 saat açık. Makineden sıra fişi al. Taksimetrenin üstüne 50 THB havalimanı ücreti ve yaklaşık 75 THB otoyol parası eklenir, otoyolu nakit sen ödersin."},
      {t:"Grab", where:"1. kat, 4 no'lu kapı, dış şerit", price:"Merkeze yaklaşık 250–450 THB", time:"45–60 dk",
       d:"Resmi biniş noktası burası, 24 saat. Fiyatı binmeden görürsün; yağmurda ve yoğun saatte artar."},
      {t:"S1 otobüsü", where:"1. kat, 7 no'lu kapı", price:"60 THB / kişi", time:"60–90 dk",
       d:"Khao San yolu ve Sanam Luang'a gider. Yaklaşık 06:00–20:00 arası, nakit. Eski Şehir'e en ucuz yol."}
    ]},
    {title:"Don Mueang (DMK)", items:[
      {t:"SRT Kırmızı Hat (tren)", where:"Terminalden yürüme köprüsüyle istasyona", price:"33 THB", time:"Yaklaşık 20 dk", pick:1,
       d:"Krung Thep Aphiwat (Bang Sue) istasyonuna gider, orada MRT Mavi Hat'a geçilir. Trafiğe takılmaz."},
      {t:"A1 ve A2 otobüsleri", where:"Terminal önü otobüs durağı", price:"30 THB / kişi", time:"30–60 dk",
       d:"A1 Mo Chit'teki BTS istasyonuna, A2 Victory Monument'a gider. A3 ve A4 hatları 50 THB."},
      {t:"Taksimetre", where:"Zemin kat, taksi sırası", price:"Merkeze 250–400 THB + otoyol", time:"20–40 dk",
       d:"Sıradan binersen genelde uygulamadan ucuz ve daha kolay. Taksimetrenin açıldığını gör."},
      {t:"Grab", where:"Terminal dışındaki biniş noktası", price:"Merkeze yaklaşık 350 THB", time:"25–40 dk",
       d:"Çalışır ama biniş noktası iyi işaretli değil; uygulamanın gösterdiği yere yürümen gerekir."}
    ]}
  ],
  exitVerdict:"Hafif bavulla ve otelin BTS ya da MRT yakınındaysa tren en ucuz ve çoğu zaman en hızlısı. Ağır bavul, üç kişi ve üstü ya da gece inişinde sıradan taksimetre al. Khao San tarafına gidiyorsan raylı sistem yok, otobüs ya da taksi.",
  adv:{
    day:{pick:"Taksimetre ya da Grab", why:"Bu bölgeye doğrudan raylı bağlantı yok. Sıradan taksimetre al ya da uygulamadaki fiyata bak, ucuz olanı seç."},
    group:{pick:"Taksimetre", why:"Üç kişi ve üstünde taksi kişi başı trene yakın fiyata gelir ve kapıya bırakır. Taksimetrenin açıldığını gör; otoyol parasını sen ödersin."},
    late:{pick:"Taksimetre ya da Grab", why:"Tren gece yarısı, otobüsler daha erken biter. Suvarnabhumi'de taksi durağı 24 saat açık."}
  },
  zones:[
    {id:"sukhumvit", n:"Sukhumvit (Nana, Asok, Phrom Phong)", ll:[13.7373,100.5604],
     day:{pick:"Tren", why:"BKK'den Airport Rail Link'le Phaya Thai'ye in, BTS Sukhumvit hattına geç. DMK'den A1 otobüsüyle Mo Chit'e, oradan aynı BTS hattıyla devam et."}},
    {id:"siam", n:"Siam / Pratunam", ll:[13.7466,100.5347],
     day:{pick:"Tren", why:"BKK'den Airport Rail Link'le Phaya Thai'ye in, BTS ile iki durak sonra Siam. Pratunam için Ratchaprarop durağında inip yürüyebilirsin. DMK'den A1 otobüsü ve BTS."}},
    {id:"silom", n:"Silom / Sathorn", ll:[13.7262,100.5290],
     day:{pick:"Tren", why:"BKK'den Airport Rail Link'le Makkasan'da in, MRT Mavi Hat'la Silom'a git. DMK'den Kırmızı Hat'la Bang Sue'ye, oradan MRT Mavi Hat."}},
    {id:"khaosan", n:"Khao San / Eski Şehir", ll:[13.7589,100.4974],
     day:{pick:"Otobüs", why:"Bu bölgeye tren gitmiyor. BKK'den S1 otobüsü (60 THB) doğrudan Khao San'a gider. DMK'den A4 otobüsü (50 THB). Acelen varsa taksimetre."}},
    {id:"riverside", n:"Nehir kenarı (Riverside)", ll:[13.7230,100.5140]},
    {id:"chinatown", n:"Chinatown (Yaowarat)", ll:[13.7412,100.5103],
     day:{pick:"Tren ya da taksi", why:"MRT Mavi Hat'ın Wat Mangkon durağı Chinatown'ın içinde. BKK'den Rail Link'le Makkasan, sonra MRT. Bavulun ağırsa taksimetre daha rahat."}},
    {id:"other", n:"Başka bir bölge"}
  ],
  appNotes:["Bangkok'ta trafik çok yoğun; 16:00–20:00 arası raylı sistem her zaman daha hızlı.","Grab en yaygını, Bolt genelde %20–30 ucuz.","Sokaktan çevirdiğin takside taksimetreyi açtır, sabit fiyat teklifini kabul etme.","Turuncu yelekli motosiklet taksiler kısa mesafede hızlıdır, fiyatı binmeden sor.","1 Ocak 2027'den itibaren raylı sistemde ortak bilet geliyor: tek giriş ücreti, aktarmalı olsa da en fazla 45 THB."],
  fx:{
    verdict:"Suvarnabhumi'de geliş katındaki banka gişelerinde bozdurma. İki kat aşağı, B katına in; Rail Link istasyonunun yanındaki turuncu SuperRich havalimanının en iyi kurunu verir.",
    places:[
      {t:"Suvarnabhumi, B katı", d:"Rail Link istasyonunun solunda yan yana üç büro var. Turuncu SuperRich ve yanındaki Kasikorn şubesi iyi kur verir. İstasyon girişinin tam önündeki gişeyi atla, kuru kötü. Bürolar 23:00 civarı kapanır."},
      {t:"Don Mueang", d:"İlk masrafa yetecek kadar bozdur, kalanını şehirde boz."},
      {t:"SuperRich merkez, Rajdamri", d:"CentralWorld'ün yanında. Ülkenin en iyi kurlarından biri genelde burada."},
      {t:"BTS ve MRT istasyonları", d:"Sukhumvit, Phra Ram 9 ve Chatuchak MRT istasyonlarında, Phaya Thai'de SuperRich gişeleri var."}
    ]
  },
  sights:[
    {t:"Büyük Saray ve Wat Phra Kaew", wq:"Grand Palace Bangkok", d:"Kralların eski sarayı ve Zümrüt Buda tapınağı. Omuz ve diz kapalı girilir, kapıda kontrol var.", ll:[13.7500,100.4913]},
    {t:"Wat Pho", wq:"Wat Pho", d:"46 metrelik Yatan Buda. Geleneksel Tay masajının okulu da burada.", ll:[13.7465,100.4927]},
    {t:"Wat Arun", wq:"Wat Arun", d:"Nehrin karşı kıyısındaki Şafak Tapınağı. Wat Pho'nun yanındaki iskeleden tekneyle geçilir.", ll:[13.7437,100.4889]},
    {t:"Chatuchak Hafta Sonu Pazarı", wq:"Chatuchak Weekend Market", d:"Binlerce tezgâh, cumartesi ve pazar. BTS Mo Chit durağının yanında.", ll:[13.7999,100.5507]},
    {t:"Chinatown (Yaowarat)", wq:"Yaowarat Road", d:"Akşamları sokak yemeği cenneti. MRT Wat Mangkon durağı.", ll:[13.7412,100.5103]},
    {t:"Jim Thompson Evi", wq:"Jim Thompson House", d:"Geleneksel Tay ahşap evleri ve ipek müzesi. BTS National Stadium yakını.", ll:[13.7492,100.5283]},
    {t:"Lumphini Parkı", wq:"Lumphini Park", d:"Şehrin ortasında büyük bir park, sabah ve akşamüstü serin.", ll:[13.7307,100.5418]},
    {t:"ICONSIAM", wq:"Iconsiam", d:"Nehir kıyısında dev alışveriş merkezi, zemin katta kapalı yüzen pazar.", ll:[13.7265,100.5100]},
    {t:"Khao San Yolu", wq:"Khaosan Road", d:"Sırt çantalıların meşhur caddesi, gece hareketli.", ll:[13.7589,100.4974]},
    {t:"Mahanakhon SkyWalk", wq:"King Power Mahanakhon", d:"Şehrin en yüksek seyir teraslarından, cam zeminli. BTS Chong Nonsi.", ll:[13.7234,100.5282]}
  ],
  tours:[
    {t:"Ayutthaya", price:"Yaklaşık 29 dolardan", from:"Şehir içindeki buluşma noktası ya da otelden alma", d:"Eski başkentin tapınak kalıntıları, UNESCO listesinde. İlk gelişte en iyi fiyat-değer turu."},
    {t:"Yüzen pazar ve tren yolu pazarı", price:"Yaklaşık 23–32 dolar", from:"River City, MBK Center girişi ya da BTS National Stadium", d:"Damnoen Saduak yüzen pazarı ve içinden tren geçen Maeklong pazarı. Sabah 06:30–07:00'de kalkar."},
    {t:"Üçü bir arada: iki pazar ve Ayutthaya", price:"Yaklaşık 1.900–3.200 THB", from:"MBK Center girişi ya da BTS National Stadium, 2 no'lu çıkış", d:"Yaklaşık 12 saatlik uzun bir gün. Tek günde hepsini görmek isteyenlere."},
    {t:"Kanchanaburi ve Erawan Şelalesi", price:"Tur sitelerinden bak", from:"Otelden alma ya da buluşma noktası", d:"Kwai Nehri köprüsü ve yedi katlı şelale. Tam gün."}
  ],
  tourNotes:["Grup turları otelden almaz, sabit bir buluşma noktasından kalkar: Phaya Thai yolundaki AVM, BTS Ekkamai yanı, Khao San ya da Silom MRT 2 no'lu çıkış gibi. Sabahını ona göre planla.","Özel turlar daha pahalıdır ama otelden alır.","Bangkok trafiği ağırdır; grup en fazla 10 dakika bekler, geç kalana para iadesi yapılmaz.","Fiyata neyin dahil olduğuna bak: giriş ücretleri ve öğle yemeği her turda dahil değil."],
  flights:[
    {to:"Chiang Mai", who:"Thai AirAsia, Thai Airways, Bangkok Airways, Thai Vietjet, Nok Air, Thai Lion Air", note:"1 sa 10 dk · 949–3.000 THB ve üstü"},
    {to:"Phuket", who:"Thai AirAsia, Thai Airways, Bangkok Airways, Thai Vietjet, Nok Air, Thai Lion Air", note:"1 sa 20 dk · 928–2.500 THB ve üstü"},
    {to:"Krabi", who:"Thai AirAsia, Thai Vietjet, Thai Lion Air", note:"1 sa 15 dk · 1.200–2.500 THB"},
    {to:"Koh Samui", who:"Bangkok Airways", note:"Tek firma uçar · 6.000–10.000 THB ve üstü"},
    {to:"Hat Yai, Chiang Rai, Khon Kaen, Udon Thani", who:"Thai AirAsia, Thai Lion Air, Thai Vietjet", note:"Çoğu Don Mueang'dan kalkar"}
  ],
  flightVerdict:"En ucuz biletler genelde Don Mueang'dan kalkan AirAsia, Nok Air ve Thai Lion Air'de. Thai Airways ve Bangkok Airways Suvarnabhumi'den uçar, daha pahalıdır ama bavul dahildir. Bileti alırken hangi havalimanından kalktığına mutlaka bak.",
  stay:[
    {t:"Sukhumvit", who:"İlk kez gelenler, gece hayatı", d:"BTS hattı boyunca oteller, restoranlar, AVM'ler. Ulaşımı en kolay bölge."},
    {t:"Siam / Pratunam", who:"Alışveriş", d:"Büyük AVM'ler ve toptancı pazarları yürüme mesafesinde."},
    {t:"Silom / Sathorn", who:"İş merkezi, akşam canlı", d:"Gündüz ofis bölgesi, akşam gece pazarı ve barlar. MRT ve BTS var."},
    {t:"Nehir kenarı", who:"Lüks ve manzara", d:"Büyük oteller nehir boyunca. Tapınaklara tekneyle gidilir."},
    {t:"Khao San / Eski Şehir", who:"Düşük bütçe, tapınaklara yakın", d:"Ucuz pansiyonlar. Raylı sistem yok, ulaşım otobüs ya da taksi."},
    {t:"Chinatown", who:"Sokak yemeği", d:"Akşamları çok canlı, MRT durağı içinde."}
  ],
  stayVerdict:"Otelini BTS ya da MRT durağına yürüme mesafesinde seç; Bangkok'ta trafikten kurtulmanın tek yolu bu. Google Oteller bütün siteleri yan yana gösterir, Asya'da Agoda çoğu zaman en ucuzunu verir.",
  sources:[
    ["Airports of Thailand: Suvarnabhumi ulaşım","https://suvarnabhumi.airportthai.co.th/service/airport-guide/detail/Transportation_BKK"],
    ["Visit Thailand Today: Bangkok havalimanları","https://www.visitthailandtoday.com/guides/bangkok-airport-to-city"],
    ["Wego: Bangkok havalimanı transferi","https://blog.wego.com/bangkok-airport-transfer/"],
    ["Airport Transfer Portal: Don Mueang","https://www.airporttransferportal.com/en/airport-guides/dmk"],
    ["Thaiest: Suvarnabhumi döviz","https://thaiest.com/blog/best-currency-exchange-rates-at-suvarnabhumi-airport"],
    ["Pixidia: Bangkok günlük turlar","https://pixidia.com/?p=97393"],
    ["The Thaiger: iç hat uçuşlar","https://thethaiger.com/travel/thailand-travel/the-essential-guide-to-domestic-flights-in-thailand"]
  ]
};

/* ---------------- CHIANG MAI ---------------- */
const CHIANGMAI = {
  id:"chiangmai", name:"Chiang Mai",
  airports:[{name:"Chiang Mai Uluslararası Havalimanı", code:"CNX", q:"Chiang Mai International Airport", ll:[18.7668,98.9626]}],
  bbox:[18.70,98.88,18.86,99.06], center:[18.7883,98.9853], zoom:13,
  facts:[["Old City","10–15 dk"],["Raylı sistem","Yok"]],
  exitIntro:"Chiang Mai havalimanı şehre çok yakın: Old City ve Nimman 10–15 dakika. Mesafe kısa olduğu için bütün seçenekler ucuz.",
  exitGroups:[{items:[
    {t:"Havalimanı taksisi (sabit fiyat)", where:"Geliş salonu, 1 no'lu çıkış yanındaki tezgâh", price:"Old City 150–200 · Nimman 200 THB", time:"10–15 dk", pick:1,
     d:"Tezgâhtan fişini al, kapıdaki araca bin. Fiyat bölgeye göre sabit, pazarlık yok."},
    {t:"Grab ve Bolt", where:"Terminal dışındaki uygulama biniş bölgesi", price:"Yaklaşık 100–250 THB", time:"10–25 dk",
     d:"İkisi de havalimanında çalışır. Bolt genelde biraz daha ucuz. Fiyata bazen havalimanı biniş ücreti eklenir."},
    {t:"Şehir otobüsü (RTC)", where:"Terminal önündeki durak", price:"20–50 THB / kişi", time:"25–40 dk",
     d:"Old City ve Nimman yönüne gider. Seyrek çalışır ve hatlar sık değişir; kaynaklar farklı fiyat yazıyor, durakta sor."},
    {t:"Kırmızı songthaew", where:"Terminalden yola yürü", price:"30–100 THB / kişi", time:"20–40 dk",
     d:"Üstü kapalı ortak kamyonet. Nereye gittiğini söyle, fiyatı binmeden konuş. Yağmurda ve bavulla zahmetli."}
  ]}],
  exitVerdict:"Yol çok kısa, araç zaten ucuz; otobüsle uğraşmaya değmez. En zahmetsizi tezgâhtaki sabit fiyatlı taksi, biraz daha ucuzu Grab ya da Bolt. Salonda 300 THB ve üstü isteyen simsarlara uyma.",
  adv:{
    day:{pick:"Havalimanı taksisi ya da Grab/Bolt (150–200 THB)", why:"Yol 10–15 dakika ve araç fiyatı düşük. Tezgâhtan sabit fiyatla al ya da uygulamadan çağır; kişi sayısı fiyatı pek değiştirmez."}
  },
  zones:[
    {id:"oldcity", n:"Old City (Eski Şehir)", ll:[18.7883,98.9853]},
    {id:"nimman", n:"Nimman", ll:[18.7997,98.9680]},
    {id:"bazaar", n:"Night Bazaar / Nehir kenarı", ll:[18.7860,99.0010]},
    {id:"santitham", n:"Santitham / Chang Phueak", ll:[18.8040,98.9850]},
    {id:"other", n:"Başka bir bölge"}
  ],
  appNotes:["Grab ve Bolt şehir içinde yaygın ve ucuz; Bolt genelde biraz daha ucuz.","Kırmızı songthaew şehrin ortak taksisi: el kaldır, gideceğin yeri söyle, yönü uyuyorsa biner, inerken ödersin.","Taksimetreli taksi azdır; sokaktan binersen fiyatı önce konuş.","Doi Suthep'e Old City'den songthaew tek yön 40–60 THB.","Old City küçüktür, tapınakların çoğu yürüyerek gezilir."],
  fx:{
    verdict:"Havalimanında sadece ilk masrafa yetecek kadar bozdur. Şehre inince Tha Phae Kapısı çevresindeki bürolarda boz; yan yana oldukları için tabelaları karşılaştırmak kolay.",
    places:[
      {t:"Havalimanı", d:"Banka gişelerinin kuru şehre göre düşük. Taksi parası kadar bozdur."},
      {t:"Tha Phae Kapısı çevresi", d:"Old City'nin doğu kapısı etrafında çok sayıda döviz bürosu var."},
      {t:"Night Bazaar ve Nimman", d:"Turistik caddelerde bürolar var; iki üç tabelaya bakıp en iyisinde boz."}
    ]
  },
  sights:[
    {t:"Wat Phra That Doi Suthep", wq:"Wat Phra That Doi Suthep", d:"Dağın tepesindeki altın tapınak, şehrin simgesi. Giriş yabancılara yaklaşık 1,5 dolar.", ll:[18.8049,98.9216]},
    {t:"Wat Chedi Luang", wq:"Wat Chedi Luang", d:"Old City'nin ortasında, yarısı yıkık dev tuğla stupa.", ll:[18.7869,98.9865]},
    {t:"Wat Phra Singh", wq:"Wat Phra Singh", d:"Şehrin en önemli tapınaklarından, altın yaldızlı Lanna mimarisi.", ll:[18.7885,98.9818]},
    {t:"Tha Phae Kapısı", wq:"Tha Phae Gate", d:"Eski surların doğu kapısı. Pazar akşamı yürüyüş pazarı buradan başlar.", ll:[18.7877,98.9933]},
    {t:"Night Bazaar", wq:"Chiang Mai Night Bazaar", d:"Her akşam kurulan pazar: hediyelik, giyim, sokak yemeği.", ll:[18.7850,99.0005]},
    {t:"Nimman", wq:"Nimmanhaemin Road", d:"Kafeler, butikler ve restoranlarla şehrin modern yüzü.", ll:[18.7997,98.9680]},
    {t:"Warorot Pazarı", wq:"Warorot Market", d:"Yerlilerin alışveriş yaptığı çarşı; Night Bazaar'dan ucuz.", ll:[18.7902,99.0010]},
    {t:"Wat Umong", wq:"Wat Umong", d:"Ormanın içinde, tünelli sakin bir tapınak.", ll:[18.7833,98.9515]}
  ],
  tours:[
    {t:"Doi Inthanon Milli Parkı", price:"Tur sitelerinden bak", from:"Otelden alma", d:"Tayland'ın en yüksek noktası, şelaleler ve kraliyet pagodaları. Şehirden 90 dakika, tam gün. En iyi zamanı kasım–şubat."},
    {t:"Fil barınağı", price:"Yaklaşık 75–120 dolar", from:"Otelden alma", d:"Fillere binilmeyen etik barınaklar. Elephant Nature Park günlük ziyareti öğle yemeği ve ulaşım dahil yaklaşık 2.550 THB."},
    {t:"Chiang Rai: Beyaz, Mavi ve Siyah tapınak", price:"Tur sitelerinden bak", from:"Otelden alma", d:"Yol tek yön 3 saat, uzun ama dolu bir gün."},
    {t:"Tay yemek kursu", price:"Tur sitelerinden bak", from:"Otelden alma ya da şehir içi", d:"Pazar gezisiyle başlayan yarım günlük kurslar çok yaygın."}
  ],
  tourNotes:["Turların neredeyse hepsi otelden alır ve geri bırakır.","İnternetten almak sokaktaki tur dükkânına göre genelde %15–25 ucuz.","Şubat sonundan nisana kadar duman mevsimi olabilir; dağ turlarından önce hava kalitesine bak, manzara kapanabilir.","Fil barınağı seçerken binme ve gösteri olmayanları tercih et."],
  flights:[
    {to:"Bangkok (BKK ve DMK)", who:"Thai AirAsia, Thai Airways, Bangkok Airways, Thai Vietjet, Nok Air, Thai Lion Air", note:"1 sa 10 dk · 949–3.000 THB ve üstü"},
    {to:"Phuket", who:"Thai AirAsia, Thai Vietjet", note:"Yaklaşık 2 saat · günde 5 direkt · 1.500–3.500 THB"},
    {to:"Koh Samui", who:"Bangkok Airways", note:"Direkt uçuş var, tek firma"}
  ],
  flightVerdict:"Bangkok'a gün boyu çok sayıda uçuş var; AirAsia tek başına Don Mueang'a günde 17 sefere kadar çıkıyor, bu yüzden bilet ucuz. Phuket'e direkt uçmak Bangkok aktarmasından hem kısa hem çoğu zaman ucuz.",
  stay:[
    {t:"Old City", who:"İlk kez gelenler", d:"Tapınaklar, pazarlar ve restoranlar yürüme mesafesinde."},
    {t:"Nimman", who:"Kafe, alışveriş, uzun kalanlar", d:"Modern ve hareketli; havalimanına da yakın."},
    {t:"Night Bazaar / Nehir kenarı", who:"Pazar ve büyük oteller", d:"Akşam pazarı kapının önünde, nehir kıyısında sakin oteller."}
  ],
  stayPrices:[["Hostel yatağı","Yaklaşık 6 dolardan"],["Lüks resort","150 dolar ve üstü"]],
  stayVerdict:"Chiang Mai Tayland'ın ucuz şehirlerinden; en geniş fiyat aralığı Old City ve Nimman'da. Google Oteller bütün siteleri yan yana gösterir; Agoda'da fiyata bakıp pansiyonu doğrudan aramak bazen daha ucuza gelir.",
  sources:[
    ["Trvlogue: Chiang Mai havalimanından Old Town'a","https://www.trvlogue.com/en/chiang-mai-airport-old-town"],
    ["Uncharted Lens: havalimanından Nimman'a","https://unchartedlens.com/routes/thailand/chiang-mai-airport-to-nimmanhaemin-road/"],
    ["Lorenzigo: Chiang Mai havalimanı","https://lorenzigo.com/?p=31577"],
    ["Travel Guides Tip: Chiang Mai bütçesi","https://travelguidestip.com/chiang-mai-travel-cost/"],
    ["Travel Guides Tip: Chiang Mai günlük turlar","https://travelguidestip.com/?p=5071"],
    ["Nomado: Chiang Mai'de yapılacaklar","https://www.nomadotravel.app/en/guides/things-to-do-in-chiang-mai"]
  ]
};

/* ---------------- KRABI ---------------- */
const KRABI = {
  id:"krabi", name:"Krabi",
  airports:[{name:"Krabi Uluslararası Havalimanı", code:"KBV", q:"Krabi International Airport", ll:[8.0990,98.9862]}],
  bbox:[7.95,98.70,8.20,99.05], center:[8.0450,98.8700], zoom:11,
  facts:[["Ao Nang","25 km, 25–45 dk"],["Raylı sistem","Yok"]],
  exitIntro:"Krabi'de tatilcilerin çoğu havalimanından 25 km uzaktaki Ao Nang'da kalır. Railay'e kara yolu yok, sadece tekneyle gidilir.",
  exitGroups:[{items:[
    {t:"Paylaşımlı minibüs", where:"Geliş salonundaki tezgâhlar", price:"150–200 THB / kişi", time:"35–45 dk", pick:1,
     d:"Otelinin kapısına bırakır. Bavulla gelen bir iki kişi için en mantıklı seçenek."},
    {t:"Havalimanı otobüsü", where:"Geliş salonundaki tezgâh ya da şoförden bilet", price:"Ao Nang 150 · Krabi Town 100 THB", time:"45–60 dk",
     d:"Önce Krabi Town'a uğrar, sonra Ao Nang sahil yolu boyunca belli duraklarda durur. Saatleri uçuşlara göre ayarlıdır."},
    {t:"Sabit fiyatlı taksi", where:"Geliş salonundaki taksi tezgâhı", price:"Ao Nang yaklaşık 600–800 THB", time:"25–30 dk",
     d:"Tezgâhtan kupon alırsın, fiyat bölgeye göre sabit. Kaynaklar 400 ile 1.500 THB arasında farklı rakamlar veriyor; yan yana iki tezgâhın tablosuna bak."},
    {t:"Grab ve Bolt", where:"Uygulamanın gösterdiği nokta", price:"Yaklaşık 300–900 THB", time:"20–30 dk",
     d:"Çalışır ama sürücü az; eşleşme uzun sürebilir ve yoğun sezonda fiyat taksiye yaklaşır."},
    {t:"Songthaew", where:"Terminalden 5 dakika yürüyüş", price:"80–100 THB / kişi", time:"1 saat ve üstü",
     d:"Krabi Town'a en ucuz yol. Bavulla ve pazarlıkla uğraşmak istemeyene göre değil."}
  ]}],
  exitVerdict:"Bir iki kişiysen paylaşımlı minibüs: ucuz ve otele bırakır. Üç dört kişiysen taksi tezgâhı kişi başı aynı paraya gelir ve çok daha rahat. Oteline de sor; Ao Nang otellerinin çoğu taksiden ucuza servis ayarlıyor.",
  adv:{
    day:{pick:"Paylaşımlı minibüs (150–200 THB)", why:"Otelin kapısına bırakır ve otobüsten sadece biraz pahalıdır. Acelen varsa tezgâhtan sabit fiyatlı taksi al."},
    group:{pick:"Sabit fiyatlı taksi", why:"Üç dört kişi için kişi başı minibüsle aynı paraya gelir, beklemeden kalkar ve doğrudan otele gider."},
    late:{pick:"Sabit fiyatlı taksi", why:"Otobüs ve minibüsler akşam biter. Gece inişinde tezgâhtaki taksi ya da otelin servisi en sağlamı."}
  },
  zones:[
    {id:"aonang", n:"Ao Nang", ll:[8.0320,98.8240]},
    {id:"railay", n:"Railay", ll:[8.0110,98.8380],
     day:{pick:"Minibüs ya da taksi, sonra tekne", why:"Railay'e araçla gidilmez. Önce Ao Nang'a ya da Ao Nam Mao iskelesine git, oradan longtail tekneyle 15 dakika, kişi başı yaklaşık 100 THB. Bavulunu suya sokmadan binmek zor olabilir, su geçirmez çanta işe yarar."},
     late:{pick:"Geceyi Ao Nang'da geçirmeyi düşün", why:"Tekneler hava kararınca seyrekleşir ve pahalanır. Geç iniyorsan otelinle önceden konuş."}},
    {id:"town", n:"Krabi Town", ll:[8.0600,98.9190],
     day:{pick:"Havalimanı otobüsü (100 THB)", why:"Otobüsün ilk durağı Krabi Town. Daha ucuzu songthaew, daha rahatı taksi."}},
    {id:"klongmuang", n:"Klong Muang / Tubkaek", ll:[8.0560,98.7600],
     day:{pick:"Sabit fiyatlı taksi ya da otel servisi", why:"Bu bölge Ao Nang'dan da ileride ve otobüs uğramıyor. Tezgâhtan taksi al ya da otelinden servis iste."}},
    {id:"other", n:"Başka bir bölge (Koh Lanta dahil)"}
  ],
  appNotes:["Grab ve Bolt Krabi'de var ama sürücü az; her zaman araç bulacağına güvenme.","Ao Nang ile Krabi Town arasında songthaew çalışır.","Longtail tekneler burada taksi gibidir: Ao Nang'dan Railay kişi başı yaklaşık 100 THB, 15 dakika.","Tekne biletini sahildeki resmi gişeden al.","Ao Nang'da motosiklet kiralamak yaygın; ehliyet ve kask şart."],
  fx:{
    verdict:"Havalimanında ilk masrafa yetecek kadar bozdur, kalanını Ao Nang sahil yolundaki ya da Krabi Town'daki bürolarda boz.",
    places:[
      {t:"Havalimanı", d:"Banka gişeleri var, kur şehre göre düşük."},
      {t:"Ao Nang", d:"Sahil yolu boyunca döviz büroları sıralı; tabelaları karşılaştır."},
      {t:"Railay", d:"Seçenek az ve kur kötü. Railay'e geçmeden önce bozdur, nakit al."}
    ]
  },
  sights:[
    {t:"Railay Plajı", wq:"Railay Beach", d:"Kireçtaşı kayalarla çevrili, sadece tekneyle ulaşılan yarımada.", ll:[8.0110,98.8380]},
    {t:"Phra Nang Mağara Plajı", wq:"Phra Nang Beach", d:"Railay'den 10 dakika yürüyüş. Tayland'ın en güzel plajlarından sayılır.", ll:[8.0050,98.8375]},
    {t:"Kaplan Mağarası Tapınağı", wq:"Tiger Cave Temple", d:"1.237 basamakla çıkılan tepede Buda heykeli ve bütün Krabi manzarası. Giriş ücretsiz.", ll:[8.1270,98.9240]},
    {t:"Zümrüt Havuz", wq:"Emerald Pool Krabi", d:"Ormanın içinde doğal, yeşil bir yüzme havuzu.", ll:[7.9230,99.2650]},
    {t:"Ao Nang Plajı", wq:"Ao Nang", d:"Ana tatil kasabası; turların ve teknelerin kalktığı sahil.", ll:[8.0320,98.8240]},
    {t:"Hong Adası", wq:"Ko Hong Krabi", d:"İçinde lagün olan sakin ada; şnorkel için 4 Ada'dan iyi.", ll:[8.0790,98.6800]},
    {t:"Poda Adası", wq:"Ko Poda", d:"4 Ada turunun en bilinen durağı, beyaz kum.", ll:[7.9720,98.8090]}
  ],
  tours:[
    {t:"4 Ada turu", price:"600–1.200 THB", from:"Ao Nang iskelesi ve sahili", d:"Tup, Chicken, Poda adaları ve Phra Nang plajı. Yarım gün, longtail ya da sürat teknesi."},
    {t:"Hong Adaları", price:"800–1.500 THB", from:"Ao Nang iskelesi ya da Ao Thalane", d:"Daha sakin, lagünü ve şnorkeli iyi. Sabah 08:00 gibi kalkar, 15:00 gibi döner."},
    {t:"Phi Phi Adaları", price:"1.200–1.800 THB", from:"Ao Nang iskelesi", d:"Sürat teknesiyle 45 dakika; Maya Koyu, Pileh Lagünü, Bamboo Adası. Tam gün, 07:30–16:30."},
    {t:"James Bond Adası ve Phang Nga", price:"1.500–2.500 THB", from:"Ao Nang ya da Khlong Hia", d:"Kireçtaşı kayalar ve kano. Tam gün."},
    {t:"7 Ada gün batımı turu", price:"700–1.200 THB", from:"Ao Nang iskelesi", d:"Öğleden sonra çıkıp gün batımını denizde izlersin."}
  ],
  tourNotes:["Turların çoğu Ao Nang'dan kalkar ve otelden alır.","Phi Phi ve Hong adalarında milli park ücreti ayrıca ve nakit istenir.","Phi Phi'ye sadece gidip gelmek istiyorsan Krabi Town'daki Klong Jirad iskelesinden feribot kişi başı 400 THB.","Turlar Ao Nang'daki tezgâhlardan da alınır; internet fiyatıyla karşılaştır.","Mayıs–ekim arası deniz dalgalı olabilir, turlar iptal edilebilir."],
  flights:[
    {to:"Bangkok (BKK ve DMK)", who:"Thai AirAsia, Thai Vietjet, Thai Lion Air", note:"1 sa 15 dk · 1.200–2.500 THB"},
    {to:"Koh Samui", who:"Bangkok Airways", note:"Tek firma uçar"}
  ],
  flightVerdict:"Krabi'den iç hatların neredeyse tamamı Bangkok'a. Phuket çok yakın olduğu için uçulmaz; minibüsle ya da tekneyle gidilir. Chiang Mai gibi yerlere en kolay yol Bangkok aktarması ya da Phuket'ten direkt uçuş.",
  stay:[
    {t:"Ao Nang", who:"İlk kez gelenler", d:"En çok otel ve restoran burada; bütün turlar buradan kalkar."},
    {t:"Railay", who:"Manzara ve sakinlik", d:"Araç yok, sadece tekne. Güzel ama pahalı ve her şey tekneyle geldiği için fiyatlar yüksek."},
    {t:"Krabi Town", who:"Düşük bütçe, yerel hava", d:"Ucuz pansiyonlar ve gece pazarı. Plaj yok."},
    {t:"Klong Muang / Tubkaek", who:"Sessiz lüks", d:"Kalabalıktan uzak büyük resort'lar."}
  ],
  stayVerdict:"İlk gelişte Ao Nang en pratik üs. Railay'de kalacaksan bavulu tekneye taşıyacağını ve akşam teknelerinin seyrekleştiğini hesaba kat. Google Oteller bütün siteleri yan yana gösterir.",
  sources:[
    ["Byklo: Krabi havalimanından Ao Nang'a","https://www.byklo.rent/en/blog/how-to-get-from-krabi-airport-to-ao-nang/"],
    ["AirConnect: Krabi havalimanı","https://airconnect.live/en/airports/krabi-airport-transport-guide"],
    ["Byklo: Krabi ada turları","https://www.byklo.rent/en/blog/krabi-island-hopping-tour-guide/"],
    ["Nomado: Krabi ada turları","https://www.nomadotravel.app/en/guides/krabi-island-hopping-guide"],
    ["Travel Guides Tip: Krabi rehberi","https://travelguidestip.com/krabi-travel-guide/"]
  ]
};

/* ---------------- ÜLKE: TAYLAND ---------------- */
const TH = {
  id:"th", name:"Tayland", flag:"🇹🇭", cur:"THB", checked:"14 Kasım 2026",
  theme:{ink:"#221c4a", accent:"#e8b23a", stripe:"linear-gradient(#a51931 0 16.66%,#f4f5f8 0 33.33%,#2d2a4a 0 66.66%,#f4f5f8 0 83.33%,#a51931 0)"},
  lede:"Havalimanından çıkıştan otele, dövizden turlara kadar ilk gün lazım olan her şey.",
  cities:[PHUKET, BANGKOK, CHIANGMAI, KRABI],
  soon:["Pattaya","Koh Samui","Chiang Rai","Hua Hin"],
  info:[
    {t:"Giriş ve vize", items:[
      "Türk vatandaşları turistik gezide vizesiz girer, kalış süresi 30 gün. 15 Eylül 2026'dan önce 60 gündü.",
      "Süre göçmenlik ofisinde bir kez 30 gün uzatılabilir, ücreti 1.900 THB.",
      "Dijital varış kartı (TDAC) herkes için zorunlu ve ücretsiz. İnişten önceki 72 saat içinde doldurulur.",
      "TDAC için para isteyen siteler sahtedir; sadece resmi siteyi kullan. Aldığın QR kodun ekran görüntüsünü sakla.",
      "Pasaportunda en az 6 ay geçerlilik ve 30 gün içinde çıkış bileti olsun."],
     link:["Resmi TDAC sitesi","https://tdac.immigration.go.th/"]},
    {t:"Başını derde sokacak yasaklar", items:[
      "Elektronik sigara tamamen yasak: satmak da, yanında taşımak da. Yakalananlara el konur ve 5.000–30.000 THB ceza kesilir.",
      "Esrar Haziran 2025'ten beri sadece Tayland'dan alınmış reçeteyle yasal. Reçetesiz bulundurmanın cezası 25.000 THB'ye kadar para ve 3 aya kadar hapis. Dükkân tabelalarına aldanma.",
      "Ülkeye esrar sokmak ya da çıkarmak, reçeten olsa bile yasak.",
      "Kraliyet ailesi hakkında olumsuz konuşmak ağır suçtur. Paranın üstünde kralın resmi var; paraya basma."]},
    {t:"Alkol", items:[
      "Satış her gün 11:00–24:00 arası. Öğleden sonraki eski yasak Mayıs 2026'da kalktı.",
      "Alkol almak ve bara girmek için yaş sınırı 20.",
      "Yılda beş dini günde market ve restoranlarda alkol satılmaz.",
      "Yasak saatte mekânda içki içene de 10.000 THB'ye kadar ceza var."]},
    {t:"Görgü", items:[
      "Tapınakta omuz ve diz kapalı olsun, içeri girerken ayakkabını çıkar.",
      "Kimsenin başına dokunma, ayağını insanlara ya da Buda heykeline doğru uzatma.",
      "Bahşiş zorunlu değil; küsuratı bırakmak ya da masajda 50–100 THB vermek yaygın."]},
    {t:"Pratik bilgiler", items:[
      "Para birimi baht (THB). Küçük dükkân, pazar ve tekneler nakit çalışır.",
      "Trafik soldan akar; karşıya geçerken önce sağına bak.",
      "Musluk suyu içilmez, şişe su her markette var.",
      "Priz 220 volt. İki yuvarlak uçlu Türk fişi çoğu prize uyar.",
      "Motosiklet kiralarken ehliyet ve kask şart; ehliyetsiz kazayı seyahat sigortası karşılamaz.",
      "Acil numaralar: turist polisi 1155, ambulans 1669, polis 191."]}
  ],
  apps:[
    {t:"Grab", pick:"En yaygın", d:"Turistlerin en çok kullandığı uygulama. En çok sürücü burada, büyük havalimanlarında resmi biniş noktası var. Genelde en pahalısı.", url:"https://www.grab.com/th/en/download/"},
    {t:"Bolt", pick:"Daha ucuz", d:"Yerlilerin ve uzun kalanların tercihi, çoğu zaman belirgin şekilde ucuz. Sürücü bulmak bazen uzun sürer.", url:"https://bolt.eu/"},
    {t:"inDrive", d:"Fiyatı sen teklif edersin, sürücü kabul eder ya da karşı teklif verir.", url:"https://indrive.com/"}
  ],
  fxTips:["Pasaportunu yanına al, döviz bozdururken istenir.","Büyük banknotlar (100 dolar, 100 avro) daha iyi kur alır.","Yırtık, lekeli ya da eski seri banknotlar kabul edilmeyebilir.","Yabancı kartla ATM'den çekimde her işlemde sabit ücret kesilir; az sayıda büyük çekim yap.","ATM 'kendi kurumuzla çevirelim mi' diye sorarsa hayır de, kendi bankanın kuru daha iyidir."],
  needs:[
    {t:"SIM kart", q:"AIS shop OR True shop", osm:'node["shop"="mobile_phone"]', d:"Havalimanı geliş salonlarında AIS ve True tezgâhları var; sınırsız internetli turist hattı 299–599 THB. Pasaport gerekir. Şehirdeki 7-Eleven'larda da satılır."},
    {t:"Market", q:"supermarket", osm:'nwr["shop"~"supermarket|convenience"]', d:"7-Eleven her köşede ve 24 saat açık. Büyük alışveriş için Big C ve Lotus's."},
    {t:"Eczane", q:"pharmacy", osm:'nwr["amenity"="pharmacy"]', d:"Boots ve Watsons zincirleri turistik bölgelerde yaygın, çalışanlar İngilizce konuşur. Sürekli kullandığın ilacı yanında getir."},
    {t:"Helal yemek", q:"halal restaurant", osm:'nwr["amenity"~"restaurant|fast_food"]["diet:halal"="yes"]', d:"Güneyde, özellikle Phuket ve Krabi'de Müslüman nüfus fazladır ve helal restoran bulmak kolaydır. Bangkok ve Chiang Mai'de de var, haritadan bak."},
    {t:"ATM", q:"ATM", osm:'node["amenity"="atm"]', d:"Her yerde var. Yabancı kartla her çekimde sabit ücret kesilir."},
    {t:"Hastane", q:"hospital", osm:'nwr["amenity"="hospital"]', d:"Acil ambulans 1669, turist polisi 1155. Özel hastaneler seyahat sigortasıyla çalışır."}
  ],
  sources:[
    ["Visa Manager: Türk vatandaşları için Tayland","https://visamanager.io/nationalities/thailand-visa-for-turkish-citizens"],
    ["Visit Thailand Today: vize ve giriş","https://www.visitthailandtoday.com/guides/thailand-visa-requirements"],
    ["Visit Thailand Today: alkol kuralları","https://www.visitthailandtoday.com/guides/drinking-in-thailand"],
    ["Terms.law: esrar yasası","https://www.terms.law/Thai/cannabis/cannabis-2025-status.html"],
    ["Can I Bring To: elektronik sigara","https://www.canibringto.com/blog/thailand-vaping-laws-penalties-complete-guide-2026"]
  ]
};
