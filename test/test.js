#!/usr/bin/env node

var fs = require('fs');
var kicadBomGenerator = require('../index.js');

var kicadComponents = fs.readFileSync(__dirname + '/uhk-left-main.cmp', {encoding:'utf8'});
var kicadNetlist = fs.readFileSync(__dirname + '/uhk-left-main.net', {encoding:'utf8'});
var generatedKicadBom = JSON.stringify(kicadBomGenerator(kicadComponents, kicadNetlist), null, 4);

var savedKicadBom = fs.readFileSync(__dirname + '/uhk-left-main.json', {encoding:'utf8'});
var statusCode = generatedKicadBom.trim() === savedKicadBom.trim() ? 0 : 1;

console.log(statusCode === 0 ? 'All good.' : 'Test failed!');
process.exit(statusCode);
