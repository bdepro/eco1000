// ================================================================
//  ECO 4400 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/eco4400/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block       — semester
//  2. INSTRUCTORS block  — office hours, contact info
//  3. DATES block        — all key dates
//  4. SCHEDULE block      — chapter/topic sequence if it changes
//  That is it. index.html pulls from this file automatically.
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester each term
// ================================================================
const COURSE = {
  code:          "ECO 4400",
  title:         "Applied Economics & Consulting",
  semester:      "Fall 2026",                        // UPDATE each semester
  format:        "in-person",
  credits:       4,
  baseUrl:       "https://bdepro.github.io/courses/eco4400",
  canvasBase:    "https://elon.instructure.com",
  canvasId:      "1402",                             // UPDATE each semester
  school:        "Love School of Business",
  dataIntensive: true,
  communityEngaged: true,
};

// ================================================================
//  INSTRUCTORS — two instructors teach this course
//  UPDATE: office hours and contact info each semester
// ================================================================
const INSTRUCTORS = [
  {
    name:   "Brooks Depro",
    nameShort: "Prof. Depro",
    role:   "Instructor",
    title:  "Associate Professor of Economics",
    email:  "bdepro@elon.edu",
    office: "KoBC 122",
    phone:  "919-357-2316",
    hours:  "Mon & Wed, 4:00–5:00 PM in KoBC 122 · Tue & Thu, 10:00 AM–12:00 PM on Zoom",
    zoomUrl: "https://elon.zoom.us/my/bdepro",
    zoomDisplay: "elon.zoom.us/my/bdepro",
  },
  {
    name:   "Devon Hawkins",
    nameShort: "Prof. Hawkins",
    role:   "Instructor",
    title:  "Assistant Teaching Professor of Economics",
    email:  "dhawkins5@elon.edu",
    office: "KoBC 120",
    phone:  "(336) 278-5977",
    hours:  "Mon & Wed, 4:00–5:00 PM · Fri, 2:00–3:00 PM",
    zoomUrl: null,     // UPDATE — TBD until Fall 2026 Zoom link is confirmed
    zoomDisplay: null,
  },
];

// ================================================================
//  TEXTBOOK — required text, UPDATE if edition changes
// ================================================================
const TEXTBOOK = {
  authors:   "Froeb, Luke M., Brian T. McCann, Michael R. Ward, and Mike Shor",
  title:     "Managerial Economics: A Problem-Solving Approach",
  edition:   "6th",
  publisher: "Cengage Learning",
  year:      2023,
  note:      "Available as an e-book only, linked through Canvas. No print copy is required.",
};

// ================================================================
//  DATES — key academic dates, UPDATE each semester
// ================================================================
const DATES = {
  classesBegin:      "August 26, 2026",   // UPDATE
  dropAddEnds:       "September 1, 2026", // UPDATE
  ronfDeadline:      "September 16, 2026",// UPDATE (Religious Observance Notification Form)
  fallBreak:         "After Week 6",
  withdrawDeadline:  "October 30, 2026",  // UPDATE
  thanksgiving:      "After Week 11",
  finalPresentation: "Week 12",
  classesEnd:        "December 4, 2026",  // UPDATE
};

// ================================================================
//  SCHEDULE — UPDATE chapter sequence if it changes
//  break: true marks no-class rows
//  chapterUrl / quizUrl: UPDATE with Cengage e-book chapter link and Canvas quiz
//  link once available each semester — null renders as "Coming Soon" on
//  the Applied Economics materials page (econ.html)
//  Wednesdays run as lab time for both the Community Engagement Consulting
//  Labs and Case Simulation tracks — not a fixed weekly split between them.
//  Weeks 9–11 have no chapter: with only 8 chapters finalized, those
//  Mondays fold into project/consulting milestone time instead of a
//  separate Applied Economics session.
// ================================================================
const SCHEDULE = [
  { num: 0,  dates: "Aug 26",         chapter: null,       topic: "Orientation",                                              monday: null,                                     wednesday: "Introduction" },
  { num: 1,  dates: "Aug 31-Sep 2",   chapter: "Ch. 19",   topic: "The Problem of Adverse Selection",                         monday: "Applied Economics", wednesday: "Consulting Labs — team formation", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4253", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10425", quizDue: "Sun, Aug 30 · 11:59 PM" },
  { num: 2,  dates: "Sep 7-9",        chapter: "Ch. 1",    topic: "Solving Problems with Economics",                          monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4252", quizUrl: "https://elon.instructure.com/courses/1402/assignments/7802", quizDue: "Sun, Sep 6 · 11:59 PM" },
  { num: 3,  dates: "Sep 14-16",      chapter: "Ch. 21",   topic: "Getting Employees to Work in the Firm's Best Interests",   monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/10408", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10427", quizDue: "Sun, Sep 13 · 11:59 PM" },
  { num: 4,  dates: "Sep 21-23",      chapter: "Ch. 3",    topic: "Benefits, Costs, and Decisions",                           monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4258", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10423", quizDue: "Sun, Sep 20 · 11:59 PM" },
  { num: 5,  dates: "Sep 28-30",      chapter: "Ch. 22",   topic: "Getting Divisions to Work in the Firm's Best Interests",   monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4254", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10428", quizDue: "Sun, Sep 27 · 11:59 PM" },
  { num: 6,  dates: "Oct 5-7",        chapter: "Ch. 15",   topic: "Strategic Games",                                          monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4256", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10424", quizDue: "Sun, Oct 4 · 11:59 PM" },
  { break: true, dates: "Oct 14-18",  label: "Fall Break" },
  { num: 7,  dates: "Oct 19-21",      chapter: "Ch. 23",   topic: "Managing Vertical Relationships",                          monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4257", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10429", quizDue: "Sun, Oct 18 · 11:59 PM" },
  { num: 8,  dates: "Oct 26-28",      chapter: "Ch. 20",   topic: "The Problem of Moral Hazard",                              monday: "Applied Economics", wednesday: "Consulting Labs", chapterUrl: "https://elon.instructure.com/courses/1402/assignments/4255", quizUrl: "https://elon.instructure.com/courses/1402/assignments/10426", quizDue: "Sun, Oct 25 · 11:59 PM" },
  { num: 9,  dates: "Nov 2-4",        chapter: null,       topic: "Project & Case Milestones",                                monday: "Project & consulting milestone work",   wednesday: "Consulting Labs" },
  { num: 10, dates: "Nov 9-11",       chapter: null,       topic: "Project & Case Milestones",                                monday: "Project & consulting milestone work",   wednesday: "Consulting Labs" },
  { num: 11, dates: "Nov 16-18",      chapter: null,       topic: "Project & Case Milestones",                                monday: "Project & consulting milestone work",   wednesday: "Consulting Labs" },
  { break: true, dates: "Nov 23-27",  label: "Thanksgiving Week — No Class" },
  { num: 12, dates: "Nov 30",         chapter: null,       topic: "Final Presentations",                                      monday: "Live client presentation — Sustainable Alamance", wednesday: null },
];

// ================================================================
//  GRADING — weights must sum to 100
// ================================================================
const GRADING = {
  components: [
    { id: "labs",     label: "Community Engagement Consulting", weight: 35, dataIntensive: true  },
    { id: "research", label: "Case Simulation", weight: 35, dataIntensive: true  },
    { id: "econ",     label: "Applied Economics for the BSBA",   weight: 30, dataIntensive: false },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
const FEATURES = {
  syllabus:    true,
  labs:        true,
  research:    true,
  econ:        true,
  support:     true,
  aiPolicy:    true,
};

// ================================================================
//  PAGES — stable URLs for all section pages
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  canvasHome:  `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  labs:        `${COURSE.canvasBase}/courses/${COURSE.canvasId}/modules`,
  research:    `${COURSE.canvasBase}/courses/${COURSE.canvasId}/modules`,
  econ:        `${COURSE.baseUrl}/econ.html`,
  support:     `https://bdepro.github.io/courses/shared/support.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
  aiPolicy:    `https://bdepro.github.io/courses/shared/ai-policy.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:      COURSE,
  instructors: INSTRUCTORS,
  dates:       DATES,
  schedule:    SCHEDULE,
  grading:     GRADING,
  features:    FEATURES,
  pages:       PAGES,
};
