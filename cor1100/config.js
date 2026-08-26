// ================================================================
//  COR 1100 — COURSE CONFIGURATION
//  Hosted at: bdepro.github.io/courses/cor1100/
// ================================================================
//  SEMESTER UPDATE CHECKLIST (search UPDATE to find each spot):
//  1. COURSE block       — semester, canvasId
//  2. INSTRUCTOR block   — officeHours
//  3. SCHEDULE block     — session dates, sessionStarts, finalExam,
//                          finalExamPeriod
//  4. CANVAS block       — all assignment IDs (aid), viva sign-up URL
//  5. TEXTBOOK block     — publisher/title/author only, no platform link
//  6. CHAPTERS block     — Canvas file IDs (fileId)
//  That is it. All HTML files pull from this file automatically.
// ================================================================

// ================================================================
//  COURSE
//  UPDATE: semester and canvasId each term
// ================================================================
const COURSE = {
  code:        "COR 1100",
  title:       "The Global Experience",
  discipline:  "moral",
  semester:    "Fall 2026",                        // UPDATE each semester
  format:      "in-person",
  credits:     4,
  baseUrl:     "https://bdepro.github.io/courses/cor1100",
  canvasBase:  "https://elon.instructure.com",
  canvasId:    "920",                              // UPDATE each semester
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
//    chapters    — array of chapter keys covered this session
//                  (empty for check-in / break / viva weeks)
//    checkIn     — check-in number if one occurs (null otherwise)
//    checkInDay  — day check-in falls on (for display)
//    ffProgress  — true if Friday is an Eli Review / Mind & Voice progress day
//    viva        — true if viva week
//    break       — true suppresses auto-highlighting
//    breakType   — 'fall' or 'thanksgiving' — drives card rendering
//    note        — optional internal note (not student-facing)
//
//  Due date logic (locked — do not change without updating schedule.html
//  and puzzles.html):
//    Puzzles for session N are due the WEDNESDAY OF SESSION N+1 at 11:59 p.m.
//    (sessionStart + 9 days). If that date falls inside a break session,
//    due shifts to FRIDAY OF SESSION N (sessionStart + 4 days). See
//    puzzleDueDate() at the bottom of this file.
//    S7 (Ch. XIII, Mon/Tue only before Fall Break) has no quiz of its own —
//      its content is folded into Puzzle 5 together with S9.
//    Common Threads sessions run entirely in class on their own Monday —
//      see CANVAS.commonThreads[].session.
//    Mind & Voice written narrative is assigned à la carte in Eli Review —
//      no fixed due date. See CANVAS.eli comment above.
//    CI 4 always counts. Replaces lowest of CI 1-3 if higher.
// ================================================================
const SCHEDULE = {

  // Key academic dates — UPDATE each semester
  dates: {
    classesBegin:     "August 25, 2026",           // UPDATE
    dropAddEnds:      "September 1, 2026",          // UPDATE
    withdrawDeadline: "October 30, 2026",           // UPDATE
    classesEnd:       "December 4, 2026",           // UPDATE
    readingDay:       "December 5, 2026",           // UPDATE
    examsBegin:       "December 7, 2026",           // UPDATE
    examsEnd:         "December 11, 2026",          // UPDATE
  },

  // Sessions — UPDATE dates and notes each semester
  sessions: [
    {
      num: 0, dates: "Aug 26-28", label: "Introduction",
      chapters: [], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Wed/Fri only — course introduction, no reading assigned",
    },
    {
      num: 1, dates: "Aug 31-Sep 4", label: "Week 1",
      topic: "Self-Interest and Caring for Others",
      chapters: ["intro", "ch1", "ch2"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Intro / Ch. I On Self-Interest / Ch. II On Caring for Others",
    },
    {
      num: 2, dates: "Sep 7-11", label: "Week 2",
      topic: "Imagination, Action, and Self-Betterment",
      chapters: ["ch3", "ch4", "ch5"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Ch. III On Acting for Others / Ch. IV On Imagination / Ch. V On Bettering Our Condition",
    },
    {
      num: 3, dates: "Sep 14-18", label: "Week 3",
      chapters: [], checkIn: 1, checkInDay: "Wed Sep 16",
      ffProgress: true, viva: false, break: false, breakType: null,
      note: "Mon: Review Intro + Ch. I–V / Wed: Check-In #1 / Fri: FF progress",
    },
    {
      num: 4, dates: "Sep 21-25", label: "Week 4",
      topic: "Misery, Health, and Tranquility of Mind",
      chapters: ["ch6", "ch7", "ch8"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Mon: Common Threads 1 / Ch. VI On Miseries and Disorders / Ch. VII On the Healthy Mind / Ch. VIII On Tranquility and Pleasure",
    },
    {
      num: 5, dates: "Sep 28-Oct 2", label: "Week 5",
      topic: "Wealth, Friendship, and Anger",
      chapters: ["ch9", "ch10", "ch12"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Ch. IX On Worshipping Wealth / Ch. X On Friendship / Ch. XII On Hatred and Anger",
    },
    {
      num: 6, dates: "Oct 5-9", label: "Week 6",
      chapters: [], checkIn: 2, checkInDay: "Wed Oct 7",
      ffProgress: true, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. VI–XII / Wed: Check-In #2 / Fri: FF progress",
    },
    {
      num: 7, dates: "Oct 12-13", label: "Week 7",
      topic: "On Being Loved",
      chapters: ["ch13"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Mon & Tue only — Ch. XIII On Being Loved / PDF reading assigned; tested in Puzzle 5 with Week 9 / Fall Break begins Wed",
    },
    {
      num: 8, dates: "Oct 14-18", label: "Fall Break",
      chapters: [], checkIn: null, ffProgress: false, viva: false,
      break: true, breakType: "fall",
      note: "No class",
    },
    {
      num: 9, dates: "Oct 19-23", label: "Week 9",
      topic: "Loving, Flourishing, and Being Lovely",
      chapters: ["ch14", "ch15", "ch16"], checkIn: null, ffProgress: true, viva: false,
      break: false, breakType: null,
      note: "Mon: Common Threads 2 / Ch. XIV On Loving / Ch. XV On Flourishing / Ch. XVI On Being Lovely / Fri: FF progress / Puzzle 5 also covers Ch. XIII from Week 7",
    },
    {
      num: 10, dates: "Oct 26-30", label: "Week 10",
      topic: "Self-Perception, Dignity, and Equality",
      chapters: ["ch17", "ch18", "ch19"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Ch. XVII On Seeing Ourselves / Ch. XVIII On Dignity / Ch. XIX On Equality",
    },
    {
      num: 11, dates: "Nov 2-6", label: "Week 11",
      chapters: [], checkIn: 3, checkInDay: "Wed Nov 4",
      ffProgress: true, viva: false, break: false, breakType: null,
      note: "Mon: Review Ch. XIII–XIX / Wed: Check-In #3 / Fri: FF progress",
    },
    {
      num: 12, dates: "Nov 9-13", label: "Week 12",
      topic: "Choice, Selfhood, and Perfection",
      chapters: ["ch20", "ch21", "ch22"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Mon: Common Threads 3 / Ch. XX On Choice / Ch. XXI On Self and Others / Ch. XXII On Perfection",
    },
    {
      num: 13, dates: "Nov 16-20", label: "Week 13",
      topic: "Wisdom, Humility, and Praiseworthiness",
      chapters: ["ch23", "ch24", "ch25"], checkIn: null, ffProgress: false, viva: false,
      break: false, breakType: null,
      note: "Ch. XXIII On Wisdom and Virtue / Ch. XXIV On Humility and Beneficence / Ch. XXV On Praise and Praiseworthiness",
    },
    {
      num: 14, dates: "Nov 23-27", label: "Thanksgiving Break",
      chapters: [], checkIn: null, ffProgress: false, viva: false,
      break: true, breakType: "thanksgiving",
      note: "No class",
    },
    {
      num: 15, dates: "Nov 30-Dec 4", label: "Viva Week",
      chapters: [], checkIn: 4, checkInDay: "Fri Dec 4",
      ffProgress: false, viva: true, break: false, breakType: null,
      note: "Mon & Wed: Viva slots / Fri: Check-In #4 (last day of class)",
    },
  ],

  // Session start dates — drive auto-highlighting in schedule.html
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
    new Date(2026, 10,  2),  // S11: Nov 2   (CI #3)
    new Date(2026, 10,  9),  // S12: Nov 9
    new Date(2026, 10, 16),  // S13: Nov 16
    new Date(2026, 10, 23),  // S14: Nov 23  (Thanksgiving Break)
    new Date(2026, 10, 30),  // S15: Nov 30  (Viva week)
    new Date(2026, 11,  5),  // Final zone: Dec 5
  ],

  // Break sessions by index — never highlighted
  breakSessions: [8, 14],

  // Final exam period covers three student populations:
  //   Population 1 — viva done in viva week, CI 4 done on Fri Dec 4.
  //                  Must complete online worksheet during exam block.
  //   Population 2 — viva done in viva week, CI 4 deferred.
  //                  Takes CI 4 during exam block.
  //   Population 3 — viva deferred. Completes viva + CI 4 during exam block.
  // Viva sign-up and worksheet links live in CANVAS block below.
  // CI 4 may be taken on the last day of class (Fri Dec 4) OR during this block.
  finalExamPeriod: {
    dates:            "Tue, Dec 8, 2026, 1:00–4:00 p.m.",  // UPDATE each semester — registrar-assigned slot
    signupEquityNote: "No computer access? Contact Prof. Depro and he will assign your slot.",
  },
};

// ================================================================
//  CHAPTERS
//  Hanley, Our Great Purpose (Ch. XI omitted — not assigned)
//  fileId: Canvas Files file ID for that chapter's PDF — URL auto-built
//  at the bottom of this file. No Perusall — students get a direct PDF
//  link (guided notes + a Puzzle cover the reading instead of an
//  annotation tool).
//  UPDATE each semester once that term's PDFs are uploaded to Canvas Files
// ================================================================
const CHAPTERS = {

  all: [
    { key: "intro", num: "Intro",      title: "Introduction",                   session: 1,  fileId: "363042" },
    { key: "ch1",   num: "Ch. I",      title: "On Self-Interest",               session: 1,  fileId: "363043" },
    { key: "ch2",   num: "Ch. II",     title: "On Caring for Others",           session: 1,  fileId: "363044" },
    { key: "ch3",   num: "Ch. III",    title: "On Acting for Others",           session: 2,  fileId: "363045" },
    { key: "ch4",   num: "Ch. IV",     title: "On Imagination",                 session: 2,  fileId: "363046" },
    { key: "ch5",   num: "Ch. V",      title: "On Bettering Our Condition",     session: 2,  fileId: "363047" },
    { key: "ch6",   num: "Ch. VI",     title: "On Miseries and Disorders",      session: 4,  fileId: "363048" },
    { key: "ch7",   num: "Ch. VII",    title: "On the Healthy Mind",            session: 4,  fileId: "363049" },
    { key: "ch8",   num: "Ch. VIII",   title: "On Tranquility and Pleasure",    session: 4,  fileId: "363050" },
    { key: "ch9",   num: "Ch. IX",     title: "On Worshipping Wealth",          session: 5,  fileId: "363051" },
    { key: "ch10",  num: "Ch. X",      title: "On Friendship",                  session: 5,  fileId: "363053" },
    { key: "ch12",  num: "Ch. XII",    title: "On Hatred and Anger",            session: 5,  fileId: "363056" },
    { key: "ch13",  num: "Ch. XIII",   title: "On Being Loved",                 session: 7,  fileId: "363057" },
    { key: "ch14",  num: "Ch. XIV",    title: "On Loving",                      session: 9,  fileId: "363058" },
    { key: "ch15",  num: "Ch. XV",     title: "On Flourishing",                 session: 9,  fileId: "363059" },
    { key: "ch16",  num: "Ch. XVI",    title: "On Being Lovely",                session: 9,  fileId: "363060" },
    { key: "ch17",  num: "Ch. XVII",   title: "On Seeing Ourselves",            session: 10, fileId: "363061" },
    { key: "ch18",  num: "Ch. XVIII",  title: "On Dignity",                     session: 10, fileId: "363062" },
    { key: "ch19",  num: "Ch. XIX",    title: "On Equality",                    session: 10, fileId: "363063" },
    { key: "ch20",  num: "Ch. XX",     title: "On Choice",                      session: 12, fileId: "363064" },
    { key: "ch21",  num: "Ch. XXI",    title: "On Self and Others",             session: 12, fileId: "363065" },
    { key: "ch22",  num: "Ch. XXII",   title: "On Perfection",                  session: 12, fileId: "363066" },
    { key: "ch23",  num: "Ch. XXIII",  title: "On Wisdom and Virtue",           session: 13, fileId: "363067" },
    { key: "ch24",  num: "Ch. XXIV",   title: "On Humility and Beneficence",    session: 13, fileId: "363068" },
    { key: "ch25",  num: "Ch. XXV",    title: "On Praise and Praiseworthiness", session: 13, fileId: "363069" },
  ],

  // Check-in coverage map
  checkIns: {
    1: { chapters: ["intro", "ch1", "ch2", "ch3", "ch4", "ch5"],
         label: "Intro + Ch. I–V" },
    2: { chapters: ["ch6", "ch7", "ch8", "ch9", "ch10", "ch12"],
         label: "Ch. VI–XII" },
    3: { chapters: ["ch13", "ch14", "ch15", "ch16", "ch17", "ch18", "ch19"],
         label: "Ch. XIII–XIX" },
    4: { chapters: ["all"],
         label: "Comprehensive (Intro + Ch. I–XXV)" },
  },
};

// ================================================================
//  GUIDED NOTES
//  One document per guided-notes file (8 total) — NOT one per chapter.
//  Several documents span multiple chapters (e.g. w07-09 covers Ch.
//  XIII-XVI in one file/one submission). `chapters` lists every chapter
//  key that document covers; chapters.html uses this to show the same
//  Guided Notes / Submit links on every row in that span.
//  aid: Canvas assignment ID for the 0-points-possible submission
//  assignment (2 pts on time / 1.6 pts late, graded manually — see
//  project memory "ECO 1000 Guided Notes Bonus Policy" for the Canvas
//  setup this mirrors).
//  UPDATE: aid for each entry once that term's 8 submission assignments
//  are built in Canvas.
// ================================================================
const GUIDED_NOTES = [
  { id: "w01",    label: "Week 1 Guided Notes",      chapters: ["intro", "ch1", "ch2"],         url: `${COURSE.baseUrl}/guided-notes/w01-guided-notes.html`,    aid: "9067" },
  { id: "w02",    label: "Week 2 Guided Notes",      chapters: ["ch3", "ch4", "ch5"],           url: `${COURSE.baseUrl}/guided-notes/w02-guided-notes.html`,    aid: "9068" },
  { id: "w04",    label: "Week 4 Guided Notes",      chapters: ["ch6", "ch7", "ch8"],           url: `${COURSE.baseUrl}/guided-notes/w04-guided-notes.html`,    aid: "9069" },
  { id: "w05",    label: "Week 5 Guided Notes",      chapters: ["ch9", "ch10", "ch12"],         url: `${COURSE.baseUrl}/guided-notes/w05-guided-notes.html`,    aid: "9070" },
  { id: "w07-09", label: "Weeks 7 & 9 Guided Notes", chapters: ["ch13", "ch14", "ch15", "ch16"], url: `${COURSE.baseUrl}/guided-notes/w07-09-guided-notes.html`, aid: "9071" },
  { id: "w10",    label: "Week 10 Guided Notes",     chapters: ["ch17", "ch18", "ch19"],        url: `${COURSE.baseUrl}/guided-notes/w10-guided-notes.html`,    aid: "9072" },
  { id: "w12",    label: "Week 12 Guided Notes",     chapters: ["ch20", "ch21", "ch22"],        url: `${COURSE.baseUrl}/guided-notes/w12-guided-notes.html`,    aid: "9073" },
  { id: "w13",    label: "Week 13 Guided Notes",     chapters: ["ch23", "ch24", "ch25"],        url: `${COURSE.baseUrl}/guided-notes/w13-guided-notes.html`,    aid: "9074" },
];

// ================================================================
//  GRADING
//  Locked weights
//  Due date policy (locked):
//    Puzzles for session N due Wednesday of session N+1 at 11:59 p.m.
//    If that Wednesday falls in a break, due shifts to Friday of session N.
//    CI 4 always counts. Replaces lowest of CI 1-3 if higher.
//    S7 has no quiz of its own — Ch. XIII is tested in Puzzle 5 with S9.
// ================================================================
const GRADING = {
  dueTime: "11:59 p.m.",
  components: [
    { id: "checkins", label: "Check-Ins",               weight: 40,
      note: "4 check-ins. CI 4 always counts. Replaces lowest of CI 1-3 if higher." },
    { id: "friday",   label: "Mind & Voice",            weight: 35,
      note: "Mind: written narrative (worked out in Eli Review, submitted via Canvas, no fixed due date yet) + Indicator Analyses + Community Engagement. Voice: viva conversation during viva week. Focus on Hanley and Smith.",
      // Point split within the 35. Narrative:Viva stays 2:1, matching ECO 1000's
      // rationale (sustained written artifact vs. a single oral defense).
      // Indicator Analysis matches ECO 1000's value exactly (2 pts x 2 completed)
      // for consistency across courses. Community Engagement is weighted above
      // IA's completion-credit tier — per CEL pedagogy (Bringle & Hatcher; Ash &
      // Clayton), the learning value of a community placement lives in the
      // structured reflection, not the service hours, and Elon's Community
      // Engaged designation exists to certify that reflection is treated as
      // real academic work, not a checkbox. Confirmed with Brooks 2026-08-16.
      breakdown: [
        { id: "narrative", label: "Written Narrative (Mind)", points: 16 },
        { id: "viva",       label: "Viva Conversation (Voice)", points: 8 },
        { id: "indicatorAnalysis", label: "Indicator Analyses (2 of 3, 2 pts each)", points: 4 },
        { id: "communityEngagement", label: "Community Engagement", points: 7 },
      ] },
    { id: "puzzles",  label: "Puzzles",                 weight: 10,
      note: "8 formative MC quizzes. Puzzle 5 covers Week 7 (Ch. XIII) together with Week 9 (Ch. XIV-XVI) — Week 7 has no separate quiz. Lowest score dropped. Late within one week at 80%. Due Wednesday of the following session." },
    { id: "commonThreads", label: "Common Threads", weight: 15,
      note: "3 in-class sessions pairing Smith's Theory of Moral Sentiments with our Common Reading, Hanif Abdurraqib's There's Always This Year. One per Check-In block, held entirely in class on a single Monday." },
  ],
  ungraded: [
    { id: "readings", label: "Chapter Readings",
      note: "One PDF per chapter, linked through Canvas. Due Wednesday 11:59 p.m. of each session. Reading preparation for class, guided notes, and Puzzles." },
  ],
};

// ================================================================
//  FEATURES
//  true = show on home page, false = hide
//  UPDATE if sections are added or removed
// ================================================================
const FEATURES = {
  syllabus:      true,
  textbook:      false,
  chapters:      false,   // demoted off home grid — reachable from checklist.html "Look Ahead"; content duplicates weekly checklist items
  checkins:      false,   // demoted off home grid — reachable from checklist.html "Look Ahead"; content duplicates weekly checklist items
  puzzles:       false,   // demoted off home grid — reachable from checklist.html "Look Ahead"; content duplicates weekly checklist items
  badges:        false,
  commonThreads: true,
  friday:        true,
  communityEngagement: true,
  wellness:      false,
  support:       true,
  aiPolicy:      true,
  checklist:     true,
  officeHours:   true,
};

// ================================================================
//  TEXTBOOK — Hanley, accessed as PDF chapters through Canvas Files
//  (see CHAPTERS.all for the per-chapter file links — no separate
//  textbook-platform URL needed)
// ================================================================
const TEXTBOOK = {
  publisher:   "Princeton University Press",
  title:       "Our Great Purpose: Adam Smith on Living a Better Life",
  author:      "Ryan Patrick Hanley",
};

// ================================================================
//  SOURCE TEXT — Smith, used for Common Threads sessions
//  3 selected passages, one per Check-In block
//  See CANVAS.commonThreads for individual session titles
// ================================================================
const SOURCE_TEXT = {
  title:  "The Theory of Moral Sentiments",
  author: "Adam Smith",
};

// ================================================================
//  PAGES
//  Stable GitHub Pages URLs — update only if files move or rename
// ================================================================
const PAGES = {
  home:          `${COURSE.baseUrl}/index.html`,
  canvasHome:    `${COURSE.canvasBase}/courses/${COURSE.canvasId}`,
  checklist:     `${COURSE.baseUrl}/checklist.html`,
  officeHours:   `${COURSE.baseUrl}/office-hours.html`,
  syllabus:      `${COURSE.baseUrl}/syllabus.html`,
  checkins:      `${COURSE.baseUrl}/checkins.html`,
  puzzles:       `${COURSE.baseUrl}/puzzles.html`,
  commonThreads: `${COURSE.baseUrl}/common-threads.html`,
  friday:        `${COURSE.baseUrl}/mind-voice.html`,
  communityEngagement: `${COURSE.baseUrl}/community-engagement.html`,
  fridayLabel:   "Mind & Voice",
  chapters:      `${COURSE.baseUrl}/chapters.html`,
  support:       `https://bdepro.github.io/courses/shared/support.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
  aiPolicy:      `https://bdepro.github.io/courses/shared/ai-policy.html?return=${encodeURIComponent(COURSE.canvasBase + '/courses/' + COURSE.canvasId)}`,
};

// ================================================================
//  CANVAS ASSIGNMENTS
//  UPDATE: all assignment IDs (aid) each semester after Canvas is set up
//
//  Canvas Page naming convention for session materials:
//    s[num]-mon     — Monday skeleton (e.g. s1-mon)
//    s[num]-wed     — Wednesday print handout
//    s[num]-fri     — Friday skeleton
//    s[num]-review  — Check-in week Monday review guide
//    s[num]-worksheet — Viva week review worksheet
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
  pageBase:  `${COURSE.canvasBase}/courses/${COURSE.canvasId}/pages`,

  // Formative MC quizzes — 8 total, lowest dropped.
  // Puzzle 5 (session 9) covers Week 7's Ch. XIII as well as Week 9's
  // chapters — Week 7 has no separate quiz of its own.
  // aid: Canvas assignment ID; full URL is auto-built at the bottom of this file
  // UPDATE each semester
  puzzles: [
    { session: 1,  title: "Puzzle 1: Introduction, On Self-Interest, On Caring for Others",                                aid: "7768" },
    { session: 2,  title: "Puzzle 2: On Acting for Others, On Imagination, On Bettering Our Condition",                    aid: "7936" },
    { session: 4,  title: "Puzzle 3: On Miseries and Disorders, On the Healthy Mind, On Tranquility and Pleasure",        aid: "8762" },
    { session: 5,  title: "Puzzle 4: On Worshipping Wealth, On Friendship, On Hatred and Anger",                          aid: "8116" },
    { session: 9,  title: "Puzzle 5: On Being Loved, On Loving, On Flourishing, On Being Lovely",                          aid: "8767" },
    { session: 10, title: "Puzzle 6: On Seeing Ourselves, On Dignity, On Equality",                                       aid: "8768" },
    { session: 12, title: "Puzzle 7: On Choice, On Self and Others, On Perfection",                                      aid: "8769" },
    { session: 13, title: "Puzzle 8: On Wisdom and Virtue, On Humility and Beneficence, On Praise and Praiseworthiness",  aid: "8770" },
  ],

  // COMMON THREADS — in-class sessions pairing a Smith/Hanley chapter with a
  // passage from the Elon Common Reading, Hanif Abdurraqib's There's Always
  // This Year. Redesigned 2026-08-14, replacing the earlier Perusall
  // Fishbowl format entirely: no async submit/review/respond cascade, no
  // author/reviewer role split, no Perusall. Each round is one self-
  // contained Monday class period — students do the reading beforehand,
  // then close-read, discuss, and write together in class. One round per
  // Check-In block; see commonThreadsDate() at the bottom of this file.
  // session: the Monday session number the round runs on (see
  //   SCHEDULE.sessions / SCHEDULE.sessionStarts for the actual date).
  // chapter / passage: the Hanley chapter and Abdurraqib citation paired
  //   that round.
  // aid: Canvas assignment ID for however the round ends up graded
  //   (in-class participation record, or an uploaded worksheet) — UPDATE
  //   once the mechanism is decided; worksheet content for rounds 1 and 2
  //   still needs to be built (round 3 already exists as a print-ready
  //   CODAP worksheet in course-notes, not yet wired into this site).
  commonThreads: [
    { id: 1, session: 4,
      title: "Common Threads 1: Sympathy, Attention, and LeBron",
      chapter: "Ch. III–IV, On Acting for Others & On Imagination", passage: "Abdurraqib, p. 31", aid: "19484" },
    { id: 2, session: 9,
      title: "Common Threads 2: Worshipping Wealth, at Arm's Length",
      chapter: "Ch. IX, On Worshipping Wealth", passage: "Abdurraqib, p. 65", aid: "20242" },
    { id: 3, session: 12,
      title: "Common Threads 3: Who Gets to \"Better Their Condition\"?",
      chapter: "Ch. V, On Bettering Our Condition", passage: "Abdurraqib, pp. 194, 224", aid: "20243" },
  ],

  // Indicator Analysis — three short in-class activities built around real
  // episodes of NPR's "The Indicator from Planet Money," verified individually
  // (byline + working npr.org link) rather than assumed from title alone.
  // aid: Canvas assignment ID; full URL auto-built at the bottom of this file.
  // UPDATE aid once each assignment is created in Canvas.
  indicatorAnalysis: [
    { id: "monday",    title: "Indicator Analysis: Should the Families of Organ Donors Be Compensated?",
      dateLabel: "Monday, Viva Week",
      pageUrl: `${COURSE.baseUrl}/indicator-analysis/organ-donor-compensation.html`, aid: "12887",
      storyUrl: "https://www.npr.org/2026/03/02/nx-s1-5729630/should-the-families-of-organ-donors-be-compensated" },
    { id: "wednesday", title: "Indicator Analysis: One of the Cheapest Ways to Save a Life Is Going Away",
      dateLabel: "Wednesday, Viva Week",
      pageUrl: `${COURSE.baseUrl}/indicator-analysis/pepfar-cuts.html`, aid: "12888",
      storyUrl: "https://www.npr.org/2025/06/25/1254697870/pepfar-cuts-aids-africa" },
    { id: "examPeriod", title: "Indicator Analysis: Why the Gender Pay Gap Persists",
      dateLabel: "Exam Period",
      pageUrl: `${COURSE.baseUrl}/indicator-analysis/gender-pay-gap.html`, aid: "12889",
      storyUrl: "https://www.npr.org/2024/05/14/1197964565/the-winner-take-all-problem" },
  ],

  // Mind & Voice — direct URLs (no aid pattern; Canvas Scheduler links differ)
  friday: [
    { id: 1, title: "Mind: The Narrative",
      due: null, url: `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/12861` },  // à la carte, no fixed due date yet — see CANVAS.eli comment above. url is the real Canvas assignment, kept for reference even though no button links to it right now
    { id: 2, title: "Voice: The Narrative Viva",
      due: "Viva week Nov 30-Dec 4 (by appointment)", url: "https://elon.instructure.com/calendar#view_name=month&view_start=2026-11-30" },
  ],

  // Community Engagement — third Mind component, folded into Mind & Voice's
  // weight (user's choice, 2026-07-29 — not a new weighted category, not a
  // pass/fail hurdle). One Canvas reflection assignment covering both the
  // Pre-Experience and Post-Experience questions. Source: Elon's Kernodle
  // Center First-Year Foundations Community Engagement page (see
  // course-notes/cor1100/community-engagement/README.md for the full index
  // card). aid: Canvas assignment ID; full URL auto-built below.
  // serviceDeadline / reflectionDue confirmed Nov 13, 2026 — well ahead of
  // viva week, since the written narrative no longer has a fixed due date
  // to check against.
  communityEngagement: {
    aid: "12991",
    serviceDeadline: "Fri, Nov 13, 2026",
    reflectionDue:   "Fri, Nov 13, 2026, 11:59 p.m.",
  },

  // Check-Ins — direct URLs (no aid pattern)
  // UPDATE each semester
  checkIns: [
    { id: 1, title: "Check-In #1", date: "Wed Sep 16",
      covers: "Intro + Ch. I–V",              url: "" },  // UPDATE
    { id: 2, title: "Check-In #2", date: "Wed Oct 7",
      covers: "Ch. VI–XII",                   url: "" },  // UPDATE
    { id: 3, title: "Check-In #3", date: "Wed Nov 4",
      covers: "Ch. XIII–XIX",                 url: "" },  // UPDATE
    { id: 4, title: "Check-In #4", date: "Fri Dec 4 or exam period",
      covers: "Comprehensive / Intro + Ch. I–XXV", url: "" },  // UPDATE
  ],

  // Viva week resources
  // Both URLs point into the SAME Canvas Appointment Group (one signup,
  // two date/time blocks) — vivaWeekSignupUrl deep-links to the Nov 30
  // month view, examPeriodSignupUrl to the Dec 8 month view (the
  // registrar-assigned exam slot). A student can only ever book one slot
  // total (Canvas "limit to one appointment" setting), regardless of
  // which link they click first.
  viva: {
    durationMinutes:        10,
    vivaWeekSignupUrl:      "https://elon.instructure.com/calendar#view_name=month&view_start=2026-11-30",
    examPeriodSignupUrl:    "https://elon.instructure.com/calendar#view_name=month&view_start=2026-12-08",
    ffSubmitUrl:            `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/12861`,
  },

  // Eli Review tasks for the written narrative. Redesigned 2026-08-15: one
  // continuous narrative built across four in-class Monday sessions (embedded
  // writing consultant present each time) instead of three separate
  // draft/review/revision cycles for three supposedly-separate pieces —
  // "Draft 2: The Moral Reasoning" and "Draft 3: The Narrative" are gone
  // entirely, since there was never a second document to write or combine.
  // Decided 2026-08-16: the narrative is now assigned à la carte — Brooks
  // wants to lock in a real workflow in Eli before committing any of this
  // to a fixed calendar. No stage below carries a date anymore, and none of
  // this array is rendered on the site — the checklist pages no longer show
  // per-stage items at all, just a link to eliDashboardUrl. This list stays
  // purely as Brooks's own planning record of the stage sequence (still the
  // one worked out on 2026-08-15: write → review → workplan → revise →
  // moral story → final), not a schedule to build checklist items from.
  // module: block id (1-4), roughly following the semester's Check-In blocks
  // type: "writing" | "review" | "revision-plan" | "revision"
  // label: once real, must match Eli's own task-list naming exactly, so config
  // and the Eli dashboard never drift into different names for the same task.
  eli: [
    { id: 1, module: 1, label: "The Scene",           type: "writing" },        // written in class, then developed independently
    { id: 2, module: 1, label: "Review of The Scene", type: "review" },         // in-class kickoff, written review follows
    { id: 5, module: 1, label: "Workplan",            type: "revision-plan" },  // take-home; author reacts to feedback while it's fresh
    { id: 3, module: 2, label: "Scene Revision",      type: "revision" },       // in-class execution of the workplan, with the writing consultant
    { id: 4, module: 3, label: "Final Narrative",     type: "revision" },       // Canvas only, not an Eli task — a PDF submitted once the piece is finished. See CANVAS.friday / ffSubmitUrl for the real link
  ],

  // Course-level landing page in the review platform (student view, not a
  // specific task) — every Mind & Voice checklist link points here.
  eliDashboardUrl: "https://app.elireview.com/student/course/21054",

  // Wellness Check-In / Exit Ticket — index.html's wellness card. One static
  // Canvas assignment per item, reused all semester (not per-session like
  // Puzzles/Common Threads). aid: Canvas assignment ID; full URL auto-built
  // below.
  wellness:   { aid: "22418" },
  exitTicket: { aid: "22961" },

  // NOTE: the Eli Review course join code is intentionally NOT stored here.
  // This file is served as public client-side JS on GitHub Pages, so
  // anything in it is visible to anyone — the join code is given out
  // verbally in class instead. See syllabus.html Section 4.
};

// ================================================================
//  BLOCKS
//  Groups sessions by check-in block for the schedule summary strip.
//
//  firstSession        — session number that opens the block (strip renders here)
//  contentSessions     — session numbers with puzzles in this block
//  commonThreadsSessions — session numbers where a Common Threads round runs
//  checkIn             — check-in number closing this block
//  vivaSignupAlert     — true to show the viva sign-up alert before this block's break
// ================================================================
const BLOCKS = [
  {
    id: 1,
    label: 'Module 1',
    firstSession: 1,
    contentSessions: [1, 2],
    commonThreadsSessions: [],
    checkIn: 1,
  },
  {
    id: 2,
    label: 'Module 2',
    firstSession: 4,
    contentSessions: [4, 5],
    commonThreadsSessions: [4],
    checkIn: 2,
  },
  {
    id: 3,
    label: 'Module 3',
    firstSession: 7,
    contentSessions: [7, 9, 10],
    commonThreadsSessions: [9],
    checkIn: 3,
  },
  {
    id: 4,
    label: 'Module 4',
    sublabel: 'Viva & Check-In',
    firstSession: 12,
    contentSessions: [12, 13],
    commonThreadsSessions: [12],
    checkIn: 4,
    phase: 'viva',
    vivaSignupAlert: true,
  },
];

// ================================================================
//  URL DERIVATION — do not edit
//  Builds .url on every assignment/file entry from COURSE.canvasId + aid
//  (or fileId for CHAPTERS.all). Consumers continue to read .url as
//  before; aid/fileId is the source of truth.
// ================================================================
const ASSIGNMENT_URL = aid =>
  aid ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/assignments/${aid}` : '';

const FILE_URL = fileId =>
  fileId ? `${COURSE.canvasBase}/courses/${COURSE.canvasId}/files/${fileId}` : '';

CHAPTERS.all.forEach(item => { item.url = FILE_URL(item.fileId); });

[CANVAS.puzzles, CANVAS.commonThreads, CANVAS.indicatorAnalysis]
  .forEach(arr => arr.forEach(item => { item.url = ASSIGNMENT_URL(item.aid); }));

CANVAS.communityEngagement.url = ASSIGNMENT_URL(CANVAS.communityEngagement.aid);

[CANVAS.wellness, CANVAS.exitTicket]
  .forEach(item => { item.url = ASSIGNMENT_URL(item.aid); });

// Build each guided-notes doc's submission URL. Both the Guided Notes
// link and the Submit link are one-time-per-document actions, not
// per-chapter, so each only appears on ONE row in that document's span:
// Guided Notes on the FIRST chapter (read the notes as you start the
// reading), Submit on the LAST chapter (turn them in once you finish).
// Showing either pill on every row in a multi-chapter span reads as
// "do this separately for each chapter," which is wrong.
// chapters.html reads ch.guidedNotesUrl / ch.notesStartLabel /
// ch.notesSubmitUrl / ch.notesCoversLabel directly.
GUIDED_NOTES.forEach(gn => {
  gn.submitUrl      = ASSIGNMENT_URL(gn.aid);
  gn.firstChapterKey = gn.chapters[0];
  gn.lastChapterKey  = gn.chapters[gn.chapters.length - 1];
});

const numByKey = {};
CHAPTERS.all.forEach(c => { numByKey[c.key] = c.num; });

const guidedNotesByChapterKey = {};
GUIDED_NOTES.forEach(gn => {
  gn.chapters.forEach(key => { guidedNotesByChapterKey[key] = gn; });
});
CHAPTERS.all.forEach(item => {
  const gn = guidedNotesByChapterKey[item.key];
  const isFirstInGroup = gn && gn.firstChapterKey === item.key;
  const isLastInGroup  = gn && gn.lastChapterKey === item.key;
  const coversText = gn ? gn.chapters.map(k => numByKey[k]).join(', ') : '';

  item.guidedNotesUrl   = isFirstInGroup ? gn.url : '';
  item.notesStartLabel  = isFirstInGroup && gn.chapters.length > 1
    ? 'Covers ' + coversText + ' — notes start here'
    : '';
  item.notesSubmitUrl   = isLastInGroup ? gn.submitUrl : '';
  item.notesCoversLabel = isLastInGroup
    ? 'Covers ' + coversText + ' — submit once here'
    : '';
});

// ================================================================
//  PUZZLE DUE-DATE DERIVATION
//  Puzzle for session N is due the Wednesday of session N+1 at 11:59 p.m.
//  (sessionStart + 9 days). If that Wednesday falls inside a break session,
//  due shifts to Friday of session N (sessionStart + 4 days).
// ================================================================
const _DAY_MS = 86400000;
const _DUE_FMT = { weekday: 'short', month: 'short', day: 'numeric' };

const puzzleDueDate = sessionNum => {
  const idx = SCHEDULE.sessions.findIndex(s => s.num === sessionNum);
  if (idx < 0) return null;
  const start = SCHEDULE.sessionStarts[idx];
  if (!start) return null;

  // Clone the start date so you don't mutate the original schedule object
  let due = new Date(start.getTime());

  // If session N+1 is a break, the Wednesday of session N+1 doesn't exist —
  // shift due date to Friday of session N (start + 4 days) instead.
  const nextSession = SCHEDULE.sessions[idx + 1];
  if (nextSession && nextSession.break) {
    due.setDate(due.getDate() + 4);
    return due;
  }

  // Add 9 calendar days (JS handles DST adjustments automatically)
  due.setDate(due.getDate() + 9);

  return due;
};

const formatPuzzleDue = sessionNum => {
  const d = puzzleDueDate(sessionNum);
  return d ? d.toLocaleDateString('en-US', _DUE_FMT) + ', 11:59 p.m.' : 'TBA';
};

// ================================================================
//  COMMON THREADS SESSION DATE
//  A Common Threads round runs entirely in class on session N's own
//  Monday — no offset, unlike puzzleDueDate above. sessionStarts[N] IS
//  the date.
// ================================================================
const commonThreadsDate = sessionNum => {
  const idx = SCHEDULE.sessions.findIndex(s => s.num === sessionNum);
  if (idx < 0) return null;
  return SCHEDULE.sessionStarts[idx] || null;
};

const formatCommonThreadsDate = sessionNum => {
  const d = commonThreadsDate(sessionNum);
  return d ? d.toLocaleDateString('en-US', _DUE_FMT) : 'TBA';
};

// ================================================================
//  DERIVED — do not edit
// ================================================================
const CONFIG = {
  course:      COURSE,
  instructor:  INSTRUCTOR,
  schedule:    SCHEDULE,
  chapters:    CHAPTERS,
  guidedNotes: GUIDED_NOTES,
  grading:     GRADING,
  features:    FEATURES,
  textbook:    TEXTBOOK,
  sourceText:  SOURCE_TEXT,
  pages:       PAGES,
  canvas:      CANVAS,
  blocks:      BLOCKS,
};
