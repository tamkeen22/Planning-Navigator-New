# Planning Navigator — Webflow Migration Plan

> **Objective:** Migrate the Planning Navigator from a self-hosted static HTML file into Webflow, using Webflow CMS for question data, Webflow Designer for UI, and vanilla JS in a custom embed for all logic.

---

## PART 1 — DATA MODEL (Webflow CMS Collections)

### Collection 1: `Questions`

Each row = one question. All routing logic is encoded as plain text that `planner.js` will parse.

| Field Name | Type | Notes |
|---|---|---|
| `question-id` | Plain Text (slug) | Primary key. e.g. `LG1`, `PS1-03`, `PT7` |
| `question-text` | Plain Text | The full question sentence shown to the user |
| `category` | Plain Text | e.g. `Key Planning Considerations`, `Loft Extension – Detailed Checks` |
| `group-code` | Plain Text | Group this belongs to: `LG`, `PG`, `EXT`, `CONV`, `DEM`, `SITE`, `PS1`…`PS11` |
| `guidance` | Multi-line text | Advisory text shown in the yellow callout when selected |
| `illustration-slug` | Plain Text | Maps to SVG filename, e.g. `loft-extension`, `conservation-area` |
| `is-hard-stop` | Switch (Boolean) | `true` = answering Yes triggers immediate planning permission warning |
| `hard-stop-result` | Plain Text | The stop message shown if `is-hard-stop = true` and answered Yes |
| `yes-next-id` | Plain Text | Question ID to advance to on Yes (empty if hard stop or end) |
| `no-next-id` | Plain Text | Question ID to advance to on No |
| `yes-continue-flow` | Switch (Boolean) | If true, Yes does not advance — stays in group multi-select mode |
| `no-continue-flow` | Switch (Boolean) | If true, No does not advance — stays in group multi-select mode |
| `order` | Number | Display order within the group |

---

### Collection 2: `Question Groups`

Each row = one logical section of the questionnaire.

| Field Name | Type | Notes |
|---|---|---|
| `group-id` | Plain Text (slug) | e.g. `LG`, `EXT`, `CONV`, `DEM`, `SITE`, `PS1`, `PS11` |
| `group-title` | Plain Text | e.g. `Location & Property`, `Extensions & Additions` |
| `group-breadcrumb` | Plain Text | Short label for breadcrumb trail |
| `group-step` | Plain Text | Step category: `location`, `project`, `detail`, `site` |
| `question-ids` | Multi-line Text | Comma-separated ordered list of question IDs in this group |
| `sidebar-section` | Plain Text | Which sidebar section this maps to: `1`, `2`, `3`, `4` |
| `phase-type` | Plain Text | `single`, `two-phase`, or `site`. Two-phase groups (EXT/CONV/DEM) have hard-stop phase 1 and detailed phase 2 |
| `ps-group-id` | Plain Text | For Phase 2 PT questions only: which PS sub-group they expand into. e.g. `PT1` → `PS1` |

---

### Routing Architecture

The JS engine (`planner.js`) fetches both collections at page load via Webflow's `_wf_embed` data attributes or via the Webflow Data API, then maintains all question state in memory. No `localStorage`. State is reset on page refresh. This matches the original application's behaviour.

```
Page Load
  └─ JS fetches /questions-collection.json and /question-groups-collection.json
  └─ Builds in-memory maps: questionsMap{}, groupsMap{}, ptToPsMap{}
  └─ Calls init() → starts at group "LG", question "LG1"
```

---

## PART 2 — QUESTION DATA (All 80 Questions, Hard Rules)

### Section: Location & Property (LG)

| ID | Question | Hard Stop? | Yes→ | No→ | Legal Basis |
|---|---|---|---|---|---|
| LG1 | Is your property a listed building? | ✅ YES | STOP | LG2 | GPDO Sch.2 Part 1 Class A; Listed Buildings Act 1990 |
| LG2 | Is your property in a conservation area? | ✅ YES | STOP | LG3 | GPDO Sch.2 Part 1; TCPA 1990 s.72 |
| LG3 | Has your property been restricted by Article 4 Direction? | ✅ YES | STOP | LG4 | GPDO Art.4; TCPA 1990 s.56 |
| LG4 | Is your property in a National Park, AONB, or World Heritage Site? | ✅ YES | STOP | PG1 | GPDO Sch.2 Part 1; TCPA 1990 |

### Section: Project Gateway (PG)

| ID | Question | Hard Stop? | Yes→ | No→ |
|---|---|---|---|---|
| PG1 | Are you planning to build a completely new house? | ✅ YES | STOP | PG2 |
| PG2 | Are you planning to replace an existing house with a new one? | ✅ YES | STOP | PG3 |
| PG3 | Will you be adding extensions or additional buildings? | No | PG4 | PG4 |
| PG4 | Will you be converting or changing use? | No | PG5 | PG5 |
| PG5 | Will project involve demolition, fences, walls, gates, or driveways? | No | T1 | T1 |

> **Note:** PG3/PG4/PG5 are information-capture only, both Yes and No advance. Results are used to calculate which EXT/CONV/DEM group to render.

### Section: Extensions & Additions (PT — Phase 2 of EXT group)

| ID | Question | Hard Stop? | Has PS Sub-Group? |
|---|---|---|---|
| PT1 | Loft extension? | No | Yes → PS1 |
| PT2 | Single-storey extension? | No | Yes → PS2 |
| PT3 | Multi-storey extension? | ✅ YES | No |
| PT4 | Conservatory or sunroom? | No | Yes → PS4 |
| PT5 | New garage or converting garage? | No | Yes → PS5 |
| PT6 | External building (workshop, garden office, pool)? | No | Yes → PS6 |
| PT7 | Adding a balcony? | ✅ YES | No |
| PT8 | Adding a porch? | No | Yes → PS8 |
| PT9 | Annex or granny flat? | No | Yes → PS9 |

### Section: Conversions & Change of Use (PT — Phase 2 of CONV group)

| ID | Question | Hard Stop? | Has PS Sub-Group? |
|---|---|---|---|
| PT10 | Converting single dwelling into flats/bedsits? | ✅ YES | No |
| PT11 | Converting flats into single dwelling? | No | Yes → PS11 |
| PT12 | Converting to HMO? | ✅ YES | No |
| PT13 | Commercial to residential? | No | No (guidance only) |
| PT14 | Space above shops to residential? | No | No (guidance only) |
| PT15 | Residential to commercial? | ✅ YES | No |
| PT16 | General change of use? | No | No (guidance only) |

### Section: Demolition & Site Works (PT — Phase 2 of DEM group)

| ID | Question | Hard Stop? | Has PS Sub-Group? |
|---|---|---|---|
| PT17 | Demolishing a building? | ✅ YES | No |
| PT18 | Fences, walls, gates, driveways? | No | No (guidance only) |

### Section: Sub-Questions — Loft Extension (PS1)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS1-01 | Mansard roof? | ✅ YES | PS1-02 |
| PS1-02 | Raises eaves above original? | ✅ YES | PS1-03 |
| PS1-03 | Exceeds 40m² (conservation) / 50m² (elsewhere)? | ✅ YES | PS1-04 |
| PS1-04 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — Single-Storey Extension (PS2)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS2-01 | Projects >4m (detached) or >3m (semi/terraced)? | ✅ YES | PS2-02 |
| PS2-02 | Exceeds 4m in height? | ✅ YES | PS2-03 |
| PS2-03 | Area >50% curtilage? | ✅ YES | PS2-04 |
| PS2-04 | Extension at rear, not in front of main elevation? | Inverse Stop (No=STOP) | PS2-05 |
| PS2-05 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — Conservatory (PS4)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS4-01 | Projects >4m (detached) or >3m (semi/terraced)? | ✅ YES | PS4-02 |
| PS4-02 | Exceeds 4m in height? | ✅ YES | PS4-03 |
| PS4-03 | Area >50% curtilage? | ✅ YES | PS4-04 |
| PS4-04 | Within 2m of boundary and taller than 2.5m? | ✅ YES | PS4-05 |
| PS4-05 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — Garage (PS5)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS5-01 | Habitable/serviced space? | No (BC only) | PS5-02 |
| PS5-02 | Exceeds 4m (or 3m near boundary)? | ✅ YES | PS5-03 |
| PS5-03 | Area >50% curtilage? | ✅ YES | PS5-04 |
| PS5-04 | Used as separate dwelling or business? | ✅ YES | PS5-05 |
| PS5-05 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — External Building (PS6)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS6-01 | Habitable/serviced? | No (BC only) | PS6-02 |
| PS6-02 | Exceeds 4m (or 3m near boundary)? | ✅ YES | PS6-03 |
| PS6-03 | Area >50% curtilage? | ✅ YES | PS6-04 |
| PS6-04 | Rear/side and 2m from boundary if >2.5m? | Inverse Stop (No=STOP) | PS6-05 |
| PS6-05 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — Porch (PS8)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS8-01 | Projects >3m from original wall? | ✅ YES | PS8-02 |
| PS8-02 | Exceeds 3m in height? | ✅ YES | PS8-03 |
| PS8-03 | Covers >50% of frontage? | ✅ YES | PS8-04 |
| PS8-04 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — Annex (PS9)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS9-01 | Used as separate dwelling/business? | ✅ YES | PS9-02 |
| PS9-02 | More than one storey? | ✅ YES | PS9-03 |
| PS9-03 | Exceeds 4m (or 3m near boundary)? | ✅ YES | PS9-04 |
| PS9-04 | Area >50% curtilage? | ✅ YES | PS9-05 |
| PS9-05 | Located at front of main dwelling? | ✅ YES | PS9-06 |
| PS9-06 | In conservation area or listed building? | ✅ YES | END |

### Section: Sub-Questions — Flat Conversion (PS11)

| ID | Question | Hard Stop? | No→ |
|---|---|---|---|
| PS11-01 | Converting more than one flat into single home? | No | T1 |
| PS11-02 | Extension exceeds 4m (or 3m near boundary)? | ✅ YES | PS11-03 |
| PS11-03 | Area >50% curtilage? | ✅ YES | PS11-04 |
| PS11-04 | Extension more than one storey? | ✅ YES | PS11-05 |
| PS11-05 | Involves external changes (windows, doors, roof)? | ✅ YES | PS11-06 |
| PS11-06 | Involves structural work? | No (BC only) | PS11-07 |
| PS11-07 | In conservation area or listed building? | ✅ YES | END |

### Section: Site Checks (T)

| ID | Question | Both answers → |
|---|---|---|
| T1 | Flood risk area? | T2 |
| T2 | Affects highway access, parking, or visibility? | T3 |
| T3 | Potentially contaminated site? | T4 |
| T4 | Affects protected habitats, ecology, or trees? | T5 |
| T5 | Area of archaeological interest? | END (show results) |

---

## PART 3 — JAVASCRIPT REQUIREMENTS

### File: `planner.js`

Wrapped in an IIFE to prevent global scope pollution. Uses only `var`, `let`, `const`. No ES modules.

```
(function() {
  // ── DATA ──────────────────────────────────────────
  var questionsData = []; // populated from CMS embed
  var groupsData = [];    // populated from CMS embed
  var questionsMap = {};  // { questionId: questionObject }
  var groupsMap = {};     // { groupId: groupObject }
  var ptToPsMap = {};     // { 'PT1': 'PS1', 'PT2': 'PS2', ... }

  // ── STATE ─────────────────────────────────────────
  var answers = {};           // { questionId: { question, answer, value } }
  var currentGroupId = 'LG';
  var currentQuestionId = 'LG1';
  var questionHistory = [];   // for Back button
  var stopState = null;       // { result, guidance, fromQuestion }
  var groupPhaseState = {};   // { groupId: { phase, hardStops, nonHardStops } }

  // ── INIT ──────────────────────────────────────────
  function init() { ... }

  // ── RENDERING ─────────────────────────────────────
  function renderGroup(groupId) { ... }
  function renderQuestion(qId) { ... }
  function renderResults() { ... }

  // ── NAVIGATION ────────────────────────────────────
  function goNext() { ... }
  function goBack() { ... }

  // ── LOGIC ─────────────────────────────────────────
  function handleAnswer(qId, value) { ... }
  function evaluateHardStop(qId, value) { ... } // must enforce all stops exactly
  function computeNextQuestion(qId, value) { ... }
  function isPTGroupComplete(groupId) { ... }

  // ── HELPERS ───────────────────────────────────────
  function updateContinueState() { ... }
  function updateProgress() { ... }
  function updateStepIndicators() { ... }
  function buildAnswerSummary() { ... }
  function buildNextSteps(answers, stopState) { ... }

  document.addEventListener('DOMContentLoaded', init);
})();
```

### Key Logic Rules (must be enforced without exception)

1. **Hard Stops (LG1, LG2, LG3, LG4):** Answering "Yes" immediately routes to a stop result screen. The user cannot proceed or navigate around it.

2. **Project Gateway Hard Stops (PG1, PG2):** Same as above — answering "Yes" is a terminal result.

3. **Phase 1 EXT/CONV/DEM Hard Stops (PT3, PT7, PT10, PT12, PT15, PT17):** Selecting any of these in the first phase (hard-stop phase) immediately locks the result.

4. **Sub-question Hard Stops:** Every `✅ YES` in Part 2 tables above must trigger a stop when the answer is "Yes" (or "No" for inverse stops like PS2-04, PS6-04).

5. **Two-Phase Groups (EXT, CONV, DEM):**
   - Phase 1 shows only questions with `is-hard-stop = true`
   - Phase 2 shows all remaining PT questions as multi-select checkboxes
   - Selecting an item in Phase 2 that has a `ps-group-id` expands an accordion with sub-questions
   - Selecting an item that has no `ps-group-id` just toggles it and shows a yellow `.callout` with guidance

6. **Site Checks (T1–T5):** These are informational only. Both Yes and No always advance. Answers recorded for results summary.

7. **Back Button:** Pops from `questionHistory[]` stack. Must restore the exact previous state including any callouts.

8. **No localStorage:** All state lives in JS variables. A page reload resets everything.

---

## PART 4 — HTML STRUCTURE REQUIREMENTS

### File: `webflow-embed.html`

This is the embed block pasted into Webflow. It must use **Webflow CSS classes** for all visible styling. No inline styles. The JS injects content into named `div` slots.

```html
<!-- Planning Navigator Shell -->
<div class="pn-shell" id="questionShell">

  <!-- Step Progress Bar -->
  <div class="pn-step-strip" id="stepStrip">
    <div class="pn-step active" data-step="1">
      <span class="pn-step-num">1</span>
      <span class="pn-step-label">Location &amp; Property</span>
    </div>
    <div class="pn-step" data-step="2">
      <span class="pn-step-num">2</span>
      <span class="pn-step-label">Project Questions</span>
    </div>
    <div class="pn-step" data-step="3">
      <span class="pn-step-num">3</span>
      <span class="pn-step-label">Your Project Features</span>
    </div>
    <div class="pn-step" data-step="4">
      <span class="pn-step-num">4</span>
      <span class="pn-step-label">Site Checks</span>
    </div>
  </div>

  <!-- Main Layout -->
  <div class="pn-layout">

    <!-- Sidebar Journey -->
    <aside class="pn-sidebar" id="pnSidebar">
      <div class="pn-journey-label">Your Journey</div>
      <div class="pn-journey-steps" id="journeySteps">
        <!-- Injected by JS -->
      </div>
      <div class="pn-house-tool-card">
        <p>Not sure about any of these?</p>
        <a href="#" class="pn-house-tool-btn">Open Interactive House Tool →</a>
      </div>
    </aside>

    <!-- Question Panel -->
    <main class="pn-main">

      <!-- Breadcrumb -->
      <div class="pn-crumb" id="pnCrumb"></div>

      <!-- Question Card -->
      <div class="pn-question-card" id="questionContainer">
        <!-- Injected by JS per question -->
      </div>

    </main>
  </div><!-- /pn-layout -->

  <!-- Sticky Footer -->
  <div class="pn-footer">
    <div class="pn-progress-bar">
      <div class="pn-progress-fill" id="progressFill"></div>
    </div>
    <div class="pn-footer-inner">
      <span class="pn-progress-label" id="progressLabel">Question 1 of 23</span>
      <div class="pn-footer-actions">
        <button class="pn-btn-secondary" id="backBtn">← Back</button>
        <button class="pn-btn-primary" id="nextBtn" disabled>Continue →</button>
      </div>
    </div>
  </div>

</div><!-- /pn-shell -->

<!-- Results Shell (hidden until all questions answered) -->
<div class="pn-result-shell pn-hidden" id="resultShell">
  <div class="pn-result-container" id="resultContainer">
    <!-- Injected by JS -->
  </div>
</div>

<!-- Data passed from Webflow CMS via embed attributes -->
<script
  id="pnQuestionsData"
  type="application/json"
  data-questions="{{wf-questions-json}}"
  data-groups="{{wf-groups-json}}"
></script>
```

### CSS Classes (design in Webflow Designer, referenced in JS)

| Class | Element | Notes |
|---|---|---|
| `pn-shell` | Root wrapper | |
| `pn-layout` | Grid: sidebar + main | |
| `pn-sidebar` | Left sidebar | |
| `pn-main` | Right content panel | |
| `pn-question-card` | White card container | |
| `pn-crumb` | Breadcrumb row | |
| `pn-option-item` | Each selectable option row | |
| `pn-option-item.selected` | Selection state | |
| `pn-opt-illus` | SVG illustration block | |
| `pn-opt-body` | Text body | |
| `pn-opt-right` | Checkbox + info button | |
| `pn-option-check` | Checkbox square | |
| `pn-option-label` | Bold label | |
| `pn-option-desc` | Sub-label (hidden by default) | |
| `pn-callout` | Yellow guidance box | |
| `pn-accordion-header` | Accordion toggle row | |
| `pn-accordion-body` | Expandable sub-questions | |
| `pn-step-strip` | Top progress steps | |
| `pn-step` | Individual step | |
| `pn-step.active` | Current step | |
| `pn-step.done` | Completed step | |
| `pn-footer` | Sticky bottom bar | |
| `pn-btn-primary` | Continue button | |
| `pn-btn-secondary` | Back button | |
| `pn-progress-fill` | Progress bar inner | |
| `pn-hidden` | Utility: display:none | |
| `pn-result-shell` | Results page wrapper | |
| `pn-result-card` | Result section card | |
| `pn-action-card` | Next step card | |
| `pn-answer-summary` | Collapsible summary | |

---

## PART 5 — DELIVERABLES

### 1. `planner.js` — Full JavaScript Logic Engine

- Wrapped in IIFE: `(function() { ... })();`
- All variables declared with `var`/`let`/`const` — no `import`/`export`
- Every question ID referenced in comments, e.g. `// LG1 — Listed Building Act 1990`
- Every hard stop enforced before advancing to next question
- Functions: `init`, `renderGroup`, `renderQuestion`, `handleAnswer`, `evaluateHardStop`, `computeNextQuestion`, `goNext`, `goBack`, `renderResults`, `updateProgress`, `updateStepIndicators`, `buildAnswerSummary`, `buildNextSteps`, `isPTGroupComplete`
- Reads question data from `<script id="pnQuestionsData">` JSON embed or Webflow data attributes
- DOM manipulation only — no React, no Vue, no jQuery

### 2. `webflow-embed.html` — Webflow Embed Block

- Contains only structural HTML with semantic class names
- No inline styles whatsoever
- All interactive elements have unique IDs for JS binding
- Includes `<script>` tags for `planner.js`
- Compatible with Webflow's Custom Code embed block
- Includes JSON script tag to pass CMS data from Webflow to JS

### 3. `questions-import.csv` — CMS Import for Questions Collection

Columns exactly matching the Questions collection schema in Part 1:

```
question-id, question-text, category, group-code, guidance, illustration-slug,
is-hard-stop, hard-stop-result, yes-next-id, no-next-id,
yes-continue-flow, no-continue-flow, order
```

All 80 questions pre-populated and ready to import directly into Webflow CMS.

### 4. `question-sets-import.csv` — CMS Import for Question Groups

Columns matching the Question Groups collection schema in Part 1:

```
group-id, group-title, group-breadcrumb, group-step, question-ids,
sidebar-section, phase-type, ps-group-id
```

All 15 groups pre-populated (LG, PG, EXT, CONV, DEM, SITE, PS1, PS2, PS4, PS5, PS6, PS8, PS9, PS11).

---

## Implementation Order

1. **Set up Webflow CMS collections** — create both collections using schema in Part 1
2. **Import CSVs** — `questions-import.csv` then `question-sets-import.csv`
3. **Design UI in Webflow Designer** — create all `pn-*` CSS classes and layout
4. **Create the Webflow Page** — add custom embed block
5. **Paste `webflow-embed.html`** — into the custom embed
6. **Add `planner.js`** — in Webflow Project Settings → Custom Code → Footer
7. **Wire data** — configure Webflow CMS API endpoint or embed JSON via page template
8. **Test all 80 questions** — verify every hard stop triggers correctly
9. **Test mobile** — verify breakpoints work inside Webflow's responsive grid

---

## Key Constraints (Reminders)

> [!IMPORTANT]
> - No frameworks. No jQuery. No React. Vanilla JS inside an IIFE only.
> - No `localStorage`. State is held in JS variables only and resets on refresh.
> - All hard stop rules must fire **exactly** as defined in Part 2. No softening, no exceptions, no "close enough".
> - No inline styles in `webflow-embed.html` — all visual design lives in Webflow's class system.
> - JS comments must reference the question ID and the legal basis (e.g. `// LG1 — GPDO Sch.2 Part 1 Class A`).
> - Code must work inside Webflow's **Custom Embed block** — no ES module syntax (`import`/`export`).
> - CMS fields must match the CSV column names exactly for clean import.

---

*Last updated: 2026-03-04*
