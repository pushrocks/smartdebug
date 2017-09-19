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
    enableDebugging(debugLogFunction = console.log) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7UUFDRSxxQkFBZ0IsR0FBUSxJQUFJLENBQUE7UUFDcEIsaUJBQVksR0FBWSxLQUFLLENBQUE7SUFxQnZDLENBQUM7SUFuQkM7O09BRUc7SUFDSCxlQUFlLENBQUUsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUc7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUcsQ0FBRSxTQUFjO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0NBRUY7QUF2QkQsZ0NBdUJDIn0=