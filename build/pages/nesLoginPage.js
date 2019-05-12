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
const configs_1 = require("configs");
const conditions_1 = require("extensions/conditions");
class NesLoginPage extends page_1.Page {
    constructor() {
        super();
        this.url = configs_1.Urls.homePage;
    }
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.PasswordInput), 30000)) !== undefined; // TODO: make it different
        });
    }
    waitForPage() {
        return __awaiter(this, void 0, void 0, function* () {
            //await delay(30000);
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.PasswordInput), 30000);
        });
    }
    inputUser(login) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.LoginInput), 30000);
            yield this.LoginInput.sendKeys(login);
        });
    }
    inputPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.LoginInput), 30000);
            yield this.PasswordInput.sendKeys(password);
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.GoButton.click();
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '#TextField1'),
    __metadata("design:type", protractor_1.ElementFinder)
], NesLoginPage.prototype, "LoginInput", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '#TextField3'),
    __metadata("design:type", protractor_1.ElementFinder)
], NesLoginPage.prototype, "PasswordInput", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '#id__5'),
    __metadata("design:type", protractor_1.ElementFinder)
], NesLoginPage.prototype, "GoButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.mi.mi-CheckMark'),
    __metadata("design:type", protractor_1.ElementFinder)
], NesLoginPage.prototype, "TrustThisComputerCheckOut", void 0);
exports.NesLoginPage = NesLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvbmVzTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMkM7QUFDM0MsMERBQXVEO0FBQ3ZELDJDQUFvRDtBQUNwRCxpQ0FBOEI7QUFDOUIscUNBQStCO0FBQy9CLHNEQUF3RTtBQUd4RSxNQUFhLFlBQWEsU0FBUSxXQUFJO0lBY3BDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVZLGFBQWE7O1lBQ3hCLE9BQU8sQ0FBQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLDBCQUEwQjtRQUNwSCxDQUFDO0tBQUE7SUFFWSxXQUFXOztZQUN0QixxQkFBcUI7WUFDckIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRVksU0FBUyxDQUFDLEtBQWE7O1lBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsNkJBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdELE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksYUFBYSxDQUFDLFFBQWdCOztZQUN6QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVZLE1BQU07O1lBQ2pCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDRjtBQXZDQztJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUM7OEJBQ3JCLDBCQUFhO2dEQUFDO0FBR2pDO0lBREMsZUFBTSxDQUFDLDJCQUFZLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQzs4QkFDbEIsMEJBQWE7bURBQUM7QUFHcEM7SUFEQyxlQUFNLENBQUMsMkJBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDOzhCQUNsQiwwQkFBYTs4Q0FBQztBQUcvQjtJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQzs4QkFDWCwwQkFBYTsrREFBQztBQVhsRCxvQ0F5Q0MifQ==