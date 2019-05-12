"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const fs = __importStar(require("fs"));
const moment = __importStar(require("moment"));
const pages_1 = require("pages");
const screenshotDirectoryPath = process.cwd() + '/reports/screenshots';
let pages = new pages_1.AllPages();
cucumber_1.Before({ tags: '@all', timeout: 10 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.driver.manage().timeouts().pageLoadTimeout(90000);
    protractor_1.browser.manage().timeouts().implicitlyWait(90000);
    protractor_1.browser.ignoreSynchronization = true;
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser
        .manage()
        .window()
        .maximize();
}));
cucumber_1.Before({ tags: '@home', timeout: 10 * 10000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield pages.angularHomePage.navigate();
    //await pages.angularHomePage.waitForPage();
}));
cucumber_1.After({ timeout: 15 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.close();
}));
cucumber_1.After({ timeout: 15 * 1000 }, function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        const now = moment.utc().format('YYYY_MM_DD__HH_mm_ss');
        const screenshot = yield protractor_1.browser.takeScreenshot();
        let screenshotPath = screenshotDirectoryPath;
        switch (scenario.result.status) {
            case cucumber_1.Status.FAILED:
                screenshotPath += '/failed';
                break;
            default:
                return;
        }
        this.attach(screenshot, 'image/png');
        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath);
        }
        screenshotPath += `/${scenario.pickle.name.split(' ').join('_')}_${now}.png`;
        const stream = fs.createWriteStream(screenshotPath);
        try {
            stream.write(new Buffer(screenshot, 'base64'));
        }
        catch (ex) {
            console.log('Error', ex);
        }
        finally {
            stream.close();
            stream.destroy();
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hvb2tzL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBOEQ7QUFDOUQsMkNBQXFDO0FBQ3JDLHVDQUF5QjtBQUN6QiwrQ0FBaUM7QUFDakMsaUNBQWlDO0FBRWpDLE1BQU0sdUJBQXVCLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLHNCQUFzQixDQUFDO0FBQ3ZFLElBQUksS0FBSyxHQUFHLElBQUksZ0JBQVEsRUFBRSxDQUFDO0FBRTNCLGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFpQixFQUFFLEdBQVMsRUFBRTtJQUNyRSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0Isb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPO1NBQ1YsTUFBTSxFQUFFO1NBQ1IsTUFBTSxFQUFFO1NBQ1IsUUFBUSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFpQixFQUFFLEdBQVMsRUFBRTtJQUN2RSxNQUFNLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkMsNENBQTRDO0FBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQWlCLEVBQUUsR0FBUyxFQUFFO0lBQ3RELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFDLFVBQWUsUUFBUTs7UUFDbEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLGNBQWMsR0FBVyx1QkFBdUIsQ0FBQztRQUVyRCxRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzlCLEtBQUssaUJBQU0sQ0FBQyxNQUFNO2dCQUNoQixjQUFjLElBQUksU0FBUyxDQUFDO2dCQUM1QixNQUFNO1lBRVI7Z0JBQ0UsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM5QjtRQUVELGNBQWMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDN0UsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBELElBQUk7WUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxQjtnQkFBUztZQUNSLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==