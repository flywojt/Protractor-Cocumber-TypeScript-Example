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
cucumber_1.Given('I am on Forms app page', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.GoToFormsAppPage();
}));
cucumber_1.Then('I see that forms page is loaded', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.elementIsVisible(pages.formsPage.FormsAppHeader), 10000);
    yield pages.formsPage.FormsAppHeader.isDisplayed();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXNBcHBTbW9rZVRlc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWNzL2RlZmluaXRpb25zL2Zvcm1zQXBwU21va2VUZXN0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5RjtBQUN6RiwyQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLHNEQUF5RDtBQUV6RCxJQUFJLEtBQWUsQ0FBQztBQUNwQixLQUFLLEdBQUcsSUFBSSxnQkFBUSxFQUFFLENBQUM7QUFFdkIsZ0JBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUEyQixFQUFFLEdBQVMsRUFBRTtJQUMzRixNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUN0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQ2xHLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsNkJBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RSxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==