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
cucumber_1.Given('I am on Recruitment Project page1', { timeout: 120 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.home.GoToRecruitingProjectPage();
}));
cucumber_1.When('I click on New Project button1', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.recruitmentProjectsPage.NewProjectButton.click();
}));
cucumber_1.When('I type {string} to project name text field1', { timeout: 60 * 1000 }, (projectName) => __awaiter(this, void 0, void 0, function* () {
    yield pages.recruitmentProjectsPage.TittleInput.sendKeys(projectName);
}));
cucumber_1.When('I type {string} to project description text field1', { timeout: 60 * 1000 }, (projectrDescription) => __awaiter(this, void 0, void 0, function* () { return null; }));
cucumber_1.When('I click add button1', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.recruitmentProjectsPage.AddButton.click();
}));
cucumber_1.Then('New Project is added to projects list1', { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(conditions_1.elementIsVisible(pages.recruitmentProjectsPage.RecruitmentProjectAddedSuccessMessageBar), 10000);
    yield pages.recruitmentProjectsPage.RecruitmentProjectAddedSuccessMessageBar.isDisplayed();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUmVjUHJvamVjdEJhc2ljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcGVjcy9kZWZpbml0aW9ucy9BZGRSZWNQcm9qZWN0QmFzaWMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXlGO0FBQ3pGLDJDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsc0RBQXlEO0FBRXpELElBQUksS0FBZSxDQUFDO0FBQ3BCLEtBQUssR0FBRyxJQUFJLGdCQUFRLEVBQUUsQ0FBQztBQUV2QixnQkFBSyxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQ3RHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUN2RSxNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZDQUE2QyxFQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFPLFdBQW1CLEVBQUUsRUFBRTtJQUN2RyxNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0RBQW9ELEVBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLENBQU8sbUJBQTBCLEVBQUUsRUFBRSxnREFBQyxPQUFBLElBQUksQ0FBQSxHQUFBLENBQUMsQ0FBQztBQUU5SCxlQUFJLENBQUMscUJBQXFCLEVBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUM1RCxNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUEyQixFQUFFLEdBQVMsRUFBRTtJQUN6RyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyx3Q0FBd0MsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BILE1BQU0sS0FBSyxDQUFDLHVCQUF1QixDQUFDLHdDQUF3QyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdGLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==