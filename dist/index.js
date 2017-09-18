"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartDebug {
    constructor() {
        this.debugLogFunction = null;
        this.debugEnabled = false;
    }
    /**
     * enables debugging output
     */
    enableDebugging(debugLogFunction = null) {
        this.debugEnabled = true;
        this.debugLogFunction = debugLogFunction;
    }
    /**
     * logs a message based on the contraints of the SmartDebug instance
     */
    log(logObject) {
        if (this.debugEnabled && this.debugLogFunction) {
            this.debugLogFunction(logObject);
        }
        else if (this.debugEnabled) {
            console.log(logObject);
        }
    }
}
exports.SmartDebug = SmartDebug;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7UUFDRSxxQkFBZ0IsR0FBUSxJQUFJLENBQUE7UUFDcEIsaUJBQVksR0FBWSxLQUFLLENBQUE7SUFxQnZDLENBQUM7SUFuQkM7O09BRUc7SUFDSCxlQUFlLENBQUUsZ0JBQWdCLEdBQUcsSUFBSTtRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUE7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRyxDQUFFLFNBQWM7UUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDeEIsQ0FBQztJQUNILENBQUM7Q0FFRjtBQXZCRCxnQ0F1QkMifQ==