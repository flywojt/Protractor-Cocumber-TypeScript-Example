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
class OutstaffingProjectsPage extends page_1.Page {
    loadCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield protractor_1.browser.wait(conditions_1.elementIsVisible(this.OutstaffingProjcetsAppHeader), 30000)) !== undefined;
        });
    }
}
__decorate([
    findBy_1.findBy(selectorType_1.SelectorType.xpath, "//button[contains(text(),'Outstaffing projects')]"),
    __metadata("design:type", protractor_1.ElementFinder)
], OutstaffingProjectsPage.prototype, "OutstaffingProjcetsAppHeader", void 0);
exports.OutstaffingProjectsPage = OutstaffingProjectsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c3RhZmZpbmdQcm9qZWN0c1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9vdXRzdGFmZmluZ1Byb2plY3RzUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTJDO0FBQzNDLDBEQUF1RDtBQUN2RCwyQ0FBb0Q7QUFDcEQsaUNBQThCO0FBQzlCLHNEQUF5RDtBQUV6RCxNQUFhLHVCQUF3QixTQUFRLFdBQUk7SUFNbEMsYUFBYTs7WUFDeEIsT0FBTyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsNkJBQWdCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDeEcsQ0FBQztLQUFBO0NBR0Y7QUFQQztJQURDLGVBQU0sQ0FBQywyQkFBWSxDQUFDLEtBQUssRUFBRSxtREFBbUQsQ0FBQzs4QkFDM0MsMEJBQWE7NkVBQUM7QUFKckQsMERBV0MifQ==