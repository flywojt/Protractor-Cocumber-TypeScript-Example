"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const findBy_1 = require("extensions/findBy");
const selectorType_1 = require("extensions/selectorType");
class AngularHomePage {
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.linkText, 'angular.io'),
    __metadata("design:type", protractor_1.ElementFinder)
], AngularHomePage.prototype, "angularLink", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, 'input[type=\'search\']'),
    __metadata("design:type", protractor_1.ElementFinder)
], AngularHomePage.prototype, "search", void 0);
exports.AngularHomePage = AngularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDhDQUEyQztBQUMzQywwREFBdUQ7QUFFdkQsTUFBYSxlQUFlO0NBTTNCO0FBSEM7SUFEQyxlQUFNLENBQUMsMkJBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDOzhCQUMvQiwwQkFBYTtvREFBQztBQUUzQjtJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQzs4QkFDM0MsMEJBQWE7K0NBQUM7QUFMeEIsMENBTUMifQ==