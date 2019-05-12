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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const findBy_1 = require("extensions/findBy");
const selectorType_1 = require("extensions/selectorType");
const protractor_1 = require("protractor");
const page_1 = require("./page");
const conditions_1 = require("extensions/conditions");
class CalendarPage extends page_1.Page {
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.CalendarAppHeader), 30000)) !== undefined;
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.xpath, "//button[contains(text(),'Calendar')]"),
    __metadata("design:type", protractor_1.ElementFinder)
], CalendarPage.prototype, "CalendarAppHeader", void 0);
exports.CalendarPage = CalendarPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvY2FsZW5kYXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMkM7QUFDM0MsMERBQXVEO0FBQ3ZELDJDQUFvRDtBQUNwRCxpQ0FBOEI7QUFFOUIsc0RBQXdFO0FBR3hFLE1BQWEsWUFBYSxTQUFRLFdBQUk7SUFNdkIsYUFBYTs7WUFDeEIsT0FBTyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsNkJBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDN0YsQ0FBQztLQUFBO0NBR0Y7QUFQQztJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEtBQUssRUFBRSx1Q0FBdUMsQ0FBQzs4QkFDMUMsMEJBQWE7dURBQUM7QUFKMUMsb0NBV0MifQ==