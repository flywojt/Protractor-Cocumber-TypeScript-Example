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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hvb2tzL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBOEQ7QUFDOUQsMkNBQXFDO0FBQ3JDLHVDQUF5QjtBQUN6QiwrQ0FBaUM7QUFDakMsaUNBQWlDO0FBRWpDLE1BQU0sdUJBQXVCLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLHNCQUFzQixDQUFDO0FBQ3ZFLElBQUksS0FBSyxHQUFHLElBQUksZ0JBQVEsRUFBRSxDQUFDO0FBRTNCLGlCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFpQixFQUFFLEdBQVMsRUFBRTtJQUNyRSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0Isb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPO1NBQ1YsTUFBTSxFQUFFO1NBQ1IsTUFBTSxFQUFFO1NBQ1IsUUFBUSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBaUIsRUFBRSxHQUFTLEVBQUU7SUFDdEQsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUMsVUFBZSxRQUFROztRQUNsRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksY0FBYyxHQUFXLHVCQUF1QixDQUFDO1FBRXJELFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDOUIsS0FBSyxpQkFBTSxDQUFDLE1BQU07Z0JBQ2hCLGNBQWMsSUFBSSxTQUFTLENBQUM7Z0JBQzVCLE1BQU07WUFFUjtnQkFDRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNsQyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsY0FBYyxJQUFJLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM3RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEQsSUFBSTtZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFBQyxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO2dCQUFTO1lBQ1IsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9