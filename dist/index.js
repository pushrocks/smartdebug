"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartDebug {
    constructor() {
        this.debugEnabled = false;
    }
    /**
     * enables debugging output
     */
    enableDebugging() {
        this.debugEnabled = true;
    }
    /**
     * logs a message based on the contraints of the SmartDebug instance
     */
    log(logObject) {
        if (this.debugEnabled) {
            console.log(logObject);
        }
    }
}
exports.SmartDebug = SmartDebug;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7UUFDVSxpQkFBWSxHQUFZLEtBQUssQ0FBQTtJQWtCdkMsQ0FBQztJQWhCQzs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxHQUFHLENBQUUsU0FBYztRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0NBRUY7QUFuQkQsZ0NBbUJDIn0=