// ================================================================
//  ECO 1000 — COURSE CONFIGURATION
//  Generated from: shared/config-template.js
//  Hosted at: bdepro.github.io/courses/eco1000/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block         — semester, canvasId
//  2. INSTRUCTOR block     — officeHours
//  3. SCHEDULE block       — session dates, sessionStarts, finalExam,
//                            finalExamPeriod section and schedule times
//  4. CANVAS block         — courseId, all assignment IDs (aid),
//                            viva sign-up URL, Indicator Analysis URLs
//  5. TEXTBOOK block       — ebookUrl once Canvas/Cengage is registered
//  6. QUESTIONS block      — 12 application bundle questions each semester
//  That is it. All HTML files pull from this file automatically.
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester and canvasId each term
// ================================================================
const COURSE = {
  code:        "ECO 1000",
  title:       "Principles of Economics",
  discipline:  "economic",
  semester:    "Fall 2026",                        // UPDATE each semester
  format:      "in-person",
  credits:     4,
  baseUrl:     "https://bdepro.github.io/courses/eco1000",
  school:      "Love School of Business",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "1397",                             // UPDATE each semester
};

// ================================================================
//  INSTRUCTOR
//  UPDATE: officeHours each semester
// ================================================================
const INSTRUCTOR = {
  name:        "Brooks Depro",
  nameShort:   "Prof. Depro",
  email:       "bdepro@elon.edu",
  phone:       "919-357-2316",
  office:      "KoBC 122",
  officeHours: "Mon & Wed, 4:00–5:00 p.m. in KoBC 122 · Tue & Thu, 10:00 a.m.–12:00 p.m. on Zoom (by appointment)", // UPDATE each semester
  zoomUrl:     "https://elon.zoom.us/my/bdepro",
  zoomDisplay: "elon.zoom.us/my/bdepro",
};

// ================================================================
//  SCHEDULE
//  UPDATE: all dates and sessions each semester
//
//  Session structure:
//    num         — session number
//    dates       — display date range string
//    label       — short label for display
//    chapter     — chapter(s) covered (null for check-in/break/viva weeks)
//    checkIn     — check-in number if one occurs this session (null otherwise)
//    checkInDay  — day check-in falls on (for display)
//    mmeFF       — true if Friday is MME launch + FF progress day
//    vote        — true if question bundle vote occurs this session
//    viva        — true if viva week
//    break       — true suppresses auto-highlighting
//    breakType   — 'fall' or 'thanksgiving' — drives card rendering
//                  without relying on label string matching
//    note        — optional internal note (not student-facing)
//
//  Due date logic (locked — do not change without updating checklist pages
//  and puzzles.html):
//    Puzzles for session N are due the WEDNESDAY OF SESSION N+1 at 11:59 p.m.
//    (sessionStart + 9 days). If that date falls inside a break session,
//    due shifts to FRIDAY OF SESSION N (sessionStart + 4 days). See
//    puzzleDueDate() at the bottom of this file.
//    MME articles are introduced Friday of check-in week and due Wednesday
//    11:59 p.m. several weeks later — see CANVAS.mme[].due for each article.
//    Mind & Voice written narrative is assigned à la carte in Eli Review —
//    no fixed due date. See CANVAS.eli comment below.
//    CI 4 always counts. Replaces lowest of CI 1-3 if higher.
// ================================================================
const SCHEDULE = {

  // Key academic dates — UPDATE each semester
  dates: {
    classesBegin:      "August 25, 2026",          // UPDATE
    dropAddEnds:       "September 1, 2026",         // UPDATE
    withdrawDeadline:  "October 30, 2026",          // UPDATE
    classesEnd:        "December 4, 2026",          // UPDATE
    readingDay:        "December 5, 2026",          // UPDATE
    examsBegin:        "December 7, 2026",          // UPDATE
    examsEnd:          "December 11, 2026",         // UPDATE
  },

  // Sessions — UPDATE dates and notes each semester
  // Chapter assignments and structure are locked for fall
  sessions: [
    {
      num: 0, dates: "Aug 26-28", label: "Introduction",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Wed/Fri only — course introduction",
    },
    {
      num: 1, dates: "Aug 31-Sep 4", label: "Week 1",
      chapter: "ch1", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "8 guideposts introduced",
    },
    {
      num: 2, dates: "Sep 7-11", label: "Week 2",
      chapter: "ch3", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: null,
    },
    {
      num: 3, dates: "Sep 14-18", label: "Week 3",
      chapter: null, checkIn: 1, checkInDay: "Wed Sep 16",
      mmeFF: true, vote: false, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. 1 & 3 / Wed: Check-In #1 / Fri: MME launch + FF progress",
    },
    {
      num: 4, dates: "Sep 21-25", label: "Week 4",
      chapter: "ch4", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: null,
    },
    {
      num: 5, dates: "Sep 28-Oct 2", label: "Week 5",
      chapter: "ch7", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Wheel of Wealth links Ch. 3 & 4 to macro",
    },
    {
      num: 6, dates: "Oct 5-9", label: "Week 6",
      chapter: null, checkIn: 2, checkInDay: "Wed Oct 7",
      mmeFF: true, vote: false, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. 4 & 7 / Wed: Check-In #2 / Fri: MME launch + FF progress",
    },
    {
      num: 7, dates: "Oct 12-13", label: "Week 7",
      chapter: "ch8", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Mon & Tue only — Fall Break begins Wed",
    },
    {
      num: 8, dates: "Oct 14-18", label: "Fall Break",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false,
      break: true, breakType: "fall",              // CHANGED: breakType added
      note: "No class",
    },
    {
      num: 9, dates: "Oct 19-23", label: "Week 9",
      chapter: "ch8_ch16", checkIn: null, mmeFF: true, vote: false, viva: false,
      break: false, breakType: null,
      note: "Mon: Ch. 8 cont. / Wed-Fri: Ch. 16",
    },
    {
      num: 10, dates: "Oct 26-30", label: "Week 10",
      chapter: "ch18", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: null,
    },
    {
      num: 11, dates: "Nov 2-6", label: "Week 11",
      chapter: null, checkIn: 3, checkInDay: "Wed Nov 4",
      mmeFF: true, vote: true, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. 8, 16, 18 / Wed: Check-In #3 + Canvas poll opens / Fri: MME launch + FF progress + question walk-through + top 6 announced",
    },
    {
      num: 12, dates: "Nov 9-13", label: "Week 12",
      chapter: "application", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Application block: Questions 1-3 (student-selected from top 6)",
    },
    {
      num: 13, dates: "Nov 16-20", label: "Week 13",
      chapter: "application", checkIn: null, mmeFF: false, vote: false, viva: false,
      break: false, breakType: null,
      note: "Application block: Questions 4-6 / Thanksgiving begins Fri eve",
    },
    {
      num: 14, dates: "Nov 23-27", label: "Thanksgiving Break",
      chapter: null, checkIn: null, mmeFF: false, vote: false, viva: false,
      break: true, breakType: "thanksgiving",      // CHANGED: breakType added
      note: "No class",
    },
    {
      num: 15, dates: "Nov 30-Dec 4", label: "Viva Week",
      chapter: null, checkIn: 4, checkInDay: "Fri Dec 4",
      mmeFF: false, vote: false, viva: true, break: false, breakType: null,
      note: "Mon & Wed: Viva slots / Fri: Check-In #4 (last day of class)",
    },
  ],

  // Session start dates — drive auto-highlighting in checklist.html
  // UPDATE each semester. Format: new Date(year, month (0=Jan), day)
  // Last entry = day after classes end
  sessionStarts: [
    new Date(2026,  7, 26),  // S0:  Aug 26
    new Date(2026,  7, 31),  // S1:  Aug 31
    new Date(2026,  8,  7),  // S2:  Sep 7
    new Date(2026,  8, 14),  // S3:  Sep 14  (CI #1)
    new Date(2026,  8, 21),  // S4:  Sep 21
    new Date(2026,  8, 28),  // S5:  Sep 28
    new Date(2026,  9,  5),  // S6:  Oct 5   (CI #2)
    new Date(2026,  9, 12),  // S7:  Oct 12
    new Date(2026,  9, 14),  // S8:  Oct 14  (Fall Break)
    new Date(2026,  9, 19),  // S9:  Oct 19
    new Date(2026,  9, 26),  // S10: Oct 26
    new Date(2026, 10,  2),  // S11: Nov 2   (CI #3 + vote)
    new Date(2026, 10,  9),  // S12: Nov 9   (Application block)
    new Date(2026, 10, 16),  // S13: Nov 16  (Application block)
    new Date(2026, 10, 23),  // S14: Nov 23  (Thanksgiving Break)
    new Date(2026, 10, 30),  // S15: Nov 30  (Viva week)
    new Date(2026, 11,  5),  // Final zone: Dec 5
  ],

  // Break sessions by index — never highlighted
  breakSessions: [8, 14],

  // Final exam period — UPDATE each semester when posted (one section only)
  // CI 4 may be taken on the last day of class (Fri Dec 4) OR during the
  // final exam block below — student's choice, no sign-up or arrangement
  // needed, just show up to whichever one they plan to take.
  // ── CHANGED: Elon's official Fall 2026 final exam schedule assigns this
  // class's meeting time a 3-hour institutional block (Fri Dec 11,
  // 8:30–11:30 a.m.); Prof. Depro splits the first 70 minutes of it into
  // Segment 1 and the next 70 into Segment 2, with the last 30 min unused.
  // Final exam period covers three student populations:
  //   Population 1 — viva done in viva week, CI 4 done on Fri Dec 4.
  //                  Uses Segment 2 for their remaining (second) Indicator
  //                  Analysis — their viva slot cost them one of the two
  //                  in-class IAs during viva week.
  //   Population 2 — viva done in viva week, CI 4 deferred.
  //                  Takes CI 4 during Segment 1 AND their remaining
  //                  Indicator Analysis during Segment 2 — same reason as
  //                  Population 1; deferring CI 4 doesn't change that they
  //                  still owe a second IA.
  //   Population 3 — viva deferred. Takes CI 4 during Segment 1 and viva
  //                  during Segment 2. Already completed both in-class IAs
  //                  during viva week (their viva never conflicted with
  //                  either day), so no Indicator Analysis is owed here.
  // Viva sign-up and Indicator Analysis links live in CANVAS block below.
  finalExamPeriod: {
    date:           "Fri Dec 11, 2026",                       // UPDATE each semester
    time:           "8:30–11:30 a.m.",                        // UPDATE each semester — official Elon exam block
    dates:          "Fri Dec 11, 2026, 8:30–11:30 a.m.",       // UPDATE each semester — display string
    segment1: {
      label: "Segment 1 — Check-In 4",
      time:  "8:30–9:40 a.m.",
      dates: "Fri Dec 11, 2026, 8:30–9:40 a.m.",
    },
    segment2: {
      label: "Segment 2 — Viva / Indicator Analysis",
      time:  "9:50–11:30 a.m.",
      dates: "Fri Dec 11, 2026, 9:50–11:30 a.m.",
    },
    // Viva week sign-up URL lives in CANVAS.viva.vivaWeekSignupUrl (single source).
    // Equity note — displayed near the viva sign-up pill
    signupEquityNote: "No computer access? Contact Prof. Depro and he will assign your slot.",
  },
};

// ================================================================
//  CHAPTERS
//  Two categories: core (tested on check-ins) and application (reference)
//  Standing threads on every check-in: supply & demand, 8 guideposts
// ================================================================
const CHAPTERS = {

  // Core chapters — tested on Check-Ins #1 through #3
  // moduleItemId: Canvas Modules item ID for the ungraded e-book chapter
  // link (published module item, External Tool, no line item/points —
  // Assignment-based LTI links get zeroed in the gradebook, so chapter
  // reading links live in a module instead). UPDATE each semester once
  // that term's E-Book module is rebuilt.
  // notesAid: Canvas assignment ID for the 0-points-possible guided-notes
  // submission (2 pts on time / 1.6 pts late, graded manually, same
  // Assignment Group as Puzzles, outside drop-lowest — see project memory
  // "ECO 1000 Guided Notes Bonus Policy"). UPDATE once that term's 7
  // submission assignments are built in Canvas.
  // Full URLs are auto-built from COURSE.canvasId + moduleItemId/notesAid at the bottom of this file.
  core: [
    { key: "ch1",  num: "Ch. 1",  title: "The Economic Approach",                              session: 1,  moduleItemId: "317510", notesAid: "9153", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch01-guided-notes.html` },
    { key: "ch3",  num: "Ch. 3",  title: "Demand, Supply, and the Market Process",             session: 2,  moduleItemId: "317511", notesAid: "9154", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch03-guided-notes.html` },
    { key: "ch4",  num: "Ch. 4",  title: "Demand and Supply: Applications and Extensions",     session: 4,  moduleItemId: "317512", notesAid: "9155", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch04-guided-notes.html` },
    { key: "ch7",  num: "Ch. 7",  title: "Taking the Nation's Economic Pulse",                 session: 5,  moduleItemId: "317515", notesAid: "9156", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch07-guided-notes.html` },
    { key: "ch8",  num: "Ch. 8",  title: "Economic Fluctuations, Unemployment, and Inflation", session: 7,  moduleItemId: "317516", notesAid: "9157", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch08-guided-notes.html` },
    { key: "ch16", num: "Ch. 16", title: "Creating an Environment for Growth and Prosperity",  session: 9,  moduleItemId: "317517", notesAid: "9158", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch16-guided-notes.html` },
    { key: "ch18", num: "Ch. 18", title: "Gaining from International Trade",                   session: 10, moduleItemId: "317518", notesAid: "9159", guidedNotesUrl: `${COURSE.baseUrl}/guided-notes/ch18-guided-notes.html` },
  ],

  // Application reference chapters — student-selected questions in S12-S13
  // Not directly tested; students use them as analytical lenses
  application: [
    { key: "ch5",  num: "Ch. 5",  title: "Difficult Cases for the Market, and the Role of Government", moduleItemId: "317513" },
    { key: "ch6",  num: "Ch. 6",  title: "The Economics of Political Action",                           moduleItemId: "317514" },
    { key: "ch23", num: "Ch. 23", title: "Price-Searcher Markets with Low Entry Barriers",              moduleItemId: "317519" },
    { key: "ch26", num: "Ch. 26", title: "Earnings, Productivity, and the Job Market",                  moduleItemId: "317520" },
    { key: "ch28", num: "Ch. 28", title: "Income Inequality and Poverty",                               moduleItemId: "317521" },
  ],

  // Standing threads — appear on every check-in regardless of session content
  threads: [
    { key: "sd",         title: "Supply and demand analysis" },
    { key: "guideposts", title: "The 8 guideposts of economic thinking (Ch. 1)" },
  ],

  // Check-in coverage map
  checkIns: {
    1: { chapters: ["ch1", "ch3"],              label: "Ch. 1 & 3" },
    2: { chapters: ["ch4", "ch7"],              label: "Ch. 4 & 7" },
    3: { chapters: ["ch8", "ch16", "ch18"],     label: "Ch. 8, 16 & 18" },
    4: { chapters: ["ch18", "application"],     label: "Ch. 18 + Application block / S&D / Guideposts (comprehensive)" },
  },
};

// ================================================================
//  GRADING
//  Locked weights — persona-reviewed
//  Due date policy (locked):
//    All work due Wednesday at 11:59 p.m. of each session.
//    CI 4 always counts. Replaces lowest of CI 1-3 if higher.
//  UPDATE only if course structure changes significantly.
// ================================================================
const GRADING = {
  dueTime: "11:59 p.m.",                           // universal due time — Wednesday of each session
  components: [
    { id: "checkins", label: "Check-Ins",              weight: 50,
      note: "4 check-ins. CI 4 always counts. Replaces lowest of CI 1-3 if higher. Each CI includes S&D and 8 guideposts." },
    { id: "friday",   label: "Mind & Voice",           weight: 25,
      note: "Mind: written narrative, assigned à la carte in Eli Review — no fixed due date yet — + 3 Indicator Analyses. Voice: viva conversation during viva week.",
      // Point split within the 25 — 2:1 narrative:viva. The narrative
      // represents a full semester of drafting across 3 cycles; the viva
      // is a single ~10-minute defense, weighted enough (28% of the 25)
      // that it can't be treated as a formality. Indicator Analyses stay a
      // fixed 2 pts each (see CANVAS.indicatorAnalysis) — completion
      // credit, not skill-graded, so it's the smallest share.
      breakdown: [
        { id: "narrative", label: "Written Narrative (Mind)", points: 14 },
        { id: "viva",       label: "Viva Conversation (Voice)", points: 7 },
        { id: "indicatorAnalysis", label: "Indicator Analyses (2 of 3, 2 pts each)", points: 4 },
      ] },
    { id: "puzzles",  label: "Economic Puzzles",       weight: 15,
      note: "One per content session. Lowest score dropped. Late within one week at 80%. Due Wednesday 11:59 p.m." },
    { id: "mme",      label: "Monday Morning Economist", weight: 10,
      note: "4 articles per semester, one per check-in block. Introduced Friday of check-in week. Due Wednesday at 11:59 p.m." },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
const FEATURES = {
  syllabus:    true,
  textbook:    false,  // replaced by chapters card (per-chapter LTI links)
  chapters:    false,  // demoted off home grid — reachable from checklist.html "Look Ahead"; content duplicates weekly checklist items
  checkins:    false,  // demoted off home grid — reachable from checklist.html "Look Ahead"; content duplicates weekly checklist items
  puzzles:     false,  // demoted off home grid — reachable from checklist.html "Look Ahead"; content duplicates weekly checklist items
  badges:      false,  // replaced by check-ins in fall
  mme:         true,
  friday:      true,
  support:        true,
  aiPolicy:       true,
  aiAssignments:  true,
  checklist:   true,
  officeHours: true,
  safetyNet:   false,  // demoted off home grid — reachable from checklist.html "Look Ahead"
};

// ================================================================
//  TEXTBOOK — e-book only, 18th edition
//  UPDATE: ebookUrl once Canvas/Cengage course is registered
//  How to get the URL:
//    1. Register course in Cengage and link to Canvas via LTI
//    2. In Canvas, create an External Tool activity for the e-book
//    3. Copy the Canvas activity URL and paste below
// ================================================================
const TEXTBOOK = {
  publisher:  "Cengage",
  platform:   "E-Book",
  edition:    "18th",
  title:      "Economics: Private and Public Choice",
  authors:    "Gwartney, Stroup, Sobel, and Macpherson",
  ebookUrl:   "",   // UPDATE: paste Canvas LTI URL once registered
};

// ================================================================
//  QUESTIONS — Application Block Bundle
//  12 questions presented to students in S11.
//  Students vote; top 6 become the S12-S13 agenda.
//  Vote: Canvas poll opens Wed Nov 4 after CI #3.
//        Walk-through and close: Fri Nov 6 in class.
//        Top 6 announced: Fri Nov 6 end of class.
//  UPDATE: questions each semester based on current events and content
//
//  Selection rule (locked — apply by hand when tallying the Canvas poll):
//  each of the 5 application chapters is guaranteed its higher-voted
//  question before the remaining slot(s) go to whichever question is
//  next-highest overall (including the cross-chapter questions). With
//  bundleSize 12 / selectedSize 6 across 5 chapters + 2 cross questions,
//  that's 5 guaranteed slots + 1 open slot. Prevents a chapter from
//  losing the vote outright and getting zero classroom coverage.
// ================================================================
const QUESTIONS = {
  voteProcess: {
    pollOpens:    "Wednesday Nov 4, after Check-In #3",
    walkThrough:  "Friday Nov 6, in class, opening activity",
    pollCloses:   "Friday Nov 6, end of class",
    announced:    "Friday Nov 6, end of class",
    bundleSize:   12,
    selectedSize:  6,
    selectionRule: "One question per chapter (the chapter's higher vote count) is guaranteed to advance; the remaining slot goes to the next-highest vote count overall.",
  },

  // UPDATE: all 12 questions each semester
  // chapter: which application chapter(s) this question draws on
  bundle: [
    // Ch. 5 — Difficult Cases for the Market, Role of Government
    { id: 1,  chapter: "ch5",   question: "" },  // UPDATE
    { id: 2,  chapter: "ch5",   question: "" },  // UPDATE

    // Ch. 6 — Economics of Political Action
    { id: 3,  chapter: "ch6",   question: "" },  // UPDATE
    { id: 4,  chapter: "ch6",   question: "" },  // UPDATE

    // Ch. 23 — Price-Searcher Markets
    { id: 5,  chapter: "ch23",  question: "" },  // UPDATE
    { id: 6,  chapter: "ch23",  question: "" },  // UPDATE

    // Ch. 26 — Earnings, Labor Markets
    { id: 7,  chapter: "ch26",  question: "" },  // UPDATE
    { id: 8,  chapter: "ch26",  question: "" },  // UPDATE

    // Ch. 28 — Income Inequality and Poverty
    { id: 9,  chapter: "ch28",  question: "" },  // UPDATE
    { id: 10, chapter: "ch28",  question: "" },  // UPDATE

    // Cross-chapter — draws on multiple application chapters
    { id: 11, chapter: "cross", question: "" },  // UPDATE
    { id: 12, chapter: "cross", question: "" },  // UPDATE
  ],

  // Populated after vote — top 6 selected questions
  // UPDATE: after S11 Friday vote each semester
  selected: [], // e.g. [1, 4, 6, 8, 9, 11]
};

// ================================================================
//  PAGES
//  Stable GitHub Pages URLs — update only if files move or rename
// ================================================================
const PAGES = {
  home:        `${COURSE.baseUrl}/index.html`,
  canvasHome:  `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,
  checklist:   `${COURSE.baseUrl}/checklist.html`,
  officeHours: `${COURSE.baseUrl}/office-hours.html`,
  syllabus:    `${COURSE.baseUrl}/syllabus.html`,
  checkins:    `${COURSE.baseUrl}/checkins.html`,
  puzzles:     `${COURSE.baseUrl}/puzzles.html`,
  mme:         `${COURSE.baseUrl}/mme.html`,
  friday:      `${COURSE.baseUrl}/mind-voice.html`,
  fridayLabel: "Mind & Voice",
  chapters:    `${COURSE.baseUrl}/chapters.html`,
  safetyNet:   `${COURSE.baseUrl}/safety-net.html`,
  support:        `https://bdepro.github.io/courses/shared/support.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
  aiPolicy:       `https://bdepro.github.io/courses/shared/ai-policy.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
  aiAssignments:  `https://bdepro.github.io/courses/shared/eco1000-ai-assignments.html`,
};

// ================================================================
//  CANVAS ASSIGNMENTS
//  UPDATE: all URLs each semester after Canvas course is set up
//
//  Canvas Page naming convention for session materials:
//    s[num]-mon  — Monday skeleton (e.g. s1-mon, s3-mon)
//    s[num]-wed  — Wednesday print handout (e.g. s1-wed)
//    s[num]-fri  — Friday skeleton (e.g. s1-fri)
//    s[num]-review — Check-in week Monday review guide
//    (Viva week Mon/Wed material is now the Indicator Analysis — see
//    CANVAS.indicatorAnalysis below; it's a site page, not a Canvas page slug)
//
//  Canvas Page URLs follow the pattern:
//    https://elon.instructure.com/courses/COURSEID/pages/PAGE-SLUG
//  The schedule page builds these URLs from COURSE.canvasId + the slug.
//
//  How to get assignment IDs (aid):
//    1. Build your Canvas assignments
//    2. Open each one; the browser URL ends in /assignments/NNNN
//    3. Copy just the NNNN and paste as the aid field
//  Full URLs are auto-built from COURSE.canvasId + aid at the bottom of this file.
// ================================================================
const CANVAS = {
  courseUrl: `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,

  // ── CHANGED: added pageBase helper for Canvas Pages ──────────
  // Used to build Canvas Page URLs from slugs
  pageBase: `${COURSE.canvasBase}/courses/${COURSE.canvasId}/pages`,

  // Economic Puzzles — one per content session, UPDATE each semester
  // aid: Canvas assignment ID; full URL is auto-built at the bottom of this file
  puzzles: [
    { session: 1,  title: "Puzzle: The Economic Approach",                         aid: "2459" },
    { session: 2,  title: "Puzzle: Demand, Supply, and the Market Process",        aid: "2460" },
    { session: 4,  title: "Puzzle: Demand and Supply Applications",                aid: "2461" },
    { session: 5,  title: "Puzzle: Taking the Nation's Economic Pulse",            aid: "2462" },
    { session: 7,  title: "Puzzle: Economic Fluctuations and Unemployment",        aid: "2463" },
    { session: 9,  title: "Puzzle: Creating an Environment for Growth",            aid: "2464" },
    { session: 10, title: "Puzzle: Gaining from International Trade",              aid: "2465" },
    { session: 12, title: "Puzzle: Application Block Week 1",                      aid: "2466" },
    { session: 13, title: "Puzzle: Application Block Week 2",                      aid: "2467" },
  ],

  // MME introduced Friday of check-in week.
  // Due Wednesday at 11:59 p.m. of the check-in week.
  // aid: Canvas assignment ID; full URL is auto-built at the bottom of this file
  mme: [
    { id: 1, session: 3,  dueSession: 6,  introduced: "Fri Sep 18", due: "Wed Oct 7, 11:59 p.m.",   title: "MME 1: When People Cut Back on Instagram, Where Do They Go",  aid: "2591" },
    { id: 2, session: 6,  dueSession: 11, introduced: "Fri Oct 9",  due: "Wed Nov 4, 11:59 p.m.",   title: "MME 2: The Real Price of Being Home Alone",                     aid: "2592" },
    { id: 3, session: 9,  dueSession: 13, introduced: "Fri Oct 23", due: "Wed Nov 18, 11:59 p.m.",  title: "MME 3: Tariffs Are Costly Options",                             aid: "2593" },
    { id: 4, session: 11, dueSession: 15, introduced: "Fri Nov 6",  due: "Wed Dec 2, 11:59 p.m.",   title: "MME 4: The Economics of the No Tax on Tips Policy",             aid: "2857" },
  ],

  // FF1: written narrative — à la carte, no fixed due date yet; see
  //      CANVAS.eli comment above. url is the real Canvas assignment, kept
  //      for reference even though no button links to it right now.
  // FF2: viva conversation — scheduled during viva week via Canvas Scheduler
  friday: [
    { id: 1, title: "Mind: The Economic Narrative",
      due: null, url: "https://elon.instructure.com/courses/1397/assignments/2455" },
    { id: 2, title: "Voice: The Narrative Viva",
      due: "Viva week Nov 30-Dec 4 (by appointment)", url: "https://elon.instructure.com/calendar#view_name=month&view_start=2026-11-30" },
  ],

  // Check-Ins — UPDATE each semester
  checkIns: [
    { id: 1, title: "Check-In #1", date: "Wed Sep 16",
      covers: "Ch. 1 & 3 / S&D / Guideposts", url: "" },           // UPDATE
    { id: 2, title: "Check-In #2", date: "Wed Oct 7",
      covers: "Ch. 4 & 7 / S&D / Guideposts", url: "" },           // UPDATE
    { id: 3, title: "Check-In #3", date: "Wed Nov 4",
      covers: "Ch. 8, 16, 18 / S&D / Guideposts", url: "" },       // UPDATE
    { id: 4, title: "Check-In #4", date: "Fri Dec 4",
      covers: "Comprehensive / Ch. 18 + Application block / S&D / Guideposts", url: "" }, // UPDATE
  ],

  // ── Viva week resources ──────────────────────────────────
  // vivaWeekSignupUrl and examPeriodSignupUrl point into the SAME Canvas
  // Appointment Group (one signup, three date/time blocks: Mon Nov 30,
  // Wed Dec 2, and Wed Dec 9 exam-period) — deep-linked to different
  // months for clarity. A student can only ever book one slot total
  // (Canvas "limit to one appointment" setting).
  viva: {
    durationMinutes:     10,
    vivaWeekSignupUrl:   "https://elon.instructure.com/calendar#view_name=month&view_start=2026-11-30",
    examPeriodSignupUrl: "https://elon.instructure.com/calendar#view_name=month&view_start=2026-12-11",
    // Mind — written narrative submission, same as friday[0].url
    ffSubmitUrl:         "https://elon.instructure.com/courses/1397/assignments/2455",
  },

  // Indicator Analysis — three NPR "The Indicator" episodes, each a required
  // 2-point completion grade folded into Mind & Voice's Mind half. No drop-lowest:
  // every completed one counts, every skipped one is a real 0/2 (grading
  // "Option 3" — see project notes).
  // Strict in-class-only completion (matches COR 1100's policy) — no Friday
  // makeup window during viva week. monday/wednesday are each completed
  // ONLY during their actual in-class session. A student whose viva slot
  // lands on Monday or Wednesday physically cannot complete that day's IA
  // in class, so every viva-week student ends up completing exactly one of
  // {monday, wednesday} and makes up the other via examSeg2 — the
  // guaranteed second completion for anyone who took their viva during
  // viva week, whether or not they also deferred Check-In 4 (both
  // Population 1 and Population 2 in the finalExamPeriod note above use
  // examSeg2). A student who defers their viva entirely (Population 3)
  // is in class both days and completes monday + wednesday normally, with
  // no examSeg2 need.
  indicatorAnalysis: [
    { id: "monday",    title: "Indicator Analysis: Ticket Scalpers and the Taylor Swift Fiasco",
      dateLabel: "Monday, Viva Week",
      pageUrl: `${COURSE.baseUrl}/indicator-analysis/taylor-swift-scalpers.html`, aid: "12032",
      storyUrl: "https://www.npr.org/2022/11/21/1138408591/ticket-scalpers-and-the-taylor-swift-fiasco-encore" },
    { id: "wednesday", title: "Indicator Analysis: The Pay Gap, with Claudia Goldin",
      dateLabel: "Wednesday, Viva Week",
      pageUrl: `${COURSE.baseUrl}/indicator-analysis/goldin-pay-gap.html`, aid: "12033",
      storyUrl: "https://www.npr.org/2023/10/10/1197954680/the-indicator-from-planet-money-10-10-2023" },
    { id: "examSeg2",  title: "Indicator Analysis: Does Unemployment Whiplash Mean Recession?",
      dateLabel: "Exam Period, Segment 2",
      pageUrl: `${COURSE.baseUrl}/indicator-analysis/unemployment-whiplash.html`, aid: "12034",
      storyUrl: "https://www.npr.org/2024/10/04/1203595442/jobs-friday-recession-economy-unemployment" },
  ],

  // Eli Review tasks — UPDATE urls as tasks are published in Eli
  // module: block id (1, 2, 3, '4b') — determines which module banner shows this pill
  // type: "writing" | "review" | "revision-plan" | "revision"
  // label: once real, must match Eli's own task-list naming exactly, so
  // config and the Eli dashboard never drift into different names.
  // Redesigned 2026-08-16, mirroring COR 1100's narrative redesign: one
  // continuous narrative built in layers (write -> review -> workplan ->
  // revise -> final) instead of three separate draft/review/revision cycles
  // for three supposedly-separate pieces -- "Draft 2: The Economic Thinking"
  // and "Draft 3: The Narrative" are gone entirely, since there was never a
  // second document to write or combine; the economic reasoning gets woven
  // into the same scene during revision.
  // Also decided 2026-08-16: the narrative is now assigned à la carte --
  // Brooks wants to lock in a real workflow in Eli before committing any of
  // this to a fixed calendar. No stage below carries a date, and none of
  // this array is rendered on the site — the checklist pages no longer show
  // per-stage items, just a link to eliDashboardUrl. This list stays purely
  // as Brooks's own planning record of the stage sequence, not a schedule to
  // build checklist items from. Old per-task Eli URLs are not carried over —
  // the old task IDs don't map onto these combined stages.
  // module: block id (1-4) roughly following the semester's Check-In blocks
  // type: "writing" | "review" | "revision-plan" | "revision"
  eli: [
    { id: 1, module: 1,    label: "The Scene",           type: "writing" },        // the concrete moment, written first
    { id: 2, module: 1,    label: "Review of The Scene", type: "review" },         // peer review
    { id: 3, module: 1,    label: "Workplan",            type: "revision-plan" },  // author reacts to feedback while it's fresh
    { id: 4, module: 2,    label: "Scene Revision",      type: "revision" },       // execution of the workplan — the economic reasoning gets woven in here
    { id: 5, module: '4a', label: "Final Narrative",     type: "revision" },       // Canvas only, not an Eli task — a PDF submitted once the piece is finished. See CANVAS.friday / ffSubmitUrl for the real link
  ],

  // Course-level landing page in the review platform (student view, not a
  // specific task) — mind-voice.html links here once instead of one pill per
  // stage. NOT the same as the task-specific urls above.
  eliDashboardUrl: "https://app.elireview.com/student/course/20937",

  // Wellness Check-In / Exit Ticket — index.html's wellness card. One static
  // Canvas assignment per item, reused all semester (not per-session like
  // Puzzles/MME). aid: Canvas assignment ID; full URL auto-built below.
  wellness:   { aid: "22414" },
  exitTicket: { aid: "22854" },
};

// ================================================================
//  BLOCKS
//  Groups sessions by check-in block for the schedule summary strip.
//  Block 4 is split: Application (4a) covers S12-13; Viva (4b) covers S15.
//
//  firstSession     — session number that opens the block (strip renders here)
//  contentSessions  — session numbers with puzzles in this block
//  mmedueSessions   — session numbers at which MME articles are due
//  checkIn          — check-in number closing this block (null = Application phase)
// ================================================================
const BLOCKS = [
  {
    id: 1,
    label: 'Module 1',
    firstSession: 1,
    contentSessions: [1, 2],
    mmedueSessions: [],
    checkIn: 1,
  },
  {
    id: 2,
    label: 'Module 2',
    firstSession: 4,
    contentSessions: [4, 5],
    mmedueSessions: [6],
    checkIn: 2,
  },
  {
    id: 3,
    label: 'Module 3',
    firstSession: 7,
    contentSessions: [7, 9, 10],
    mmedueSessions: [11],
    checkIn: 3,
  },
  {
    id: '4a',
    label: 'Module 4',
    sublabel: 'Application Block',
    description: 'No new chapters — applying economics to real-world questions.',
    firstSession: 12,
    lastSession: 13,
    contentSessions: [12, 13],
    mmedueSessions: [],
    checkIn: null,
    phase: 'application',
  },
  {
    id: '4b',
    label: 'Module 4',
    sublabel: 'Viva & Check-In',
    firstSession: 15,
    lastSession: 15,
    contentSessions: [],
    mmedueSessions: [15],
    checkIn: 4,
    phase: 'viva',
    vivaSignupAlert: true,
  },
];

// ================================================================
//  URL DERIVATION — do not edit
//  Builds .url on every assignment entry from COURSE.canvasId + aid.
//  Consumers continue to read .url as before; aid is the source of truth.
//  Chapter reading links are Canvas Modules items (not assignments) so
//  they carry no line item/points and can't show up as zeros in the
//  gradebook; .url for those is built from moduleItemId instead.
// ================================================================
const ASSIGNMENT_URL = aid =>
  aid ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/${aid}` : '';

const MODULE_ITEM_URL = moduleItemId =>
  moduleItemId ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/modules/items/${moduleItemId}` : '';

[CHAPTERS.core, CHAPTERS.application]
  .forEach(arr => arr.forEach(item => { item.url = MODULE_ITEM_URL(item.moduleItemId); }));

[CANVAS.puzzles, CANVAS.mme, CANVAS.indicatorAnalysis]
  .forEach(arr => arr.forEach(item => { item.url = ASSIGNMENT_URL(item.aid); }));

[CANVAS.wellness, CANVAS.exitTicket]
  .forEach(item => { item.url = ASSIGNMENT_URL(item.aid); });

// Guided-notes submission link — one per core chapter (1:1, no grouping
// needed since each chapter has its own guided-notes document).
CHAPTERS.core.forEach(item => { item.notesSubmitUrl = ASSIGNMENT_URL(item.notesAid); });

// ================================================================
//  PUZZLE DUE-DATE DERIVATION
//  Puzzle for session N is due the Wednesday of session N+1 at 11:59 p.m.
//  (sessionStart + 9 days). 
// ================================================================
const _DAY_MS = 86400000;
const _DUE_FMT = { weekday: 'short', month: 'short', day: 'numeric' };

const puzzleDueDate = sessionNum => {
  const idx = SCHEDULE.sessions.findIndex(s => s.num === sessionNum);
  if (idx < 0) return null;
  const start = SCHEDULE.sessionStarts[idx];
  if (!start) return null;

  let due = new Date(start.getTime());
  due.setDate(due.getDate() + 9);

  // If due date falls inside a break session, shift to Friday of session N (start + 4 days).
  // Handles Thanksgiving: S13 puzzle would land Nov 25 → shifts to Fri Nov 20.
  const dueTime = due.getTime();
  const inBreak = SCHEDULE.breakSessions.some(breakIdx => {
    const bStart = SCHEDULE.sessionStarts[breakIdx];
    const bEnd   = SCHEDULE.sessionStarts[breakIdx + 1];
    return bStart && bEnd && dueTime >= bStart.getTime() && dueTime < bEnd.getTime();
  });

  if (inBreak) {
    due = new Date(start.getTime());
    due.setDate(due.getDate() + 4);
  }

  return due;
};

const formatPuzzleDue = sessionNum => {
  const d = puzzleDueDate(sessionNum);
  return d ? d.toLocaleDateString('en-US', _DUE_FMT) + ', 11:59 p.m.' : 'TBA';
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:     COURSE,
  instructor: INSTRUCTOR,
  schedule:   SCHEDULE,
  chapters:   CHAPTERS,
  grading:    GRADING,
  features:   FEATURES,
  textbook:   TEXTBOOK,
  questions:  QUESTIONS,
  pages:      PAGES,
  canvas:     CANVAS,
  blocks:     BLOCKS,
};
