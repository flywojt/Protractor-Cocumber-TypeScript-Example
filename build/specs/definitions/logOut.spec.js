"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const pages_1 = require("pages");
const conditions_1 = require("extensions/conditions");
let pages = new pages_1.AllPages();
cucumber_1.Given('I am on home page', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.waitForPage();
}));
cucumber_1.When('I click User Panel button', () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.UserPanelMenuButton.click();
}));
cucumber_1.When('I click log out button', () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.clickLogOutButton();
}));
cucumber_1.Then('I am logged out from system', () => __awaiter(this, void 0, void 0, function* () { return null; }));
cucumber_1.Then('I am transfer to login page', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.elementIsVisible(pages.loginPage.TrustThisComputerCheckOut), 10000);
    yield pages.loginPage.TrustThisComputerCheckOut.isDisplayed();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nT3V0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcGVjcy9kZWZpbml0aW9ucy9sb2dPdXQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXlGO0FBQ3pGLDJDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsc0RBQXlEO0FBRXpELElBQUksS0FBSyxHQUFFLElBQUksZ0JBQVEsRUFBRSxDQUFDO0FBRTFCLGdCQUFLLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBMkIsRUFBRSxHQUFTLEVBQUU7SUFDdEYsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzNDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtJQUN4QyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLElBQUksQ0FBQSxHQUFBLENBQUMsQ0FBQztBQUV0RCxlQUFJLENBQUMsNkJBQTZCLEVBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNyRSxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RixNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9