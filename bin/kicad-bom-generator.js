#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var kicadBomGenerator = require('../index.js');

var programName = path.basename(process.argv[1]);
var kicadComponentsFilename = process.argv[2] || '';
var kicadNetlistFilename = process.argv[3] || '';

if (kicadComponentsFilename.length === 0 || kicadNetlistFilename.length === 0) {
    console.error('Usage: %s your-kicad.cmp your-kicad.net', programName);
    return;
}

try {
    fs.statSync(kicadComponentsFilename);
} catch(error) {
    console.error('File does not exists: "%s"', kicadComponentsFilename);
    return;
}

try {
    fs.statSync(kicadNetlistFilename);
} catch(error) {
    console.error('File does not exists: "%s"', kicadNetlistFilename);
    return;
}

var kicadComponents = fs.readFileSync(kicadComponentsFilename, {encoding:'utf8'});
var kicadNetlist = fs.readFileSync(kicadNetlistFilename, {encoding:'utf8'});
var kicadBom = kicadBomGenerator(kicadComponents, kicadNetlist);

console.log(JSON.stringify(kicadBom, null, 4));
