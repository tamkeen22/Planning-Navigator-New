# Planning Navigator – Design System

This file is the single source of truth for all UI decisions in the Planning Navigator application. Every component, every page, and every question type must strictly follow these rules based on the premium `v5` reference design.

---

## 1. CSS Variables & Color Palette
All UI components **must** use these CSS variables defined in `:root`. Never hardcode hex values.

### Brand & Core Colors
- `--navy: #0c1f38` – Primary deep brand color. Used for the top nav and primary text headings.
- `--navy-mid: #162d4a` – Secondary dark background.
- `--teal: #0d7490` – Primary actionable color. Used for active states, highlights, and primary buttons.
- `--teal-dim: #0a5c73` – Darker teal for active/pressed button states.

### Success & Selection
- `--green: #047857` – Core success color.
- `--green-mid: #059669` – Used for selected option states and completed progress pips.
- `--green-bg: #ecfdf5` – The background fill for selected options.
- `--green-border: #6ee7b7` – The border highlight for selected options.

### Structure & Neutral
- `--slate: #5e7287` – Used for secondary/de-emphasized text (e.g., sub-labels, sidebar text).
- `--slate-light: #f4f7fa` – Soft background for unselected cards/options.
- `--border: #dde4ec` – Primary divider line color.
- `--border-soft: #eaf0f6` – Lighter divider used inside cards.
- `--text: #0c1f38` – Default body text color.
- `--text-soft: #4a6278` – Muted body text.

### Glows & Effects
- `--teal-glow: rgba(13, 116, 144, 0.18)` – Used for focus rings and hover lift effects.
- `--green-glow: rgba(4, 120, 87, 0.16)` – Used for the outer glow on selected options.

---

## 2. Typography Rules
We use a two-font system to balance approachability with formal clarity. Both fonts are served via Google Fonts.

*   **Headings (`Lora`, serif)**:
    *   Used for major titles (`.content-title`) and the application logo.
    *   **Scale**: 28px standard for content titles.
    *   **Weight**: 400 (regular) or 600 (semi-bold).
    *   **Settings**: `-0.3px` letter-spacing.
*   **Body & UI (`Plus Jakarta Sans`, sans-serif)**:
    *   Used for all interface text, descriptions, and labels.
    *   **Standard Body**: 13.5px or 12px for softer descriptive text.
    *   **Labels/Buttons**: 13px bold (700 wt) or 11.5px semi-bold (600 wt).
    *   **Line-Height**: `1.6` globally, `1.55` inside descriptions, `1.3` for short labels.

---

## 3. Spacing & Layout Scale
To maintain the premium "airy" feel, padding and margins must be respected:

- **App Shell**: 1060px strict max-width.
- **Main Padding**: 32px top, 44px lateral padding (`padding: 32px 44px 130px`).
- **Standard Gap (Grid)**: 24px between the sidebar and main content.
- **Component Gap**: 12px or 6px spacing between individual option cards/rows.
- **Card Padding**: Inner padding on options is generally `10px 8px` for illustration containers and `16px 20px` for question headers.
- **Roundness (Border-Radius)**:
  - 16px for major structural blocks (`.q-block`).
  - 14px for sidebar container cards.
  - 12px for selectable option items (`.option-item`).
  - 8px for standard buttons/pills.

---

## 4. Animation & Interaction (Easings)
Modern, fluid motion defines the v5 spec.

- **Easing Curves**:
  - `var(--ease-out-expo)`: `cubic-bezier(0.16, 1, 0.3, 1)` — Used for fade-ups, background color fills, and border transitions (fast out, smooth finish).
  - `var(--ease-spring)`: `cubic-bezier(0.34, 1.56, 0.64, 1)` — Used for transform scale/lifting (bouncy, tactile feel).

- **Page Entry (`fadeUp`)**: Content should cascade into view using the `fadeUp` keyframes (translateY `16px` -> `0`, over `0.45s`).
- **Interactive Hover**:
  - Cards lift up: `transform: translateY(-2px) scale(1.002)`.
  - Cards gain shadow: `box-shadow: 0 6px 20px rgba(13,116,144,0.1)`.

---

## 5. Core UI Patterns

### The Card / Option-Row Pattern
The foundational interaction element for the application. Any multiple-choice or selectable list must use this layout.

**Anatomy of an `.option-item`**:
1. **Container**: `border-radius: 12px`, 1.5px border, background `var(--slate-light)`.
2. **Left/Top Illustration (`.opt-illus`)**:
   - Fixed dimension (e.g., `108px` wide for horizontal rows).
   - Crisp white background, right-bordered.
   - SVG inside scales up slightly on hover (`transform: scale(1.06)`).
   - Features a linear-gradient "shimmer" effect traversing the box on hover.
3. **Body (`.opt-body`)**:
   - Contains `.option-label` (Navy, bold) and `.option-desc` (Soft text, normal).
4. **Right Controls (`.opt-right`)**:
   - Info Button: Small circular `?` button that expands on hover.
   - Checkbox (`.option-check`): 20x20px rounded square. Empty by default.
5. **Selected State (`.selected`)**:
   - Border leaps to `var(--green-border)`.
   - Background shifts to `var(--green-bg)`.
   - Checkbox fills with `var(--green-mid)` and the internal SVG check path animates in.
   - Container gains `box-shadow` with `var(--green-glow)`.

---

*End of Design System specification.*
