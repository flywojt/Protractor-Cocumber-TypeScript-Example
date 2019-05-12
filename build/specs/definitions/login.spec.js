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
let pages;
pages = new pages_1.AllPages();
cucumber_1.Given('I am on login page', { timeout: 120 * 10000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.loginPage.navigate();
    yield pages.loginPage.waitForPage();
}));
cucumber_1.When('I click on user text input', () => null);
cucumber_1.When('I type {string} login', (login) => __awaiter(this, void 0, void 0, function* () {
    yield pages.loginPage.inputUser(login);
}));
cucumber_1.When('I click on password text input', () => null);
cucumber_1.When('I type {string} password', (password) => __awaiter(this, void 0, void 0, function* () {
    yield pages.loginPage.inputPassword(password);
}));
cucumber_1.When('I click on confirm button', () => __awaiter(this, void 0, void 0, function* () {
    yield pages.loginPage.submit();
}));
cucumber_1.Then('I am transfer to home page', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.pageHasLoaded(pages_1.HomePage));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWNzL2RlZmluaXRpb25zL2xvZ2luLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVDQUF5RjtBQUN6RiwyQ0FBcUM7QUFDckMsaUNBQXlEO0FBQ3pELHNEQUF3RTtBQUd4RSxJQUFJLEtBQWUsQ0FBQztBQUNwQixLQUFLLEdBQUcsSUFBSSxnQkFBUSxFQUFFLENBQUM7QUFFdkIsZ0JBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsS0FBSyxFQUEyQixFQUFFLEdBQVMsRUFBRTtJQUN4RixNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFL0MsZUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQU8sS0FBYSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRW5ELGVBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFPLFFBQWdCLEVBQUUsRUFBRTtJQUMxRCxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzNDLE1BQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzdGLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsMEJBQWEsQ0FBQyxnQkFBUSxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=