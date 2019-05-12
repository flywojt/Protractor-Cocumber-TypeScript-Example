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
let ah = new pages_1.AngularHomePage();
cucumber_1.Given('I will navigate to AngularJs page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://angularjs.org/');
}));
cucumber_1.When('I clicked on header link', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
cucumber_1.When('you will navigate to angular page', { timeout: 10 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log('navigated to new page');
}));
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3BlY3MvZGVmaW5pdGlvbnMvdGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLGlDQUF3QztBQUV4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFlLEVBQUUsQ0FBQztBQUUvQixnQkFBSyxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtJQUNwRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFDMUMsb0VBQW9FO0lBRXBFLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1DQUFtQyxFQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRSxHQUFTLEVBQUU7SUFDdEUsb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDM0Qsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=