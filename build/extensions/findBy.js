"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectorType_1 = require("./selectorType");
const protractor_1 = require("protractor");
function findBy(selectorType, selector) {
    return (target, propertyKey) => {
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                let searchedElement;
                switch (selectorType) {
                    case selectorType_1.SelectorType.css:
                        searchedElement = protractor_1.element(protractor_1.by.css(selector));
                        break;
                    case selectorType_1.SelectorType.id:
                        searchedElement = protractor_1.element(protractor_1.by.id(selector));
                        break;
                    case selectorType_1.SelectorType.xpath:
                        searchedElement = protractor_1.element(protractor_1.by.xpath(selector));
                        break;
                    case selectorType_1.SelectorType.linkText:
                        searchedElement = protractor_1.element(protractor_1.by.linkText(selector));
                        break;
                    default:
                        throw new Error(`Selector type: ${selectorType} not found !!!`);
                }
                return searchedElement;
            }
        });
    };
}
exports.findBy = findBy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZXh0ZW5zaW9ucy9maW5kQnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBOEM7QUFDOUMsMkNBQXdEO0FBRXhELFNBQWdCLE1BQU0sQ0FBQyxZQUEwQixFQUFFLFFBQWdCO0lBQ2pFLE9BQU8sQ0FBQyxNQUFXLEVBQUUsV0FBbUIsRUFBRSxFQUFFO1FBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN6QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxlQUE4QixDQUFDO2dCQUVuQyxRQUFRLFlBQVksRUFBRTtvQkFDcEIsS0FBSywyQkFBWSxDQUFDLEdBQUc7d0JBQ25CLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsTUFBTTtvQkFDUixLQUFLLDJCQUFZLENBQUMsRUFBRTt3QkFDbEIsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNO29CQUNSLEtBQUssMkJBQVksQ0FBQyxLQUFLO3dCQUNyQixlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzlDLE1BQU07b0JBQ1IsS0FBSywyQkFBWSxDQUFDLFFBQVE7d0JBQ3hCLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDakQsTUFBTTtvQkFDUjt3QkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixZQUFZLGdCQUFnQixDQUFDLENBQUM7aUJBQ25FO2dCQUVELE9BQU8sZUFBZSxDQUFDO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDO0FBN0JELHdCQTZCQyJ9