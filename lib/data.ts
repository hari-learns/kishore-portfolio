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
    department: "Nephrology",
    location: "Rochester, Minnesota, USA",
    duration: "One-month observership",
    summary:
      "A clinical observership in nephrology at one of the world's leading academic medical centres, embedded in a research-driven care environment.",
    takeaways: [
      {
        title: "Multidisciplinary care",
        detail:
          "Observed how nephrologists, transplant teams, pharmacists, and allied specialists converge on a single patient plan.",
      },
      {
        title: "Academic medicine",
        detail:
          "Experienced the teaching-hospital rhythm — rounds, case conferences, and continuous evidence appraisal.",
      },
      {
        title: "Clinical decision making",
        detail:
          "Followed the reasoning behind complex renal cases, from differential to management under genuine uncertainty.",
      },
      {
        title: "Research-integrated practice",
        detail:
          "Saw translational research feeding directly into protocol and bedside decisions.",
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

export const ongoingResearch = [
  {
    title: "Cardio-Oncology & Onco-Nephrology",
    field: "Cross-disciplinary review",
    description:
      "Investigating the cardiac and renal consequences of modern cancer therapy, and how surveillance and early intervention can preserve organ function without compromising oncologic outcomes.",
  },
  {
    title: "Pancreatic Ductal Adenocarcinoma",
    field: "Narrative review",
    description:
      "Synthesising the current therapeutic landscape of PDAC — why outcomes have moved so little, and where emerging strategies show genuine promise.",
  },
  {
    title: "Glioblastoma Therapeutics",
    field: "Translational oncology",
    description:
      "Reviewing treatment approaches for glioblastoma, with focus on the blood-brain barrier, tumour heterogeneity, and next-generation modalities.",
  },
  {
    title: "Pharmacogenomics & Precision Medicine",
    field: "Clinical pharmacology",
    description:
      "Studying how inherited variation in drug-metabolising enzymes and transporters can be translated into safer, individually calibrated prescribing.",
  },
] as const;

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
] as const;

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

// Photographs from training, research, teaching, and conferences.
// `src` is the full-size image; a matching thumbnail lives in /journey/thumb/.
export const journey = [
  {
    slug: "white-coat",
    category: "Milestone",
    title: "White coat ceremony",
    caption:
      "Receiving the white coat at the Medical University of Łódź — the point where studying medicine becomes practising it.",
    orientation: "landscape",
  },
  {
    slug: "pcsk9-case",
    category: "Research",
    title: "Presenting a cardiology case report",
    caption:
      "Presenting author on “Targeted PCSK9 Inhibitor Therapy in a Statin-Intolerant Patient with Elevated Lipoprotein(a) Following TAVI” — Biegański Hospital, Łódź.",
    orientation: "landscape",
  },
  {
    slug: "polytrauma-case",
    category: "Research",
    title: "Polytrauma case report",
    caption:
      "Co-author on a polytrauma case following a motorcycle accident, with the Department of Arthroscopy, Minimally Invasive Surgery and Sports Traumatology.",
    orientation: "portrait",
  },
  {
    slug: "mircim",
    category: "Conference",
    title: "MIRCIM 2026",
    caption:
      "At the McMaster International Review Course in Internal Medicine — evidence-based medicine taught by the people writing the evidence.",
    orientation: "portrait",
  },
  {
    slug: "anatomy-session",
    category: "Teaching",
    title: "Master Your Anatomy",
    caption:
      "Facilitating a peer anatomy session — skeleton, Netter's atlas, and a room of students reasoning through it together.",
    orientation: "landscape",
  },
  {
    slug: "history-taking",
    category: "Teaching",
    title: "History taking & clinical examination",
    caption:
      "Teaching the fundamentals — how a structured history and examination shape the differential before any test is ordered.",
    orientation: "portrait",
  },
  {
    slug: "library",
    category: "Study",
    title: "In the library",
    caption:
      "The unglamorous half of medicine — long hours with the textbooks that make the clinical hours make sense.",
    orientation: "portrait",
  },
  {
    slug: "pharmacology",
    category: "Study",
    title: "Pharmacology",
    caption:
      "Working through Lippincott's Illustrated Reviews — the groundwork behind an interest in clinical pharmacology.",
    orientation: "landscape",
  },
  {
    slug: "polish-academy",
    category: "Language",
    title: "Medical Polish",
    caption:
      "Studying medical Polish with Akademia Polskiego — because the patient in front of you deserves to be understood in their own language.",
    orientation: "portrait",
  },
] as const;

export const contact = {
  email: "kishore@example.com", // PLACEHOLDER
  whatsappNumber: "10000000000", // PLACEHOLDER — digits only, country code first
  linkedin: "https://www.linkedin.com/in/kishore-muthukumar-654925246/",
  orcid: "https://orcid.org/0000-0000-0000-0000", // PLACEHOLDER
  researchgate: "https://www.researchgate.net/profile/placeholder", // PLACEHOLDER
  cv: "/kishore-muthukumar-cv.pdf", // PLACEHOLDER — drop the PDF into /public
} as const;
