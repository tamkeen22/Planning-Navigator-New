# Planning Navigator — Usability Test Plan
### 6 Moderated Scenarios · Est. 45–55 min session

> [!NOTE]
> **Facilitator instructions:** Read the *Participant briefing* aloud, then display or read the *Task prompt*. Do not paraphrase — wording is precise. Time each task silently. Ask the follow-up probe immediately after the participant signals they are done or gives up.

---

## Scenario 1: First Impressions & Entry Point
**Internal label:** `S1-ORIENTATION`

### Participant briefing
> You've been thinking about making changes to your home — maybe adding more space or converting a room. A friend sent you a link to this website and said it might help you figure out what's involved. You've just opened it for the first time.

### Task prompt
> "Take a moment to look around this page. When you feel you understand what this tool does and are ready to begin, go ahead and start."

### Success criteria
| Signal | Observed? |
|---|---|
| Participant scrolls or scans the landing page before acting | ☐ |
| Participant locates and activates the primary CTA ("Start Now") without prompting | ☐ |
| Participant arrives at the first question screen within 90 seconds | ☐ |
| Participant can articulate in their own words what the tool will help them do | ☐ |

### What you're really testing
> Does the landing page communicate the tool's purpose clearly enough that a first-time visitor understands what they'll get out of it — and can they find the entry point without hesitation? We're measuring **value proposition clarity** and **CTA discoverability**, including whether the sticky footer CTA or the hero CTA is found first.

### Follow-up probe
> "Before you clicked, what did you expect would happen next?"

---

## Scenario 2: The "Happy Path" — Straightforward Single-Storey Extension
**Internal label:** `S2-CORE-FLOW`

### Participant briefing
> You own a semi-detached house in an ordinary residential street — it's not listed, not in a conservation area, and there's nothing unusual about the site. You've been quoted by a builder to add a small single-storey kitchen extension at the back, about 3 metres deep and under 4 metres high. You want to find out if you'd need planning permission for this.

### Task prompt
> "Use this tool to find out whether your kitchen extension project is likely to need planning permission. Let me know when you've reached a conclusion."

### Success criteria
| Signal | Observed? |
|---|---|
| Participant correctly answers "No" to all LG location constraints (or uses "None of these apply") | ☐ |
| Participant answers "No" to new build / replacement (PG1, PG2) | ☐ |
| Participant answers "Yes" to extensions (PG3), "No" to conversion/demolition (PG4, PG5) | ☐ |
| Participant navigates through detailed single-storey extension checks without getting stuck | ☐ |
| Participant reaches the result screen showing "Permitted Development May Apply" | ☐ |
| Total time: under 8 minutes | ☐ |

### What you're really testing
> Can a user with a clear, simple project complete the full questionnaire flow without errors, confusion, or abandonment? This validates the **core task completion rate** and whether the question sequence feels logical. We're also observing whether the Yes/No toggle, multi-select cards, and the "None of these apply" skip mechanism are intuitive.

### Follow-up probe
> "Was there any question where you weren't sure what it was really asking?"

---

## Scenario 3: Recognising a Constraint — Listed Building Early Exit
**Internal label:** `S3-CONSTRAINT-STOP`

### Participant briefing
> You recently moved into a beautiful old cottage in the countryside. When you bought it, the estate agent mentioned it has some kind of special heritage status — you think the word "listed" was used. You'd love to convert the loft into a bedroom and want to see what the planning situation might be.

### Task prompt
> "Work through the questions to find out what the planning situation would be for converting your loft."

### Success criteria
| Signal | Observed? |
|---|---|
| Participant identifies and selects the "Listed building" constraint in the first section | ☐ |
| Participant reads the guidance callout that appears after selection | ☐ |
| Participant continues through the flow and reaches a result | ☐ |
| Participant's result page clearly indicates planning permission is likely required | ☐ |
| Participant can explain *why* the tool flagged their project — i.e. they understood the listed building impact | ☐ |

### What you're really testing
> When a user has a property constraint that fundamentally changes their outcome, does the tool surface this clearly and early? We're testing whether the **constraint selection model** (multi-select cards with inline guidance callouts) communicates impact effectively — or whether users select an item without reading or understanding the consequence.

### Follow-up probe
> "After you selected that your property was listed, did the information shown change what you expected the outcome to be?"

> [!IMPORTANT]
> **Screener note:** This scenario works best with participants who are not planning professionals. If a participant has prior planning knowledge, note this — they may skip constraint descriptions, which is a valid but different behaviour to observe.

---

## Scenario 4: Interpreting Your Results
**Internal label:** `S4-RESULTS-COMPREHENSION`

### Participant briefing
> You've just finished going through all the questions — imagine you did this yesterday and now you're coming back to look at your results. Your project involved a single-storey extension on a normal property with no special constraints, and the tool told you your project may fall under permitted development. You now need to figure out what to actually *do* next.

*Facilitator: Navigate the participant directly to a pre-completed results page showing the "Permitted Development May Apply" outcome, or let them complete Scenario 2 first and continue from there.*

### Task prompt
> "Looking at these results, tell me: what would your next concrete step be if you wanted to move forward with this project?"

### Success criteria
| Signal | Observed? |
|---|---|
| Participant identifies at least one actionable next step (e.g. LDC, consult an expert, Building Control) | ☐ |
| Participant finds and engages with the "Next Steps" action cards | ☐ |
| Participant understands that the result is guidance, not a guarantee (references disclaimer or uses hedging language) | ☐ |
| Participant notices the external links to the Planning Portal | ☐ |
| If asked, participant can explain the difference between their result and needing full planning permission | ☐ |

### What you're really testing
> Is the results page **actionable and comprehensible** to a non-expert? We're measuring whether users can extract a clear next step from the outcome card and action grid — or whether the page feels like a dead end. Secondarily, we're testing whether the answer summary (collapsed by default) is discoverable and whether users trust the result enough to act on it.

### Follow-up probe
> "If you wanted to save or share these results with a builder or architect, how would you go about that?"

---

## Scenario 5: Recovery & Re-orientation — Changing Your Mind Mid-Flow
**Internal label:** `S5-NAVIGATION-RECOVERY`

### Participant briefing
> You started answering questions about a garage conversion, but halfway through you realised you actually want to check about adding a porch instead. You're now a few questions in and want to start over with the right project in mind.

*Facilitator: Begin the participant partway through the questionnaire — ideally in the "Your Project Features" section, a few questions deep.*

### Task prompt
> "You've changed your mind about what you're checking. Find a way to start the process again from the beginning."

### Success criteria
| Signal | Observed? |
|---|---|
| Participant attempts to navigate back (Back button, browser back, or navbar logo) | ☐ |
| Participant finds a path back to the beginning of the questionnaire or to the home page | ☐ |
| Participant does not express significant frustration or feel "trapped" | ☐ |
| Recovery is achieved within 60 seconds | ☐ |

### What you're really testing
> When a user needs to **abandon and restart**, is the escape hatch obvious? We're testing whether the navbar brand link (back to home), the Back button in the sticky footer, or any other affordance provides a clear recovery path. This also reveals whether users feel the questionnaire is a one-way tunnel or a flexible tool they control.

### Follow-up probe
> "While you were going through the questions earlier, did you ever feel unsure about where you were in the process or how far you had left to go?"

---

## Session Debrief Questions
After all scenarios are complete, ask:

1. "If you had to describe this tool to a neighbour, what would you say?"
2. "Was there anything that surprised you — either positively or negatively?"
3. "On a scale of 1–5, how confident would you feel acting on the result this tool gave you? Why that number?"

---

> [!TIP]
> **Recommended participant profile:** Homeowners aged 30–65 who have considered or are currently considering a home improvement project. Mix of first-time and repeat renovators. Exclude planning professionals, architects, and anyone who has submitted a planning application in the last 12 months.

> [!WARNING]
> **Data sensitivity:** Scenario 3 references heritage-listed properties. If recruiting participants who own listed buildings, note that their responses may reveal property details. Reassure participants that no identifying property information will be recorded.
