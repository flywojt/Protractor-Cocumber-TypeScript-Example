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
const findBy_1 = require("extensions/findBy");
const selectorType_1 = require("extensions/selectorType");
const conditions_1 = require("extensions/conditions");
const configs_1 = require("configs");
class HomePage extends page_1.Page {
    constructor() {
        super();
        this.url = configs_1.Urls.homePage;
    }
    waitForPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield conditions_1.pageHasLoaded(HomePage);
        });
    }
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            // return true;
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.AppMenuButton), 10000)) !== undefined; // TODO: make it different
        });
    }
    clickLogOutButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.LogOutButton.click();
        });
    }
    GoToRecruitingProjectPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuRecruitmentProjectsApp.click();
        });
    }
    GoToUserProfilePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.UserPanelMenuButton.click();
            yield this.UserPanelSettingsButton.click();
        });
    }
    GoToEmplymentAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuEmplymentApp.click();
        });
    }
    GoToFormsAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuFormsApp.click();
        });
    }
    GoToFlatsAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuFlatsApp.click();
        });
    }
    GoToMessengerAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuMessengerApp.click();
        });
    }
    GoToCalendarAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuCalendarApp.click();
        });
    }
    GoToCVDataBaseAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuCVDataBaseApp.click();
        });
    }
    GoToPromotionAppPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuPromotionApp.click();
        });
    }
    GoToCareerPageApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuCareerPageApp.click();
        });
    }
    GoToOutstaffingProjectsApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuOutstaffingProjectsApp.click();
        });
    }
    GoToBusinessIntelligenceApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuBusinessIntelligenceApp.click();
        });
    }
    GoToTranslationsApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuTranslationsApp.click();
        });
    }
    GoToActivityApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuActivityApp.click();
        });
    }
    GoToServiceStoreApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuServiceStoreApp.click();
        });
    }
    GoToDocumentCreatorApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuDocumentCreatorApp.click();
        });
    }
    GoToAdminPanelApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AppMenuButton.click();
            yield protractor_1.browser.wait(this.MenuRecruitmentProjectsApp.isPresent(), 3000);
            yield this.MenuAdminPanelApp.click();
        });
    }
    TurnOnExperimentalFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.UserPanelMenuButton.click();
            yield protractor_1.browser.wait(this.UserPanelExperimentalFeaturesToggle.isPresent(), 3000);
            yield this.UserPanelExperimentalFeaturesToggle.click();
            yield this.UserPanelCloseButton.click();
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.mi.mi-Dialpad'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "AppMenuButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.mi.mi-ChevronDown'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "UserPanelMenuButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Link.settings'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "UserPanelSettingsButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.log-out'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "LogOutButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .recruitment-projects-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuRecruitmentProjectsApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .employment-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuEmplymentApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .forms-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuFormsApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .accommodation-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuFlatsApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .messenger-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuMessengerApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Toggle-background'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "UserPanelExperimentalFeaturesToggle", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.mi.mi-Cancel'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "UserPanelCloseButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .calendar-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuCalendarApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .cv-database-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuCVDataBaseApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .career-page-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuCareerPageApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .outstaffing-projects'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuOutstaffingProjectsApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .promotions-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuPromotionApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .business-intelligence-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuBusinessIntelligenceApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .translations'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuTranslationsApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, 'i[data-icon-name="ActivityFeed"]'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuActivityApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .service-store-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuServiceStoreApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .document-creator-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuDocumentCreatorApp", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Panel-content .admin-panel-app'),
    __metadata("design:type", protractor_1.ElementFinder)
], HomePage.prototype, "MenuAdminPanelApp", void 0);
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9EO0FBQ3BELGlDQUE4QjtBQUM5Qiw4Q0FBMkM7QUFDM0MsMERBQXVEO0FBQ3ZELHNEQUF3RTtBQUN4RSxxQ0FBK0I7QUFHL0IsTUFBYyxRQUFTLFNBQVEsV0FBSTtJQUNqQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFvRVksV0FBVzs7WUFDdEIsTUFBTSwwQkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVZLGFBQWE7O1lBQ3hCLGVBQWU7WUFDZixPQUFPLENBQUMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQywwQkFBMEI7UUFDcEgsQ0FBQztLQUFBO0lBRVksaUJBQWlCOztZQUM1QixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRVkseUJBQXlCOztZQUNwQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEUsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRVksbUJBQW1COztZQUM5QixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FB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