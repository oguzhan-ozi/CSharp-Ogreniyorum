// ===================================
// 🤖 AI PAIR PROGRAMMER - SOKRATIK ASISTAN
// Kullanicinin kodunu analiz eder, CEVAP VERMEZ, yonlendirir!
// ===================================

const PP_STATE = {
  isOpen: false,
  hintIndex: 0,
  hints: [],
  lastAnalyzedCode: '',
  monitorIntervalId: null
};

// ─── Ders bazli Sokratik ipuclari (CEVAP YOK, YONLENDIRME VAR) ─────────
const SOCRATIC_HINTS = {
  'ders-1-1': [
    "Ekrana bir seyler <em>yazdurmak</em> icin C#'ta hangi nesneyi kullaniyoruz? Ipucu: Teorik kisimda 'Console' ile baslayan bir metot vardi...",
    "<code>Console</code> nesnesi iki metod sunuyor: <code>Write()</code> ve <code>WriteLine()</code>. Ikisi arasindaki fark ne? Hangisi alt satira gecer?",
    "Metinleri (yazi) C#'ta hangi isaret arasina aliyoruz? Tek mi cift mi tirnak? Bunu bilirsen parantezin icine ne yazacagini anlarsun.",
  ],
  'ders-1-2': [
    "Bu derste <code>Console.Write()</code> kullanmani istiyorlar. <code>WriteLine()</code>'dan farki ne? Neden bu derste ona ihtiyac var?",
    "Iki ayri <code>Console.Write()</code> cagirman lazim. 'C# Harika' ciktisini iki parcaya bolersen ne olur?",
    "Ilk Write() icin 'C# ' (sonunda boslukla), ikinci Write() icin ne yazarsin? Parcalari dusun.",
  ],
  'ders-1-3': [
    "Gorev iki degisken istiyor: bir <code>string</code> ve bir <code>int</code>. Degisken tanimlamak icin sozdizimini hatirladin mi? <code>tip isim = deger;</code>",
    "'sehir' icin <code>string</code> tipini, 'plaka' icin <code>int</code> tipini kullanmalisin. String degerlerde tirnak kullanilir mi?",
    "Her iki degiskeni de tanimladiktan sonra <code>Console.WriteLine()</code> ile sirali yazdir. Iki ayri satir mi, yoksa ayni satirda mi olsun?",
  ],
  'ders-1-4': [
    "<code>Convert.ToInt32()</code> bir string'i tam sayiya donusturuyor. Parantezin icine ne yazarsin? Donusurmek istedigin degisken mi?",
    "Donusturme isleminide <code>int fiyat = Convert.ToInt32(...);</code> seklinde yeni bir degiskene atamalsin. Peki sonra ne yapman lazim?",
    "Dondukten sonra <code>fiyat</code> artik bir sayi. Ona 50 ekleyip <code>Console.WriteLine()</code> ile yazdir. Nasil bir ifade olur?",
  ],
  'ders-1-5': [
    "<code>Math.Max(sayi1, sayi2)</code> iki sayidan buyuk olani secer. 100 ve 250 icin nasil cagirilir? Sonucu yazdirmayi unutma!",
    "<code>Math.Sqrt(sayi)</code> karekoku hesaplar. 81'in karekoku kac? Metodu kullanip cevabi dogrulamak ister misin?",
    "Iki ayri <code>Console.WriteLine()</code> kullanmalisin: Birinde Max, digerinde Sqrt. Siralamayi dogrudan yaz.",
  ],
  'ders-1-6': [
    "Bir string'in kac karakter oldugunu bulmak icin <code>.Length</code> ozelligi kullanilir. <code>takim.Length</code> nasil yazilir ve ciktisi ne olur?",
    "<code>.ToUpper()</code> metodu metni TAMAMEN BUYUK harfe cevirir. Bunu <code>takim.ToUpper()</code> seklinde cagirabilirsin. Denedim mi?",
    "Her ikisini ayri <code>Console.WriteLine()</code> ile yazdir. Dogru sirada mi cikartiyorsun?",
  ],
  'ders-2-1': [
    "If-else yapi kurulurken once kosulun ne oldugu dusunulmeli. 'yas 18'den kucukse' kosulunu nasil ifade edersin? Hangi karsilastirma operatorunu kullanmalisin?",
    "Kosul dogru ciktiginda 'Cocuk' yazmali, yanlis ciktiginda 'Yetiskin' yazmalisin. Bunu hangi blok gerceklestiriyor?",
    "if (...) { } else { } yapisinin icine dogru Console.WriteLine yazdin mi? Her blok ayri bir cikti vermeli.",
  ],
  'ders-2-2': [
    "Switch yapisi icin once hangi degiskeni kontrol ettigini belirle. case 'Kirmizi' seklinde mi yazilir yoksa baska bir sekilded mi?",
    "Her case blogu bir <code>break;</code> ile bitmeli. Neden? Bunu atlarsaniz C# sana derleme hatasi verir. Yazdin mi?",
    "default blogu tum case'lerin altina yazilir. Gorevde default istenmiyor ama iyi pratik. Cikti dogru mu: 'Dur' mu gormeni gerekiyor?",
  ],
  'ders-2-3': [
    "For dongusunde uc kisim var: Baslangic, Kosul, Artis. Ornegin <code>for(int i=1; i<=5; i++)</code>. Simdi gorev 1'den 5'e istiyor, sen nasil yazdun?",
    "Dongudeki sayac degiskeni her turda degisiyor. <code>i++</code> ne anlama geliyor? Artmiyorsa ne olur?",
    "Dongununn icindeki <code>Console.WriteLine()</code> her turda calisacak. Hangi degiskeni yazdir? i mi?",
  ],
  'ders-3-1': [
    "foreach dongusunde 'her eleman icin' mantigiyla calisiyoruz. <code>foreach (string m in meyveler)</code> yapisinda <code>m</code> ne temsil ediyor?",
    "Dongu icinde <code>Console.WriteLine(m)</code> yazarsan her iterasyonda bir araba ismi cikiyor. Bunu denedin mi?",
    "string[] arabalar dizisinin elemanlarina 0, 1, 2 indexleriyle erisilebilir. foreach ise hepsini otomatik dolasiyor. Hangisi daha pratik?",
  ],
  'ders-3-2': [
    "try blogu 'riskli' kod icin, catch blogu hata yakalamak icin. Kodunu try { } icerisine aldin mi?",
    "catch blogunun icine 'Hata tespit edildi' yazdirman isteniyor. Bunun icin <code>Console.WriteLine()</code> kullanmalisin.",
    "finally blogu opsiyonel. Ancak catch blogu olmadan try tek basina islemez. catch(Exception e) { } yapisi dogrumu?",
  ],
  'ders-4-1': [
    "MesajYaz() metodu zaten tanimlanmis. Onu Main icinde sadece <em>cagirman</em> yeterli. Metot cagrisi nasil yapiliyor? Ismi ve parantezi var mi?",
    "Metot cagirisi soyle yaplir: <code>MetotIsmi();</code>. Noktalı virgulu unutma! MesajYaz icin bu nasil yazilir?",
  ],
  'ders-4-2': [
    "Carp metodu iki int parametre aliyor ve geriye int donduruyor. Icini tamamlamak icin <code>return a * b;</code> yazmalisin. Yazdin mi?",
    "return yazdiktan sonra Main icinde <code>int sonuc = Carp(4, 5);</code> ile cagirup, <code>Console.WriteLine(sonuc);</code> ile yazdirabilirsin.",
  ],
  'ders-4-3': [
    "Ekle(5, 5) iki parametreli metodu, Ekle(5, 5, 5) uc parametreli metodu cagirir. C# dogru olanini otomatik secertir. Her ikisini de ayri satirda cagirdin mi?",
    "Her cagrinin sonucunu Console.WriteLine ile yazdirmalisin. Sonuclar 10 ve 15 olmali.",
  ],
  'ders-5-1': [
    "new Oyuncu() ile yeni bir nesne olusturuyoruz. Bunu bir degiskene ataman lazim: <code>Oyuncu oyuncu1 = new Oyuncu();</code>. Yazdin mi?",
    "Nesnenin 'isim' ozelligine nokta (.) ile erisebilirsin: <code>oyuncu1.isim</code>. Bunu Console.WriteLine ile yazdir.",
  ],
  'ders-5-2': [
    "Constructor metodunun adi sinif adiyla AYNI olmali: <code>public Kedi(string kediIsmi)</code>. Bunu yazdun mi? Sinif adi Kedi...",
    "Constructor icinde parametreyi class degiskenine ata: <code>isim = kediIsmi;</code>. Sonra Main'de <code>new Kedi(\"Tekir\")</code> ile olustur.",
  ],
  'ders-5-3': [
    "Property tanimlama icin sozdizimi: <code>public int Miktar { get { return miktar; } }</code>. Baglantili oldugu private degisken ne?",
    "get blogu icinde <code>return miktar;</code> yazmalisin. Bu private degiskeni okumaya izin verir. Yazdun mi?",
  ],
  'ders-5-4': [
    "Miras almak icin sinif adinin yanina iki nokta eklenir: <code>class Kedi : Hayvan</code>. Bu kadari yeterli! Daha ne gerekiyor?",
    "Miras aldiktan sonra Hayvan'in tum metotlari Kedi'nin kullanicisina acilir. SesCikar() Hayvan'da tanimli, Kedi'den cagirmak mumkun mu?",
  ],
  'ders-5-5': [
    "virtual anahtar kelimesi Arac sinifindaki Calis() metoduna konulmali. Bu 'alt siniflar bu metodu ezebilir' demektir.",
    "override anahtar kelimesi Araba sinifindaki Calis() metoduna konulmali. 'Ben ebeveynimi gececegim' anlamina gelir.",
  ],
  'ders-6-1': [
    "List'e eleman eklemek icin <code>.Add()</code> kullanilir. <code>puanlar.Add(100);</code> seklinde. Hem 100 hem 85 icin iki ayri Add yazdun mu?",
    "Listenin kac elemani oldugunu bulmak icin <code>.Count</code> kullanilir. Dizilerdeki .Length gibi ama Liste icerek. Console.WriteLine ile yazdir.",
  ],
  'ders-6-2': [
    "Dictionary'ye eleman eklemek icin <code>.Add(anahtar, deger)</code> kullanilir. <code>ingilizceSozluk.Add(\"Apple\", \"Elma\");</code> yazdin mi?",
    "Anahtarla deger okumak icin koseli parantez kullanilir: <code>ingilizceSozluk[\"Apple\"]</code>. Bunu Console.WriteLine ile yazdir.",
  ],
  'ders-6-3': [
    "LINQ Where kullanimi: <code>notlar.Where(x => x > 50)</code>. Bu bir sorgu dondurur. .ToList() ile listeye cevirebilirsin.",
    "Filtrelenen listenin kac elemani oldugunu .Count ile bulabilirsin. 50'den buyuk: 80, 95, 100, 60 = 4 eleman.",
  ],
  'ders-7-1': [
    "DosyaIndir metodunun basina <code>async</code>, geri donus tipini <code>Task</code> yapman lazim: <code>static async Task DosyaIndir()</code>.",
    "await Task.Delay(2000) yazarsan program 2 saniye bekler ama DONMAZ. Bunu metodun icine yazdun mi?",
    "Main'de cagirrken <code>await DosyaIndir();</code> seklinde cagirilmali. Unutma: await kullanan metot da async olmali!",
  ],
  'ders-7-2': [
    "Generic metot tanimlamak icin metot adinin yanina <code><T></code> eklenir: <code>static void DegerGoster<T>(T veri)</code>. Yazdin mi?",
    "Metodu cagirrken tip acikca belirtilebilir: <code>DegerGoster<string>(\"C#\")</code> veya <code>DegerGoster<double>(99.9)</code>.",
  ],
  'ders-8-1': [
    "<code>File.WriteAllText(yol, icerik)</code> dosyaya yazar. Ilk parametre dosya yolu (path), ikinci parametre icerik (data). Sirayi dogruladun mi?",
  ],
  'ders-8-2': [
    "<code>new SqlConnection(connStr)</code> ile baglanti nesnesi olusturuluyor. Bunu 'sql' adinda bir degiskene ataman lazim.",
    "Baglanti nesnesi olusturulduktan sonra <code>sql.Open()</code> ile baglantiy acabilirsin. Yazdun mi?",
  ],
  'ders-8-3': [
    "Dogru komutu Console.WriteLine ile yazdir: <code>Console.WriteLine(\"dotnet publish -c Release\");</code>. Tirnaklar dogrumu?",
  ],
  'ders-9-1': [
    "Ilk hata: string satiri noktaliu virgul (;) ile bitmeli. <code>string mesaj = \"Merhaba Dunya\";</code> yazdun mi?",
    "Ikinci hata: if blogunun kapanisi eksik. { ve } sayilarina bak. Tum bloklar dogru kapanmis mi?",
  ],
  'ders-9-2': [
    "while dongusunun icine <code>i++</code> yazman lazim. Bu olmadan 'i' hep 0 kalir ve sonsuza gider.",
    "i++ yazmak 'i'yi her turda 1 arttirir. i = 0, 1, 2 olunca kosul (i < 3) yanlis olur ve donguden cikilir.",
  ],
  'ders-9-3': [
    "3 elemanlı dizinin son elemani renkler[2]'dir. Neden? Bilgisayarlar 0'dan sayar: 0=Kirmizi, 1=Mavi, 2=Yesil.",
    "renkler[3] diye bir index yok! Bunu renkler[2] olarak duzeltmek sorunun cozumu. Satirda ne degistirmen gerekiyor?",
  ],
};

// ─── Genel Kod Analizi (Baglam Farkindaligi) ────────────────────────────
function analyzeCode(code, lesson) {
  const issues = [];
  const starterNorm = lesson.content.starterCode.replace(/\/\/[^\n]*/g, '').replace(/\s+/g, '');
  const codeNorm = code.replace(/\/\/[^\n]*/g, '').replace(/\s+/g, '');

  // Hic degisiklik yapilmamis mi?
  if (codeNorm === starterNorm) {
    issues.push({ priority: 10, msg: `Henuz starter kodu degistirmedin. Gorev ne soylüyor: "<em>${lesson.content.task}</em>". Yorum satirlarina (//) dikkat et, nereye ne yazman gerektigini gosteriyorlar!` });
    return issues;
  }

  // Validation gecti mi?
  if (lesson.content.validation && lesson.content.validation(code)) {
    issues.push({ priority: 0, msg: '✅ <strong>Harika!</strong> Kodun dogru gorunuyor! Simdi <strong>▶ Calistir</strong> butonuna basarak sonucu gormeyimisin?' });
    return issues;
  }

  // Sulu parentez esitligi
  const opens = (code.match(/\{/g) || []).length;
  const closes = (code.match(/\}/g) || []).length;
  if (opens !== closes) {
    issues.push({ priority: 9, msg: `Kodundaki <code>{</code> ve <code>}</code> sayilarina bak. Simdi: <strong>${opens} acilis, ${closes} kapanis</strong>. Eslesmeli! Hangi blok kapanmamis olabilir?` });
  }

  // Noktalı virgul eksigi (basit)
  const suspectLines = code.split('\n').filter(l => {
    const t = l.trim();
    return t.length > 3 &&
      !t.startsWith('//') && !t.startsWith('/*') && !t.startsWith('*') &&
      !t.endsWith('{') && !t.endsWith('}') && !t.endsWith(';') &&
      !/^(using|namespace|class|static|public|private|protected|if|else|for|while|foreach|try|catch|finally)/.test(t);
  });
  if (suspectLines.length > 0) {
    issues.push({ priority: 7, msg: `C#'ta her komut satiri <code>;</code> ile bitmeli. Satira bak: "<code>${suspectLines[0].trim().substring(0, 60)}</code>" — sonunda noktalı virgul var mi?` });
  }

  return issues.sort((a, b) => b.priority - a.priority);
}

// ─── Ana Ipucu Uretici ────────────────────────────────────────────────
function buildHints(lessonId) {
  const found = getLessonById(lessonId);
  if (!found) return ["Bir ders acmadiniz. Oncelikle sidebar'dan bir ders secin."];

  const { lesson } = found;
  const code = getEditorCode();

  const hints = [];

  // 1. Genel kod analizi
  const codeIssues = analyzeCode(code, lesson);
  codeIssues.forEach(i => hints.push(i.msg));

  // Validation gectiyse yeterli
  if (codeIssues.length && codeIssues[0].priority === 0) return hints;

  // 2. Ders ozel Sokratik ipuclari
  const lessonHints = SOCRATIC_HINTS[lessonId] || [];
  hints.push(...lessonHints);

  // 3. En az 1 ipucu geri garanti
  if (hints.length === 0) {
    hints.push(`Kodu calistirmayi denedin mi? <strong>▶ Calistir</strong> butonuna bas. Yanlis bir sey varsa cikti paneli sana soylecek!`);
    hints.push(`Gorev su: "<em>${lesson.content.task}</em>". Burada tam olarak ne yapman gerekiyor? Adim adim dusun.`);
  }

  return hints;
}

// ─── UI: Paneli Ac ───────────────────────────────────────────────────
function openPairProgrammer() {
  if (!appState.currentLessonId) {
    showToast('Once bir ders secmelisin!', '');
    return;
  }

  // IDE panel acik degilse once ac
  const ide = document.getElementById('ide-panel');
  if (ide && ide.style.display !== 'flex') {
    toggleIde();
  }

  PP_STATE.hintIndex = 0;
  PP_STATE.lastAnalyzedCode = getEditorCode();
  PP_STATE.hints = buildHints(appState.currentLessonId);
  PP_STATE.isOpen = true;

  renderPairPanel();
  startPairContextMonitor();
}

// ─── UI: Paneli Render Et ────────────────────────────────────────────
function renderPairPanel() {
  let panel = document.getElementById('pair-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'pair-panel';
    panel.className = 'pair-panel';
    document.getElementById('ide-panel').appendChild(panel);
    requestAnimationFrame(() => panel.classList.add('open'));
  }

  const hints = PP_STATE.hints;
  const idx = PP_STATE.hintIndex;
  const currentHint = hints[idx] || 'Daha fazla ipucu yok. Kodu calistirarak sonucu gormeni tavsiye ederim!';
  const isLast = idx >= hints.length - 1;

  panel.innerHTML = `
    <div class="pp-header">
      <div class="pp-avatar">🤖</div>
      <div class="pp-title-wrap">
        <div class="pp-title">Pair Programmer</div>
        <div class="pp-subtitle">Sokratik Asistan · Ipucu ${idx + 1}/${hints.length}</div>
      </div>
      <button class="pp-close" onclick="closePairProgrammer()" title="Kapat">✕</button>
    </div>
    <div class="pp-body">
      <div class="pp-bubble" id="pp-bubble">${currentHint}</div>
        <div class="pp-tip-note">Bu asistan cevap kodu vermez; adim adim dusunmen icin yonlendirir.</div>
      <div class="pp-progress">
        ${hints.map((_, i) => `<div class="pp-dot ${i <= idx ? 'active' : ''}"></div>`).join('')}
      </div>
    </div>
    <div class="pp-footer">
      ${idx > 0 ? `<button class="btn btn-ghost btn-sm" onclick="prevPairHint()">← Onceki</button>` : '<div></div>'}
      <div style="display:flex;gap:8px;">
        ${!isLast
      ? `<button class="btn btn-p btn-sm" onclick="nextPairHint()">Sonraki Ipucu →</button>`
      : `<button class="btn btn-g btn-sm" onclick="refreshPair()">🔄 Yeniden Analiz</button>`
    }
      </div>
    </div>
  `;
}

function nextPairHint() {
  if (PP_STATE.hintIndex < PP_STATE.hints.length - 1) {
    PP_STATE.hintIndex++;
    renderPairPanel();
    // Bubble animasyonu yenile
    const b = document.getElementById('pp-bubble');
    if (b) { b.style.animation = 'none'; requestAnimationFrame(() => { b.style.animation = ''; }); }
  }
}

function prevPairHint() {
  if (PP_STATE.hintIndex > 0) {
    PP_STATE.hintIndex--;
    renderPairPanel();
  }
}

function refreshPair() {
  PP_STATE.hintIndex = 0;
  PP_STATE.lastAnalyzedCode = getEditorCode();
  PP_STATE.hints = buildHints(appState.currentLessonId);
  renderPairPanel();
}

function softlyRefreshPairIfNeeded() {
  if (!PP_STATE.isOpen || !appState.currentLessonId) return;
  const code = getEditorCode();
  if (code === PP_STATE.lastAnalyzedCode) return;

  PP_STATE.lastAnalyzedCode = code;
  PP_STATE.hintIndex = 0;
  PP_STATE.hints = buildHints(appState.currentLessonId);
  renderPairPanel();

  const bubble = document.getElementById('pp-bubble');
  if (bubble) {
    bubble.style.animation = 'none';
    requestAnimationFrame(() => {
      bubble.style.animation = '';
    });
  }
}

function startPairContextMonitor() {
  stopPairContextMonitor();
  // Monaco hazir oldugunda ve yazim degistiginde baglama gore yeniden analiz eder.
  PP_STATE.monitorIntervalId = setInterval(() => {
    if (!PP_STATE.isOpen) return;
    if (!window.monacoEditor || typeof getEditorCode !== 'function') return;
    softlyRefreshPairIfNeeded();
  }, 1200);
}

function stopPairContextMonitor() {
  if (PP_STATE.monitorIntervalId) {
    clearInterval(PP_STATE.monitorIntervalId);
    PP_STATE.monitorIntervalId = null;
  }
}

function closePairProgrammer() {
  const panel = document.getElementById('pair-panel');
  if (panel) {
    panel.classList.remove('open');
    setTimeout(() => panel.remove(), 300);
  }
  PP_STATE.isOpen = false;
  stopPairContextMonitor();
}

// Window'a expose et
window.openPairProgrammer = openPairProgrammer;
window.nextPairHint = nextPairHint;
window.prevPairHint = prevPairHint;
window.refreshPair = refreshPair;
window.closePairProgrammer = closePairProgrammer;
