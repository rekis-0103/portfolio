/**
 * REKISHII LUCY (REKIS) - PORTFOLIO INTERACTIVITY
 * Bilingual (ID & EN), Theme Switcher, Project Filtering, Accessible Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. BILINGUAL DICTIONARY (ID & EN) =================
  const translations = {
    id: {
      "nav.skip": "Lewati ke konten utama",
      "nav.home": "Beranda",
      "nav.about": "Tentang",
      "nav.arsenal": "Stack",
      "nav.projects": "Proyek",
      "nav.experience": "Magang",
      "nav.education": "Pendidikan",
      "nav.contact": "Kontak",

      "hero.status": "Terbuka untuk Magang & Backend Engineering",
      "hero.alias": "— dikenal sebagai Rekis.",
      "hero.roleLine": "Backend-first Fullstack Engineer · Go, Laravel 12, Relational Databases, & Applied AI",
      "hero.quote": "“Turning coffee into logic, breaking things down to understand how they work, and striving to write cleaner, more maintainable code with every commit.”",
      "hero.desc": "Mahasiswa <strong>Software Engineering di President University</strong> (alumnus <em>SMK Telekomunikasi Telesandi Bekasi</em>). Berfokus pada perancangan <strong>arsitektur backend</strong>, normalisasi basis data relasional (MySQL & PostgreSQL), API terstruktur dengan Go & Laravel 12, eksplorasi AI/NLP, dasar Cyber Security, serta pengembangan mobile dengan Flutter.",
      "hero.exploreBtn": "Lihat Karya Pilihan",
      "hero.cvBtn": "Unduh CV",
      "hero.contactBtn": "Hubungi Saya",

      "tooltip.copied": "Disalin",

      "profileCard.fullName": "Nama",
      "profileCard.campus": "Kampus",
      "profileCard.smk": "Asal SMK",
      "profileCard.focus": "Fokus",
      "profileCard.focusVal": "Backend & Relational DB",

      "statBox.code1": "FOKUS UTAMA",
      "statBox.title1": "Backend & Databases",
      "statBox.code2": "REPOSITORI",
      "statBox.title2": "21+ Public Repos",
      "statBox.code3": "PENDIDIKAN",
      "statBox.title3": "PresUniv & Telesandi",
      "statBox.meta3": "Jalur Software Engineering",
      "statBox.code4": "PRINSIP KODE",
      "statBox.title4": "Clean Code & DRY",
      "statBox.meta4": "Modular, Terpisah, & Teruji",

      "about.tag": "TENTANG",
      "about.title": "Rekayasa Berbasis Logika, Keandalan, & Struktur",
      "about.subtitle": "Dari SMK Telekomunikasi Telesandi hingga President University.",
      "about.p1": "Saya adalah mahasiswa jurusan <strong>Software Engineering (Teknik Informatika) di President University (Batch 26)</strong> dengan latar belakang kejuruan <strong>Rekayasa Perangkat Lunak (RPL) di SMK Telekomunikasi Telesandi Bekasi</strong>.",
      "about.p2": "Perjalanan teknis saya berpusat pada rasa ingin tahu tentang bagaimana sistem bekerja di balik layar. Bagi saya, kualitas perangkat lunak tidak hanya dilihat dari antarmuka visual, melainkan dari <strong>ketepatan logika backend, normalisasi relasi basis data, efisiensi query, dan keamanan otentikasi</strong>.",
      "about.p3": "Saya aktif membangun sistem nyata: mulai dari portal Company Profile & E-Recruitment selama magang (<strong>compro-dan-jurnal</strong>), panel manajemen VPS Linux (<strong>MyPanel-V2</strong>), platform Q&A berbasis <strong>Laravel 12 (AskHub)</strong>, hingga eksperimen AI/NLP (<strong>Axonote</strong>).",
      "about.devSetupTitle": "LINGKUNGAN KERJA & PERKAKAS",

      "manifesto.head": "PRINSIP REKAYASA",
      "manifesto.t1": "Clean Code & Maintainability",
      "manifesto.d1": "Mengutamakan prinsip DRY, KISS, serta pemisahan tegas antara lapisan controller dan logika bisnis.",
      "manifesto.t2": "Normalisasi Basis Data & Indexing",
      "manifesto.d2": "Merancang skema MySQL & PostgreSQL dengan relasi terukur, eager loading, dan composite indexing.",
      "manifesto.t3": "Polyglot Problem Solver",
      "manifesto.d3": "Memilih stack sesuai kebutuhan: Go untuk concurrency, Laravel untuk pengembangan cepat, Python untuk AI/ML.",
      "manifesto.t4": "Security Awareness",
      "manifesto.d4": "Menerapkan proteksi dasar: pencegahan SQL Injection, sanitasi input, JWT auth, RBAC, dan validasi sisi server.",

      "skills.tag": "TECH STACK",
      "skills.title": "Alat Kerja & Teknologi Teruji",
      "skills.desc": "Disinkronkan langsung dengan repositori dan implementasi kode nyata di GitHub @rekis-0103 menggunakan logo resmi teknologi.",
      "skills.badge1": "DOMAIN UTAMA",
      "skills.title1": "Backend & Databases",
      "skills.desc1": "Arsitektur server, RESTful API, serta pemodelan dan optimasi basis data relasional.",
      "skills.badge2": "CLIENT & CROSS-PLATFORM",
      "skills.title2": "Frontend & Mobile",
      "skills.desc2": "Antarmuka web dan aplikasi mobile yang terhubung langsung ke layanan backend.",
      "skills.badge3": "DEVOPS & PERKAKAS",
      "skills.title3": "Tools & Environment",
      "skills.desc3": "Workflow pengembangan terstruktur, kontrol versi, kontainerisasi, dan administrasi Linux.",
      "skills.badge4": "FONDASI & EKSPLORASI",
      "skills.title4": "Computer Science & Security",
      "skills.desc4": "Fondasi ilmu komputer, integrasi AI/NLP, pola desain, dan kesadaran keamanan sistem.",

      "projects.tag": "KARYA PILIHAN",
      "projects.title": "Kompilasi Proyek & Sistem",
      "projects.desc": "Repositori yang di-pin di GitHub @rekis-0103 beserta sistem utama yang dibangun selama masa magang industri.",

      "filters.all": "Semua (7)",
      "filters.internship": "Magang / Jurnal",
      "filters.backend": "Backend & Cloud",
      "filters.fullstack": "Fullstack Web",
      "filters.ai": "AI & ML",
      "filters.mobile": "Mobile App",

      "pIntern.badge": "PROYEK MAGANG",
      "pIntern.type": "Company Profile & E-Recruitment Portal",
      "pIntern.desc": "Aplikasi web terpadu yang dibangun selama masa magang/jurnal industri, menggabungkan portal <strong>Company Profile</strong> perusahaan dengan modul <strong>E-Recruitment</strong>. Memfasilitasi publikasi lowongan kerja, pendaftaran kandidat dengan unggah CV PDF, penyaringan berkas, dan dashboard pengelolaan seleksi oleh tim HRD.",
      "pIntern.link": "Lihat Repository Magang",
      "pIntern.archTitle": "ALUR SISTEM & SKEMA",
      "pIntern.step1T": "Portal Karir Publik",
      "pIntern.step1D": "Company profile & katalog lowongan dinamis",
      "pIntern.step2T": "Validasi & Upload CV",
      "pIntern.step2D": "Cek MIME PDF, sanitasi berkas, anti-XSS/SQLi",
      "pIntern.step3T": "Skema Relasional MySQL",
      "pIntern.step3D": "Relasi lowongan, pelamar, berkas, status",
      "pIntern.step4T": "Dashboard Screening HRD",
      "pIntern.step4D": "Filter kualifikasi & pembaruan tahap seleksi",

      "p1.type": "Linux VPS Daemon & Docker",
      "p1.desc": "Panel manajemen server berbasis Linux yang dibangun dengan <strong>Go</strong> dan <strong>React/TypeScript</strong>. Dirancang untuk lingkungan VPS dengan kendali daemon jarak jauh, pemantauan CPU/Memory realtime, file manager, serta orkestrasi container instance.",
      "p.link": "Lihat Repository",

      "p2.type": "Q&A Knowledge Community",
      "p2.desc": "Aplikasi forum tanya jawab dan berbagi pengetahuan berbasis <strong>Laravel 12</strong>. Dilengkapi autentikasi aman, taksonomi tag berbasis relasi basis data, sistem voting jawaban terbaik, serta antarmuka responsif.",

      "p3.type": "NLP & Quiz Engine",
      "p3.desc": "Platform web generator ringkasan dan kuis otomatis berbasis <strong>Machine Learning & Natural Language Processing</strong>. Mengekstrak inti materi dari dokumen akademik panjang dan menyusun soal evaluasi pemahaman secara instan.",

      "p4.type": "Fullstack E-Commerce",
      "p4.desc": "Aplikasi e-commerce dengan arsitektur decoupled: <strong>React.js</strong> sebagai antarmuka SPA interaktif dan <strong>Golang</strong> sebagai backend RESTful API berkinerja tinggi untuk pengelolaan transaksi dan inventori.",

      "p5.type": "Academic Productivity Platform",
      "p5.desc": "<em>“Your university life, organized.”</em> Platform open-source lintas perangkat untuk produktivitas akademik dan kolaborasi mahasiswa antar jurusan: manajemen jadwal kuliah, arsip berkas studi, dan sinkronisasi tugas.",

      "p6.type": "Mobile Ticketing App",
      "p6.desc": "Aplikasi mobile reservasi tiket acara dan seminar berbasis <strong>Flutter & Dart</strong>. Menyediakan pemilihan kursi dinamis, validasi barcode tiket, serta alur pemesanan yang ringkas untuk pengguna smartphone.",

      "exp.tag": "PENGALAMAN MAGANG",
      "exp.title": "Pengalaman Magang & Rekam Jejak Industri",
      "exp.desc": "Praktik kerja industri langsung dalam perancangan arsitektur backend, basis data relasional, dan modul sistem informasi perusahaan.",
      "exp.iBadge": "PRAKERIN & JURNAL",
      "exp.iPeriod": "SELESAI",
      "exp.iTitle": "Software Engineering Intern — Company Profile & E-Recruitment Portal",
      "exp.iSub": "Pengembangan Sistem Informasi Perusahaan & Portal Rekrutmen Terpadu",
      "exp.iDesc": "Menyelesaikan program magang industri (Prakerin) serta menyusun laporan jurnal teknis melalui perancangan dan implementasi aplikasi web terpadu <strong>Company Profile korporat dan modul E-Recruitment</strong>. Sistem mendigitalisasi publikasi lowongan karir, pengiriman berkas pelamar, hingga proses penyaringan kandidat oleh tim HRD.",
      "exp.p1Title": "Basis Data Relasional",
      "exp.p1Desc": "Merancang skema MySQL ternormalisasi untuk lowongan pekerjaan, profil pelamar, lampiran berkas, dan status seleksi.",
      "exp.p2Title": "Pipeline Upload CV & Registrasi",
      "exp.p2Desc": "Membangun alur pendaftaran mandiri dengan unggah CV PDF otomatis, validasi MIME, dan sanitasi nama dokumen.",
      "exp.p3Title": "Dashboard Screening HRD",
      "exp.p3Desc": "Mengembangkan backoffice administratif untuk recruiter mengelola pelamar, menyaring kualifikasi, dan memperbarui status.",
      "exp.p4Title": "Keamanan Input & Pengujian",
      "exp.p4Desc": "Menerapkan sanitasi terhadap SQL Injection dan XSS, validasi sisi server, serta pengujian fungsional end-to-end.",
      "exp.iBtn": "Lihat Repositori Magang",

      "edu.tag": "PENDIDIKAN",
      "edu.title": "Riwayat Pendidikan & Fondasi Akademis",
      "edu.desc": "Jalur pendidikan kejuruan rekayasa perangkat lunak hingga studi tingkat sarjana di bidang teknologi informasi.",
      "edu.c1Badge": "PERGURUAN TINGGI (S1)",
      "edu.c1Degree": "S1 Software Engineering / Information Technology",
      "edu.c1Period": "2026 – Sekarang (Batch 26)",
      "edu.c1Desc": "Memperdalam arsitektur perangkat lunak skala enterprise, algoritma & struktur data lanjutan, manajemen basis data terdistribusi (MySQL, PostgreSQL), integrasi AI/NLP, serta praktik rekayasa berstandar industri.",
      "edu.c2Badge": "PENDIDIKAN KEJURUAN (SMK)",
      "edu.c2Degree": "Rekayasa Perangkat Lunak (RPL)",
      "edu.c2Period": "Alumnus Kejuruan",
      "edu.c2Desc": "Membangun fondasi logika pemrograman sejak dini: pemodelan data relasional MySQL, paradigma OOP (PHP, C++, Java, VB.NET), implementasi CSS modern (SCSS/Tailwind), serta penyelesaian Uji Kompetensi Keahlian dengan predikat unggul.",

      "contact.tag": "KONTAK",
      "contact.title": "Mari Terhubung & Berkolaborasi",
      "contact.desc": "Terbuka untuk peluang magang industri (internship), kolaborasi open-source, maupun diskusi arsitektur backend.",
      "contact.ctaTitle": "Tertarik Membahas Peluang Magang atau Kolaborasi?",
      "contact.ctaText": "Kirimkan email langsung atau hubungi melalui LinkedIn. Saya selalu antusias mendiskusikan tantangan arsitektur backend, optimasi basis data, dan sistem modern.",
      "contact.ctaEmailBtn": "Kirim Email Sekarang",
      "contact.cEmail": "EMAIL UTAMA",
      "contact.cDiscord": "USER DISCORD",
      "contact.cLinkedIn": "LINKEDIN",
      "contact.cGithub": "GITHUB",
      "contact.cInstagram": "INSTAGRAM",

      "footer.sub": "Rekishii Lucy — Software Engineering Student @ President University Batch 26",
      "footer.home": "Beranda",
      "footer.about": "Tentang",
      "footer.arsenal": "Stack",
      "footer.projects": "Proyek",
      "footer.experience": "Magang",
      "footer.education": "Pendidikan",
      "footer.contact": "Kontak",
      "footer.copy": "© 2026 Rekishii Lucy (Rekis) · Bekasi & Cikarang, Indonesia."
    },

    en: {
      "nav.skip": "Skip to main content",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.arsenal": "Stack",
      "nav.projects": "Projects",
      "nav.experience": "Internship",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "hero.status": "Open for Internship & Backend Engineering Roles",
      "hero.alias": "— known as Rekis.",
      "hero.roleLine": "Backend-first Fullstack Engineer · Go, Laravel 12, Relational Databases, & Applied AI",
      "hero.quote": "“Turning coffee into logic, breaking things down to understand how they work, and striving to write cleaner, more maintainable code with every commit.”",
      "hero.desc": "<strong>Software Engineering student at President University</strong> (alumnus of <em>SMK Telekomunikasi Telesandi Bekasi</em>). Focused on <strong>backend architecture</strong>, normalized relational databases (MySQL & PostgreSQL), structured APIs in Go & Laravel 12, applied AI/NLP, security fundamentals, and Flutter mobile development.",
      "hero.exploreBtn": "Explore Work",
      "hero.cvBtn": "Download CV",
      "hero.contactBtn": "Get in Touch",

      "tooltip.copied": "Copied",

      "profileCard.fullName": "Name",
      "profileCard.campus": "University",
      "profileCard.smk": "Vocational",
      "profileCard.focus": "Focus",
      "profileCard.focusVal": "Backend & Relational DB",

      "statBox.code1": "PRIMARY FOCUS",
      "statBox.title1": "Backend & Databases",
      "statBox.code2": "REPOSITORIES",
      "statBox.title2": "21+ Public Repos",
      "statBox.code3": "EDUCATION",
      "statBox.title3": "PresUniv & Telesandi",
      "statBox.meta3": "Software Engineering Track",
      "statBox.code4": "ENGINEERING VALUES",
      "statBox.title4": "Clean Code & DRY",
      "statBox.meta4": "Modular, Decoupled, & Tested",

      "about.tag": "ABOUT",
      "about.title": "Engineering Driven by Logic, Reliability, & Structure",
      "about.subtitle": "From SMK Telekomunikasi Telesandi to President University.",
      "about.p1": "I am a <strong>Software Engineering undergraduate at President University (Batch 26)</strong> building on a vocational foundation in <strong>Software Engineering (RPL) from SMK Telekomunikasi Telesandi Bekasi</strong>.",
      "about.p2": "My engineering path is guided by a curiosity about how systems behave beneath the surface. Software quality lives not only in visual polish, but in <strong>clean backend logic, normalized database schemas, query efficiency, and reliable authentication</strong>.",
      "about.p3": "I actively ship practical codebases: from a corporate Company Profile & E-Recruitment portal built during my internship (<strong>compro-dan-jurnal</strong>), a Linux VPS server daemon (<strong>MyPanel-V2</strong>), a Q&A platform in <strong>Laravel 12 (AskHub)</strong>, to NLP tooling (<strong>Axonote</strong>).",
      "about.devSetupTitle": "ENVIRONMENT & TOOLING",

      "manifesto.head": "ENGINEERING PRINCIPLES",
      "manifesto.t1": "Clean Code & Maintainability",
      "manifesto.d1": "Applying DRY and KISS principles while keeping controller boundaries cleanly decoupled from business logic.",
      "manifesto.t2": "Database Normalization & Indexing",
      "manifesto.d2": "Designing MySQL & PostgreSQL schemas with explicit constraints, eager loading hygiene, and composite indexes.",
      "manifesto.t3": "Polyglot Problem Solver",
      "manifesto.d3": "Choosing the right tool per problem: Go for concurrency, Laravel for rapid delivery, Python for AI/ML pipelines.",
      "manifesto.t4": "Security Awareness",
      "manifesto.d4": "Practicing defensive fundamentals: SQL injection prevention, input sanitization, JWT auth, RBAC, and server validation.",

      "skills.tag": "TECH STACK",
      "skills.title": "Production Tools & Technologies",
      "skills.desc": "Aligned directly with live repositories and codebases on GitHub @rekis-0103.",
      "skills.badge1": "PRIMARY DOMAIN",
      "skills.title1": "Backend & Databases",
      "skills.desc1": "Server architecture, RESTful APIs, and relational database modeling and optimization.",
      "skills.badge2": "CLIENT & CROSS-PLATFORM",
      "skills.title2": "Frontend & Mobile",
      "skills.desc2": "Responsive web interfaces and cross-platform mobile clients connected to backend services.",
      "skills.badge3": "DEVOPS & TOOLING",
      "skills.title3": "Tools & Environment",
      "skills.desc3": "Structured development workflows, version discipline, containers, and Linux administration.",
      "skills.badge4": "FOUNDATIONS & SECURITY",
      "skills.title4": "Computer Science & Security",
      "skills.desc4": "Software engineering fundamentals, AI/NLP integration, design patterns, and system defense.",

      "projects.tag": "SELECTED WORK",
      "projects.title": "Engineering Projects & Codebases",
      "projects.desc": "Repositories pinned on GitHub @rekis-0103 alongside the primary system delivered during my industry internship.",

      "filters.all": "All (7)",
      "filters.internship": "Internship / Journal",
      "filters.backend": "Backend & Cloud",
      "filters.fullstack": "Fullstack Web",
      "filters.ai": "AI & ML",
      "filters.mobile": "Mobile App",

      "pIntern.badge": "INTERNSHIP WORK",
      "pIntern.type": "Company Profile & E-Recruitment Portal",
      "pIntern.desc": "An integrated web platform built during my industry internship and technical journal, pairing a corporate <strong>Company Profile</strong> with an <strong>E-Recruitment</strong> system. Supports job vacancy publishing, candidate registration with PDF CV uploads, file screening, and an HR selection dashboard.",
      "pIntern.link": "View Internship Repository",
      "pIntern.archTitle": "SYSTEM FLOW & SCHEMA",
      "pIntern.step1T": "Public Career Portal",
      "pIntern.step1D": "Company profile & dynamic job listings",
      "pIntern.step2T": "CV Validation & Upload",
      "pIntern.step2D": "PDF MIME checks, filename sanitization, anti-XSS/SQLi",
      "pIntern.step3T": "Relational MySQL Schema",
      "pIntern.step3D": "Normalized jobs, applicants, dossiers, status",
      "pIntern.step4T": "HR Screening Dashboard",
      "pIntern.step4D": "Qualification filtering & stage transitions",

      "p1.type": "Linux VPS Daemon & Docker",
      "p1.desc": "Linux server management daemon engineered with <strong>Go</strong> and <strong>React/TypeScript</strong>. Built for VPS environments with remote control, realtime CPU/Memory telemetry, file management, and containerized instance orchestration.",
      "p.link": "View Repository",

      "p2.type": "Q&A Knowledge Community",
      "p2.desc": "Structured question-and-answer knowledge platform built with <strong>Laravel 12</strong>. Includes secure authentication, relational tag taxonomy, best-answer upvoting, and responsive Blade/Tailwind views.",

      "p3.type": "NLP & Quiz Engine",
      "p3.desc": "Web platform powered by <strong>Machine Learning & Natural Language Processing</strong> to summarize lengthy academic documents and synthesize interactive self-study quizzes automatically.",

      "p4.type": "Fullstack E-Commerce",
      "p4.desc": "Decoupled e-commerce web architecture combining <strong>React.js</strong> for the SPA storefront and <strong>Golang</strong> for a fast RESTful backend handling transactions and inventory state.",

      "p5.type": "Academic Productivity Platform",
      "p5.desc": "<em>“Your university life, organized.”</em> Cross-platform open-source academic productivity and student collaboration suite featuring timetable management, shared study vaults, and task sync.",

      "p6.type": "Mobile Ticketing App",
      "p6.desc": "Cross-platform event and seminar ticketing app crafted with <strong>Flutter & Dart</strong>, featuring dynamic seat selection, barcode ticket validation, and streamlined mobile booking flows.",

      "exp.tag": "INTERNSHIP",
      "exp.title": "Internship & Industry Practice",
      "exp.desc": "Applied software engineering work in corporate information systems, relational database schemas, and backend workflows.",
      "exp.iBadge": "PRAKERIN & JOURNAL",
      "exp.iPeriod": "COMPLETED",
      "exp.iTitle": "Software Engineering Intern — Company Profile & E-Recruitment Portal",
      "exp.iSub": "Corporate Information Systems & Integrated Recruitment Portal Development",
      "exp.iDesc": "Completed industrial internship (Prakerin) and technical documentation journal by designing and shipping an integrated <strong>Company Profile and E-Recruitment web application</strong>. Digitalized job posting management, candidate CV submission, and HR screening pipelines.",
      "exp.p1Title": "Relational Database Schema",
      "exp.p1Desc": "Modeled normalized MySQL tables covering job openings, candidate profiles, document attachments, and selection stages.",
      "exp.p2Title": "CV Upload & Registration Pipeline",
      "exp.p2Desc": "Built self-service applicant registration with PDF CV upload validation, MIME verification, and safe filename sanitization.",
      "exp.p3Title": "HR Screening Dashboard",
      "exp.p3Desc": "Developed an administrative backoffice allowing recruiters to review dossiers, filter qualifications, and update statuses.",
      "exp.p4Title": "Input Security & End-to-End Testing",
      "exp.p4Desc": "Implemented defenses against SQL Injection and XSS, strict server validation, and end-to-end functional checks.",
      "exp.iBtn": "View Internship Repository",

      "edu.tag": "EDUCATION",
      "edu.title": "Education & Academic Background",
      "edu.desc": "Vocational software engineering roots progressing into undergraduate Information Technology studies.",
      "edu.c1Badge": "HIGHER EDUCATION (B.SC.)",
      "edu.c1Degree": "B.Sc. in Software Engineering / Information Technology",
      "edu.c1Period": "2026 – Present (Batch 26)",
      "edu.c1Desc": "Advancing enterprise software architecture, algorithms & data structures, distributed database systems (MySQL, PostgreSQL), AI/NLP integration, and industry engineering practices.",
      "edu.c2Badge": "VOCATIONAL HIGH SCHOOL (SMK)",
      "edu.c2Degree": "Software Engineering (RPL)",
      "edu.c2Period": "Vocational Graduate",
      "edu.c2Desc": "Built strong early programming foundations: relational MySQL modeling, OOP paradigms (PHP, C++, Java, VB.NET), modern CSS workflows (SCSS/Tailwind), and graduated skill assessments with distinction.",

      "contact.tag": "CONTACT",
      "contact.title": "Let's Connect & Collaborate",
      "contact.desc": "Open for industrial internship roles, backend engineering opportunities, open-source collaboration, and technical discussions.",
      "contact.ctaTitle": "Interested in Internship Roles or Engineering Collaboration?",
      "contact.ctaText": "Reach out directly via email or connect on LinkedIn. Always keen to discuss backend architecture, database tuning, and practical systems.",
      "contact.ctaEmailBtn": "Send Direct Email",
      "contact.cEmail": "PRIMARY EMAIL",
      "contact.cDiscord": "DISCORD USERNAME",
      "contact.cLinkedIn": "LINKEDIN",
      "contact.cGithub": "GITHUB",
      "contact.cInstagram": "INSTAGRAM",

      "footer.sub": "Rekishii Lucy — Software Engineering Student @ President University Batch 26",
      "footer.home": "Home",
      "footer.about": "About",
      "footer.arsenal": "Stack",
      "footer.projects": "Projects",
      "footer.experience": "Internship",
      "footer.education": "Education",
      "footer.contact": "Contact",
      "footer.copy": "© 2026 Rekishii Lucy (Rekis) · Bekasi & Cikarang, Indonesia."
    }
  };

  // ================= 2. LANGUAGE SWITCHER (ID / EN) =================
  const langToggleBtn = document.getElementById('lang-toggle');
  const langIdEl = document.getElementById('lang-id');
  const langEnEl = document.getElementById('lang-en');
  let currentLang = localStorage.getItem('rekis-lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'id';
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('rekis-lang', currentLang);

    if (langIdEl && langEnEl) {
      langIdEl.classList.toggle('is-active', currentLang === 'id');
      langEnEl.classList.toggle('is-active', currentLang === 'en');
    }

    if (langToggleBtn) {
      langToggleBtn.setAttribute(
        'aria-label',
        currentLang === 'id' ? 'Switch language to English' : 'Ganti bahasa ke Indonesia'
      );
    }

    const dict = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }

  applyLanguage(currentLang);

  // ================= 3. THEME SWITCHER (DARK / LIGHT) =================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  function applyTheme(theme) {
    const resolved = theme === 'light' ? 'light' : 'dark';
    htmlRoot.setAttribute('data-theme', resolved);
    htmlRoot.style.colorScheme = resolved;
    localStorage.setItem('rekis-theme', resolved);

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-pressed', String(resolved === 'light'));
    }
  }

  const savedTheme = localStorage.getItem('rekis-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // ================= 4. MOBILE NAVIGATION DRAWER =================
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  function setMenuOpen(isOpen) {
    if (!navMenu) return;
    navMenu.classList.toggle('show-menu', isOpen);
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', String(isOpen));
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => setMenuOpen(true));
  }

  if (navClose) {
    navClose.addEventListener('click', () => setMenuOpen(false));
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
      setMenuOpen(false);
      if (navToggle) navToggle.focus();
    }
  });

  // ================= 5. STICKY HEADER & ACTIVE NAV =================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    const scrollY = window.scrollY;

    if (header) {
      header.classList.toggle('navbar-scrolled', scrollY >= 32);
    }

    sections.forEach((section) => {
      const top = section.offsetTop - 130;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav__menu a[href="#${id}"]`);

      if (link) {
        link.classList.toggle('active-link', scrollY >= top && scrollY < top + height);
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ================= 6. PROJECT CATEGORY FILTERING =================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-row, .project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        const matches = filterValue === 'all' || category === filterValue;
        item.classList.toggle('hide', !matches);
        if (matches) {
          item.classList.add('revealed');
        }
      });
    });
  });

  // ================= 7. PROGRESSIVE SCROLL REVEAL =================
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    htmlRoot.classList.add('js-reveal');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -24px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // ================= 8. COPY ACTIONS & TOAST =================
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer;

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  function setupCopyButton(btnId, textToCopy, tooltipId) {
    const btn = document.getElementById(btnId);
    const tooltip = document.getElementById(tooltipId);

    if (btn && tooltip) {
      btn.addEventListener('click', () => {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            tooltip.classList.add('show');
            const msg = currentLang === 'id'
              ? `Disalin ke clipboard: ${textToCopy}`
              : `Copied to clipboard: ${textToCopy}`;
            showToast(msg);
            setTimeout(() => tooltip.classList.remove('show'), 2000);
          })
          .catch(() => {});
      });
    }
  }

  setupCopyButton('copy-email-btn', 'rekishiilucy658@gmail.com', 'email-tooltip');
  setupCopyButton('copy-discord-btn', 'ggorekis', 'discord-tooltip');
  setupCopyButton('copy-discord-btn-2', 'ggorekis', 'discord-tooltip-2');

  // ================= 9. DOWNLOAD CV CHECK =================
  const cvLinks = document.querySelectorAll('a[href="assets/docs/cv-resume.pdf"]');
  cvLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      fetch(link.getAttribute('href'), { method: 'HEAD' })
        .then((res) => {
          if (!res.ok) {
            e.preventDefault();
            const cvNotice =
              currentLang === 'id'
                ? 'File CV belum tersedia di assets/docs/cv-resume.pdf.'
                : 'Resume PDF is not yet uploaded in assets/docs/cv-resume.pdf.';
            showToast(cvNotice);
          }
        })
        .catch(() => {});
    });
  });

  // ================= 10. BACK TO TOP =================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
