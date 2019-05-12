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
const protractor_1 = require("protractor");
const page_1 = require("./page");
const configs_1 = require("configs");
const conditions_1 = require("extensions/conditions");
const findBy_1 = require("extensions/findBy");
const selectorType_1 = require("extensions/selectorType");
class AngularHomePage extends page_1.Page {
    constructor() {
        super();
        this.url = configs_1.Urls.homePage;
    }
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.search), 10000)) !== undefined;
        });
    }
    searchPhrase(string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.search.isPresent(), 3000);
            yield this.search.sendKeys(string);
        });
    }
    // Write code here that turns the phrase above into concrete actions
    searchResultIsPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.searchResult.isPresent(), 3000);
            yield this.searchResult.isDisplayed();
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.search-result-item'),
    __metadata("design:type", protractor_1.ElementFinder)
], AngularHomePage.prototype, "searchResult", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, 'input[type=\'search\']'),
    __metadata("design:type", protractor_1.ElementFinder)
], AngularHomePage.prototype, "search", void 0);
exports.AngularHomePage = AngularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsaUNBQThCO0FBQzlCLHFDQUErQjtBQUMvQixzREFBeUQ7QUFDekQsOENBQTJDO0FBQzNDLDBEQUF1RDtBQUV2RCxNQUFjLGVBQWdCLFNBQVEsV0FBSTtJQUN4QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFTYyxhQUFhOztZQUN4QixPQUFPLENBQUMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDcEYsQ0FBQztLQUFBO0lBQ1ksWUFBWSxDQUFDLE1BQWE7O1lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUNLLG9FQUFvRTtJQUl6RCxxQkFBcUI7O1lBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsQ0FBQztLQUFBO0NBR0E7QUF0Qkc7SUFEQyxlQUFNLENBQUMsMkJBQVksQ0FBQyxHQUFHLEVBQUcscUJBQXFCLENBQUM7OEJBQzVCLDBCQUFhO3FEQUFDO0FBR25DO0lBREMsZUFBTSxDQUFDLDJCQUFZLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDOzhCQUNwQywwQkFBYTsrQ0FBQztBQVhqQywwQ0E4QkMifQ==