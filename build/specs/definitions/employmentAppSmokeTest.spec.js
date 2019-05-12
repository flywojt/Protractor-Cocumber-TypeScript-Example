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
cucumber_1.Given('I am on Employment app page1', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.GoToEmplymentAppPage();
}));
cucumber_1.Then('I see that Employment page is loaded', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.elementIsVisible(pages.employmentPage.StatusesButton), 10000);
    yield pages.employmentPage.StatusesButton.isDisplayed();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95bWVudEFwcFNtb2tlVGVzdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3BlY3MvZGVmaW5pdGlvbnMvZW1wbG95bWVudEFwcFNtb2tlVGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUY7QUFDekYsMkNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQyxzREFBeUQ7QUFFekQsSUFBSSxLQUFlLENBQUM7QUFDcEIsS0FBSyxHQUFHLElBQUksZ0JBQVEsRUFBRSxDQUFDO0FBRXZCLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBMkIsRUFBRSxHQUFTLEVBQUU7SUFDakcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUEyQixFQUFFLEdBQVMsRUFBRTtJQUN2RyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakYsTUFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMxRCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=