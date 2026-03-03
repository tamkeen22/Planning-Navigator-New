# Webflow CMS Migration Plan
## Planning Navigator Questionnaire

---

## 📋 Executive Summary

This document outlines the strategy for migrating the Planning Navigator questionnaire from a single-file HTML/JavaScript application to a Webflow CMS-powered implementation. The goal is to maintain all existing functionality while leveraging Webflow's CMS capabilities for easier content management and updates.

**Current State:** Single HTML file (`planning-navigation-full.html`) with embedded JavaScript containing ~85 questions, complex routing logic, and dynamic UI rendering.

**Target State:** Webflow site with CMS collections for questions, groups, and options, with custom JavaScript handling the routing logic and state management.

---

## 🏗️ Current Architecture Analysis

### Data Structure

#### 1. Questions Object (~85 questions)
```javascript
{
  'LG1': {
    category: 'Key Planning Considerations',
    group: 'location',
    question: 'Question text...',
    options: [
      { text: 'Yes', value: 'yes', stop: true, result: '...', guidance: '...' },
      { text: 'No', value: 'no', next: ['LG2'], guidance: '...' }
    ],
    guidance: 'Guidance text...'
  }
}
```

**Key Properties:**
- `category`: Question category (for organization)
- `group`: Group ID (LG, PG, EXT, CONV, DEM, SITE, PS1-PS11, T1-T5)
- `question`: Question text
- `options`: Array of answer options with routing logic
- `guidance`: Default guidance text (can be overridden by option-level guidance)

#### 2. Groups Object (12 groups)
```javascript
{
  'LG': {
    id: 'LG',
    title: 'About Your Property & Location',
    breadcrumb: 'Location & property checks',
    step: 'location',
    questionIds: ['LG1', 'LG2', 'LG3', 'LG4']
  }
}
```

**Group Types:**
- **Sequential Groups:** LG, PG, SITE, T1-T5 (linear flow)
- **Accordion Groups:** EXT, CONV, DEM (contain PT questions that open PS accordions)
- **Sub-question Groups:** PS1-PS11 (accordion sub-questions)

#### 3. State Management
- `answers`: Object tracking user answers `{ questionId: { value, answer, timestamp } }`
- `flow`: Dynamic array of group IDs based on PG answers `['LG', 'PG', 'SITE', 'EXT', ...]`
- `currentGroupId`: Active group ID
- `currentQuestionId`: Active question ID
- `accordionState`: Object tracking accordion states for EXT/CONV groups
- `questionHistory`: Array for back button navigation

### Key Logic Functions

1. **`computeFlow()`**: Dynamically builds question flow based on PG answers
2. **`renderGroup()`**: Renders current group/question with appropriate UI (accordion vs. standard)
3. **`handleGroupedToggleClick()`**: Handles answer selection and routing
4. **`goNext()`**: Advances to next question/group
5. **`goBack()`**: Navigates to previous question using history
6. **`showResults()`**: Generates result screen with reasons, guidance, and next steps
7. **`calculateQuestionNumbers()`**: Calculates sequential question numbers including PS sub-questions

### Routing Patterns

1. **Sequential Within Group**: Default next question in `questionIds` array
2. **Explicit Next Path**: Option specifies `next: ['QuestionId']`
3. **Accordion Expansion**: PT "Yes" → expand PS accordion
4. **Cross-Group Navigation**: Questions can route to different groups
5. **Hard Stop**: `stop: true` triggers result screen
6. **Auto-Advance**: Guidance-only questions auto-advance after 1.5s

---

## 🎯 Webflow CMS Structure

### Collection 1: Questions

**Collection Name:** `questions`

**Fields:**
| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `question-id` | Plain Text | Yes | Unique ID (e.g., "LG1", "PS1-01") |
| `category` | Plain Text | Yes | Category name |
| `group-id` | Reference (Groups) | Yes | Link to parent group |
| `question-text` | Rich Text | Yes | The question text |
| `default-guidance` | Rich Text | No | Default guidance (can be overridden by option) |
| `display-order` | Number | Yes | Order within group |
| `is-subquestion` | Boolean | No | True for PS questions |
| `parent-pt-question` | Reference (Questions) | No | For PS questions, link to parent PT |

**CMS Settings:**
- Enable search: Yes (by question-id, category)
- Enable filtering: Yes (by group-id, category, is-subquestion)

---

### Collection 2: Options

**Collection Name:** `options`

**Fields:**
| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `option-id` | Plain Text | Yes | Unique ID (auto-generated or manual) |
| `question` | Reference (Questions) | Yes | Link to parent question |
| `option-text` | Plain Text | Yes | Display text (e.g., "Yes", "No") |
| `option-value` | Plain Text | Yes | Value stored (e.g., "yes", "no") |
| `is-stop` | Boolean | No | Triggers hard stop if true |
| `stop-result-text` | Rich Text | No | Result text shown when stop triggered |
| `option-guidance` | Rich Text | No | Guidance specific to this option |
| `next-question-id` | Plain Text | No | Explicit next question ID (comma-separated for multiple) |
| `display-order` | Number | Yes | Order of options within question |

**CMS Settings:**
- Enable search: Yes
- Enable filtering: Yes (by question, is-stop)

**Note:** Options are stored separately to allow multiple options per question and easier management.

---

### Collection 3: Groups

**Collection Name:** `groups`

**Fields:**
| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `group-id` | Plain Text | Yes | Unique ID (e.g., "LG", "EXT") |
| `group-title` | Plain Text | Yes | Display title |
| `breadcrumb-text` | Plain Text | Yes | Breadcrumb label |
| `step-type` | Plain Text | Yes | One of: "location", "project", "site", "detail" |
| `group-type` | Plain Text | Yes | One of: "sequential", "accordion", "subquestion" |
| `parent-group` | Reference (Groups) | No | For PS groups, link to parent (EXT/CONV) |
| `parent-pt-question` | Reference (Questions) | No | For PS groups, link to triggering PT question |

**CMS Settings:**
- Enable search: Yes
- Enable filtering: Yes (by group-type, step-type)

**Note:** Question IDs within groups will be managed via the Questions collection's `group-id` reference and `display-order`.

---

### Collection 4: Question Flow Rules (Optional)

**Collection Name:** `flow-rules`

**Fields:**
| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `rule-id` | Plain Text | Yes | Unique ID |
| `trigger-question` | Reference (Questions) | Yes | Question that triggers this rule |
| `trigger-answer-value` | Plain Text | Yes | Answer value that triggers rule |
| `action-type` | Plain Text | Yes | One of: "add-group", "remove-group", "set-flow" |
| `target-group-id` | Plain Text | No | Group ID to add/remove |
| `flow-sequence` | Plain Text | No | Comma-separated group IDs for flow |

**Purpose:** Store dynamic flow logic (e.g., PG3 "Yes" → add EXT group to flow)

**Alternative Approach:** This logic can remain in JavaScript rather than CMS if it's complex and rarely changes.

---

## 🔄 Migration Strategy

### Phase 1: Data Export & Preparation

1. **Extract Questions Data**
   - Parse `questions` object from HTML file
   - Convert to CSV format for bulk import
   - Map each question to CMS fields

2. **Extract Options Data**
   - Flatten options array from questions
   - Create separate records for each option
   - Link options to questions via reference

3. **Extract Groups Data**
   - Parse `groups` object
   - Create group records in CMS
   - Ensure question-group relationships are maintained

4. **Data Validation**
   - Verify all question IDs are unique
   - Check all references are valid
   - Ensure no orphaned options or questions

### Phase 2: Webflow Setup

1. **Create Collections**
   - Set up `questions`, `options`, `groups` collections
   - Configure field types and relationships
   - Set up CMS filters and search

2. **Import Data**
   - Use Webflow's CSV import feature
   - Import groups first, then questions, then options
   - Verify relationships after import

3. **Create Collection Pages**
   - Question detail page template
   - Group detail page template (if needed)
   - Result page template

### Phase 3: UI Components

1. **Question Display Component**
   - Dynamic question text from CMS
   - Dynamic options rendering
   - Guidance display area
   - Toggle pills (Yes/No buttons)

2. **Accordion Component**
   - For EXT/CONV groups
   - Expandable PS sub-question sections
   - State management for expanded/collapsed

3. **Timeline/Sidebar Component**
   - Dynamic step indicators
   - Progress tracking
   - Group breadcrumbs

4. **Result Screen Component**
   - Dynamic result generation
   - Reasons display
   - Guidance sections
   - Next steps list
   - Answer summary (collapsible)

### Phase 4: JavaScript Logic Integration

1. **CMS Data Loading**
   ```javascript
   // Fetch questions, options, groups from Webflow CMS API
   // Build local data structures for runtime use
   // Cache data for performance
   ```

2. **State Management**
   - Maintain existing state variables (`answers`, `flow`, etc.)
   - Sync with Webflow interactions where possible
   - Use Webflow's native state for UI updates

3. **Routing Logic**
   - Port `computeFlow()`, `goNext()`, `goBack()` functions
   - Adapt to work with CMS references instead of hardcoded IDs
   - Maintain question history for back button

4. **Result Generation**
   - Port `showResults()` function
   - Dynamically generate HTML from CMS data
   - Maintain existing styling and structure

### Phase 5: Webflow Interactions

1. **Answer Selection**
   - Use Webflow interactions for button clicks
   - Trigger custom JavaScript functions
   - Update UI state (active/inactive classes)

2. **Navigation**
   - Continue button interactions
   - Back button interactions
   - Auto-advance timers (for guidance-only questions)

3. **Accordion Behavior**
   - Webflow interactions for expand/collapse
   - State synchronization with JavaScript
   - Active question highlighting

4. **Result Screen**
   - Show/hide interactions
   - Collapsible answer summary
   - Dynamic content injection

---

## 💻 Technical Implementation Approach

### Option A: Hybrid Approach (Recommended)

**Use Webflow CMS for content, custom JavaScript for logic**

**Pros:**
- Content editors can update questions/options without code
- Complex routing logic remains in JavaScript (easier to maintain)
- Full control over state management and flow
- Can leverage Webflow's CMS API for dynamic loading

**Cons:**
- Requires custom code panel
- More complex setup initially

**Implementation:**
1. Load CMS data via Webflow CMS API or embed CMS data in page
2. Build runtime data structures (questions, options, groups objects)
3. Use existing JavaScript logic with minimal modifications
4. Use Webflow interactions for UI updates only

### Option B: Pure Webflow Interactions

**Use Webflow interactions for all logic**

**Pros:**
- No custom code required
- Fully visual workflow

**Cons:**
- Very complex interaction chains (85+ questions)
- Difficult to maintain and debug
- Limited flexibility for dynamic routing
- Performance concerns with many interactions

**Verdict:** Not recommended for this complexity level.

### Option C: External API + Webflow

**Store data in external CMS, fetch via API**

**Pros:**
- More flexible CMS options
- Can use headless CMS (Contentful, Strapi, etc.)

**Cons:**
- Additional infrastructure
- API rate limits
- More complex setup

**Verdict:** Overkill for current needs, but viable for future scaling.

---

## 🎨 UI/UX Considerations

### Design System

1. **Maintain Existing Design**
   - Keep current color scheme (#02294a, #1d8cf8, etc.)
   - Preserve button styles, cards, timeline
   - Maintain dark theme for result screen

2. **Webflow-Specific Adaptations**
   - Use Webflow's native components where possible
   - Ensure responsive behavior matches current implementation
   - Test on mobile devices

3. **CMS-Driven Styling**
   - Consider adding CMS fields for custom styling per question/group
   - Allow content editors to add custom CSS classes if needed

### Accessibility

1. **Maintain Current Accessibility**
   - Keyboard navigation
   - Screen reader compatibility
   - Focus states
   - ARIA labels

2. **Webflow Enhancements**
   - Use Webflow's accessibility features
   - Ensure CMS content is accessible

### Performance

1. **Data Loading**
   - Load all CMS data upfront (single API call)
   - Cache data in browser storage
   - Minimize API calls during questionnaire

2. **Rendering**
   - Use Webflow's native rendering where possible
   - Optimize JavaScript for large datasets
   - Lazy load result screen content if needed

---

## 🧪 Testing Strategy

### Phase 1: Data Integrity

1. **CMS Data Validation**
   - Verify all questions imported correctly
   - Check option relationships
   - Validate group-question links

2. **Reference Integrity**
   - Ensure no broken references
   - Verify all `next` question IDs exist
   - Check PS group → PT question links

### Phase 2: Functional Testing

1. **Question Flow**
   - Test all question sequences
   - Verify routing logic (sequential, explicit, accordion)
   - Test hard stops and result screen triggers

2. **State Management**
   - Test answer persistence
   - Verify back button navigation
   - Check accordion state restoration

3. **Edge Cases**
   - No project types selected
   - All questions answered "No"
   - Multiple hard stops
   - Guidance-only questions

### Phase 3: UI/UX Testing

1. **Visual Consistency**
   - Compare with original design
   - Check responsive behavior
   - Verify animations and transitions

2. **User Experience**
   - Test on multiple devices
   - Verify accessibility
   - Check loading times

### Phase 4: CMS Management Testing

1. **Content Updates**
   - Test updating question text via CMS
   - Add new options
   - Modify routing logic (if in CMS)

2. **Editor Experience**
   - Test CMS interface usability
   - Verify bulk import/export
   - Check validation rules

---

## 📦 Deployment Considerations

### Webflow Hosting

1. **Site Settings**
   - Configure custom domain (if applicable)
   - Set up SSL certificate
   - Configure redirects if needed

2. **CMS Publishing**
   - Set up CMS collection publishing workflow
   - Configure editor permissions
   - Set up staging environment if needed

### Custom Code

1. **Code Panel**
   - Add JavaScript to site-wide code panel or page-specific
   - Ensure code is minified for production
   - Test in Webflow's preview mode

2. **External Scripts**
   - Load any required libraries
   - Consider CDN for better performance

### Analytics & Tracking

1. **Event Tracking**
   - Track question views
   - Track answer selections
   - Track result screen views
   - Track completion rates

2. **Integration**
   - Google Analytics
   - Webflow Analytics
   - Custom tracking solutions

---

## 🔐 Security & Privacy

1. **Data Storage**
   - Answers stored client-side only (no server submission)
   - Consider GDPR compliance for any analytics
   - No PII collection in current implementation

2. **CMS Access**
   - Restrict CMS editor access
   - Use Webflow's role-based permissions
   - Audit trail for content changes

---

## 📊 Success Metrics

1. **Functional Parity**
   - All 85+ questions work correctly
   - All routing logic functions as before
   - Result screen generates correctly

2. **Performance**
   - Page load time < 2 seconds
   - Question transitions < 500ms
   - No JavaScript errors

3. **Content Management**
   - Content editors can update questions without code
   - Bulk import/export works smoothly
   - CMS interface is intuitive

4. **User Experience**
   - No regression in UX
   - Mobile experience maintained
   - Accessibility standards met

---

## 🚀 Implementation Timeline (Estimated)

### Week 1: Planning & Setup
- Finalize CMS structure
- Set up Webflow collections
- Export and prepare data

### Week 2: Data Migration
- Import data into Webflow CMS
- Validate all relationships
- Test CMS interface

### Week 3: UI Components
- Build question display components
- Create accordion components
- Build result screen components

### Week 4: JavaScript Integration
- Port routing logic
- Integrate CMS data loading
- Test state management

### Week 5: Testing & Refinement
- Functional testing
- UI/UX testing
- Bug fixes and refinements

### Week 6: Deployment & Documentation
- Deploy to production
- Create CMS editor documentation
- Train content editors

**Total Estimated Time:** 6 weeks (with 1 developer)

---

## 📝 Next Steps

1. **Review & Approve Plan**
   - Review CMS structure
   - Confirm technical approach
   - Adjust timeline if needed

2. **Set Up Webflow Workspace**
   - Create new Webflow site
   - Set up collections
   - Configure permissions

3. **Begin Data Export**
   - Extract questions/options/groups data
   - Format for CSV import
   - Validate data integrity

4. **Create Prototype**
   - Build single question component
   - Test CMS integration
   - Validate approach before full migration

---

## 🔗 Resources & References

- **Current Implementation:** `planning-navigation-full.html`
- **Webflow CMS API:** https://developers.webflow.com/
- **Webflow Interactions:** https://university.webflow.com/lesson/interactions-overview
- **Webflow Custom Code:** https://university.webflow.com/lesson/custom-code

---

## ❓ Open Questions

1. **CMS vs. JavaScript Logic**
   - Should flow rules be in CMS or JavaScript? (Recommendation: JavaScript for complex logic)
   - How to handle dynamic flow computation in CMS?

2. **Performance**
   - Load all CMS data upfront or on-demand?
   - Cache strategy for CMS data?

3. **Content Updates**
   - How often will questions/options change?
   - Who will be managing content?
   - Need for version control/history?

4. **Analytics**
   - What metrics need to be tracked?
   - Integration with existing analytics tools?

5. **Future Enhancements**
   - Multi-language support?
   - A/B testing for questions?
   - User accounts/saved progress?

---

**Document Version:** 1.0  
**Last Updated:** January 23, 2026  
**Author:** AI Assistant  
**Status:** Draft - Awaiting Review
