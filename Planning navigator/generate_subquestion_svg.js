const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'components/illustrations/index.js');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const newSvgs = {
    'sub-question': '<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="20" width="30" height="40" rx="4" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/><rect x="42" y="32" width="16" height="2" rx="1" fill="#94a3b8"/><rect x="42" y="38" width="16" height="2" rx="1" fill="#94a3b8"/><rect x="42" y="44" width="10" height="2" rx="1" fill="#94a3b8"/><circle cx="58" cy="50" r="10" fill="#38bdf8" stroke="#0ea5e9" stroke-width="1.5"/><path d="M54 50l3 3 5-5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

const illusDir = path.join(__dirname, 'components/illustrations');
if (!fs.existsSync(illusDir)) fs.mkdirSync(illusDir, { recursive: true });

for (const [key, svg] of Object.entries(newSvgs)) {
    fs.writeFileSync(path.join(illusDir, `${key}.svg`), svg);
}

// Modify index.js to include the new SVGs
let insertPos = indexContent.lastIndexOf('};');
if (insertPos !== -1) {
    let toInsert = '';
    for (const [key, svg] of Object.entries(newSvgs)) {
        if (!indexContent.includes(`'${key}':`)) {
            toInsert += `,\n\n        '${key}': '${svg}'`;
        }
    }
    indexContent = indexContent.slice(0, insertPos) + toInsert + '\n    ' + indexContent.slice(insertPos);
    fs.writeFileSync(indexPath, indexContent);
    console.log("Updated index.js with sub-question SVG");
}
