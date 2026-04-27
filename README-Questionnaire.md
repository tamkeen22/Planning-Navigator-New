# Planning Permission Questionnaire Prototype

## Overview
This is an interactive, browser-based questionnaire prototype for assessing planning permission requirements based on the rules and guidance mapping from `PlanNav_QuestionMapping_003(Rules & Guidance).csv`.

## Files Created

1. **questionnaire-prototype.html** - The main interactive prototype (single HTML file, runs in any browser)
2. **questionnaire-flow-diagram.md** - Detailed documentation of the question flow and logic
3. **README-Questionnaire.md** - This file

## How to Use

### Running the Prototype

1. Open `questionnaire-prototype.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
2. No server or installation required - it's a standalone HTML file
3. Answer the questions by clicking on "Yes" or "No" options
4. Use the "Next →" button to proceed after selecting an answer
5. Use the "← Back" button to go back to previous questions
6. The questionnaire will automatically show results when:
   - A "stop" condition is met (planning permission required)
   - All relevant questions have been answered
   - The flow reaches a natural conclusion

### Question Flow Structure

The questionnaire follows this logical flow:

1. **Key Planning Considerations** (LG1-LG4)
   - Listed Building check
   - Conservation Area check
   - Article 4 Direction check
   - Designated Land check
   - *These can immediately stop the flow if answered "Yes"*

2. **About Your Project** (PG1-PG5)
   - Determines the main project type
   - Routes to specific question sets based on project type

3. **Project-Specific Questions**
   - **Extensions & Additions** (PT1-PT9) → Detailed checks (PS1-PS9)
   - **Conversions & Change of Use** (PT10-PT16) → Detailed checks (PS11)
   - **Demolition & Site Works** (PT17-PT18)

4. **Site Checks & Considerations** (T1-T5)
   - Flood risk
   - Highway access
   - Contamination
   - Protected habitats
   - Archaeological interest

### Features

- **Progress Tracking**: Visual progress bar shows completion status
- **Question Categories**: Each question is clearly categorized
- **Guidance**: Detailed guidance provided for each question
- **Stop Conditions**: Automatically stops and shows results when planning permission is required
- **Result Summary**: Comprehensive results page with:
  - Planning permission requirement status
  - Guidance and recommendations
  - Summary of all answers
  - Next steps

### Result Types

1. **Planning Permission Required** (Red box)
   - Shown when any stop condition is met
   - Includes specific reason and guidance

2. **Permitted Development May Apply** (Green box)
   - Shown when project passes all checks
   - Recommends obtaining a Lawful Development Certificate (LDC)

3. **Guidance Boxes** (Yellow boxes)
   - Additional considerations and recommendations
   - Site-specific checks and requirements

## Question Logic

### Stop Conditions
Questions that immediately require planning permission:
- Listed Building (LG1)
- Conservation Area (LG2)
- Article 4 Direction (LG3)
- Designated Land (LG4)
- New Dwelling (PG1)
- Replace Dwelling (PG2)
- Multi-storey Extension (PT3)
- Balcony (PT7)
- Dwelling to Flats (PT10)
- Dwelling to HMO (PT12)
- Residential to Commercial (PT15)
- Demolition (PT17)
- Any detailed question that exceeds permitted development limits

### Trigger Logic
- Questions trigger follow-up questions based on answers
- "Yes" answers typically lead to detailed question sets
- "No" answers continue to the next question in sequence
- Site checks (T1-T5) are asked at the end if any project was identified

## Technical Details

- **Pure HTML/CSS/JavaScript** - No dependencies, no build process
- **Responsive Design** - Works on desktop and mobile devices
- **Modern UI** - Clean, professional interface with smooth animations
- **State Management** - Tracks answers and question history
- **Back Navigation** - Allows users to go back and change answers

## Customization

The questionnaire structure is defined in the `questions` object in the JavaScript section. Each question has:
- `category`: Question category/group
- `question`: The question text
- `options`: Array of answer options with:
  - `text`: Display text
  - `value`: Internal value
  - `next`: Array of next question IDs to ask
  - `stop`: Boolean indicating if this stops the flow
  - `result`: Result message if stop is true
- `guidance`: Guidance text shown in results

## Notes

- The prototype implements the core logic from the CSV mapping
- All question triggers and stop conditions are implemented
- The flow handles sequential questions, branching, and stop conditions
- Site checks are automatically included when relevant
- Results provide comprehensive guidance based on answers

## Future Enhancements

Potential improvements:
- Save/load progress functionality
- Print/export results
- Email results option
- Integration with planning authority systems
- Multi-language support
- Accessibility improvements (ARIA labels, keyboard navigation)
- Analytics tracking
