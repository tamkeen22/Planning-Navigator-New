# Webflow Structure Guide
## Planning Navigation Questionnaire - HTML to Webflow Mapping

This guide breaks down the HTML structure from `planning-navigation-full.html` into Webflow components and elements.

---

## 📐 Overall Page Structure

### Two Main Sections (Toggle Visibility):
1. **Question Shell** (`#questionShell`) - Main questionnaire interface
2. **Result Shell** (`#resultShell`) - Results page (hidden by default)

---

## 🎨 Section 1: Top Navigation Bar

### Element: **Navbar** (Webflow Navbar Component)
**Class:** `top-nav`
**Background:** `#02294a`
**Padding:** `16px 40px`
**Layout:** Flexbox (space-between)

#### Inside Navbar:

**Left Section: Brand**
- **Div** (Flex container)
  - **Div** (Logo) - `brand-logo`
    - Size: `28px × 28px`
    - Border-radius: `999px`
    - Background: Radial gradient (`#5ee7ff` → `#1d8cf8` → `#02294a`)
  - **Text Block** - "Planning Navigation"
    - Font: `18px`, Weight: `600`

**Center Section: Nav Links**
- **Div** (Flex container) - `nav-links`
  - Gap: `32px`
  - **Link Block** × 3
    - Text: "Pricing" (or custom links)
    - Font: `14px`
    - Color: `#e5e7eb`

**Right Section: Actions**
- **Div** (Flex container) - `nav-actions`
  - Gap: `12px`
  - **Button** - `btn btn-outline`
    - Text: "Book demo"
    - Background: `#ffffff`
    - Border: `1px solid #d1d5db`
    - Border-radius: `999px`
    - Padding: `10px 20px`
  - **Button** - `btn btn-primary`
    - Text: "Start for free →"
    - Background: Linear gradient (`#1d8cf8` → `#335ff1`)
    - Border-radius: `999px`
    - Padding: `10px 20px`

---

## 📋 Section 2: Main Layout Container

### Element: **Section** (or Div)
**Class:** `layout`
**Layout:** Flexbox (row)
**Padding:** `32px 40px 40px`
**Gap:** `24px`

#### Two Columns:

---

## 🔹 Column 1: Sidebar (Left)

### Element: **Div** (or Section)
**Class:** `sidebar`
**Width:** `280px` (Desktop) / `100%` (Mobile)
**Background:** `#ffffff`
**Border-radius:** `16px`
**Padding:** `24px 24px 28px`
**Box-shadow:** `0 18px 40px rgba(15, 23, 42, 0.12)`
**Layout:** Flex column (space-between)

### Top Section:

**Heading 2**
- Text: "Planning Gateway Questions"
- Font: `20px`
- Margin-bottom: `12px`

**Paragraph**
- Text: "Answer a short set of questions..."
- Font: `13px`
- Color: `#4b5563`
- Line-height: `1.5`

**Div** - `sidebar-section`
- Margin-top: `24px`

#### Timeline Component:

**Unordered List** - `timeline`
- List-style: `none`
- Position: `relative`
- Padding-left: `0`
- **Pseudo-element:** Vertical line (`::before`)
  - Position: `absolute`
  - Left: `13px`
  - Width: `2px`
  - Background: `#e5e7eb`

**List Items** - `timeline-item` × 4
- Position: `relative`
- Display: `flex`
- Gap: `12px`
- Padding: `8px 0`
- Margin-bottom: `4px`

**Inside Each Timeline Item:**

1. **Div** - `timeline-dot`
   - Size: `26px × 26px`
   - Border-radius: `999px`
   - Border: `2px solid #d1d5db`
   - Background: `#fff`
   - **States:**
     - `.active` - Border: `#2563eb`, Background: `#eff6ff`
     - `.completed` - Background: `#10b981`, Checkmark (✓)

2. **Div** - `timeline-dot-inner`
   - Size: `10px × 10px`
   - Border-radius: `999px`
   - Background: `transparent`
   - **Active state:** `12px × 12px`, Background: `#2563eb`

3. **Div** - `timeline-content`
   - Display: `flex column`
   - Gap: `2px`
   - Padding-top: `3px`
   - **Div** - `timeline-title`
     - Font: `13px`, Weight: `600`
     - Color: `#111827`
   - **Div** - `timeline-subtitle`
     - Font: `11px`
     - Color: `#6b7280`

**Timeline Items (IDs):**
- `#stepLocation` - "Location Gateway Questions"
- `#stepProject` - "Project Gateway Questions"
- `#stepSite` - "Site Checks & Considerations"
- `#stepDetail` - "Your Project Features"

### Bottom Section:

**Div** - `useful-links`
- Font: `12px`
- Color: `#6b7280`
- Margin-top: `24px`
- **Div** - `useful-links-title`
  - Weight: `600`
  - Margin-bottom: `4px`
- **Div** × 2 - Links
  - Color: `#2563eb`

---

## 🔹 Column 2: Main Panel (Right)

### Element: **Section** (or Div)
**Class:** `main-panel`
**Flex:** `1` (takes remaining space)
**Background:** `#f9fafb`
**Border-radius:** `18px`
**Padding:** `24px 28px 28px`
**Box-shadow:** `0 18px 40px rgba(15, 23, 42, 0.12)`

### Panel Header:

**Div** - `panel-header`
- Display: `flex` (space-between)
- Margin-bottom: `18px`
- Gap: `8px`

**Left Section:**
- **Div** (Flex column)
  - **Heading** - `panel-title` (`#panelTitle`)
    - Font: `20px`, Weight: `600`
    - Text: "About Your Property & Location"
  - **Div** - `breadcrumb` (`#breadcrumbText`)
    - Font: `12px`
    - Color: `#9ca3af`
    - Text: "Location & property checks"

**Right Section:**
- **Div** - `progress-shell`
  - Width: `180px`
  - Height: `6px`
  - Border-radius: `999px`
  - Background: `#e5e7eb`
  - Overflow: `hidden`
  - **Div** - `progress-fill` (`#progressFill`)
    - Height: `100%`
    - Border-radius: `999px`
    - Background: Linear gradient (`#1d8cf8` → `#335ff1`)
    - Width: `0%` (animated by JS)

### Question Container:

**Div** - `#questionContainer`
- **Dynamic content injected by JavaScript**
- Contains question cards

#### Question Card Structure (Dynamic):

**Div** - `question-card`
- Background: `#ffffff`
- Border-radius: `16px`
- Padding: `18px 20px 16px`
- Border: `1px solid #e5e7eb`
- Box-shadow: `0 6px 18px rgba(15, 23, 42, 0.05)`
- **States:**
  - `.active` - Border: `rgba(37, 99, 235, 0.35)`
  - `.inactive` - Opacity: `0.55`, Pointer-events: `none`

**Inside Question Card:**

**Div** - `question-section`
- Margin-top: `8px`

**Div** - `question-row`
- Display: `flex` (space-between)
- Gap: `16px`
- Align-items: `flex-start`

**Div** - `question-text`
- Font: `15px`
- Line-height: `1.5`
- Max-width: `80%`

**Div** - `toggle-group`
- Display: `flex`
- Align-items: `center`
- Gap: `10px`
- Font: `13px`
- Color: `#4b5563`

**Span** - `toggle-label`
- Font: `12px`
- Text-transform: `uppercase`
- Letter-spacing: `0.05em`
- Color: `#9ca3af`
- Margin-right: `4px`
- Text: "Select"

**Button** - `toggle-pill yes`
- Padding: `5px 10px`
- Border-radius: `999px`
- Border: `1px solid #d1d5db`
- Background: `#f9fafb`
- Display: `inline-flex`
- Gap: `6px`
- **Active state:** Background: `#10b981`, Border: `#059669`, Color: `#ecfdf5`
- **Inside:**
  - **Div** - `toggle-indicator`
    - Size: `12px × 12px`
    - Border-radius: `999px`
    - Border: `1px solid #d1d5db`
    - Background: `#f9fafb`
  - **Span** - "Yes"

**Button** - `toggle-pill no`
- Same structure as "Yes" button
- **Active state:** Background: `#111827`, Border: `#111827`

**Div** - `guidance-alert` (Conditional)
- Margin-top: `14px`
- Border-radius: `12px`
- Border: `1px solid #bfdbfe`
- Background: `#eff6ff`
- Padding: `12px 14px`
- Font: `13px`
- Color: `#1260ad`
- Display: `flex`
- Gap: `10px`
- **Inside:**
  - **Div** - `guidance-icon`
    - Size: `20px × 20px`
    - Border-radius: `999px`
    - Border: `1px solid #93c5fd`
    - Background: `#3b82f6`
    - Color: `#ffffff`
    - Text: "i" (or icon)
  - **Div** - `guidance-text`
    - Line-height: `1.5`

#### Accordion Structure (For Nested Questions):

**Div** - `accordion-body`
- Margin-top: `12px`
- Padding: `14px`
- Border-radius: `14px`
- Border: `1px solid #e5e7eb`
- Background: `#f9fafb`

**Div** - `accordion-title`
- Font: `13px`, Weight: `600`
- Color: `#111827`
- Margin-bottom: `10px`

**Div** - `subquestion`
- Padding: `12px`
- Border-radius: `12px`
- Border: `1px solid #e5e7eb`
- Background: `#fff`
- Margin-top: `10px`
- **States:**
  - `.active` - Border: `rgba(37, 99, 235, 0.35)`
  - `.inactive` - Opacity: `0.55`

**Inside Subquestion:**
- Same structure as question card (question-row, toggle-group, etc.)

### Panel Footer:

**Div** - `panel-footer`
- Display: `flex` (space-between)
- Margin-top: `20px`
- Align-items: `center`

**Left Section:**
- **Div** - `panel-footer-left` (`#stepHint`)
  - Font: `12px`
  - Color: `#9ca3af`
  - Text: "Question <span id='questionIndex'>1</span> of <span id='questionTotal'>1</span>"

**Right Section:**
- **Div** (Flex container)
  - **Button** - `btn btn-outline` (`#backBtn`)
    - Text: "← Back"
  - **Button** - `btn btn-primary btn-continue` (`#nextBtn`)
    - Text: "Continue →"
    - Padding-inline: `26px`
    - **Disabled state:** Opacity: `0.4`, Cursor: `not-allowed`

---

## 📊 Section 3: Result Shell (Hidden by Default)

### Element: **Div**
**ID:** `resultShell`
**Class:** `hidden` (display: none)
**Min-height:** `calc(100vh - 64px)`
**Background:** `#f8fafc`
**Padding:** `40px 20px`

### Top Navigation:
- Same as Question Shell (reuse Navbar component)

### Result Container:

**Div** - `result-container` (`#resultContainer`)
- Max-width: `900px`
- Margin: `0 auto`
- **Dynamic content injected by JavaScript**

#### Result Header:

**Div** - `result-header`
- Margin-bottom: `32px`
- Text-align: `center`
- **Div** - `result-title`
  - Font: `32px`, Weight: `700`
  - Color: `#0f172a`
  - Letter-spacing: `-0.5px`
  - Text: "Your Planning Assessment"
- **Div** - `result-subtitle`
  - Font: `16px`
  - Color: `#64748b`
  - Text: "Based on the information you provided"

#### Result Card:

**Div** - `result-card`
- Border-radius: `16px`
- Border: `2px solid #e2e8f0`
- Background: `#ffffff`
- Padding: `24px 28px`
- Margin-bottom: `24px`
- Box-shadow: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **State:** `.success` - Border: `#3b82f6`, Background: `#eff6ff`
- **Inside:**
  - **Heading 3**
    - Font: `18px`, Weight: `600`
    - Color: `#0f172a`
    - Margin-bottom: `12px`
  - **Paragraph**
    - Font: `15px`
    - Color: `#334155`
    - Line-height: `1.7`

#### Reasons Section:

**Div** - `result-reasons`
- Border-radius: `20px`
- Border: `1px solid #e2e8f0`
- Background: `#ffffff`
- Padding: `20px 22px`
- Margin-bottom: `24px`
- Box-shadow: `0 10px 30px rgba(15, 23, 42, 0.06)`
- **Heading 3** - "Why Planning Permission is Required"
- **Div** - `reasons-list`
  - Display: `flex column`
  - Gap: `8px`
  - **Div** - `reason-item` × N
    - Display: `flex`
    - Gap: `14px`
    - Padding: `14px 16px`
    - Border-radius: `14px`
    - Background: `#f9fafb`
    - Border: `1px solid #e5e7eb`
    - **Div** - `reason-icon`
      - Size: `36px × 36px`
      - Border-radius: `12px`
      - Background: `#eff6ff`
      - Color: `#2563eb`
      - Text: "!"
    - **Div** - `reason-content`
      - Display: `flex column`
      - Gap: `4px`
      - **Div** - `reason-question`
        - Font: `15px`, Weight: `600`
        - Color: `#0f172a`
      - **Div** - `reason-answer`
        - Font: `13px`
        - Color: `#6b7280`
        - Text: "Your answer: Yes/No"
      - **Div** - `reason-text`
        - Font: `14px`
        - Color: `#b91c1c`
        - Line-height: `1.6`
      - **Div** - `reason-guidance`
        - Font: `13px`
        - Color: `#1260ad`
        - Line-height: `1.6`

#### Next Steps Card:

**Div** - `result-card`
- Same structure as above
- **Heading 3** - "Next Steps"
- **Unordered List** - `result-list`
  - Margin-top: `16px`
  - Padding-left: `24px`
  - Font: `15px`
  - Color: `#334155`
  - Line-height: `1.8`
  - **List Items** × N

#### Answer Summary:

**Div** - `result-secondary`
- Border-radius: `16px`
- Border: `2px solid #e2e8f0`
- Background: `#ffffff`
- Padding: `24px 28px`
- Margin-top: `24px`
- Box-shadow: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Div** - `answer-summary-header` (`#answerSummaryHeader`)
  - Display: `flex` (space-between)
  - Cursor: `pointer`
  - Padding-bottom: `8px`
  - Border-bottom: `1px solid #e2e8f0`
  - **Heading 3** - "Your Answer Summary"
  - **Div** - `answer-summary-meta`
    - Display: `flex`
    - Gap: `10px`
    - Font: `13px`
    - Color: `#64748b`
    - **Span** - Answer count
    - **Span** - `answer-summary-chevron` - "▼"
- **Div** - `answers-list answer-summary-body` (`#answerSummaryBody`)
  - Font: `15px`
  - Line-height: `1.8`
  - **State:** `.collapsed` - Display: `none`
  - **Div** - `answer-item` × N
    - Padding: `18px 20px`
    - Background: `#f8fafc`
    - Border-radius: `12px`
    - Margin-bottom: `16px`
    - Border: `1px solid #e2e8f0`
    - Border-left: `4px solid #cbd5e1`
    - **Div** - `answer-question`
      - Font: `15px`, Weight: `600`
      - Color: `#0f172a`
      - Margin-bottom: `8px`
    - **Div** - `answer-value`
      - Font: `14px`
      - Color: `#475569`
      - Margin-bottom: `12px`
      - Weight: `500`
    - **Div** - `answer-guidance`
      - Font: `14px`
      - Color: `#1260ad`
      - Line-height: `1.6`
      - Margin-top: `12px`
      - Padding-top: `12px`
      - Border-top: `1px solid #e2e8f0`
    - **Div** - `answer-result`
      - Font: `14px`
      - Color: `#dc2626`
      - Line-height: `1.6`
      - Margin-top: `12px`
      - Padding-top: `12px`
      - Border-top: `1px solid #fecaca`
      - Weight: `500`

#### Disclaimer:

**Div** - `disclaimer`
- Margin-top: `24px`
- Border-radius: `12px`
- Border: `2px solid #10b981`
- Background: `#ecfdf5`
- Padding: `18px 20px`
- Font: `14px`
- Line-height: `1.7`
- Color: `#065f46`
- **Strong** - Color: `#047857`, Weight: `600`

#### Result Footer:

**Div** - `result-footer`
- Margin-top: `22px`
- Display: `flex` (space-between)
- Gap: `16px`
- **Button** - `btn-light`
  - Background: `#ffffff`
  - Color: `#0f172a`
  - Border-radius: `8px`
  - Padding: `12px 24px`
  - Font: `15px`, Weight: `600`
  - Border: `2px solid #e2e8f0`
  - Text: "Start over"
- **Button** - `btn-secondary-ghost`
  - Background: `transparent`
  - Border: `2px solid #3b82f6`
  - Color: `#3b82f6`
  - Border-radius: `8px`
  - Padding: `12px 24px`
  - Font: `15px`, Weight: `600`
  - Text: "Back to questions"

---

## 📱 Responsive Breakpoints

### Mobile (max-width: 960px):

**Layout:**
- `.layout` - Flex-direction: `column`
- Padding: `20px`

**Sidebar:**
- Width: `100%`

**Main Panel:**
- Padding: `20px`

**Question Row:**
- Flex-direction: `column`

**Question Text:**
- Max-width: `100%`

---

## 🎯 Webflow Implementation Checklist

### Components to Create:

- [ ] **Navbar Component** (reusable)
- [ ] **Timeline Item Component** (reusable)
- [ ] **Question Card Component** (reusable)
- [ ] **Toggle Pill Component** (reusable)
- [ ] **Result Card Component** (reusable)
- [ ] **Reason Item Component** (reusable)
- [ ] **Answer Item Component** (reusable)

### Pages/Sections:

- [ ] **Question Shell Section** (main page)
- [ ] **Result Shell Section** (same page, hidden)

### Custom Code:

- [ ] **JavaScript** - Copy from `planning-navigation-full.html` `<script>` section
- [ ] **CSS** - Copy from `<style>` section (or recreate in Webflow Designer)

### Interactions:

- [ ] Toggle visibility between Question Shell and Result Shell
- [ ] Timeline item state changes (active, completed)
- [ ] Question card active/inactive states
- [ ] Toggle pill active states
- [ ] Progress bar animation
- [ ] Accordion expand/collapse
- [ ] Answer summary expand/collapse

### CMS (Optional):

- [ ] Questions collection
- [ ] Answers collection
- [ ] Results collection

---

## 🔧 Key Webflow Elements Mapping

| HTML Element | Webflow Equivalent |
|-------------|-------------------|
| `<div class="top-nav">` | **Navbar** component |
| `<div class="layout">` | **Section** with Flex layout |
| `<aside class="sidebar">` | **Div** with Flex column layout |
| `<ul class="timeline">` | **List** with custom styling |
| `<section class="main-panel">` | **Section** or **Div** |
| `<div class="question-card">` | **Div Block** with custom classes |
| `<button class="toggle-pill">` | **Button** element |
| `<div class="result-card">` | **Div Block** with custom classes |

---

## 📝 Notes

1. **JavaScript Required:** The questionnaire logic is entirely JavaScript-driven. You'll need to embed the script from the HTML file.

2. **Dynamic Content:** Most content (questions, answers, results) is generated dynamically by JavaScript. You'll need to either:
   - Use Webflow CMS for questions/answers
   - Embed the JavaScript as-is
   - Convert to Webflow CMS + Custom Code

3. **State Management:** The JavaScript manages complex state (active questions, answers, flow logic). This will need to be preserved in Webflow.

4. **Styling:** All styles are in the `<style>` tag. You can either:
   - Recreate in Webflow Designer
   - Use Custom Code embed
   - Use a combination of both

5. **Interactions:** Many interactions are JavaScript-driven. You may need to recreate some in Webflow Interactions or keep them in JavaScript.

---

**Ready to build in Webflow!** 🚀
