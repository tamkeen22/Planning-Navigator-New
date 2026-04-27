# Planning Navigator — Logic Plan

> Single source of truth for every question, routing rule, hard stop, and sub-question relationship in the application.
> Derived from `Master table.csv`, `PlanNav_QuestionMapping_003(Rules & Guidance).csv`, and `planning-navigation-full.html`.

---

## Table of Contents

1. [Question Inventory](#1-question-inventory)
2. [Hard-Stop Catalogue](#2-hard-stop-catalogue)
3. [Sub-Question Ownership Map](#3-sub-question-ownership-map)
4. [Question Set Reference](#4-question-set-reference)
5. [Flow & Routing Logic](#5-flow--routing-logic)

---

## 1. Question Inventory

### 1A. Location Gateway (Group: `LG`)

All shown together as **multi-select checkboxes** on a single screen. Selecting any one triggers a hard stop.

| ID   | Question | Type | On "Yes" | On "No" |
|------|----------|------|----------|---------|
| LG1 | Is your property a listed building? | Multi-select | **HARD STOP** — Listed Building Consent required | → LG2 |
| LG2 | Is your property in a conservation area? | Multi-select | **HARD STOP** — PD rights restricted | → LG3 |
| LG3 | Has your property been restricted by an Article 4 Direction? | Multi-select | **HARD STOP** — PD rights withdrawn | → LG4 |
| LG4 | Is your property in a protected area (National Park, AONB, WHS)? | Multi-select | **HARD STOP** — Extra limits apply | → PG1 |

**Rendering**: All 4 shown simultaneously with illustrated `<option-row>` components + a "None of these apply" skip button. If none selected, all are recorded as "No" and flow advances to PG1.

---

### 1B. Project Gateway (Group: `PG`)

Sequential Yes/No questions. These **branch** the flow — they determine which subsequent sections appear.

| ID  | Question | Type | On "Yes" | On "No" |
|-----|----------|------|----------|---------|
| PG1 | Are you planning to build a completely new house? | Yes/No | **HARD STOP** — Full planning permission required | → PG2 |
| PG2 | Are you planning to replace an existing house? | Yes/No | **HARD STOP** — Planning permission required | → PG3 |
| PG3 | Will you be adding extensions or additional buildings? | Yes/No | → PG4 *(flags `wantsExt`)* | → PG4 |
| PG4 | Will you be converting or changing the use? | Yes/No | → PG5 *(flags `wantsConv`)* | → PG5 |
| PG5 | Will your project involve demolition or site works? | Yes/No | → T1 *(flags `wantsDem`)* | → T1 |

**Rendering**: Hard-stop questions (PG1, PG2) shown first as a checkbox multi-select phase. Then non-hard-stop questions (PG3, PG4, PG5) shown sequentially as Yes/No cards.

**Flow branching**: After PG5, `computeFlow()` builds the remaining flow:
- Always: `[LG, PG]`
- If PG3 = Yes: `+ EXT`
- If PG4 = Yes: `+ CONV`
- If PG5 = Yes: `+ DEM`
- If any of PG3/PG4/PG5 = Yes: `+ SITE` in the end after all the questions

---

### 1C. Site Checks & Considerations (Group: `SITE`)

All shown together as **multi-select checkboxes** on a single screen (same pattern as LG). None are hard stops — they are informational.

| ID | Question | Type | On "Yes" | On "No" |
|----|----------|------|----------|---------|
| T1 | Is your site in a flood risk area? | Multi-select | Record + guidance | → T2 |
| T2 | Will your project affect highway access, parking, or visibility? | Multi-select | Record + guidance | → T3 |
| T3 | Is your site potentially contaminated? | Multi-select | Record + guidance | → T4 |
| T4 | Will your project affect protected habitats, ecology, or trees? | Multi-select | Record + guidance | → T5 |
| T5 | Is your site in an area of archaeological interest? | Multi-select | Record + guidance | End of SITE |

**Rendering**: Same as LG — illustrated rows, "None" skip button. After completion, flow moves to first project type group (EXT, CONV, or DEM).

---

### 1D. Extensions & Additions (Group: `EXT`)

Sequential Yes/No questions shown one at a time. Answering "Yes" opens an accordion with the corresponding PS sub-question set.

| ID  | Question | Type | On "Yes" | On "No" |
|-----|----------|------|----------|---------|
| PT1 | Are you planning a loft extension? | Yes/No | → **PS1** (accordion) | → PT2 |
| PT2 | Are you planning a single-storey extension? | Yes/No | → **PS2** (accordion) | → PT3 |
| PT3 | Are you planning a multi-storey extension? | Yes/No | **HARD STOP** — Planning permission required | → PT4 |
| PT4 | Are you planning a conservatory or sunroom? | Yes/No | → **PS4** (accordion) | → PT5 |
| PT5 | Are you planning a new garage or converting a garage? | Yes/No | → **PS5** (accordion) | → PT6 |
| PT6 | Are you planning any external building (workshop, garden office, pool)? | Yes/No | → **PS6** (accordion) | → PT7 |
| PT7 | Are you planning to add a balcony? | Yes/No | **HARD STOP** — Planning permission required | → PT8 |
| PT8 | Are you planning to add a porch? | Yes/No | → **PS8** (accordion) | → PT9 |
| PT9 | Are you planning an annex or granny flat? | Yes/No | → **PS9** (accordion) | → T1 |

**Rendering**: One card active at a time. When "Yes" is selected for a PT that has a PS set, the PS sub-questions appear as a **multi-select checkbox accordion** inside the parent card.

---

### 1E. Conversions & Change of Use (Group: `CONV`)

Same pattern as EXT — sequential Yes/No, some trigger PS sub-questions, some are hard stops.

| ID   | Question | Type | On "Yes" | On "No" |
|------|----------|------|----------|---------|
| PT10 | Are you converting a single dwelling into flats or bedsits? | Yes/No | **HARD STOP** — Planning permission required | → PT11 |
| PT11 | Are you converting flats into a single dwelling? | Yes/No | → **PS11** (accordion) | → PT12 |
| PT12 | Are you converting a single dwelling into an HMO? | Yes/No | **HARD STOP** — Planning permission required | → PT13 |
| PT13 | Are you converting a commercial building into residential? | Yes/No | → T1 (no sub-questions) | → PT14 |
| PT14 | Are you converting space above shops into residential? | Yes/No | → T1 (no sub-questions) | → PT15 |
| PT15 | Are you converting a residential building into commercial? | Yes/No | **HARD STOP** — Planning permission required | → PT16 |
| PT16 | Are you making a general change of use? | Yes/No | → T1 (no sub-questions) | → PT17 |

---

### 1F. Demolition & Site Works (Group: `DEM`)

| ID   | Question | Type | On "Yes" | On "No" |
|------|----------|------|----------|---------|
| PT17 | Will your project involve demolishing a building? | Yes/No | **HARD STOP** — Planning permission required | → PT18 |
| PT18 | Will your project involve other site works (fences, walls, gates, driveways)? | Yes/No | → T1 (no sub-questions) | → T1 |

---

### 1G. Sub-Question Sets (PS Groups)

These are detailed compliance checks that appear **inside an accordion** when the parent PT question is answered "Yes". They are rendered as **multi-select checkboxes** (same as LG/SITE). Selecting any question with a stop flag triggers a hard stop.

#### PS1 — Loft Extension (Parent: PT1)

| ID | Question | Stop? |
|----|----------|-------|
| PS1-01 | Is the loft a Mansard roof? | ✅ Yes |
| PS1-02 | Does the loft raise eaves above original? | ✅ Yes |
| PS1-03 | Will total new space exceed 40m² (conservation) or 50m² (elsewhere)? | ✅ Yes |
| PS1-04 | Is property in a conservation area or listed? | ✅ Yes |

#### PS2 — Single-storey Extension (Parent: PT2)

| ID | Question | Stop? |
|----|----------|-------|
| PS2-01 | Will extension project more than 4m (detached) or 3m (semi/terraced)? | ✅ Yes |
| PS2-02 | Will extension exceed 4m in height? | ✅ Yes |
| PS2-03 | Will total area exceed 50% of curtilage? | ✅ Yes |
| PS2-04 | Is extension at rear and not in front of main elevation? | ✅ **On "No"** |
| PS2-05 | Is property in a conservation area or listed? | ✅ Yes |

#### PS4 — Conservatory / Sunroom (Parent: PT4)

| ID | Question | Stop? |
|----|----------|-------|
| PS4-01 | Will conservatory project more than 4m (detached) or 3m (semi/terraced)? | ✅ Yes |
| PS4-02 | Will conservatory exceed 4m in height? | ✅ Yes |
| PS4-03 | Will total area exceed 50% of curtilage? | ✅ Yes |
| PS4-04 | Is conservatory within 2m of boundary and taller than 2.5m? | ✅ Yes |
| PS4-05 | Is property in a conservation area or listed? | ✅ Yes |

#### PS5 — Garage / Conversion (Parent: PT5)

| ID | Question | Stop? |
|----|----------|-------|
| PS5-01 | Will garage be habitable or serviced (plumbing, kitchen)? | ❌ No (info only) |
| PS5-02 | Will garage exceed 4m height (or 3m within 2m of boundary)? | ✅ Yes |
| PS5-03 | Will total area exceed 50% of curtilage? | ✅ Yes |
| PS5-04 | Will garage be used as separate dwelling or business? | ✅ Yes |
| PS5-05 | Is property in a conservation area or listed? | ✅ Yes |

#### PS6 — External Building (Parent: PT6)

| ID | Question | Stop? |
|----|----------|-------|
| PS6-01 | Will building be habitable or include services? | ❌ No (info only) |
| PS6-02 | Will building exceed 4m height (or 3m within 2m of boundary)? | ✅ Yes |
| PS6-03 | Will total area exceed 50% of curtilage? | ✅ Yes |
| PS6-04 | Is building at rear/side and at least 2m from boundary if > 2.5m? | ✅ **On "No"** |
| PS6-05 | Is property in a conservation area or listed? | ✅ Yes |

#### PS8 — Porch (Parent: PT8)

| ID | Question | Stop? |
|----|----------|-------|
| PS8-01 | Will porch project more than 3m from original wall? | ✅ Yes |
| PS8-02 | Will porch exceed 3m in height? | ✅ Yes |
| PS8-03 | Will porch cover more than 50% of frontage? | ✅ Yes |
| PS8-04 | Is property in a conservation area or listed? | ✅ Yes |

#### PS9 — Annex / Granny Flat (Parent: PT9)

| ID | Question | Stop? |
|----|----------|-------|
| PS9-01 | Will building be used as separate dwelling or business? | ✅ Yes |
| PS9-02 | Will annex be more than one storey? | ✅ Yes |
| PS9-03 | Will annex exceed 4m height (or 3m within 2m of boundary)? | ✅ Yes |
| PS9-04 | Will total area exceed 50% of curtilage? | ✅ Yes |
| PS9-05 | Is annex at front of main dwelling? | ✅ Yes |
| PS9-06 | Is property in a conservation area or listed? | ✅ Yes |

#### PS11 — Flat Conversion (Parent: PT11)

| ID | Question | Stop? |
|----|----------|-------|
| PS11-01 | Are you converting more than one flat into a single home? | ❌ No (branches to PS11-02 or T1) |
| PS11-02 | Will any extension exceed 4m height (or 3m within 2m of boundary)? | ✅ Yes |
| PS11-03 | Will extensions/outbuildings cover more than 50% of curtilage? | ✅ Yes |
| PS11-04 | Will any extension be more than one storey? | ✅ Yes |
| PS11-05 | Will conversion involve external changes (windows, doors, roof)? | ✅ Yes |
| PS11-06 | Does conversion involve structural work? | ❌ No (info only) |
| PS11-07 | Will conversion affect fire safety or access? | ❌ No (info only) |

---

## 2. Hard-Stop Catalogue

A **hard stop** means the user's project cannot proceed under Permitted Development. The result is shown immediately or aggregated on the results page.

### Location Hard Stops (any "Yes" in LG group)

| Trigger | Condition | Result Message |
|---------|-----------|----------------|
| LG1 = Yes | Property is a listed building | "Your project will need special consent and cannot rely on standard permitted development rights." |
| LG2 = Yes | Property in conservation area | "Some works may need full planning permission, and additional checks may apply." |
| LG3 = Yes | Article 4 Direction applies | "Some types of work that are normally allowed will require planning permission." |
| LG4 = Yes | Property in National Park / AONB / WHS | "Extra limits apply and some work may require full planning permission." |

**Behaviour**: All selected LG questions are collected. On "Continue", `showResults()` is called immediately with the first stop reason displayed prominently. All selected items and their guidance appear in the results.

### Project Gateway Hard Stops

| Trigger | Condition | Result Message |
|---------|-----------|----------------|
| PG1 = Yes | New dwelling | "Full planning permission likely required." |
| PG2 = Yes | Replacement dwelling | "Planning permission required if footprint/layout changes." |

**Behaviour**: PG1 and PG2 are shown in a checkbox multi-select "hard-stop phase". If either is selected and "Continue" is clicked, `showResults()` fires. If neither is selected, they are marked as "No" and flow advances to PG3.

### Project Type Hard Stops (in EXT / CONV / DEM)

| Trigger | Condition | Result Message |
|---------|-----------|----------------|
| PT3 = Yes | Multi-storey extension | "Planning permission required; building control needed." |
| PT7 = Yes | Adding a balcony | "Planning permission and building control required." |
| PT10 = Yes | Converting dwelling to flats/bedsits | "Planning permission and Building Control required." |
| PT12 = Yes | Converting to HMO | "Planning permission required; check local housing and safety rules." |
| PT15 = Yes | Converting residential to commercial | "Planning permission and Building Control required." |
| PT17 = Yes | Demolishing a building | "Planning permission often required; building control required." |

**Behaviour**: When a PT hard stop fires, `stopState` is set and auto-advance is blocked. On "Continue", `showResults()` displays the stop.

### Sub-Question Hard Stops (inside PS accordions)

Every PS question marked with ✅ in the tables above triggers a hard stop when selected in the accordion multi-select. The behaviour is:

1. User selects PS checkbox(es) in the accordion
2. User clicks "Continue"
3. `goNext()` checks if any selected PS question has `stop: true`
4. If yes → `showResults()` with the first stop reason
5. If no → mark unselected as "No", collapse accordion, advance to next PT

---

## 3. Sub-Question Ownership Map

```
PT1  (Loft extension)              → PS1  [PS1-01, PS1-02, PS1-03, PS1-04]
PT2  (Single-storey extension)     → PS2  [PS2-01, PS2-02, PS2-03, PS2-04, PS2-05]
PT4  (Conservatory)                → PS4  [PS4-01, PS4-02, PS4-03, PS4-04, PS4-05]
PT5  (Garage)                      → PS5  [PS5-01, PS5-02, PS5-03, PS5-04, PS5-05]
PT6  (External building)           → PS6  [PS6-01, PS6-02, PS6-03, PS6-04, PS6-05]
PT8  (Porch)                       → PS8  [PS8-01, PS8-02, PS8-03, PS8-04]
PT9  (Annex / granny flat)         → PS9  [PS9-01, PS9-02, PS9-03, PS9-04, PS9-05, PS9-06]
PT11 (Flat conversion)             → PS11 [PS11-01 … PS11-07]
```

### PT questions with NO sub-questions

| ID | Question | Notes |
|----|----------|-------|
| PT3 | Multi-storey extension | Hard stop only — no PS set |
| PT7 | Balcony | Hard stop only — no PS set |
| PT10 | Dwelling → flats/bedsits | Hard stop only — no PS set |
| PT12 | Dwelling → HMO | Hard stop only — no PS set |
| PT13 | Commercial → residential | No PS; routes to T1 |
| PT14 | Space above shops → residential | No PS; routes to T1 |
| PT15 | Residential → commercial | Hard stop only — no PS set |
| PT16 | General change of use | No PS; routes to T1 |
| PT17 | Demolition | Hard stop only — no PS set |
| PT18 | Other site works | No PS; routes to T1 |

The `ptToPs` mapping in the HTML code:

```javascript
const ptToPs = {
    PT1:  'PS1',
    PT2:  'PS2',
    PT4:  'PS4',
    PT5:  'PS5',
    PT6:  'PS6',
    PT8:  'PS8',
    PT9:  'PS9',
    PT11: 'PS11'
};
```

---

## 4. Question Set Reference

### Set 1: Location Gateway (`LG`)

| Property | Value |
|----------|-------|
| Group ID | `LG` |
| Title | About Your Property & Location |
| Step | `location` |
| Questions | LG1, LG2, LG3, LG4 |
| Rendering | Multi-select with illustrated SVG rows |
| All hard stops? | Yes — any "Yes" ends the flow |
| Total questions | **4** |

### Set 2: Project Gateway + Site Checks (`PG` + `SITE`)

| Property | Value |
|----------|-------|
| Group IDs | `PG`, `SITE` |
| Title | About Your Project / Site Checks & Considerations |
| Step | `project` / `site` |
| Questions | PG1–PG5 (gateway), T1–T5 (site) |
| Rendering | PG: hard-stop phase (PG1-PG2) then sequential Yes/No (PG3-PG5). SITE: multi-select |
| Hard stops | PG1, PG2 |
| Total questions | **10** |

### Set 3: Extensions & Additions (`EXT` + PS sub-sets)

| Property | Value |
|----------|-------|
| Group IDs | `EXT`, `PS1`, `PS2`, `PS4`, `PS5`, `PS6`, `PS8`, `PS9` |
| Title | Extensions & Additions |
| Step | `detail` |
| PT questions | PT1–PT9 (9 questions) |
| PS questions | 4 + 5 + 5 + 5 + 5 + 4 + 6 = **34 sub-questions** |
| PT hard stops | PT3 (multi-storey), PT7 (balcony) |
| PS hard stops | 30 out of 34 sub-questions can trigger stops |
| Rendering | Sequential Yes/No with accordion sub-questions |
| Total questions (max) | **43** |

### Set 4: Conversions, Demolition & Change of Use (`CONV` + `DEM` + PS11)

| Property | Value |
|----------|-------|
| Group IDs | `CONV`, `DEM`, `PS11` |
| Title | Conversions & Change of Use / Demolition & Site Works |
| Step | `detail` |
| PT questions | PT10–PT18 (9 questions) |
| PS questions | PS11-01 – PS11-07 = **7 sub-questions** |
| PT hard stops | PT10, PT12, PT15, PT17 |
| PS hard stops | PS11-02, PS11-03, PS11-04, PS11-05 |
| Rendering | Sequential Yes/No with accordion sub-questions (PT11 only) |
| Total questions (max) | **16** |

---

## 5. Flow & Routing Logic

### Flow Computation

```
Always:       LG → PG
Conditional:  + SITE  (if PG3=Yes OR PG4=Yes OR PG5=Yes)
              + EXT   (if PG3=Yes)
              + CONV  (if PG4=Yes)
              + DEM   (if PG5=Yes)
```

### Minimum path (all "No"): 4 (LG) + 5 (PG) = **9 questions**
### Maximum path (all "Yes"): 4 + 5 + 5 + 43 + 16 = **73 questions**

### State Machine Diagram

```
LG (multi-select)
  ├── Any "Yes" → RESULTS (hard stop)
  └── All "No"  → PG

PG (two-phase)
  ├── Phase 1: Hard-stops (PG1, PG2)
  │     ├── Any "Yes" → RESULTS (hard stop)
  │     └── None selected → Phase 2
  └── Phase 2: Sequential (PG3, PG4, PG5)
        └── After PG5 → compute flow → SITE (if any project type selected)

SITE (multi-select, no stops)
  └── After continue → first project type group

EXT (accordion state machine)
  ├── PT by PT sequentially
  │     ├── "No"  → next PT
  │     ├── "Yes" + no PS set → hard stop (PT3, PT7)
  │     └── "Yes" + has PS set → expand accordion
  │           ├── PS multi-select
  │           │     ├── Any PS stop selected → RESULTS
  │           │     └── No stops → collapse, next PT
  └── All PTs done → CONV (or DEM, or RESULTS)

CONV (same accordion pattern as EXT)
  └── All PTs done → DEM (or RESULTS)

DEM (sequential, no accordions)
  └── All PTs done → RESULTS
```

### Accordion State Object

```javascript
accordionState = {
    EXT:  { mode: 'pt'|'ps', activePTIndex, expandedPT, psGroup, psIndex },
    CONV: { mode: 'pt'|'ps', activePTIndex, expandedPT, psGroup, psIndex }
};
```

- `mode: 'pt'` — showing PT questions sequentially
- `mode: 'ps'` — PT answered "Yes", accordion expanded showing PS sub-questions
- On "Continue" while in `mode: 'ps'` — collapse accordion, advance to next PT
- On all PTs done — `moveToNextPTGroup()` chains to next group

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total unique questions | **73** |
| Location constraints (LG) | 4 |
| Project gateway (PG) | 5 |
| Site checks (T) | 5 |
| Project types (PT) | 18 |
| Sub-questions (PS) | 41 |
| Total hard-stop conditions | **46** |
| Question sets (PS groups) | 8 |
| Logical groups | 16 |

---

## 6. Agent Suggestions

> Analysis of the proposed UI approach: unified illustrated option-rows across all four sets, hard-stop grouping, and accordion sub-questions.

### Question 1: Does the hard-stop grouping logic make sense given the question dependencies?

**Short answer: Yes for PG. Mostly yes for EXT/CONV, but with a nuance worth discussing.**

#### PG group — clean fit ✅

PG1 ("new house?") and PG2 ("replace house?") are completely independent of each other and independent of PG3–PG5. Grouping them together as a "do any of these apply?" multi-select screen is exactly right. If the user selects either one, we stop. If neither is selected, we mark both as "No" and show PG3–PG5 as the next screen.

PG3–PG5 are also independent of each other — they're three parallel flags (extensions, conversions, demolition) that can be combined in any permutation. Showing them simultaneously as "select all that apply" is actually a **cleaner UX** than the current sequential Yes/No, because the user can see all three choices at once and pick what's relevant.

#### EXT group — works, but the grouping changes the meaning

The EXT hard stops are PT3 ("multi-storey extension") and PT7 ("balcony"). These are currently interleaved with PT1, PT2, PT4–PT6, PT8, PT9 in sequential order. Your proposal is to extract PT3 and PT7 to the top of the screen.

This **works logically** — PT3 and PT7 have no dependencies on the other PTs and no sub-questions. They are pure gatekeeper questions. However, there's a UX subtlety:

- Currently, a user who comes to the EXT section sees a sequence: "loft? → single-storey? → multi-storey? → conservatory? …". The questions naturally flow from smaller to larger scope.
- With hard-stop grouping, the user would first see: "multi-storey extension? / balcony?" (the two things that immediately block you), then: "loft? / single-storey? / conservatory? / garage? …" (the things you can detail).
- This is **defensible** — it's a "let's rule out the blockers first" approach. But it **reorders the conceptual flow**.

**My recommendation**: This is fine as long as the section header makes the intent clear. Something like: *"Before we get into details — do any of these apply?"* for the hard-stop group, then *"Now, select which types of extension you're planning"* for the rest.

#### CONV group — same pattern, same recommendation

CONV hard stops: PT10 ("dwelling → flats"), PT12 ("dwelling → HMO"), PT15 ("residential → commercial"). These are independent and can be grouped.

Non-hard-stops: PT11 ("flats → single dwelling"), PT13 ("commercial → residential"), PT14 ("above shops → residential"), PT16 ("general change of use"). Also independent.

Same grouping approach works.

#### DEM group — special case

DEM has only two questions: PT17 (hard stop) and PT18 (not a hard stop). Grouping "hard stops first" here means showing PT17 alone, then PT18 alone. That's just sequential — the grouping doesn't add much. Consider showing both on one screen as option-rows, since there are only two and the user can just select what applies.

---

### Question 2: Are there any questions that don't fit neatly into the four illustrated row types?

**Yes — 5 specific edge cases.**

#### Edge Case A: Inverted-logic questions (PS2-04 and PS6-04)

These two questions have **stop on "No"** instead of stop on "Yes":

- **PS2-04**: "Is the extension at the rear of the property and not in front of the main elevation?" — Stop if **No**. Selecting this row would mean "Yes, it's at the rear" (the safe answer). NOT selecting it means "No, it's at the front" (which triggers a stop).
- **PS6-04**: "Is the building located at the rear or side of the house and at least 2m from any side boundary if taller than 2.5m?" — Same inverted logic.

In a multi-select "select all that apply" pattern, the semantics break: **not selecting** a row means "this doesn't apply to me", but here it should mean "my project fails this check → stop".

**Recommendation**: Reword these two questions so that selecting = bad outcome, matching the other rows. For example:
- PS2-04 → "Is the extension at the **front** of the property, ahead of the main elevation?" (Yes = stop)
- PS6-04 → "Is the outbuilding at the **front** of the house, or within 2m of a boundary and taller than 2.5m?" (Yes = stop)

This makes the select-to-flag pattern consistent. The guidance text stays the same.

#### Edge Case B: Non-stop informational questions (PS5-01, PS6-01, PS11-01, PS11-06, PS11-07)

These 5 questions record information but don't trigger stops. In the accordion multi-select, they would look identical to the stop questions but behave differently:

- **PS5-01**: "Will the garage be habitable or serviced?" — Selecting records "Yes" and shows guidance about Building Control, but doesn't stop.
- **PS6-01**: "Will building be habitable or include services?" — Same pattern.
- **PS11-01**: "Are you converting more than one flat?" — This one originally had branching logic (Yes → PS11-02, No → T1), but in the current accordion multi-select it's shown alongside the others.
- **PS11-06**: "Does the conversion involve structural work?" — Info only.
- **PS11-07**: "Will the conversion affect fire safety?" — Info only.

**Recommendation**: These can still be option-rows, but they should have a **visual distinction** — for example, an info icon (ℹ️) instead of a warning icon, or a different border colour. When selected, they show guidance but don't contribute to the stop aggregation. The row should make it clear: "this is good to know, but it won't block your project."

#### Edge Case C: PT13, PT14, PT16 — non-stop, no sub-questions

These three CONV questions (commercial → residential, above shops → residential, general change of use) don't hard-stop and have no PS sub-questions. Selecting them simply records the answer and shows guidance (e.g., "submit a prior approval application"). They fit the option-row pattern fine — they're just "select if this applies" with guidance on selection.

No issue here, just noting they behave like SITE/T questions (informational) even though they're in the CONV group.

---

### Question 3: Is there anything in the source file logic that would break or conflict with this approach?

**Three things to watch.**

#### Conflict A: The `handleGroupedToggleClick` function is a dangling reference

Line 1825 of `planning-navigation-full.html` attaches a `handleGroupedToggleClick` listener to the questions list, but this function was deleted in a previous refactoring session. This will throw a `ReferenceError` at runtime in the current code. It needs to be removed as part of any work in `renderGroup`.

#### Conflict B: `computeFlow()` depends on PG3/PG4/PG5 as individual answers

The flow engine reads `answers.PG3`, `answers.PG4`, `answers.PG5` to decide whether to include EXT, CONV, DEM in the flow. If PG3–PG5 are shown as multi-select option-rows (select = "Yes"), the answer recording needs to stay the same: `answers['PG3'] = { value: 'yes' }` when selected, and unselected rows must be explicitly marked as `{ value: 'no' }` (not just `undefined`). The current LG/SITE patterns already do this "mark unselected as No on Continue", so this isn't a blocker — but it must be applied to PG3–PG5 as well.

#### Conflict C: The accordion state machine assumes sequential PT traversal

The current `accordionState` object tracks a single `activePTIndex` and advances one at a time. Your proposed approach shows **all PT rows simultaneously** and expands accordions on selection. This means:

- Multiple PTs could be selected (and have accordions open) at the same time — or we could limit to one expanded accordion at a time
- The `activePTIndex` concept becomes less relevant; instead, we need to track which PTs are selected and whether their PS sub-questions are complete
- The `mode: 'pt' | 'ps'` state becomes per-PT rather than per-group

**Recommendation**: Replace `accordionState` with a simpler per-PT tracking model:

```javascript
// Instead of this:
accordionState.EXT = { mode, activePTIndex, expandedPT, psGroup, psIndex }

// Use this:
ptSelections.EXT = {
    PT1: { selected: true, psComplete: false },
    PT2: { selected: false },
    PT3: { selected: true },  // hard stop
    ...
}
```

This is a significant refactor of the state engine but it **simplifies** the code dramatically — the current accordion state machine is ~400 lines of complex conditional logic that would mostly go away.

---

### Question 4: What would I suggest doing differently, and why?

#### Suggestion 1: Show PG3–PG5 as a "select all that apply" screen, not sequential

Instead of three separate Yes/No cards, show one screen: *"Which of these are you planning?"* with three illustrated option-rows:
- 🏗️ Extensions or additions to the property
- 🔄 Converting or changing the use of the property
- 🏚️ Demolition or other site works

The user selects what applies, clicks Continue, and the flow branches accordingly. If nothing is selected, show a catch-all result. This matches your vision and is a significant UX improvement — the user sees all project types at a glance instead of answering three separate questions.

#### Suggestion 2: Consider collapsing EXT + CONV + DEM into a single screen

Currently EXT, CONV, and DEM are three separate groups navigated between with `moveToNextPTGroup()`. Since all PT questions are now option-rows, you could show **one screen** with all applicable PTs:

- If PG3 = Yes: show PT1–PT9 rows
- If PG4 = Yes: show PT10–PT16 rows
- If PG5 = Yes: show PT17–PT18 rows

Hard-stop PTs would go at the top. Sub-question accordions expand beneath selected rows. This eliminates group-to-group transitions entirely for project types.

However, this might create a very long page (up to 18 rows). **I'd recommend keeping them as separate screens** (one per project type category) if you want to maintain a manageable cognitive load per screen. Your call.

#### Suggestion 3: Limit to one expanded accordion at a time

If the user selects PT1 (loft) and PT2 (single-storey extension), both could theoretically expand their accordions simultaneously. This could be overwhelming — PS1 has 4 sub-questions and PS2 has 5, so 9 rows under two expanded sections.

**Recommendation**: Allow multiple PTs to be selected, but only expand one accordion at a time. When the user clicks on a selected PT, its accordion opens and any other open accordion closes. The "Continue" button should be disabled until all selected PTs have had their sub-questions reviewed.

#### Suggestion 4: Add a visual state to option-rows for "reviewed" vs "selected"

With accordions, a PT row has three possible states:
1. **Unselected** — user hasn't selected this project type
2. **Selected, accordion not yet reviewed** — user selected it but hasn't looked at sub-questions
3. **Selected, accordion reviewed** — user expanded the accordion, addressed sub-questions, collapsed it

A checkmark or green border on state 3 would give the user confidence that they've completed that section. This doesn't exist in the current design but would significantly improve the UX for EXT/CONV screens.

#### Suggestion 5: The inverted questions (PS2-04, PS6-04) must be reworded

As detailed in Edge Case A above, these two questions will confuse users in a multi-select paradigm. Rewording them so that "select = problem" is consistent with every other row is essential. This is a content change, not a code change, and should be agreed before implementation.
