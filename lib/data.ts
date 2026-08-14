// Content source of truth for the portfolio.
// Items marked PLACEHOLDER need real values before launch.

export const profile = {
  name: "Kishore Muthukumar",
  initials: "KM",
  roles: ["Medical Student", "Researcher", "Medical Educator"],
  institution: "Medical University of Łódź",
  institutionDetail: "English Division · Poland",
  year: "5th-year MBBS (MD)",
  mission:
    "Advancing healthcare through research, education, and evidence-based medicine — building toward a career as a physician-scientist.",
  portrait: "/kishore.png",
} as const;

export const about = {
  lead: "A fifth-year medical student training at the intersection of clinical practice, scientific research, and medical education.",
  paragraphs: [
    "My work is guided by a simple conviction: the questions raised at the bedside deserve to be answered in the laboratory, and the answers found there belong back at the bedside. That two-way path is what drew me toward the physician-scientist pathway.",
    "Alongside clinical training, I contribute to research spanning cardiovascular medicine, onco-nephrology, and pharmacogenomics, and I teach — anatomy, OSCE preparation, and peer mentoring — because explaining medicine well is how I learn it deeply.",
  ],
  interests: [
    "Internal Medicine",
    "Cardiovascular Medicine",
    "Nephrology",
    "Oncology",
    "Neuroscience",
    "Precision Medicine",
  ],
} as const;

export const education = [
  {
    period: "2022 — Present",
    degree: "MD Program (MBBS)",
    school: "Medical University of Łódź",
    schoolHref: "https://en.umed.pl/",
    detail: "English Division · Łódź, Poland",
    highlights: [
      "Clinical training across internal medicine and subspecialties",
      "Active research involvement alongside coursework",
      "Student leadership and academic representation",
      "International conference participation",
    ],
  },
] as const;

export const clinicalExperience = {
  featured: {
    institution: "Mayo Clinic",
    institutionHref: "https://www.mayoclinic.org/",
    department: "Nephrology",
    location: "Rochester, Minnesota, USA",
    duration: "September 2026",
    status: "Upcoming",
    summary:
      "A one-month clinical observership in nephrology at one of the world's leading academic medical centres, confirmed for September 2026 — training inside a research-driven care environment.",
    takeaways: [
      {
        title: "Multidisciplinary care",
        detail:
          "How nephrologists, transplant teams, pharmacists, and allied specialists converge on a single patient plan.",
      },
      {
        title: "Academic medicine",
        detail:
          "The teaching-hospital rhythm — rounds, case conferences, and continuous evidence appraisal.",
      },
      {
        title: "Clinical decision making",
        detail:
          "The reasoning behind complex renal cases, from differential to management under genuine uncertainty.",
      },
      {
        title: "Research-integrated practice",
        detail:
          "How translational research feeds directly into protocol and bedside decisions.",
      },
    ],
  },
} as const;

export const publications = [
  {
    venue: "IOCCM 2025",
    type: "Conference Abstract",
    title:
      "Evolocumab in the Management of Statin-Intolerant Familial Hyperlipoproteinemia",
    summary:
      "An examination of PCSK9 inhibition as a therapeutic route for patients with familial hyperlipoproteinemia who cannot tolerate statin therapy, with attention to residual cardiovascular risk.",
    themes: [
      "PCSK9 Inhibitors",
      "Cardiovascular Disease",
      "Lipoprotein(a)",
      "Precision Lipid Management",
    ],
    status: "Published",
  },
] as const;

export const ongoingResearch = {
  intro:
    "My current research focuses on clinically relevant topics across precision medicine, internal medicine, oncology, and respiratory medicine. These projects reflect my growing interest in evidence-based medicine and multidisciplinary clinical research.",
  items: [
    {
      title: "Pharmacogenetics",
      type: "Narrative Review",
      status: "In Preparation",
      description:
        "This review explores the role of pharmacogenetics in personalized medicine, highlighting how genetic variations influence drug response, efficacy, and safety. The project discusses current evidence, emerging clinical applications, and the future integration of pharmacogenomics into routine healthcare.",
    },
    {
      title:
        "Co-occurrence of Kidney Disease with Cardiovascular Diseases in the Cancer Population",
      type: "Narrative Review",
      status: "In Preparation",
      description:
        "This narrative review examines the complex relationship between kidney disease, cardiovascular disorders, and cancer. It focuses on shared risk factors, underlying pathophysiological mechanisms, treatment-related complications, and multidisciplinary strategies to improve patient outcomes within the field of cardio-onco-nephrology.",
    },
    {
      title: "Pancreatic Ductal Adenocarcinoma (PDAC): Survival and Current Advances",
      type: "Narrative Review",
      status: "In Preparation",
      description:
        "This review summarizes current evidence on pancreatic ductal adenocarcinoma, with emphasis on epidemiology, molecular biology, diagnostic approaches, treatment strategies, and recent advances aimed at improving survival and patient care.",
    },
    {
      title: "Asthma Misdiagnosis: A Clinical Case Report",
      type: "Clinical Case Report",
      status: "In Preparation",
      description:
        "This case report highlights the diagnostic challenges associated with asthma and emphasizes the importance of comprehensive clinical evaluation, appropriate differential diagnosis, and evidence-based management to avoid delayed or incorrect treatment.",
    },
  ],
} as const;

export const pharmacogenomics = [
  { gene: "CYP2D6", note: "Antidepressants, opioids, tamoxifen" },
  { gene: "CYP2C19", note: "Clopidogrel, PPIs, SSRIs" },
  { gene: "TPMT", note: "Thiopurine toxicity risk" },
  { gene: "NUDT15", note: "Thiopurine intolerance" },
  { gene: "DPYD", note: "Fluoropyrimidine safety" },
  { gene: "SLCO1B1", note: "Statin-induced myopathy" },
  { gene: "HLA variants", note: "Hypersensitivity reactions" },
  { gene: "CYP2C9", note: "Warfarin, NSAIDs, phenytoin" },
  { gene: "VKORC1", note: "Warfarin dose sensitivity" },
  { gene: "CYP4F2", note: "Vitamin K metabolism" },
] as const;

export const leadership = [
  {
    role: "Student Ambassador",
    org: "Medical University of Łódź",
    description:
      "Representing the English Division to prospective and incoming international students, and supporting their transition into the programme.",
  },
  {
    role: "Medical Education Organizer",
    org: "Academic Programmes",
    description:
      "Designing and coordinating educational sessions for peers — from planning and faculty liaison through to delivery and feedback.",
  },
  {
    role: "OSCE Workshop Organizer",
    org: "Clinical Skills Training",
    description:
      "Building structured OSCE preparation workshops that give students realistic, examinable practice in clinical examination and communication.",
  },
  {
    role: "Master Your Anatomy — Facilitator",
    org: "Peer Teaching Initiative",
    description:
      "Facilitating anatomy learning sessions, translating dense regional anatomy into something students can reason through rather than memorise.",
  },
  {
    role: "OHLI Health Leadership Fellow",
    org: "International Fellowship",
    description:
      "Selected for a health leadership programme focused on collaborative problem-solving and cross-border academic partnership in healthcare.",
  },
  {
    role: "Academic Advisor",
    org: "Akademia Polskiego · Poland",
    description:
      "In partnership with established educators in Poland, providing academic advisory services and guidance on educational pathways for students navigating the route into medicine.",
  },
] as const;

// ── Collaborators ────────────────────────────────────────────────────────
// The people behind the academic advisory work above, and the partner
// organisation it runs through.
export const collaborators = {
  intro:
    "The advisory work above runs through a small, close partnership rather than a formal institution — built with people already established in Poland's academic community.",
  partner: {
    name: "Akademia Polskiego",
    description:
      "A Poland-based academy for language and academic preparation, and the partner organisation this advisory work is built alongside.",
    href: "https://akademiapolskiego.com/en/home-page/",
  },
  people: [
    {
      name: "Kishore Muthukumar",
      initials: "KM",
      role: "Academic Advisor",
      href: "https://www.linkedin.com/in/kishore-muthukumar-654925246/",
    },
    {
      name: "Raakesh Naidu",
      initials: "R",
      role: "Academic Advisor",
      href: "https://www.linkedin.com/in/raakesh-naidu-36b420268/",
    },
    {
      name: "Dominika Lewandowska",
      initials: "DL",
      role: "Founder, Akademia Polskiego",
      href: "https://akademiapolskiego.com/en/home-page/",
    },
  ],
} as const;

export const conferences = [
  {
    year: "2025",
    name: "IOCCM 2025",
    detail: "International Online Conference — abstract presented",
    role: "Presenting Author",
  },
  {
    year: "2025",
    name: "AMSA International Students' Conference",
    detail: "Asian Medical Students' Association — international representation",
    role: "Delegate",
  },
] as const;

export const medicalEducation = [
  {
    title: "Anatomy Teaching",
    description: "Peer-led regional anatomy sessions grounded in clinical correlation.",
  },
  {
    title: "OSCE Preparation",
    description: "Structured examination practice with real-time formative feedback.",
  },
  {
    title: "Peer Mentoring",
    description: "One-to-one academic guidance for junior students across the programme.",
  },
  {
    title: "Simulation-Based Education",
    description: "Scenario-driven training that rehearses decisions before the ward.",
  },
  {
    title: "Clinical Workshops",
    description: "Hands-on skills sessions built around procedural competence.",
  },
  {
    title: "Medical Polish",
    description:
      "Helping international students learn medical Polish, in partnership with Akademia Polskiego — because a patient deserves to be understood in their own language.",
    href: "https://akademiapolskiego.com/en/home-page/",
    linkLabel: "Akademia Polskiego",
  },
] as const;

export const skills = [
  {
    group: "Research",
    items: [
      "Literature Review",
      "Scientific Writing",
      "Manuscript Development",
      "Abstract Writing",
      "Case Reports",
    ],
  },
  {
    group: "Clinical Education",
    items: ["OSCE", "Simulation", "Anatomy Teaching", "Mentorship"],
  },
  {
    group: "Leadership",
    items: [
      "Event Organization",
      "Team Coordination",
      "Academic Collaboration",
      "Conference Representation",
    ],
  },
  {
    group: "Communication",
    items: ["Public Speaking", "Scientific Presentations", "Professional Networking"],
  },
] as const;

export const futureVision = {
  statement:
    "To practise as a physician-scientist — holding clinical responsibility and research inquiry in the same hand, and contributing to healthcare that is both evidence-driven and internationally collaborative.",
  domains: [
    "Cardiovascular Medicine",
    "Internal Medicine",
    "Precision Medicine",
    "Clinical Pharmacology",
    "Translational Research",
    "Medical Education",
  ],
} as const;

// ── Photo journey ──────────────────────────────────────────────────────────
// Images resolve by convention: /journey/<slug>.jpg and /journey/thumb/<slug>.jpg.
// Both files must exist — a missing thumbnail is a silent 404 on a static host.
//
// Entries are authored in CHAPTER ORDER, and that ordering is load-bearing:
// groups are derived by filtering while preserving each item's index into this
// array, so contiguous chapters are what make lightbox next/previous walk the
// journey chronologically instead of jumping between years.

export type JourneyLink = { label: string; href: string };

export type JourneyItem = {
  slug: string;
  chapter: ChapterId;
  /** Per-photo chip. Narrower than the chapter — describes the photo, not the era. */
  category: string;
  title: string;
  caption: string;
  /** Opts this photo into the rotating showcase at the top of the section. */
  featured?: boolean;
  links?: JourneyLink[];
};

export const journeyChapters = [
  {
    id: "first-year",
    label: "First Year",
    period: "Year 1",
    blurb: "Arriving in Łódź — the year of sitting in the front row and volunteering for everything.",
  },
  {
    id: "second-year",
    label: "Second Year",
    period: "Year 2",
    blurb: "The heaviest pre-clinical year, and the one that decides whether you stay.",
  },
  {
    id: "third-year",
    label: "Third Year",
    period: "Year 3",
    blurb: "Pre-clinical gives way to clinical. Long library days, longer coffees.",
  },
  {
    id: "now",
    label: "Fourth Year & Now",
    period: "Year 4 —",
    blurb: "Research, conferences, and teaching the students who were where he started.",
  },
  {
    id: "meetings",
    label: "Meetings & Mentors",
    period: "Ongoing",
    blurb:
      "The individual conversations — with physicians and scientists — that mattered as much as the sessions themselves.",
  },
  {
    id: "inspire",
    label: "People Who Inspire",
    period: "Ongoing",
    blurb:
      "Ms Joanna Wieremiejewicz-Podkościelna has been far more than a mentor — through student activities, workshops, and the decisions that shaped where this journey is headed, she has been someone who encouraged him to believe in himself and keep moving forward. Some people become part of a journey; a few help shape it. Joanna has been one of those people.",
  },
  {
    id: "workshops",
    label: "Workshops & Teaching",
    period: "Ongoing",
    blurb: "The sessions he organises and teaches — anatomy, OSCE, CPR, pathology.",
  },
  {
    id: "campus",
    label: "Campus & Clinical Skills",
    period: "Ongoing",
    blurb: "Lecture halls, libraries, labs, and the hands-on hours in between.",
  },
  {
    id: "people",
    label: "People & Downtime",
    period: "Ongoing",
    blurb: "The classmates, staff, and quiet parks that make a long degree survivable.",
  },
  {
    id: "others",
    label: "Others",
    period: "",
    blurb: "Moments that don't sit neatly in one chapter.",
  },
] as const;

export type ChapterId = (typeof journeyChapters)[number]["id"];

export const journey: JourneyItem[] = [
  // ── First Year ───────────────────────────────────────────────────────────
  {
    slug: "fy-first-workshop",
    chapter: "first-year",
    category: "Workshop",
    title: "First workshop, as a participant",
    caption:
      "The first year on the receiving end of a workshop — the same sessions he would later be the one running.",
    featured: true,
  },
  {
    slug: "fy-patient-actor",
    chapter: "first-year",
    category: "Peer Teaching",
    title: "Playing the patient",
    caption:
      "Acting as the simulated patient so classmates could practise their examination — the cheapest and best teaching tool in medical school.",
  },
  {
    slug: "fy-participant",
    chapter: "first-year",
    category: "Workshop",
    title: "In the room",
    caption: "Early days — turning up to everything on offer and taking notes.",
  },
  {
    slug: "fy-workshop-participant",
    chapter: "first-year",
    category: "Workshop",
    title: "Learning the format",
    caption:
      "Another first-year workshop, learning how a good session is structured before ever having to build one.",
  },
  {
    slug: "fy-early-days",
    chapter: "first-year",
    category: "Campus",
    title: "Where it started",
    caption: "The first year in Łódź, a long way from home and entirely at the beginning.",
  },
  {
    slug: "ty-portrait",
    chapter: "first-year",
    category: "Clinical Skills",
    title: "First sutures, in public",
    caption:
      "Practising sutures at “I'm Gonna Be a Scientist” — gloves on, needle in hand, in front of a room for the first time.",
    featured: true,
  },

  // ── Second Year ──────────────────────────────────────────────────────────
  {
    slug: "sy-workload",
    chapter: "second-year",
    category: "Study",
    title: "The heavy year",
    caption:
      "Second year and the workload that comes with it — the stretch most students describe as the hardest of the degree.",
    featured: true,
  },

  // ── Third Year ───────────────────────────────────────────────────────────
  {
    slug: "ty-coffee",
    chapter: "third-year",
    category: "Downtime",
    title: "Fuelled accordingly",
    caption: "Third year ran largely on coffee, and made no secret of it.",
    featured: true,
  },
  {
    slug: "ty-coffee-late",
    chapter: "third-year",
    category: "Downtime",
    title: "Another long one",
    caption: "The other half of third year — the hours that don't appear on any transcript.",
  },

  // ── Fourth Year & Now ────────────────────────────────────────────────────
  {
    slug: "white-coat",
    chapter: "now",
    category: "Milestone",
    title: "White coat ceremony",
    caption:
      "Receiving the white coat at the Medical University of Łódź — the point where studying medicine becomes practising it.",
    featured: true,
  },
  {
    slug: "ceremony-hall",
    chapter: "now",
    category: "Milestone",
    title: "In the hall",
    caption:
      "Applause in the auditorium, white coats folded over the seat backs — the ceremony that marks the halfway point of a long degree.",
  },
  {
    slug: "clinical-group",
    chapter: "now",
    category: "Teaching",
    title: "OSCE 2026 — the team",
    caption:
      "The OSCE team at the Medical University of Łódź — the examiners, supervisors, and volunteers who ran the 2026 clinical skills workshop.",
    featured: true,
  },
  {
    slug: "crrt-teaching",
    chapter: "now",
    category: "Teaching",
    title: "Continuous renal replacement therapy",
    caption:
      "Teaching the trade-offs of CRRT in acute kidney injury — better haemodynamic stability set against cost, clotting, and clearance of the drugs you still need.",
  },
  {
    slug: "history-taking",
    chapter: "now",
    category: "Teaching",
    title: "History taking & clinical examination",
    caption:
      "Teaching the fundamentals — how a structured history and examination shape the differential before any test is ordered.",
  },
  {
    slug: "anatomy-session",
    chapter: "now",
    category: "Teaching",
    title: "Master Your Anatomy",
    caption:
      "Facilitating a peer anatomy session — skeleton, Netter's atlas, and a room of students reasoning through it together.",
  },
  {
    slug: "ambassador-banner",
    chapter: "now",
    category: "Ambassador",
    title: "Representing the university",
    caption:
      "The student ambassador side of the job — speaking for the Medical University of Łódź and the English Division to the people thinking of joining it.",
  },
  {
    slug: "formal-evening",
    chapter: "now",
    category: "Milestone",
    title: "A formal evening",
    caption:
      "One of the evenings that punctuate a long degree — worth marking with the people you shared it with.",
  },
  {
    slug: "library",
    chapter: "now",
    category: "Study",
    title: "In the library",
    caption:
      "The unglamorous half of medicine — long hours with the textbooks that make the clinical hours make sense.",
  },
  {
    slug: "pharmacology",
    chapter: "now",
    category: "Study",
    title: "Pharmacology",
    caption:
      "Working through Lippincott's Illustrated Reviews — the groundwork behind an interest in clinical pharmacology.",
  },
  {
    slug: "world-map",
    chapter: "now",
    category: "What's next",
    title: "Pointing west",
    caption:
      "Somewhere between Łódź and Rochester — the next step in a training path that keeps crossing borders.",
    featured: true,
  },

  // ── Meetings & Mentors ───────────────────────────────────────────────────
  {
    slug: "mircim",
    chapter: "meetings",
    category: "Mentorship",
    title: "Meeting a Mayo Clinic physician",
    caption:
      "A conversation with a Mayo Clinic physician after her session at MIRCIM 2026 — the shortest distance between where you are training and where you are headed.",
    featured: true,
  },
  {
    slug: "prabhu-mircim",
    chapter: "meetings",
    category: "Mentorship",
    title: "With Dr. Prabhu Mathiyalagan, PhD",
    caption:
      "At MIRCIM 2026 with Dr. Prabhu Mathiyalagan, PhD — researcher and founder, and one of the more useful conversations of the conference.",
    links: [
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Prabhu-Mathiyalagan",
      },
      { label: "Benthos", href: "https://www.mybenthos.com/" },
    ],
  },
  {
    slug: "ws-pathology-taran",
    chapter: "meetings",
    category: "Mentorship",
    title: "With Prof. Katarzyna Taran",
    caption:
      "With Prof. Katarzyna Taran, marking the launch of her book on integrated pathology — an honour to have helped organise her workshop.",
    featured: true,
  },

  // ── People Who Inspire ───────────────────────────────────────────────────
  {
    slug: "inspire-featured",
    chapter: "inspire",
    category: "Mentorship",
    title: "With Joanna Wieremiejewicz-Podkościelna",
    caption:
      "Guidance that reached well past the classroom — one of the people this journey wouldn't read the same without.",
    featured: true,
  },
  {
    slug: "inspire-joanna-1",
    chapter: "inspire",
    category: "Portrait",
    title: "At her desk",
    caption: "Mid-thought, in the middle of an ordinary working day.",
  },
  {
    slug: "inspire-joanna-2",
    chapter: "inspire",
    category: "Portrait",
    title: "A quiet afternoon",
    caption: "The same afternoon — the kind of quiet focus that made the mentorship work.",
  },

  // ── Workshops & Teaching ─────────────────────────────────────────────────
  {
    slug: "ws-anatomy-lodz-2025",
    chapter: "workshops",
    category: "Organiser",
    title: "Master Your Anatomy — 2025 edition",
    caption:
      "The anatomy workshop he organised at the Medical University of Łódź, 2025 edition — from planning and faculty liaison through to the room itself.",
    featured: true,
  },
  {
    slug: "ws-anatomy-lecture",
    chapter: "workshops",
    category: "Teaching",
    title: "Giving the anatomy lecture",
    caption: "At the front of the anatomy workshop — the part where you find out how well you actually know it.",
  },
  {
    slug: "ws-anatomy-bydgoszcz",
    chapter: "workshops",
    category: "Teaching",
    title: "Anatomy workshop, Bydgoszcz",
    caption:
      "Taking the anatomy workshop beyond Łódź, to the Medical University in Bydgoszcz.",
  },
  {
    slug: "ws-osce-planning",
    chapter: "workshops",
    category: "Organiser",
    title: "Building the OSCE workshop",
    caption:
      "The pre-planning stage of the OSCE workshop — stations, rotations, examiners, and timing, before a single student walks in.",
  },
  {
    slug: "ws-cpr",
    chapter: "workshops",
    category: "Clinical Skills",
    title: "CPR training",
    caption: "Compressions on the manikin — the skill you rehearse so it survives the adrenaline.",
  },
  {
    slug: "ws-premed-outreach",
    chapter: "workshops",
    category: "Outreach",
    title: "Talking to pre-med students",
    caption:
      "Speaking with pre-med students about what medical training actually asks of you, and why it's worth it.",
  },
  {
    slug: "ws-delegates",
    chapter: "workshops",
    category: "Workshop",
    title: "Workshop delegates",
    caption: "With fellow delegates at a workshop session.",
  },
  {
    slug: "ws-session",
    chapter: "workshops",
    category: "Workshop",
    title: "In session",
    caption: "Another workshop, another room of people learning something hands-on.",
  },
  {
    slug: "pcsk9-case",
    chapter: "workshops",
    category: "Research",
    title: "Presenting a cardiology case report",
    caption:
      "Presenting author on “Targeted PCSK9 Inhibitor Therapy in a Statin-Intolerant Patient with Elevated Lipoprotein(a) Following TAVI” — Biegański Hospital, Łódź.",
    featured: true,
  },
  {
    slug: "polytrauma-case",
    chapter: "workshops",
    category: "Research",
    title: "Polytrauma case report",
    caption:
      "Co-author on a polytrauma case following a motorcycle accident, with the Department of Arthroscopy, Minimally Invasive Surgery and Sports Traumatology.",
  },
  {
    slug: "poznan-conference",
    chapter: "workshops",
    category: "Conference",
    title: "Poznan University of Medical Sciences",
    caption:
      "At the AMSA International Students' Conference, hosted by Poznan University of Medical Sciences.",
  },
  {
    slug: "mircim-peers",
    chapter: "workshops",
    category: "Conference",
    title: "Delegates at MIRCIM",
    caption:
      "With fellow delegates — student-researchers from across the world comparing notes between sessions.",
  },
  {
    slug: "mircim-networking",
    chapter: "workshops",
    category: "Conference",
    title: "Between sessions",
    caption:
      "The other half of any conference — the conversations over lunch that turn a lecture hall into a network.",
  },

  // ── Campus & Clinical Skills ─────────────────────────────────────────────
  {
    slug: "campus-main",
    chapter: "campus",
    category: "Campus",
    title: "The main campus",
    caption: "Medical University of Łódź — the building this whole story runs through.",
    featured: true,
  },
  {
    slug: "campus-library",
    chapter: "campus",
    category: "Campus",
    title: "The university library",
    caption: "Where most of the degree actually happens.",
  },
  {
    slug: "campus-library-study",
    chapter: "campus",
    category: "Study",
    title: "A day in the stacks",
    caption: "Another long session between the shelves.",
  },
  {
    slug: "campus-lectures",
    chapter: "campus",
    category: "Campus",
    title: "Lectures in Łódź",
    caption: "The lecture hall — where the theory arrives before the wards make it real.",
  },
  {
    slug: "campus-study-session",
    chapter: "campus",
    category: "Study",
    title: "A normal study session",
    caption: "No occasion, no deadline photo — just the ordinary work that adds up.",
  },
  {
    slug: "campus-microbiology",
    chapter: "campus",
    category: "Laboratory",
    title: "Culturing in microbiology",
    caption: "Plating and culturing — learning to read what grows and what it means clinically.",
  },
  {
    slug: "campus-lab-test",
    chapter: "campus",
    category: "Laboratory",
    title: "In the lab",
    caption: "Bench work — the diagnostics behind the numbers that turn up on a ward round.",
  },
  {
    slug: "campus-suturing",
    chapter: "campus",
    category: "Clinical Skills",
    title: "Suturing practice",
    caption: "Learning the stitch — and quietly wondering whether surgery is the answer.",
    featured: true,
  },
  {
    slug: "campus-surgery",
    chapter: "campus",
    category: "Clinical Skills",
    title: "Drawn to surgery",
    caption: "The pull toward the operating theatre, still an open question.",
  },

  // ── People & Downtime ────────────────────────────────────────────────────
  {
    slug: "people-favourites",
    chapter: "people",
    category: "Friends",
    title: "Favourite people",
    caption: "The classmates who make the long days considerably shorter.",
    featured: true,
  },
  {
    slug: "people-study-friends",
    chapter: "people",
    category: "Friends",
    title: "Good company, still studying",
    caption: "Learning goes faster in company — the study group that doubles as the friendship group.",
  },
  {
    slug: "people-batchmates",
    chapter: "people",
    category: "Friends",
    title: "The batch",
    caption: "With the batch mates who started when he did.",
  },
  {
    slug: "people-staff",
    chapter: "people",
    category: "Faculty",
    title: "With the English Division staff",
    caption:
      "Alongside the staff of the English Division at the Medical University of Łódź.",
  },
  {
    slug: "people-park",
    chapter: "people",
    category: "Downtime",
    title: "The park",
    caption: "The reset button — a walk in the park to balance out everything else.",
  },

  // ── Others ───────────────────────────────────────────────────────────────
  {
    slug: "other-white-coat",
    chapter: "others",
    category: "Portrait",
    title: "Coat on, stethoscope on",
    caption: "The uniform that still doesn't quite feel ordinary.",
  },
  {
    slug: "other-medical-passion",
    chapter: "others",
    category: "Portrait",
    title: "Why medicine",
    caption: "The reason underneath all of it.",
  },
];

/**
 * Chapters with their photos attached, each carrying `flatIndex` — its position
 * in `journey`. The lightbox, its prev/next wrap, and the counter all address
 * photos by that flat index, so grouped views must hand it back unchanged.
 */
export const journeyGroups = journeyChapters.map((chapter) => ({
  ...chapter,
  items: journey.flatMap((item, flatIndex) =>
    item.chapter === chapter.id ? [{ ...item, flatIndex }] : [],
  ),
}));

if (process.env.NODE_ENV !== "production") {
  const grouped = journeyGroups.reduce((n, g) => n + g.items.length, 0);
  if (grouped !== journey.length) {
    const known = new Set(journeyChapters.map((c) => c.id));
    const orphans = journey.filter((i) => !known.has(i.chapter)).map((i) => i.slug);
    throw new Error(
      `journey: ${journey.length} photos but ${grouped} grouped. Unknown chapter on: ${orphans.join(", ")}`,
    );
  }
}

/** Indices into `journey` for the photos that appear in the rotating showcase. */
export const featuredIndices = journey.flatMap((item, i) => (item.featured ? [i] : []));

export const contact = {
  email: "kishorekumarmed01@gmail.com",
  whatsappNumber: "919840934375",
  linkedin: "https://www.linkedin.com/in/kishore-muthukumar-654925246/",
  instagram: "https://www.instagram.com/kishore_kk_kumar",
  orcid: "https://orcid.org/0000-0000-0000-0000", // PLACEHOLDER
  researchgate: "https://www.researchgate.net/profile/placeholder", // PLACEHOLDER
  cv: "/kishore-muthukumar-cv.pdf", // PLACEHOLDER — drop the PDF into /public
} as const;
