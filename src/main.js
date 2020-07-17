"use strict";
exports.__esModule = true;
var ComponentA_vue_1 = require("./components/ComponentA.vue");
var ComponentB_vue_1 = require("./components/ComponentB.vue");
var Components = {
    ComponentA: ComponentA_vue_1["default"],
    ComponentB: ComponentB_vue_1["default"]
};
var Install = function (Vue, options) {
    if (options === void 0) { options = {}; }
    Object.keys(Components).forEach(function (component) {
        Vue.component(component, Components[component]);
    });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    Install(window.Vue);
}
exports["default"] = Install;
