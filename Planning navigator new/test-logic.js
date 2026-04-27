const fs = require('fs');

const rawHtml = fs.readFileSync('/Users/tamkeen.kiani/Planning Navigator/Planning navigator  Antigravity/planning-navigation-full.html', 'utf8');

// Quick regex to extract answers map simulation
let answers = { 
    PG5: { value: 'yes' },
    PT18: { value: 'yes', answer: 'Yes', question: 'Will your project involve other site works...' },
    T1: { value: 'yes', answer: 'Yes', question: 'Tree Preservation Order' }
};

let questions = {
    PT18: { question: 'Will your project involve other site works?', options: [{ value: 'yes', text: 'Yes'}, {value: 'no', text: 'No'}] },
    T1: { question: 'Tree Preservation Order', options: [{ value: 'yes', text: 'Yes'}, {value: 'no', text: 'No'}] }
};

let currentGroupId = 'DEM';
let groupPhaseState = {
    DEM: { phase: 'nonHardStop', hardStops: ['PT17'], nonHardStops: ['PT18'] }
};

// SIMULATE goNext logic for DEM Phase 2
let phaseState = groupPhaseState[currentGroupId];
for (const qId of phaseState.nonHardStops) {
    if (!answers[qId]) {
        const q = questions[qId];
        const noOption = q.options.find(o => o.value === 'no');
        if (noOption) answers[qId] = { question: q.question, answer: noOption.text, value: 'no' };
    }
}
console.log("After DEM Phase 2 mapping:", answers.PT18.value);

// SIMULATE goNext logic for SITE
currentGroupId = 'SITE';
let groups = { SITE: { questionIds: ['T1', 'T2', 'T3', 'T4', 'T5'] } };

// Mock missing questions
['T2','T3','T4','T5'].forEach(q => questions[q] = { question: q, options: [{value: 'yes', text: 'Yes'}, {value: 'no', text: 'No'}] });

const siteQuestions = groups['SITE'].questionIds;
for (const qId of siteQuestions) {
    if (!answers[qId]) {
        const q = questions[qId];
        const noOption = q.options.find(o => o.value === 'no');
        if (noOption) {
            answers[qId] = { question: q.question, answer: noOption.text, value: 'no' };
        }
    }
}

console.log("After SITE mapping:", answers.T1.value);
