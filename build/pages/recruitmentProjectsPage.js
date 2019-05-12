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
class RecruitmentProjectsPage extends page_1.Page {
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.NewProjectButton), 30000)) !== undefined; // TODO: make it different
        });
    }
    addNewProjectButton(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.NewProjectButton.click();
            yield protractor_1.browser.wait(this.TittleInput.isPresent(), 3000);
            yield this.TittleInput.sendKeys(title);
            yield this.AddButton.click();
            // await this.browser.wait(pageHasLoaded(NesLoginPage));
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, 'i[data-icon-name="Add"]'),
    __metadata("design:type", protractor_1.ElementFinder)
], RecruitmentProjectsPage.prototype, "NewProjectButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-TextField input[type="text"]'),
    __metadata("design:type", protractor_1.ElementFinder)
], RecruitmentProjectsPage.prototype, "TittleInput", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-Button-label.label-72'),
    __metadata("design:type", protractor_1.ElementFinder)
], RecruitmentProjectsPage.prototype, "AddButton", void 0);
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.css, '.ms-MessageBar-text'),
    __metadata("design:type", protractor_1.ElementFinder)
], RecruitmentProjectsPage.prototype, "RecruitmentProjectAddedSuccessMessageBar", void 0);
exports.RecruitmentProjectsPage = RecruitmentProjectsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjcnVpdG1lbnRQcm9qZWN0c1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9yZWNydWl0bWVudFByb2plY3RzUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTJDO0FBQzNDLDBEQUF1RDtBQUN2RCwyQ0FBb0Q7QUFDcEQsaUNBQThCO0FBRTlCLHNEQUF3RTtBQUd4RSxNQUFhLHVCQUF3QixTQUFRLFdBQUk7SUFpQmxDLGFBQWE7O1lBQ3hCLE9BQU8sQ0FBQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLDZCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsMEJBQTBCO1FBQ3ZILENBQUM7S0FBQTtJQUVZLG1CQUFtQixDQUFDLEtBQWE7O1lBQzVDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RCxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3Qix3REFBd0Q7UUFDMUQsQ0FBQztLQUFBO0NBS0Y7QUE1QkM7SUFEQyxlQUFNLENBQUMsMkJBQVksQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUM7OEJBQzNCLDBCQUFhO2lFQUFDO0FBR3ZDO0lBREMsZUFBTSxDQUFDLDJCQUFZLENBQUMsR0FBRyxFQUFFLGtDQUFrQyxDQUFDOzhCQUN6QywwQkFBYTs0REFBQztBQUdsQztJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQzs4QkFDcEMsMEJBQWE7MERBQUM7QUFHaEM7SUFEQyxlQUFNLENBQUMsMkJBQVksQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7OEJBQ0MsMEJBQWE7eUZBQUM7QUFiakUsMERBZ0NDIn0=