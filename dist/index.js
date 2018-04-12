"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartDebug {
    constructor() {
        this._debugEnabled = false;
    }
    get debugEnabled() {
        return this._debugEnabled;
    }
    /**
     * enables debugging output
     */
    enableDebugging() {
        this._debugEnabled = true;
    }
    /**
     * disables debugging
     */
    disableDebugging() {
        this._debugEnabled = false;
    }
    /**
     * logs a message based on the contraints of the SmartDebug instance
     */
    log(logObject) {
        if (this._debugEnabled) {
            // tslint:disable-next-line:no-console
            console.log(logObject);
        }
    }
    /**
     * a function returning
     */
    isDebugMode() {
        return this._debugEnabled;
    }
}
exports.SmartDebug = SmartDebug;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7UUFDVSxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQW1DekMsQ0FBQztJQWxDQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRyxDQUFDLFNBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBcENELGdDQW9DQyJ9