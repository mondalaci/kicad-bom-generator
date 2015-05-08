var kicadNetlistToJson = require('kicad-netlist-to-json');
var kicadComponentsToJson = require('kicad-components-to-json');

module.exports = function(components, netlist) {
    var netlistObjects = kicadNetlistToJson(netlist).export.components.comp;
    var componentsObjects = kicadComponentsToJson(components);

    var componentsDictionary = {};
    componentsObjects.forEach(function(component) {
        componentsDictionary[component.reference] = component;
    });

    netlistObjects.forEach(function(netlistObject) {
        netlistObject.component = componentsDictionary[netlistObject.ref];
    });

    return netlistObjects;
};
