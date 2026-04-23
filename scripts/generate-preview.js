const fs = require('fs');
const path = require('path');
const { buildSvg } = require('../utils/build-svg');

const outputPath = path.join(__dirname, '..', 'preview.svg');
fs.writeFileSync(outputPath, buildSvg({ date: new Date() }), 'utf8');
console.log(`Generated ${outputPath}`);
