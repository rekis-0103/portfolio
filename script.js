/**
 * REKISHII LUCY (REKIS) - PORTFOLIO LOGIC
 * Bilingual (ID & EN), Theme Switcher, Project Filter, & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. BILINGUAL DICTIONARY (ID & EN) =================
  const translations = {
    id: {
      "nav.home": "Beranda",
      "nav.about": "Tentang",
      "nav.arsenal": "Arsenal",
      "nav.projects": "Proyek",
      "nav.experience": "Magang",
      "nav.education": "Pendidikan",
      "nav.contact": "Kontak",

      "hero.status": "Terbuka untuk Peluang Magang & Backend Engineering",
      "hero.quote": "\"Turning coffee into logic, breaking things down to understand how they work, and striving to write cleaner, more maintainable code with every commit.\"",
      "hero.desc": "Mahasiswa <strong>Software Engineering di President University</strong> (Alumnus <em>SMK Telekomunikasi Telesandi</em>). Berfokus mendalam pada <strong>Backend Architecture</strong>, sistem basis data relasional (MySQL/PostgreSQL), implementasi API terdistribusi (Go & Laravel 12), eksplorasi AI / NLP, dasar Cyber Security, dan mobile app (Flutter).",
      "hero.exploreBtn": "Jelajahi Proyek",
      "hero.cvBtn": "Unduh CV",
      "hero.contactBtn": "Hubungi Saya →",

      "tooltip.copied": "Disalin!",

      "profileCard.status": "Software Engineering Student",
      "profileCard.fullName": "Nama Lengkap",
      "profileCard.nickname": "Panggilan",
      "profileCard.campus": "Kampus",
      "profileCard.smk": "Asal SMK",
      "profileCard.focus": "Fokus Utama",
      "profileCard.focusVal": "Backend Architecture & DB",

      "statBox.code1": "[01] FOKUS UTAMA",
      "statBox.title1": "Backend & Databases",
      "statBox.code2": "[02] REPOSITORI",
      "statBox.title2": "21+ Public Repos",
      "statBox.code3": "[03] PENDIDIKAN",
      "statBox.title3": "PresUniv & Telesandi",
      "statBox.meta3": "Jalur Software Engineering",
      "statBox.code4": "[04] PRINSIP KODE",
      "statBox.title4": "Clean Code & DRY",
      "statBox.meta4": "Modular, Terpisah, & Teruji",

      "about.tag": "// 01. TENTANG REKAYASAWAN",
      "about.title": "Rekayasa Berbasis Logika, Keandalan, & Struktur",
      "about.subtitle": "Dari <span class=\"gradient-text\">SMK Telekomunikasi Telesandi</span> hingga <span class=\"gradient-text\">President University</span>",
      "about.p1": "Saya adalah mahasiswa jurusan <strong>Software Engineering (Teknik Informatika) di President University (Batch 26)</strong> dengan latar belakang pendidikan kejuruan <strong>Rekayasa Perangkat Lunak (RPL) di SMK Telekomunikasi Telesandi Bekasi</strong>.",
      "about.p2": "Perjalanan teknis saya berpusat pada rasa ingin tahu mendalam tentang bagaimana sistem di balik layar beroperasi. Bagi saya, keindahan perangkat lunak tidak hanya terletak pada antarmuka visual, melainkan pada <strong>kualitas logika backend, normalisasi relasi basis data, efisiensi query, dan keamanan otentikasi</strong>.",
      "about.p3": "Saya secara aktif membangun proyek nyata: mulai dari sistem Company Profile & E-Recruitment yang dikembangkan selama magang (<strong>compro-dan-jurnal</strong>), panel manajemen server VPS berbasis Linux (<strong>MyPanel-V2</strong>), platform Q&A berbasis <strong>Laravel 12 (AskHub)</strong>, hingga eksplorasi AI / NLP (<strong>Axonote</strong>).",
      "about.devSetupTitle": "⚡ Dev Setup & Lingkungan Kerja",

      "manifesto.t1": "Clean Code & Maintainability",
      "manifesto.d1": "Mengutamakan prinsip DRY (Don't Repeat Yourself), KISS, dan struktur kontroler yang terpisah dari logika bisnis.",
      "manifesto.t2": "Normalisasi Basis Data & Indexing",
      "manifesto.d2": "Merancang skema MySQL & PostgreSQL dengan relasi terukur, query eager loading, serta indexing komposit efisien.",
      "manifesto.t3": "Polyglot Problem Solver",
      "manifesto.d3": "Memilih alat sesuai masalah: Go untuk concurrency & throughput cepat, Laravel untuk ekosistem aplikasi komprehensif, Python untuk AI/ML.",
      "manifesto.t4": "Kesadaran Keamanan (Security Mindset)",
      "manifesto.d4": "Paham dasar pertahanan: proteksi SQL Injection, sanitasi input, JWT tokens, RBAC, dan validasi sisi server.",

      "skills.tag": "// 02. TECH STACK & ARSENAL",
      "skills.title": "Alat Kerja & Teknologi Teruji",
      "skills.desc": "Disinkronkan langsung dengan repositori dan implementasi kode nyata di GitHub @rekis-0103.",
      "skills.badge1": "DOMAIN UTAMA",
      "skills.title1": "Backend & Databases",
      "skills.desc1": "Spesialisasi arsitektur server, API RESTful, dan manajemen basis data relasional.",
      "skills.badge2": "CLIENT & CROSS-PLATFORM",
      "skills.title2": "Frontend & Mobile",
      "skills.desc2": "Membangun antarmuka modern yang terhubung langsung ke sistem backend.",
      "skills.badge3": "DEVOPS & PERANGKAT",
      "skills.title3": "Tools & Lingkungan Kerja",
      "skills.desc3": "Workflow pengembangan terstruktur, version control, dan isolasi lingkungan.",
      "skills.badge4": "FONDASI & EKSPLORASI",
      "skills.title4": "Ilmu Komputer & Keamanan",
      "skills.desc4": "Pemahaman mendalam mengenai fondasi ilmu komputer, AI, dan keamanan sistem.",

      "projects.tag": "// 03. KARYA & KODE PILIHAN",
      "projects.title": "Kompilasi Proyek Pilihan",
      "projects.desc": "Karya nyata dan repositori yang di-pin di profil GitHub @rekis-0103, termasuk proyek magang dan platform kolaborasi.",

      "filters.all": "Semua Proyek (7)",
      "filters.internship": "Magang / Jurnal",
      "filters.backend": "Backend & Cloud",
      "filters.fullstack": "Fullstack Web",
      "filters.ai": "AI & ML",
      "filters.mobile": "Mobile App",

      "pIntern.badge": "PROYEK MAGANG",
      "pIntern.type": "Company Profile & E-Recruitment Portal",
      "pIntern.desc": "Aplikasi web yang dibangun selama masa magang/jurnal industri, menggabungkan portal <strong>Company Profile</strong> perusahaan dengan modul <strong>E-Recruitment</strong> terpadu. Memfasilitasi publikasi lowongan karir, pendaftaran kandidat dengan upload CV PDF, sistem screening berkas, dan dashboard manajemen rekrutmen HR.",
      "pIntern.link": "Lihat Repository Magang →",

      "p1.type": "Linux VPS Daemon & Docker",
      "p1.desc": "Panel manajemen server berbasis Linux yang dibangun dengan <strong>Go</strong> dan <strong>React/TypeScript</strong>. Dirancang untuk lingkungan VPS dengan kontrol server jarak jauh, monitoring metrik CPU/Memory realtime, file manager, dan containerized Minecraft instances.",
      "p.link": "Lihat Repository →",

      "p2.type": "Q&A Knowledge Community",
      "p2.desc": "Aplikasi untuk saling bertanya dan berbagi pengetahuan yang dibangun dengan <strong>Laravel 12</strong>. Memiliki sistem autentikasi aman, kategorisasi tag berbasis relasi database, fitur voting jawaban terbaik, dan antarmuka responsif.",

      "p3.type": "NLP & Quiz Engine",
      "p3.desc": "Website generator ringkasan dan kuis otomatis berbasis <strong>Machine Learning & Natural Language Processing</strong>. Membantu mahasiswa mengekstrak konsep inti dari dokumen akademik panjang serta menghasilkan kuis evaluasi pemahaman secara instan.",

      "p4.type": "Fullstack E-Commerce",
      "p4.desc": "Aplikasi web e-commerce modern dengan arsitektur decoupled: <strong>React.js</strong> sebagai antarmuka SPA interaktif dan <strong>Golang</strong> sebagai backend RESTful API berkecepatan tinggi dengan pengelolaan transaksi database.",

      "p5.type": "Academic Productivity Platform",
      "p5.desc": "<em>\"Your university life, organized.\"</em> Platform open-source lintas perangkat untuk produktivitas akademik dan kolaborasi mahasiswa antar jurusan, mencakup manajemen jadwal kuliah, repositori berkas studi, dan sinkronisasi tugas.",

      "p6.type": "Mobile Ticketing App",
      "p6.desc": "Aplikasi mobile reservasi tiket acara dan seminar yang dibangun menggunakan <strong>Flutter & Dart</strong>. Menampilkan pemilihan kursi dinamis, validasi barcode tiket, serta antarmuka intuitif untuk pengguna smartphone.",

      "exp.tag": "// 04. PENGALAMAN MAGANG & INDUSTRI",
      "exp.title": "Pengalaman Magang & Rekam Jejak Industri",
      "exp.desc": "Pengalaman praktik kerja industri nyata dalam perancangan arsitektur backend, basis data, dan modul sistem informasi perusahaan.",
      "exp.iBadge": "MAGANG INDUSTRI • PRAKERIN & JURNAL",
      "exp.iPeriod": "PRAKERIN SELESAI",
      "exp.iTitle": "Software Engineering Intern — Company Profile & E-Recruitment Portal",
      "exp.iSub": "Pengembangan Sistem Informasi Perusahaan & Portal Rekrutmen Terpadu",
      "exp.iDesc": "Menyelesaikan program magang industri (Prakerin) dan menyusun laporan jurnal teknis dengan merancang serta membangun aplikasi web terpadu <strong>Company Profile korporat dan modul E-Recruitment</strong>. Sistem ini mendigitalisasi proses publikasi lowongan karir, penerimaan berkas pelamar, hingga proses screening kandidat oleh HRD.",
      "exp.p1Title": "Perancangan Basis Data Relasional:",
      "exp.p1Desc": "Merancang skema MySQL yang ternormalisasi untuk entitas lowongan pekerjaan, akun pelamar, berkas dokumen, dan status evaluasi seleksi.",
      "exp.p2Title": "Pipeline Upload CV & Registrasi:",
      "exp.p2Desc": "Membangun modul pendaftaran pelamar mandiri dengan alur upload berkas CV PDF otomatis, validasi tipe file, dan sanitasi nama dokumen.",
      "exp.p3Title": "Dashboard Manajemen Screening HRD:",
      "exp.p3Desc": "Mengembangkan portal administratif untuk tim recruiter mengelola pelamar, memfilter kualifikasi kandidat, dan memperbarui tahap seleksi.",
      "exp.p4Title": "Keamanan Input & Pengujian Sistem:",
      "exp.p4Desc": "Menerapkan sanitasi input formulir terhadap SQL Injection dan XSS, validasi sisi server, serta pengujian fungsional modul end-to-end.",
      "exp.iBtn": "Lihat Repositori Magang & Jurnal →",

      "edu.tag": "// 05. RIWAYAT PENDIDIKAN",
      "edu.title": "Pendidikan & Latar Belakang Akademis",
      "edu.desc": "Pondasi kejuruan rekayasa perangkat lunak dan pengembangan akademis teknologi informasi di perguruan tinggi.",
      "edu.c1Badge": "PERGURUAN TINGGI (S1)",
      "edu.c1Degree": "S1 Software Engineering / Information Technology",
      "edu.c1Period": "2026 – Sekarang (Batch 26)",
      "edu.c1Desc": "Memperdalam arsitektur perangkat lunak skala enterprise, algoritma & struktur data lanjutan, manajemen basis data terdistribusi (MySQL, PostgreSQL), integrasi AI/NLP, serta prinsip rekayasa sistem yang terstandarisasi industri internasional.",
      "edu.c2Badge": "PENDIDIKAN KEJURUAN (SMK)",
      "edu.c2Degree": "Rekayasa Perangkat Lunak (RPL)",
      "edu.c2Period": "Alumnus Kejuruan",
      "edu.c2Desc": "Membangun pondasi logika komputasional dan pemrograman sejak dini: pemodelan data relasional MySQL, paradigma OOP (PHP, C++, Java, VB.NET), implementasi CSS preprocessor (SCSS/Tailwind), serta penyelesaian Uji Level Peminjaman Barang dengan predikat unggul.",

      "contact.tag": "// 06. SALURAN KOMUNIKASI",
      "contact.title": "Mari Terhubung & Berkolaborasi",
      "contact.desc": "Terbuka untuk peluang magang industri (internship), kolaborasi open-source, atau diskusi teknis backend.",

      "contact.cEmail": "EMAIL UTAMA",
      "contact.cDiscord": "USER DISCORD",
      "contact.cLinkedIn": "JARINGAN LINKEDIN",
      "contact.cGithub": "REPOSITORI GITHUB",
      "contact.cInstagram": "FEED INSTAGRAM",
      "contact.ctaTitle": "Tertarik Membahas Peluang Magang atau Kolaborasi?",
      "contact.ctaText": "Kirimkan email langsung atau hubungi melalui LinkedIn. Saya selalu antusias mendiskusikan arsitektur backend, optimasi basis data, dan sistem modern.",
      "contact.ctaEmailBtn": "Kirim Email Sekarang",

      "footer.sub": "Rekishii Lucy — Software Engineering Student @ President University Batch 26",
      "footer.home": "/beranda",
      "footer.about": "/tentang",
      "footer.arsenal": "/arsenal",
      "footer.projects": "/proyek",
      "footer.experience": "/magang",
      "footer.education": "/pendidikan",
      "footer.contact": "/kontak",
      "footer.copy": "© 2026 Rekishii Lucy (Rekis). Crafted with intentional design & zero AI slop."
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.arsenal": "Arsenal",
      "nav.projects": "Projects",
      "nav.experience": "Internship",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "hero.status": "Open for Internship & Backend Engineering Roles",
      "hero.quote": "\"Turning coffee into logic, breaking things down to understand how they work, and striving to write cleaner, more maintainable code with every commit.\"",
      "hero.desc": "<strong>Software Engineering student at President University</strong> (Alumnus of <em>SMK Telekomunikasi Telesandi</em>). Focused deeply on <strong>Backend Architecture</strong>, relational database systems (MySQL/PostgreSQL), scalable API design (Go & Laravel 12), AI / NLP exploration, Cyber Security basics, and mobile apps (Flutter).",
      "hero.exploreBtn": "Explore Projects",
      "hero.cvBtn": "Download CV",
      "hero.contactBtn": "Get in Touch →",

      "tooltip.copied": "Copied!",

      "profileCard.status": "Software Engineering Student",
      "profileCard.fullName": "Full Name",
      "profileCard.nickname": "Callsign",
      "profileCard.campus": "University",
      "profileCard.smk": "Vocational School",
      "profileCard.focus": "Core Focus",
      "profileCard.focusVal": "Backend Architecture & DB",

      "statBox.code1": "[01] PRIMARY FOCUS",
      "statBox.title1": "Backend & Databases",
      "statBox.code2": "[02] REPOSITORIES",
      "statBox.title2": "21+ Public Repos",
      "statBox.code3": "[03] EDUCATION",
      "statBox.title3": "PresUniv & Telesandi",
      "statBox.meta3": "Software Engineering Track",
      "statBox.code4": "[04] CORE VALUES",
      "statBox.title4": "Clean Code & DRY",
      "statBox.meta4": "Modular, Decoupled, & Tested",

      "about.tag": "// 01. ABOUT THE ENGINEER",
      "about.title": "Engineering with Logic, Reliability, & Structure",
      "about.subtitle": "From <span class=\"gradient-text\">SMK Telekomunikasi Telesandi</span> to <span class=\"gradient-text\">President University</span>",
      "about.p1": "I am a <strong>Software Engineering student at President University (Batch 26)</strong> with a strong foundational vocational background in <strong>Software Engineering (RPL) from SMK Telekomunikasi Telesandi Bekasi</strong>.",
      "about.p2": "My technical path is driven by deep curiosity about how systems behave under the hood. To me, the elegance of software lies not merely in the graphical interface, but in the <strong>quality of backend logic, normalized relational schemas, query efficiency, and robust authentication</strong>.",
      "about.p3": "I actively build tangible codebases: from a corporate Company Profile & E-Recruitment system created during my internship (<strong>compro-dan-jurnal</strong>), a Linux VPS server management daemon (<strong>MyPanel-V2</strong>), a community Q&A platform in <strong>Laravel 12 (AskHub)</strong>, to AI / NLP experimentation (<strong>Axonote</strong>).",
      "about.devSetupTitle": "⚡ Dev Setup & Environment",

      "manifesto.t1": "Clean Code & Maintainability",
      "manifesto.d1": "Prioritizing DRY (Don't Repeat Yourself), KISS, and decoupling controller layers cleanly from business logic.",
      "manifesto.t2": "Database Normalization & Indexing",
      "manifesto.d2": "Designing MySQL & PostgreSQL schemas with measurable constraints, eager loading query hygiene, and composite indices.",
      "manifesto.t3": "Polyglot Problem Solver",
      "manifesto.d3": "Choosing the right tool for the job: Go for concurrency & throughput, Laravel for comprehensive application suites, Python for AI/ML.",
      "manifesto.t4": "Security Awareness",
      "manifesto.d4": "Solid grasp of defenses: SQL Injection prevention, input sanitization, JWT tokens, RBAC, and server-side validation.",

      "skills.tag": "// 02. TECH STACK & ARSENAL",
      "skills.title": "Battle-Tested Tools & Technologies",
      "skills.desc": "Directly aligned with real repositories and codebases on GitHub @rekis-0103.",
      "skills.badge1": "PRIMARY DOMAIN",
      "skills.title1": "Backend & Databases",
      "skills.desc1": "Specialized in server architecture, RESTful APIs, and relational database management.",
      "skills.badge2": "CLIENT & CROSS-PLATFORM",
      "skills.title2": "Frontend & Mobile",
      "skills.desc2": "Building modern responsive client interfaces wired directly to backend infrastructure.",
      "skills.badge3": "DEVOPS & TOOLING",
      "skills.title3": "Tools & Environment",
      "skills.desc3": "Structured development workflows, version control discipline, and containerized runtimes.",
      "skills.badge4": "FOUNDATIONS & HORIZONS",
      "skills.title4": "Computer Science & Security",
      "skills.desc4": "Deep comprehension of software fundamentals, AI pipeline integration, and systems defense.",

      "projects.tag": "// 03. FEATURED WORK & CODEBASES",
      "projects.title": "Curated Engineering Projects",
      "projects.desc": "Real implementations pinned on GitHub @rekis-0103, featuring internship deliverables and collaborative systems.",

      "filters.all": "All Projects (7)",
      "filters.internship": "Internship / Journal",
      "filters.backend": "Backend & Cloud",
      "filters.fullstack": "Fullstack Web",
      "filters.ai": "AI & ML",
      "filters.mobile": "Mobile App",

      "pIntern.badge": "INTERNSHIP WORK",
      "pIntern.type": "Company Profile & E-Recruitment Portal",
      "pIntern.desc": "A production-oriented web application built during my industry internship and technical journal, integrating a corporate <strong>Company Profile</strong> with a full <strong>E-Recruitment</strong> portal. Features job opening management, PDF CV upload pipeline, candidate screening workflows, and HR admin dashboard.",
      "pIntern.link": "View Internship Repo →",

      "p1.type": "Linux VPS Daemon & Docker",
      "p1.desc": "Linux-based server management daemon built with <strong>Go</strong> and <strong>React/TypeScript</strong>. Designed for VPS environments with remote server control, realtime CPU/Memory telemetries, file manager, and containerized Minecraft instances.",
      "p.link": "View Repository →",

      "p2.type": "Q&A Knowledge Community",
      "p2.desc": "Structured question-and-answer platform built with <strong>Laravel 12</strong>. Features secure authentication, relational tag taxonomy, answer upvoting system, and responsive Blade/Tailwind UI.",

      "p3.type": "NLP & Quiz Engine",
      "p3.desc": "Machine Learning and NLP-powered web platform for automated academic document summarization and interactive quiz synthesis for self-study.",

      "p4.type": "Fullstack E-Commerce",
      "p4.desc": "Decoupled e-commerce architecture featuring <strong>React.js</strong> as an interactive SPA frontend and <strong>Golang</strong> as a high-throughput RESTful API server with transactional safety.",

      "p5.type": "Academic Productivity Platform",
      "p5.desc": "<em>\"Your university life, organized.\"</em> Open-source cross-platform academic productivity and collaboration system for students, featuring timetable syncing and shared study vaults.",

      "p6.type": "Mobile Ticketing App",
      "p6.desc": "Cross-platform mobile event reservation application crafted with <strong>Flutter & Dart</strong>. Features dynamic seat allocation, barcode verification, and intuitive booking flows.",

      "exp.tag": "// 04. INTERNSHIP & PRACTICAL EXPERIENCE",
      "exp.title": "Internship & Practical Experience",
      "exp.desc": "Applied software engineering practice in enterprise information systems, relational databases, and backend architecture.",
      "exp.iBadge": "INDUSTRY INTERNSHIP • PRAKERIN & JOURNAL",
      "exp.iPeriod": "COMPLETED INTERNSHIP",
      "exp.iTitle": "Software Engineering Intern — Company Profile & E-Recruitment Portal",
      "exp.iSub": "Corporate Information Systems & Employee Recruitment Module Development",
      "exp.iDesc": "Completed industrial internship and technical documentation journal by engineering an integrated corporate <strong>Company Profile and E-Recruitment web system</strong>. The system digitalizes job vacancy publication, applicant CV registration workflows, and HR candidate evaluation pipelines.",
      "exp.p1Title": "Relational Database Architecture:",
      "exp.p1Desc": "Designed normalized MySQL schemas for job postings, candidate profiles, uploaded documents, and multi-stage applicant statuses.",
      "exp.p2Title": "Automated CV Upload Pipeline:",
      "exp.p2Desc": "Engineered self-service candidate registration workflows with automated PDF CV uploads, mime-type verification, and secure filename sanitization.",
      "exp.p3Title": "HR Screening Management Dashboard:",
      "exp.p3Desc": "Developed administrative backoffice for recruiters to review applicant dossiers, filter candidate qualifications, and transition selection statuses.",
      "exp.p4Title": "Input Sanitization & System Testing:",
      "exp.p4Desc": "Implemented defensive input sanitization against SQLi and XSS, strict server-side validation, and end-to-end functional integration testing.",
      "exp.iBtn": "View Internship Repository →",

      "edu.tag": "// 05. ACADEMIC FOUNDATIONS",
      "edu.title": "Education & Academic Journey",
      "edu.desc": "Vocational software engineering roots and advanced computer science higher education.",
      "edu.c1Badge": "HIGHER EDUCATION (B.SC.)",
      "edu.c1Degree": "B.Sc. in Software Engineering / Information Technology",
      "edu.c1Period": "Batch 26 • Current",
      "edu.c1Desc": "Advancing enterprise software architecture, advanced object-oriented design, distributed database management (MySQL, PostgreSQL), AI/NLP integration, and industry-standard software engineering practices.",
      "edu.c2Badge": "VOCATIONAL EDUCATION (SMK)",
      "edu.c2Degree": "Software Engineering (RPL)",
      "edu.c2Period": "Vocational Graduate",
      "edu.c2Desc": "Built solid computational foundations: relational MySQL modeling, OOP paradigms (PHP, C++, Java, VB.NET), modern CSS tooling (SCSS/Tailwind), and passed technical skill assessments with distinction.",

      "contact.tag": "// 06. DIRECT COMMUNICATIONS",
      "contact.title": "Let's Connect & Collaborate",
      "contact.desc": "Open for industrial internship positions, backend engineering roles, open-source projects, or architectural discussions.",

      "contact.cEmail": "PRIMARY EMAIL",
      "contact.cDiscord": "DISCORD USERNAME",
      "contact.cLinkedIn": "LINKEDIN NETWORK",
      "contact.cGithub": "GITHUB REPOSITORIES",
      "contact.cInstagram": "INSTAGRAM FEED",
      "contact.ctaTitle": "Interested in Internship Roles or Engineering Collaboration?",
      "contact.ctaText": "Reach out directly via email or connect on LinkedIn. I am always keen to discuss backend architecture, database optimization, and modern systems.",
      "contact.ctaEmailBtn": "Send Direct Email",

      "footer.sub": "Rekishii Lucy — Software Engineering Student @ President University Batch 26",
      "footer.home": "/home",
      "footer.about": "/about",
      "footer.arsenal": "/arsenal",
      "footer.projects": "/projects",
      "footer.experience": "/internship",
      "footer.education": "/education",
      "footer.contact": "/contact",
      "footer.copy": "© 2026 Rekishii Lucy (Rekis). Crafted with intentional design & zero AI slop."
    }
  };

  // Roles for dynamic typing by language
  const typingRoles = {
    id: [
      'Backend Engineer (Go & Laravel 12)',
      'Fullstack Developer',
      'Database & Systems Enthusiast',
      'AI / NLP Explorer',
      'President University Batch 26'
    ],
    en: [
      'Backend Engineer (Go & Laravel 12)',
      'Fullstack Developer',
      'Relational Database Specialist',
      'AI / NLP Explorer',
      'President University Batch 26'
    ]
  };

  // ================= 2. LANGUAGE SWITCHER IMPLEMENTATION =================
  const langToggleBtn = document.getElementById('lang-toggle');
  const langCurrentText = document.getElementById('lang-current');
  let currentLang = localStorage.getItem('rekis-lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('rekis-lang', lang);

    // Update button text (shows the OTHER language available to switch to, or current)
    if (langCurrentText) {
      langCurrentText.textContent = lang === 'id' ? 'EN' : 'ID';
    }

    const dict = translations[lang] || translations.id;

    // Replace text in elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Replace placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(newLang);
    });
  }

  // Initial language setup
  applyLanguage(currentLang);

  // ================= 3. THEME SWITCHER (DARK / LIGHT) =================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('rekis-theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('rekis-theme', newTheme);
    });
  }

  // ================= 4. MOBILE NAVIGATION DRAWER =================
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    });
  });

  // ================= 5. STICKY NAVBAR ELEVATION =================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY >= 40) {
        header.classList.add('navbar-scrolled');
      } else {
        header.classList.remove('navbar-scrolled');
      }
    }
  });

  // ================= 6. DYNAMIC ROLE TYPING ANIMATION =================
  const roleElement = document.getElementById('dynamic-role');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseEnd = 1800;

  function typeRole() {
    if (!roleElement) return;

    const list = typingRoles[currentLang] || typingRoles.id;
    const currentRole = list[roleIndex % list.length];

    if (!isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, pauseEnd);
        return;
      }
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % list.length;
      }
    }

    setTimeout(typeRole, isDeleting ? deletingSpeed : typingSpeed);
  }

  setTimeout(typeRole, 500);

  // ================= 7. PROJECT CATEGORY FILTERING =================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
          card.classList.add('fade-in');
          setTimeout(() => card.classList.remove('fade-in'), 300);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // ================= 8. ACTIVE NAV LINK ON SCROLL =================
  const sections = document.querySelectorAll('section[id]');

  function scrollActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active-link');
        } else {
          targetNavLink.classList.remove('active-link');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActiveNav);

  // ================= 9. SCROLL REVEAL (IntersectionObserver) =================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ================= 10. COPY EMAIL & DISCORD =================
  function setupCopyButton(btnId, textToCopy, tooltipId) {
    const btn = document.getElementById(btnId);
    const tooltip = document.getElementById(tooltipId);

    if (btn && tooltip) {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
          tooltip.classList.add('show');
          setTimeout(() => {
            tooltip.classList.remove('show');
          }, 2000);
        }).catch(err => {
          console.error('Copy failed:', err);
        });
      });
    }
  }

  // Email copy
  setupCopyButton('copy-email-btn', 'rekishiilucy658@gmail.com', 'email-tooltip');

  // Discord copy (Hero tag & Contact card)
  setupCopyButton('copy-discord-btn', 'ggorekis', 'discord-tooltip');
  setupCopyButton('copy-discord-btn-2', 'ggorekis', 'discord-tooltip-2');



  // ================= 12. DOWNLOAD CV BUTTON =================
  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      fetch(downloadCvBtn.getAttribute('href'), { method: 'HEAD' })
        .then(res => {
          if (!res.ok) {
            e.preventDefault();
            const cvNotice = currentLang === 'id'
              ? 'File CV belum tersedia di assets/docs/cv-resume.pdf.'
              : 'Resume PDF is not yet uploaded in assets/docs/cv-resume.pdf.';
            showToast('ℹ️', cvNotice);
          }
        })
        .catch(() => {});
    });
  }

  // ================= 13. TOAST HELPER =================
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer;

  function showToast(icon, msg) {
    if (!toast) return;
    clearTimeout(toastTimer);

    if (toastIcon) toastIcon.textContent = icon;
    if (toastMessage) toastMessage.textContent = msg;

    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // ================= 14. BACK TO TOP =================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
