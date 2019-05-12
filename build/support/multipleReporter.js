"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("multiple-cucumber-html-reporter"));
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
const path = __importStar(require("path"));
const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');
const cucumberReporterOptions = {
    jsonDir: jsonReports,
    reportPath: htmlReports + '/multiple_cucumber_reporter/',
    reportName: 'test',
    openReportInBrowser: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGVSZXBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N1cHBvcnQvbXVsdGlwbGVSZXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwRUFBNEQ7QUFDNUQsdUNBQXlCO0FBQ3pCLCtDQUFpQztBQUNqQywyQ0FBNkI7QUFFN0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFFOUQsTUFBTSx1QkFBdUIsR0FBRztJQUM5QixPQUFPLEVBQUUsV0FBVztJQUNwQixVQUFVLEVBQUUsV0FBVyxHQUFHLDhCQUE4QjtJQUN4RCxVQUFVLEVBQUUsTUFBTTtJQUNsQixtQkFBbUIsRUFBRSxJQUFJO0NBQ3NCLENBQUM7QUFFbEQsTUFBYSxRQUFRO0lBQ1osTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFXO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUM1QixJQUFJO1lBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzVDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsRUFBRTtnQkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7YUFDdkU7U0FDRjtJQUNILENBQUM7Q0FDRjtBQWhCRCw0QkFnQkMifQ==