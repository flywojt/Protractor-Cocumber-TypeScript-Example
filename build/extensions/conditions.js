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
exports.elementIsVisible = (locator) => __awaiter(this, void 0, void 0, function* () {
    return locator.isDisplayed();
});
function pageHasLoaded(page) {
    var newPage = new page();
    return newPage.loadCondition();
}
exports.pageHasLoaded = pageHasLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4dGVuc2lvbnMvY29uZGl0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSWEsUUFBQSxnQkFBZ0IsR0FBRyxDQUFPLE9BQXNCLEVBQW9CLEVBQUU7SUFDakYsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUE7QUFFRCxTQUFnQixhQUFhLENBQWlCLElBQW9CO0lBQ2hFLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDekIsT0FBTyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDakMsQ0FBQztBQUhELHNDQUdDIn0=