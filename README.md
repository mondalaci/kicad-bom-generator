# kicad-bom-generator.js

KiCad components (.cmp) and netlist (.net) to JSON converter.

[![npm module](https://badge.fury.io/js/kicad-bom-generator.svg)](https://www.npmjs.org/package/kicad-bom-generator)
[![dependencies](https://david-dm.org/mondalaci/kicad-bom-generator.svg)](https://david-dm.org/mondalaci/kicad-bom-generator)
[![Build Status](https://travis-ci.org/mondalaci/kicad-bom-generator.svg?branch=master)](https://travis-ci.org/mondalaci/kicad-bom-generator)

# Usage

First, `npm install kicad-bom-generator`

Then let's take a KiCad components file and netlist file like [uhk-left-main.cmp](test/uhk-left-main.cmp) and
[uhk-left-main.net](test/uhk-left-main.net) and

```
var fs = require('fs');
var kicadBomGenerator = require('kicad-bom-generator');
var kicadComponents = fs.readFileSync(
    'node_modules/kicad-bom-generator/test/uhk-left-main.cmp',
    {encoding:'utf8'});
var kicadNetlist = fs.readFileSync(
    'node_modules/kicad-bom-generator/test/uhk-left-main.net',
    {encoding:'utf8'});
console.log(JSON.stringify(kicadBomGenerator(kicadComponents, kicadNetlist), null, 4));
```

This way you'll end up with [uhk-left-main.json](test/uhk-left-main.json)
