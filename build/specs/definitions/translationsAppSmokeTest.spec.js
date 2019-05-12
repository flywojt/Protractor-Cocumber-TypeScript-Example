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
cucumber_1.Given('I am on Translations app page', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.GoToTranslationsApp();
}));
cucumber_1.Then('I see that Translations page is loaded', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.elementIsVisible(pages.translationsPage.TranslationsAppHeader), 10000);
    yield pages.translationsPage.TranslationsAppHeader.isDisplayed();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25zQXBwU21va2VUZXN0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcGVjcy9kZWZpbml0aW9ucy90cmFuc2xhdGlvbnNBcHBTbW9rZVRlc3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXlGO0FBQ3pGLDJDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsc0RBQXlEO0FBRXpELElBQUksS0FBZSxDQUFDO0FBQ3BCLEtBQUssR0FBRyxJQUFJLGdCQUFRLEVBQUUsQ0FBQztBQUV2QixnQkFBSyxDQUFDLCtCQUErQixFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQ2xHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBMkIsRUFBRSxHQUFTLEVBQUU7SUFDekcsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuRSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=