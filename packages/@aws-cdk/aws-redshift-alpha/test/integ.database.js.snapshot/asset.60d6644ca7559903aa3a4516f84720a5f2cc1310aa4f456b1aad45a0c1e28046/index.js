"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = handler;
const handler_name_1 = require("./handler-name");
const privileges_1 = require("./privileges");
const table_1 = require("./table");
const user_1 = require("./user");
const HANDLERS = {
    [handler_name_1.HandlerName.Table]: table_1.handler,
    [handler_name_1.HandlerName.User]: user_1.handler,
    [handler_name_1.HandlerName.UserTablePrivileges]: privileges_1.handler,
};
async function handler(event) {
    const subHandler = HANDLERS[event.ResourceProperties.handler];
    if (!subHandler) {
        throw new Error(`Requested handler ${event.ResourceProperties.handler} is not in supported set: ${JSON.stringify(Object.keys(HANDLERS))}`);
    }
    return subHandler(event.ResourceProperties, event);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWFBLDBCQU1DO0FBakJELGlEQUE2QztBQUM3Qyw2Q0FBMkQ7QUFDM0QsbUNBQWlEO0FBQ2pELGlDQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBaUg7SUFDN0gsQ0FBQywwQkFBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLGVBQVc7SUFDaEMsQ0FBQywwQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQVU7SUFDOUIsQ0FBQywwQkFBVyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsb0JBQWdCO0NBQ3BELENBQUM7QUFFSyxLQUFLLFVBQVUsT0FBTyxDQUFDLEtBQWtEO0lBQzlFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBc0IsQ0FBQyxDQUFDO0lBQzdFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyw2QkFBNkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdJLENBQUM7SUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuaW1wb3J0ICogYXMgQVdTTGFtYmRhIGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgSGFuZGxlck5hbWUgfSBmcm9tICcuL2hhbmRsZXItbmFtZSc7XG5pbXBvcnQgeyBoYW5kbGVyIGFzIG1hbmFnZVByaXZpbGVnZXMgfSBmcm9tICcuL3ByaXZpbGVnZXMnO1xuaW1wb3J0IHsgaGFuZGxlciBhcyBtYW5hZ2VUYWJsZSB9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHsgaGFuZGxlciBhcyBtYW5hZ2VVc2VyIH0gZnJvbSAnLi91c2VyJztcblxuY29uc3QgSEFORExFUlM6IHsgW2tleSBpbiBIYW5kbGVyTmFtZV06ICgocHJvcHM6IGFueSwgZXZlbnQ6IEFXU0xhbWJkYS5DbG91ZEZvcm1hdGlvbkN1c3RvbVJlc291cmNlRXZlbnQpID0+IFByb21pc2U8YW55PikgfSA9IHtcbiAgW0hhbmRsZXJOYW1lLlRhYmxlXTogbWFuYWdlVGFibGUsXG4gIFtIYW5kbGVyTmFtZS5Vc2VyXTogbWFuYWdlVXNlcixcbiAgW0hhbmRsZXJOYW1lLlVzZXJUYWJsZVByaXZpbGVnZXNdOiBtYW5hZ2VQcml2aWxlZ2VzLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IEFXU0xhbWJkYS5DbG91ZEZvcm1hdGlvbkN1c3RvbVJlc291cmNlRXZlbnQpIHtcbiAgY29uc3Qgc3ViSGFuZGxlciA9IEhBTkRMRVJTW2V2ZW50LlJlc291cmNlUHJvcGVydGllcy5oYW5kbGVyIGFzIEhhbmRsZXJOYW1lXTtcbiAgaWYgKCFzdWJIYW5kbGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0ZWQgaGFuZGxlciAke2V2ZW50LlJlc291cmNlUHJvcGVydGllcy5oYW5kbGVyfSBpcyBub3QgaW4gc3VwcG9ydGVkIHNldDogJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhIQU5ETEVSUykpfWApO1xuICB9XG4gIHJldHVybiBzdWJIYW5kbGVyKGV2ZW50LlJlc291cmNlUHJvcGVydGllcywgZXZlbnQpO1xufVxuIl19