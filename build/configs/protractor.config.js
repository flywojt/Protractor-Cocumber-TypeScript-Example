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
const protractor_1 = require("protractor");
const support_1 = require("../support");
const path = __importStar(require("path"));
require('ts-node/register');
require('tsconfig-paths/register');
const jsonReportDirectoryPath = path.join(process.cwd(), '/reports/json');
const jsonReportFilePath = `${jsonReportDirectoryPath}/cucumber_report.json`;
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        // args:['--headless']
        }
    },
    // browser.ignoreSynchronization:true,
    restartBrowserBetweenTests: true,
    specs: ['../../specs/features/**/*.feature'],
    getPageTimeout: 50000,
    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        format: `json:${jsonReportFilePath}`,
        require: ['../specs/definitions/**/*.spec.js', '../hooks/**/*.js', '../support/**/*.js'],
        tags: '@all'
    },
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.driver.manage().timeouts().pageLoadTimeout(10000);
        protractor_1.browser.manage().timeouts().implicitlyWait(10000);
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser
            .manage()
            .window()
            .maximize();
        support_1.SingleReporter.createDirectory(jsonReportDirectoryPath);
        support_1.MultipleReporter.createDirectory(jsonReportDirectoryPath);
    }),
    onComplete: () => {
        support_1.SingleReporter.createHTMLReport();
        support_1.MultipleReporter.createHTMLReport();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWdzL3Byb3RyYWN0b3IuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZDO0FBQzdDLHdDQUE4RDtBQUM5RCwyQ0FBNkI7QUFFN0IsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDNUIsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFbkMsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMxRSxNQUFNLGtCQUFrQixHQUFHLEdBQUcsdUJBQXVCLHVCQUF1QixDQUFDO0FBRWxFLFFBQUEsTUFBTSxHQUFXO0lBQzFCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFFbkQsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUFDO1FBQ1osc0JBQXNCO1NBQ3ZCO0tBQ0Y7SUFDRCxzQ0FBc0M7SUFDdEMsMEJBQTBCLEVBQUMsSUFBSTtJQUMvQixLQUFLLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztJQUM1QyxjQUFjLEVBQUMsS0FBSztJQUNwQixZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLE1BQU0sRUFBRSxRQUFRLGtCQUFrQixFQUFFO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLG1DQUFtQyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDO1FBQ3hGLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFFRCxTQUFTLEVBQUUsR0FBUyxFQUFFO1FBQ3BCLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxvQkFBTzthQUNWLE1BQU0sRUFBRTthQUNSLE1BQU0sRUFBRTthQUNSLFFBQVEsRUFBRSxDQUFDO1FBRWQsd0JBQWMsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN4RCwwQkFBZ0IsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUE7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2Ysd0JBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xDLDBCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUMifQ==