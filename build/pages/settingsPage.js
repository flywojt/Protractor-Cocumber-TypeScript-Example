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
const findBy_1 = require("extensions/findBy");
const selectorType_1 = require("extensions/selectorType");
const protractor_1 = require("protractor");
const page_1 = require("./page");
const conditions_1 = require("extensions/conditions");
class SettingsPage extends page_1.Page {
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.ChangePasswordInput), 30000)) !== undefined; // TODO: make it different
        });
    }
    changePassword(newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.ChangePasswordInput), 10000);
            yield this.inputNewPassword(newPassword);
            yield this.confirmNewPassword(newPassword);
            yield this.clickSaveButton();
        });
    }
    inputNewPassword(newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.ChangePasswordInput), 10000);
            yield this.ChangePasswordInput.sendKeys(newPassword);
        });
    }
    confirmNewPassword(newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.ConfirmPasswordInput), 10000);
            yield this.ConfirmPasswordInput.sendKeys(newPassword);
        });
    }
    clickSaveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.SaveButton), 10000);
            yield this.SaveButton.click();
        });
    }
    passwordSetDialogWindowIsPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.DialogWindowOkButton.isDisplayed();
        });
    }
    clickDialogWindowOkButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.DialogWindowOkButton.click();
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '#new-pass'),
    __metadata("design:type", protractor_1.ElementFinder)
], SettingsPage.prototype, "ChangePasswordInput", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '#repeat-pass'),
    __metadata("design:type", protractor_1.ElementFinder)
], SettingsPage.prototype, "ConfirmPasswordInput", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '#save'),
    __metadata("design:type", protractor_1.ElementFinder)
], SettingsPage.prototype, "SaveButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.dialog-succes-ok-button'),
    __metadata("design:type", protractor_1.ElementFinder)
], SettingsPage.prototype, "DialogWindowOkButton", void 0);
exports.SettingsPage = SettingsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc2V0dGluZ3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMkM7QUFDM0MsMERBQXVEO0FBQ3ZELDJDQUFvRDtBQUNwRCxpQ0FBOEI7QUFFOUIsc0RBQXdFO0FBR3hFLE1BQWEsWUFBYSxTQUFRLFdBQUk7SUFjdkIsYUFBYTs7WUFDeEIsT0FBTyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsNkJBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQywwQkFBMEI7UUFDMUgsQ0FBQztLQUFBO0lBRVksY0FBYyxDQUFDLFdBQW1COztZQUM3QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVZLGdCQUFnQixDQUFDLFdBQW1COztZQUMvQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFWSxrQkFBa0IsQ0FBQyxXQUFtQjs7WUFDakQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RSxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRVksZUFBZTs7WUFDMUIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0QsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVZLGdDQUFnQzs7WUFDM0MsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRVkseUJBQXlCOztZQUNwQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FDRjtBQTVDQztJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7OEJBQ1YsMEJBQWE7eURBQUM7QUFHMUM7SUFEQyxlQUFNLENBQUMsMkJBQVksQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDOzhCQUNaLDBCQUFhOzBEQUFDO0FBRzNDO0lBREMsZUFBTSxDQUFDLDJCQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzs4QkFDZiwwQkFBYTtnREFBQztBQUdqQztJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQzs4QkFDeEIsMEJBQWE7MERBQUM7QUFaN0Msb0NBK0NDIn0=