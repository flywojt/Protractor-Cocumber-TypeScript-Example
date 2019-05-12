"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
const path = __importStar(require("path"));
const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');
const targetJson = jsonReports + '/cucumber_report.json';
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + '/cucumber_reporter.html',
    reportSuiteAsScenarios: true,
    theme: 'bootstrap'
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions);
        }
        catch (err) {
            if (err) {
                throw new Error('Failed to save cucumber test results to json file.');
            }
        }
    }
}
exports.Reporter = Reporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlUmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdXBwb3J0L3NpbmdsZVJlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlFQUFtRDtBQUNuRCx1Q0FBeUI7QUFDekIsK0NBQWlDO0FBQ2pDLDJDQUE2QjtBQUU3QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM5RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM5RCxNQUFNLFVBQVUsR0FBRyxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFFekQsTUFBTSx1QkFBdUIsR0FBRztJQUM5QixRQUFRLEVBQUUsVUFBVTtJQUNwQixNQUFNLEVBQUUsV0FBVyxHQUFHLHlCQUF5QjtJQUMvQyxzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLEtBQUssRUFBRSxXQUFXO0NBQ3FCLENBQUM7QUFFMUMsTUFBYSxRQUFRO0lBQ1osTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFXO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUM1QixJQUFJO1lBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzVDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsRUFBRTtnQkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7YUFDdkU7U0FDRjtJQUNILENBQUM7Q0FDRjtBQWhCRCw0QkFnQkMifQ==