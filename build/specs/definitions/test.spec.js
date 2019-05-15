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
const pages_1 = require("pages");
let ah = new pages_1.AngularHomePage();
cucumber_1.Given('I am on AngularIo page', () => __awaiter(this, void 0, void 0, function* () { return null; }));
cucumber_1.When('I type {string} in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    yield ah.searchPhrase(string);
}));
cucumber_1.Then('Search results shows', (string) => __awaiter(this, void 0, void 0, function* () {
    yield ah.searchResultIsPresent();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3BlY3MvZGVmaW5pdGlvbnMvdGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsaUNBQXdDO0FBR3hDLElBQUksRUFBRSxHQUFHLElBQUksdUJBQWUsRUFBRSxDQUFDO0FBRS9CLGdCQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBUyxFQUFFLGdEQUFDLE9BQUEsSUFBSSxDQUFBLEdBQUEsQ0FBQyxDQUFDO0FBRWxELGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQzdELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDMUMsTUFBTSxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=