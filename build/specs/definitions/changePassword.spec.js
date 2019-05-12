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
const pages_1 = require("pages");
// let settingsPage: SettingsPage;
let pages;
pages = new pages_1.AllPages();
cucumber_1.Given('I am on settings page', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.GoToUserProfilePage();
}));
cucumber_1.When('I type {string} to Enter your password input', { timeout: 120 * 1000 }, (newPassword) => __awaiter(this, void 0, void 0, function* () {
    yield pages.settingsPage.inputNewPassword(newPassword);
}));
cucumber_1.When('I type {string} to Repeat your password input', { timeout: 120 * 1000 }, (newPassword) => __awaiter(this, void 0, void 0, function* () {
    yield pages.settingsPage.confirmNewPassword(newPassword);
}));
cucumber_1.When('I click on Save button', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.settingsPage.clickSaveButton();
}));
cucumber_1.Then('popup with confirmation shows', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.settingsPage.passwordSetDialogWindowIsPresent();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlUGFzc3dvcmQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWNzL2RlZmluaXRpb25zL2NoYW5nZVBhc3N3b3JkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUFnRztBQUVoRyxpQ0FBNkU7QUFLN0Usa0NBQWtDO0FBQ2xDLElBQUksS0FBZSxDQUFDO0FBQ3BCLEtBQUssR0FBRyxJQUFJLGdCQUFRLEVBQUUsQ0FBQztBQUV2QixnQkFBSyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzFGLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQU8sV0FBbUIsRUFBRSxFQUFFO0lBQzFHLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtDQUErQyxFQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFPLFdBQW1CLEVBQUUsRUFBRTtJQUMxRyxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQ2hFLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQ2hHLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0FBQzlELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==