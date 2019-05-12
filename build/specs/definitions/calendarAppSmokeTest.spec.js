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
cucumber_1.Given('I am on Calendar app page', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.GoToCalendarAppPage();
}));
cucumber_1.Then('I see that Calendar page is loaded', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.elementIsVisible(pages.flatsPage.AccomodationAppHeader), 10000);
    yield pages.flatsPage.AccomodationAppHeader.isDisplayed();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJBcHBTbW9rZVRlc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWNzL2RlZmluaXRpb25zL2NhbGVuZGFyQXBwU21va2VUZXN0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5RjtBQUN6RiwyQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLHNEQUF5RDtBQUV6RCxJQUFJLEtBQWUsQ0FBQztBQUNwQixLQUFLLEdBQUcsSUFBSSxnQkFBUSxFQUFFLENBQUM7QUFFdkIsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUEyQixFQUFFLEdBQVMsRUFBRTtJQUM5RixNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQ3JHLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsNkJBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLE1BQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=