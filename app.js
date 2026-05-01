// ===================================
// ANA UYGULAMA MANTIĞI
// ===================================

const STATE_KEY = 'csharp_platform_state';

let appState = {
  currentView: 'home',
  currentLessonId: null,
  currentCapstoneId: null,
  completedLessons: [],
  completedCapstones: [],
  capstoneCertificates: {},
  totalXP: 0,
  streak: 1,
  quizState: null
};

const CAPSTONE_PROJECTS = [
  {
    id: 'capstone-banka-otomasyonu',
    title: 'Konsol Tabanli Banka Otomasyonu',
    level: 'Orta',
    xp: 220,
    summary: 'Hesap acma, para yatirma/cekme ve bakiye goruntuleme akislarini tek konsol uygulamasinda birlestir.',
    starterCode: `using System;

class Program
{
    static void Main(string[] args)
    {
        decimal bakiye = 1000;
        Console.WriteLine("=== Antigravity Bank ===");
        
        // GOREV 1: Kullanicidan secim al (1-Para Yatir, 2-Para Cek, 3-Bakiye)
        // GOREV 2: Secime gore islem yap (if/switch)
        // GOREV 3: En az bir yerde hata kontrolu yap (ornek: yetersiz bakiye)
        // GOREV 4: Islem sonunda guncel bakiyeyi yazdir
        
    }
}`,
    requirements: [
      'Kullanicidan secim alip en az 3 farkli islem yolu sunmali.',
      'Para cekme/yatirma akislarinda karar mekanizmasi kullanmali.',
      'En az bir hata/kenar durum kontrolu icermeli.',
      'Program sonunda guncel bakiye ekrana yazdirilmali.'
    ],
    validate: (code) =>
      /(switch|if\s*\()/i.test(code) &&
      /Console\.ReadLine\s*\(/.test(code) &&
      /(bakiye\s*[+\-]=|bakiye\s*=)/i.test(code) &&
      /Console\.WriteLine\s*\(/.test(code)
  },
  {
    id: 'capstone-todo-list',
    title: 'Konsol Todo List Uygulamasi',
    level: 'Orta',
    xp: 220,
    summary: 'Liste yapilariyla gorev ekleme, listeleme ve tamamlama davranisini tek bir mini urunde topla.',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        List<string> gorevler = new List<string>();
        
        // GOREV 1: En az 2 gorev ekle (Add)
        // GOREV 2: Gorevleri numarali sekilde listele (for/foreach)
        // GOREV 3: Bir gorevi tamamlandi olarak guncelle/sil (Remove veya [index] atama)
        // GOREV 4: Son durumu tekrar ekrana yazdir
        
    }
}`,
    requirements: [
      'List<T> ile gorevler saklanmali.',
      'Gorev ekleme ve listeleme adimlari kodda olmali.',
      'En az bir guncelleme/silme islemi olmali.',
      'Final durum ekrana yazdirilmali.'
    ],
    validate: (code) =>
      /List\s*<\s*string\s*>\s+\w+/i.test(code) &&
      /\.Add\s*\(/.test(code) &&
      /(foreach|for\s*\()/i.test(code) &&
      /Console\.WriteLine\s*\(/.test(code)
  }
];

function ensureStateSchema() {
  if (!Array.isArray(appState.completedLessons)) appState.completedLessons = [];
  if (!Array.isArray(appState.completedCapstones)) appState.completedCapstones = [];
  if (!appState.capstoneCertificates || typeof appState.capstoneCertificates !== 'object') {
    appState.capstoneCertificates = {};
  }
  if (!('currentCapstoneId' in appState)) appState.currentCapstoneId = null;
}

function getCapstoneById(capstoneId) {
  return CAPSTONE_PROJECTS.find(p => p.id === capstoneId) || null;
}

function getLessonDeepDiveHtml(lesson, chapter) {
  const chapterTips = {
    'bolum-1': {
      focus: 'Temel syntax ve veri tipleri',
      miniTask: 'Ayni kodu 2 farkli sekilde yaz: klasik birlestirme ve string interpolation.',
      interview: 'Neden C# guclu tipli bir dil olmanin avantajlarini acikla.'
    },
    'bolum-2': {
      focus: 'Karar yapilari ve kontrol akisi',
      miniTask: 'if-else ile yazdigini switch-case ile yeniden kurup okunabilirlik farkini not et.',
      interview: 'Hangi durumda switch, hangi durumda if-else secersin?'
    },
    'bolum-3': {
      focus: 'Veri yapilari ve hata yonetimi',
      miniTask: 'Ayni problemi once array sonra List<T> ile coz; artis/eksi yonlerini yaz.',
      interview: 'Try-catch bloklarinda hata yonetim stratejisi nasil kurulur?'
    },
    'bolum-4': {
      focus: 'Metot tasarimi ve yeniden kullanilabilirlik',
      miniTask: '3 satirda yaptigin islemi metotlastirip parametreli hale getir.',
      interview: 'void ve return donen metot farkini is ornegiyle anlat.'
    },
    'bolum-5': {
      focus: 'OOP tasarimi',
      miniTask: 'Gercek hayattan bir varligi class/field/method olarak modelle.',
      interview: "Encapsulation ve inheritance'i ayni projede nasil dengelersin?"
    },
    'bolum-6': {
      focus: 'Veri sorgulama ve koleksiyon verimliligi',
      miniTask: 'LINQ ile filtrele/sirala, sonra ayni isi donguyle yapip karsilastir.',
      interview: 'LINQ okunabilirligi nasil artirir, ne zaman performans maliyeti dogurabilir?'
    },
    'bolum-7': {
      focus: 'Async ve generic dusunce',
      miniTask: 'Senkron bir akisi async/await ile yeniden duzenle.',
      interview: 'Task tabanli asenkron modelin kullanici deneyimine etkisini acikla.'
    },
    'bolum-8': {
      focus: 'Gercek dunya entegrasyonu',
      miniTask: 'Dosya kaydi, hata yakalama ve loglama adimlarini tek akisla bagla.',
      interview: "Deployment oncesi checklist'te hangi basliklar olmalidir?"
    },
    'bolum-9': {
      focus: 'Debug refleksi ve hata kok neden analizi',
      miniTask: 'Bilerek bozuk bir kod yaz, hatayi adim adim izole et ve cozum notu yaz.',
      interview: 'Runtime ve syntax hatalarini ayirmak neden kritik?'
    },
    'bolum-10': {
      focus: 'Urun odakli dusunce ve kariyer',
      miniTask: 'Ayni ozelligi once AI ile cikar, sonra insan odakli iyilestirmeleri listele.',
      interview: 'Yapay zeka caginda junior bir gelistirici nasil fark yaratir?'
    }
  };

  const tip = chapterTips[chapter.id];
  if (!tip) return '';

  return `
    <div class="deep-dive-box">
      <h3>🔎 Derinlesme Notlari</h3>
      <ul>
        <li><strong>Odak:</strong> ${tip.focus}</li>
        <li><strong>Mini Uygulama:</strong> ${tip.miniTask}</li>
        <li><strong>Mulakat Pratigi:</strong> ${tip.interview}</li>
      </ul>
      <p style="margin-top:8px;">Bu adimi tamamladiginda sadece kod yazmis olmazsin; konuyu anlatabilir hale de gelirsin.</p>
    </div>
  `;
}

// ── State yönetimi ──────────────────
function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      appState = { ...appState, ...JSON.parse(saved) };
    }
  } catch(e) {}
  ensureStateSchema();
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(appState));
}

// ── Sayfa render ────────────────────
function renderSidebar() {
  const nav = document.getElementById('chapter-list');
  nav.innerHTML = '';

  CURRICULUM.forEach(chapter => {
    const completedInChapter = chapter.lessons.filter(l => appState.completedLessons.includes(l.id)).length;
    const chapterDiv = document.createElement('div');
    chapterDiv.className = 'chapter-group';

    const header = document.createElement('div');
    header.className = 'chapter-header open';
    header.innerHTML = `
      <div class="ch-icon" style="background:${chapter.color}22; color:${chapter.color}; border:1px solid ${chapter.color}44;">${chapter.icon}</div>
      <div class="ch-info">
        <div class="ch-name">${chapter.title}</div>
        <div class="ch-meta">${completedInChapter}/${chapter.lessons.length} ders tamamlandı</div>
      </div>
      <span class="ch-arr">▶</span>
    `;

    const lessonList = document.createElement('div');
    lessonList.className = 'lesson-list';

    chapter.lessons.forEach((lesson, idx) => {
      const isCompleted = appState.completedLessons.includes(lesson.id);
      const isActive = lesson.id === appState.currentLessonId;
      const isLocked = idx > 0 && !appState.completedLessons.includes(chapter.lessons[idx - 1].id);

      const lessonEl = document.createElement('div');
      lessonEl.className = `ls-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`;
      lessonEl.dataset.lessonId = lesson.id;
      lessonEl.innerHTML = `
        <span class="ls-ico">${isCompleted ? '✅' : isLocked ? '🔒' : '○'}</span>
        <div class="ls-name">${lesson.title}</div>
        <div class="ls-xp">+${lesson.xp} XP · ${lesson.duration}</div>
      `;

      if (!isLocked) {
        lessonEl.addEventListener('click', () => openLesson(lesson.id));
      }

      lessonList.appendChild(lessonEl);
    });

    header.addEventListener('click', () => {
      header.classList.toggle('open');
      lessonList.style.display = header.classList.contains('open') ? 'block' : 'none';
    });

    chapterDiv.appendChild(header);
    chapterDiv.appendChild(lessonList);
    nav.appendChild(chapterDiv);
  });

  // XP bar güncelle
  const level = Math.floor(appState.totalXP / 100) + 1;
  const xpInLevel = appState.totalXP % 100;
  
  if (document.getElementById('xp-fill')) {
    document.getElementById('xp-fill').style.width = xpInLevel + '%';
    document.getElementById('xp-lv').textContent = `Seviye ${level}`;
    document.getElementById('xp-total').textContent = `${appState.totalXP} XP`;
  }
  
  if (document.getElementById('sb-xp')) {
    document.getElementById('sb-xp').textContent = appState.totalXP;
  }
}

// ── Görünüm değişimi ─────────────────
function showView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById(`${viewName}-view`);
  if (view) view.classList.add('active');
  appState.currentView = viewName;
}

// ── Ders açma ───────────────────────
async function openLesson(lessonId) {
  const found = getLessonById(lessonId);
  if (!found) return;
  const { lesson, chapter } = found;

  appState.currentLessonId = lessonId;
  appState.currentCapstoneId = null;
  saveState();
  renderSidebar();

  // Topbar güncelle
  const tbTitle = document.getElementById('tb-title');
  if (tbTitle) tbTitle.textContent = lesson.title;
  const tbChapter = document.getElementById('tb-chapter');
  if (tbChapter) tbChapter.textContent = chapter.title;
  const tbDur = document.getElementById('tb-dur');
  if (tbDur) tbDur.textContent = lesson.duration;

  // Theory içeriği yükle
  const deepDiveHtml = getLessonDeepDiveHtml(lesson, chapter);
  document.getElementById('theory-content').innerHTML = `${lesson.content.theory}${deepDiveHtml}`;
  if (window.Prism) {
    Prism.highlightAllUnder(document.getElementById('theory-content'));
  }

  // Görev etiketi
  document.getElementById('ide-task').innerHTML = `<strong>Görev:</strong> ${lesson.content.task || 'Bu ders teori odaklidir.'}`;

  // Quiz butonu güncelle
  const isCompleted = appState.completedLessons.includes(lessonId);
  const quizBtn = document.getElementById('btn-quiz');
  const isContentOnly = lesson.content.contentOnly === true;
  if (quizBtn) {
    quizBtn.textContent = isCompleted ? '✅ Tekrar Quiz' : '📝 Quize Geç';
    quizBtn.onclick = startQuiz;
    quizBtn.style.display = isContentOnly ? 'none' : 'inline-flex';
  }

  const githubBtn = document.getElementById('btn-github-export');
  if (githubBtn) githubBtn.style.display = 'none';

  // IDE'yi kapat, output temizle
  const ide = document.getElementById('ide-panel');
  if (ide) ide.style.display = 'none';
  const body = document.getElementById('lesson-body');
  if (body) body.classList.remove('ide-open');
  const toggleBtn = document.getElementById('btn-toggle-ide');
  if (toggleBtn) {
    toggleBtn.innerHTML = '💻 Kodu Dene';
    toggleBtn.style.display = isContentOnly ? 'none' : 'inline-flex';
  }

  const outputEl = document.getElementById('output-txt');
  if (outputEl) {
    outputEl.className = 'dim';
    outputEl.textContent = '▶ Çalıştır butonuna bas…';
  }

  // Monaco editörü yükle
  showView('lesson');

  if (isContentOnly) return;

  await initMonaco(lesson.content.starterCode);
}

function renderCapstoneHub() {
  const view = document.getElementById('capstone-view');
  if (!view) return;

  view.innerHTML = `
    <div style="max-width:980px;margin:0 auto;width:100%;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px;">
        <div>
          <h2 style="font-size:28px;margin-bottom:8px;">🏆 Capstone Proje Merkezi</h2>
          <p style="color:var(--txt2);font-size:14px;max-width:720px;">
            Buradaki projeler derslerde ogrendigin tum konulari tek urunde birlestirir.
            Bitirdiginde GitHub export ve paylasilabilir portfolyo linki uretebilirsin.
          </p>
        </div>
        <button class="btn btn-ghost" onclick="showView('home');renderHome()">← Ana Sayfa</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:14px;">
        ${CAPSTONE_PROJECTS.map((project) => {
          const isDone = appState.completedCapstones.includes(project.id);
          return `
            <div style="background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:16px;display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
                <strong style="font-size:16px;line-height:1.35;">${project.title}</strong>
                <span class="chip ${isDone ? 'g' : ''}">${isDone ? 'Tamamlandi' : project.level}</span>
              </div>
              <p style="font-size:13px;color:var(--txt2);line-height:1.6;min-height:64px;">${project.summary}</p>
              <div style="font-size:12px;color:var(--txt3);">⚡ +${project.xp} XP</div>
              <button class="btn ${isDone ? 'btn-g' : 'btn-p'}" onclick="openCapstoneProject('${project.id}')">
                ${isDone ? '🔁 Tekrar Ac' : '🚀 Projeyi Baslat'}
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function openCapstoneHub() {
  appState.currentLessonId = null;
  appState.currentCapstoneId = null;
  appState.quizState = null;
  saveState();
  document.getElementById('tb-title').textContent = '🏆 Capstone Projeleri';
  document.getElementById('tb-chapter').textContent = 'Gercek dunya urun odakli proje sahasi';
  document.getElementById('tb-dur').textContent = 'Proje';
  showView('capstone');
  renderCapstoneHub();
}

async function openCapstoneProject(capstoneId) {
  const project = getCapstoneById(capstoneId);
  if (!project) return;

  appState.currentLessonId = null;
  appState.currentCapstoneId = project.id;
  appState.quizState = null;
  saveState();
  renderSidebar();

  document.getElementById('tb-title').textContent = project.title;
  document.getElementById('tb-chapter').textContent = 'Capstone Projesi';
  document.getElementById('tb-dur').textContent = '45-90 dk';

  document.getElementById('theory-content').innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.summary}</p>
    <h3>Teslim Kriterleri</h3>
    <ul>
      ${project.requirements.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    <div class="info-box">
      <div>
        <strong>Bitirme Akisi</strong>
        <p>Kodunu tamamla, <em>Calistir</em> ile kontrol et, sonra <em>Projeyi Bitir</em> butonuyla sertifika/link olustur.</p>
      </div>
    </div>
  `;
  if (window.Prism) Prism.highlightAllUnder(document.getElementById('theory-content'));

  document.getElementById('ide-task').innerHTML = `<strong>Capstone Gorevi:</strong> ${project.requirements[0]}`;

  const quizBtn = document.getElementById('btn-quiz');
  if (quizBtn) {
    quizBtn.textContent = '🏁 Projeyi Bitir';
    quizBtn.onclick = completeCurrentCapstone;
  }

  const githubBtn = document.getElementById('btn-github-export');
  if (githubBtn) githubBtn.style.display = 'inline-flex';

  showView('lesson');
  await initMonaco(project.starterCode);

  const ide = document.getElementById('ide-panel');
  const body = document.getElementById('lesson-body');
  const toggleBtn = document.getElementById('btn-toggle-ide');
  if (ide) ide.style.display = 'flex';
  if (body) body.classList.add('ide-open');
  if (toggleBtn) toggleBtn.innerHTML = '✕ Editörü Kapat';
}

function completeCurrentCapstone() {
  const project = getCapstoneById(appState.currentCapstoneId);
  if (!project) return;

  const code = getEditorCode();
  if (!project.validate(code)) {
    showToast('Capstone henüz teslim kriterlerini tam karsilamiyor. Biraz daha gelistir!', 'err');
    return;
  }

  if (!appState.completedCapstones.includes(project.id)) {
    appState.completedCapstones.push(project.id);
    appState.totalXP += project.xp;
  }

  const certId = `cert-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  appState.capstoneCertificates[certId] = {
    projectId: project.id,
    projectTitle: project.title,
    xp: project.xp,
    createdAt: new Date().toISOString()
  };
  saveState();
  renderSidebar();
  renderHome();
  openCertificatePage(certId);
  showToast('🏆 Capstone tamamlandi! Sertifika ve portfolyo linkin hazir.', 'ok');
}

function openCertificatePage(certId) {
  const cert = appState.capstoneCertificates[certId];
  const view = document.getElementById('certificate-view');
  if (!cert || !view) return;

  const shareLink = `${location.origin}${location.pathname}#cert=${certId}`;
  view.innerHTML = `
    <div style="max-width:780px;margin:0 auto;width:100%;">
      <div style="background:linear-gradient(180deg, rgba(124,58,237,.12), rgba(124,58,237,.04));border:1px solid rgba(124,58,237,.35);border-radius:16px;padding:26px;">
        <div style="font-size:13px;letter-spacing:1.2px;text-transform:uppercase;color:var(--txt2);margin-bottom:12px;">Antigravity C# Platformu</div>
        <h2 style="font-size:30px;margin-bottom:8px;">🎓 Basari Sertifikasi</h2>
        <p style="color:var(--txt2);margin-bottom:18px;">Kullanici, asagidaki capstone projesini basariyla tamamlamistir:</p>
        <div style="font-size:22px;font-weight:800;margin-bottom:10px;">${cert.projectTitle}</div>
        <div style="font-size:13px;color:var(--txt2);margin-bottom:20px;">Kazanilan XP: +${cert.xp} • Tarih: ${new Date(cert.createdAt).toLocaleString('tr-TR')}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-p" onclick="navigator.clipboard.writeText('${shareLink}');showToast('Portfolyo linki panoya kopyalandi.', 'ok')">🔗 Portfolyo Linkini Kopyala</button>
          <button class="btn btn-ghost" onclick="openCapstoneHub()">🏆 Capstone Merkezine Don</button>
        </div>
      </div>
      <div style="margin-top:16px;font-size:12px;color:var(--txt3);word-break:break-all;">
        Paylasim Linki: ${shareLink}
      </div>
    </div>
  `;
  showView('certificate');
}

function exportCurrentCapstoneToGitHub() {
  const project = getCapstoneById(appState.currentCapstoneId);
  if (!project) {
    showToast('GitHub export sadece capstone projesinde aktif.', '');
    return;
  }

  const code = getEditorCode();
  const readme = `# ${project.title}

Bu repo, Antigravity C# platformundaki capstone projesi olarak uretilmistir.

## Proje Ozeti
${project.summary}

## Calistirma
- .NET SDK kur
- Program.cs dosyasini derle ve calistir
`;

  const payload = {
    repositoryName: project.id,
    visibility: 'public',
    files: {
      'Program.cs': code,
      'README.md': readme
    },
    createdAt: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${project.id}-github-export.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);

  window.open('https://github.com/new', '_blank', 'noopener,noreferrer');
  showToast('Export indirildi. GitHub yeni repo sayfasi acildi.', 'ok');
}

// ── Kodu çalıştır ───────────────────
function runCode() {
  const code = getEditorCode();
  runCSharpCode(code);

  if (appState.currentCapstoneId) {
    const project = getCapstoneById(appState.currentCapstoneId);
    if (project && project.validate(code)) {
      setTimeout(() => showToast('✅ Capstone kriterlerini karsiliyor! Simdi Projeyi Bitir diyebilirsin.', 'ok'), 500);
    }
    return;
  }

  const found = getLessonById(appState.currentLessonId);
  if (!found) return;
  const { lesson } = found;

  if (lesson.content.validation && lesson.content.validation(code)) {
    setTimeout(() => showToast('✅ Harika! Görevi başarıyla tamamladın!', 'ok'), 600);
  }
}

// ── Quiz ────────────────────────────
function startQuiz() {
  const found = getLessonById(appState.currentLessonId);
  if (!found) return;
  const { lesson } = found;
  if (!Array.isArray(lesson.quiz) || lesson.quiz.length === 0) {
    showToast('Bu ders sadece teori icerigi iceriyor; quiz bulunmuyor.', '');
    return;
  }

  appState.quizState = {
    lessonId: appState.currentLessonId,
    questions: lesson.quiz,
    currentQ: 0,
    answers: [],
    score: 0,
    selectedOption: null,
    answered: false
  };

  showView('quiz');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qs = appState.quizState;
  const q = qs.questions[qs.currentQ];
  const total = qs.questions.length;
  const current = qs.currentQ + 1;

  const hasAnswered = qs.answers[qs.currentQ] !== undefined;
  const prevAnswer = hasAnswered ? qs.answers[qs.currentQ] : null;

  const qv = document.getElementById('quiz-view');
  qv.innerHTML = `
    <div class="quiz-header">
      <h2>📝 Ders Quizi</h2>
      <p>Soru ${current} / ${total}</p>
    </div>
    <div class="quiz-progress-bar qz-prog">
      <div class="quiz-progress-fill qz-fill" style="width:${((current-1)/total)*100}%"></div>
    </div>
    <div class="quiz-card qz-card">
      <div class="quiz-question-num q-num">SORU ${current}</div>
      <div class="quiz-question-text q-txt">${q.question}</div>
      <div class="quiz-options q-opts">
        ${q.options.map((opt, i) => {
          let optClass = "quiz-option q-opt";
          if (hasAnswered) {
             if (i === q.correct) optClass += " ok";
             else if (i === prevAnswer) optClass += " bad";
          }
          return `
          <div class="${optClass}" id="opt-${i}" onclick="selectOption(${i})">
            <span class="option-letter opt-l">${String.fromCharCode(65+i)}</span>
            <span>${opt}</span>
          </div>
          `;
        }).join('')}
      </div>
      
      <div id="quiz-feedback" class="qz-feedback ${hasAnswered ? (prevAnswer === q.correct ? 'ok' : 'err') : ''}" style="display:${hasAnswered ? 'flex' : 'none'}">
        ${hasAnswered ? (prevAnswer === q.correct ? '✅ Doğru!' : '❌ Yanlış! Doğru cevap: ' + q.options[q.correct]) : ''}
      </div>

      <div class="q-actions">
        <button class="btn btn-ghost" id="btn-prev-q" style="visibility:${current > 1 ? 'visible' : 'hidden'}" onclick="prevQuestion()">← Önceki Soru</button>
        <div style="display:flex;gap:10px">
          <button class="btn btn-p" id="btn-submit-q" style="display:none" onclick="submitAnswer()">Cevapla</button>
          <button class="btn btn-p" id="btn-next-q" style="display:${hasAnswered ? 'inline-flex' : 'none'}" onclick="nextQuestion()">
            ${current < total ? 'Sonraki Soru →' : '🏆 Sonucu Gör'}
          </button>
        </div>
      </div>
    </div>
  `;
  appState.quizState.selectedOption = null;
  appState.quizState.answered = hasAnswered;
}

function selectOption(optionIdx) {
  const qs = appState.quizState;
  if (qs.answered) return;
  qs.selectedOption = optionIdx;

  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    el.className = `quiz-option q-opt ${i === optionIdx ? 'sel' : ''}`;
  });

  document.getElementById('btn-submit-q').style.display = 'inline-flex';
}

function submitAnswer() {
  const qs = appState.quizState;
  if (qs.selectedOption === null || qs.answered) return;
  qs.answered = true;
  const q = qs.questions[qs.currentQ];

  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    if (i === q.correct) el.classList.add('ok');
    else if (i === qs.selectedOption) el.classList.add('bad');
    el.onclick = null;
  });

  const fb = document.getElementById('quiz-feedback');
  fb.style.display = 'flex';
  if (qs.selectedOption === q.correct) {
    qs.score++;
    fb.className = 'qz-feedback ok';
    fb.innerHTML = '✅ Doğru!';
  } else {
    fb.className = 'qz-feedback err';
    fb.innerHTML = '❌ Yanlış! Doğru cevap: ' + q.options[q.correct];
  }

  qs.answers[qs.currentQ] = qs.selectedOption;
  document.getElementById('btn-submit-q').style.display = 'none';
  document.getElementById('btn-next-q').style.display = 'inline-flex';
}

function prevQuestion() {
  const qs = appState.quizState;
  if (qs.currentQ > 0) {
    qs.currentQ--;
    renderQuizQuestion();
  }
}

function nextQuestion() {
  const qs = appState.quizState;
  qs.currentQ++;
  if (qs.currentQ >= qs.questions.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResult() {
  const qs = appState.quizState;
  const score = qs.score;
  const total = qs.questions.length;
  const pct = Math.round((score / total) * 100);

  const found = getLessonById(qs.lessonId);
  const xpGained = found ? Math.round(found.lesson.xp * (pct / 100)) : 0;

  // Dersi tamamlanmış işaretle
  if (!appState.completedLessons.includes(qs.lessonId)) {
    appState.completedLessons.push(qs.lessonId);
    appState.totalXP += xpGained;
    saveState();
  }

  let emoji, label, scoreClass;
  if (pct === 100) { emoji = '🏆'; label = 'Mükemmel!'; scoreClass = 'perfect'; }
  else if (pct >= 60) { emoji = '🎉'; label = 'Çok iyi!'; scoreClass = 'good'; }
  else { emoji = '💪'; label = 'Biraz daha çalış!'; scoreClass = 'bad'; }

  const qv = document.getElementById('quiz-view');
  qv.innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${emoji}</div>
      <div class="result-score ${scoreClass}">${score}/${total}</div>
      <div class="result-title">${label}</div>
      <div class="result-sub">%${pct} doğruluk oranı elde ettin.</div>
      <div class="xp-gained">⚡ +${xpGained} XP kazandın</div>
      <div style="display:flex;gap:12px;justify-content:center">
        <button class="btn btn-ghost" onclick="openLesson('${qs.lessonId}')">← Derse Dön</button>
        <button class="btn btn-primary" onclick="goNextLesson()">Sonraki Ders →</button>
      </div>
    </div>
  `;

  renderSidebar();
  if (pct >= 60) triggerConfetti();
}

function goNextLesson() {
  const qs = appState.quizState;
  let foundCurrent = false;
  let nextId = null;

  for (const chapter of CURRICULUM) {
    for (const lesson of chapter.lessons) {
      if (foundCurrent) { nextId = lesson.id; break; }
      if (lesson.id === qs.lessonId) foundCurrent = true;
    }
    if (nextId) break;
  }

  if (nextId) {
    openLesson(nextId);
  } else {
    showView('home');
    renderHome();
    showToast('🎓 Tüm dersler tamamlandı! Harikaşsın!', 'success');
  }
}

// ── Home view ───────────────────────
function renderHome() {
  const total = getTotalLessons();
  const completed = appState.completedLessons.length;
  document.getElementById('h-total').textContent = total;
  document.getElementById('h-done').textContent = completed;
  document.getElementById('h-xp').textContent = appState.totalXP;

  const startBtn = document.getElementById('btn-start');
  if (completed > 0) {
    startBtn.textContent = '▶ Devam Et';
    startBtn.onclick = () => continueLesson();
  } else {
    startBtn.textContent = '🚀 Öğrenmeye Başla';
    startBtn.onclick = () => openLesson(CURRICULUM[0].lessons[0].id);
  }
}

function continueLesson() {
  // Son tamamlanmayan dersi bul
  for (const chapter of CURRICULUM) {
    for (const lesson of chapter.lessons) {
      if (!appState.completedLessons.includes(lesson.id)) {
        openLesson(lesson.id);
        return;
      }
    }
  }
}

// ── Toast bildirimleri ───────────────
function showToast(msg, type = '') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── Konfeti ─────────────────────────
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({length: 80}, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 6 + 3,
    color: ['#7c3aed','#06b6d4','#10b981','#f59e0b','#f43f5e'][Math.floor(Math.random()*5)],
    vx: (Math.random()-0.5)*3,
    vy: Math.random()*3+1,
    rot: Math.random()*360,
    vrot: (Math.random()-0.5)*5
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r);
      ctx.restore();
      p.x += p.vx; p.y += p.vy; p.rot += p.vrot; p.vy += 0.05;
    });
    frame++;
    if (frame < 120) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  animate();
}

// ── Klavye kısayolları ───────────────
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    if (appState.currentView === 'lesson') runCode();
  }
});

function initApp() {
  loadState();
  renderSidebar();

  const certFromHash = location.hash.startsWith('#cert=') ? location.hash.replace('#cert=', '') : null;
  if (certFromHash && appState.capstoneCertificates[certFromHash]) {
    openCertificatePage(certFromHash);
    return;
  }

  if (appState.currentCapstoneId) {
    openCapstoneProject(appState.currentCapstoneId);
  } else if (appState.currentLessonId) {
    openLesson(appState.currentLessonId);
  } else {
    showView('home');
    renderHome();
  }
}

// Global olarak çağrılacak metotları window nesnesine ekleyelim
window.initApp = initApp;
window.openProfile = openProfile;
window.exportProgress = exportProgress;
window.importProgress = importProgress;
window.openCapstoneHub = openCapstoneHub;
window.openCapstoneProject = openCapstoneProject;
window.completeCurrentCapstone = completeCurrentCapstone;
window.exportCurrentCapstoneToGitHub = exportCurrentCapstoneToGitHub;
window.openCertificatePage = openCertificatePage;

// Uygulamayı başlat
document.addEventListener('DOMContentLoaded', initApp);

// ===================================
// PROFİL VE VERİ YÖNETİMİ
// ===================================

function openProfile() {
  appState.currentLessonId = null;
  appState.currentCapstoneId = null;
  appState.quizState = null;
  document.getElementById('tb-title').textContent = "👤 Profil ve Ayarlar";
  document.getElementById('tb-prog').textContent = `${appState.totalXP} XP`;
  
  // İstatistikleri hesapla ve ekrana yaz
  const totalL = getTotalLessons();
  const completedL = appState.completedLessons.length;
  const percent = totalL === 0 ? 0 : Math.round((completedL / totalL) * 100);
  
  document.getElementById('prof-xp').textContent = appState.totalXP;
  document.getElementById('prof-lessons').textContent = completedL;
  document.getElementById('prof-percent').textContent = `%${percent}`;
  
  renderSidebar();
  showView('profile');
}

function exportProgress() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "csharp_progress.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedState = JSON.parse(e.target.result);
      if (importedState && typeof importedState.totalXP === 'number') {
        appState = importedState;
        saveState();
        alert("İlerleme başarıyla yüklendi! Sayfa yenileniyor...");
        location.reload();
      } else {
        alert("Geçersiz dosya formatı.");
      }
    } catch(err) {
      alert("Dosya okunurken hata oluştu.");
    }
  };
  reader.readAsText(file);
}
