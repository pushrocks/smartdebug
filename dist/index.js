"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartDebug {
    constructor(debugTopic) {
        this._debugEnabled = false;
        if (process.env.SMARTDEBUG === 'true' ||
            (debugTopic && process.env.SMARTDEBUG_TOPIC === debugTopic)) {
            this.enableDebugging();
        }
    }
    get debugEnabled() {
        return this._debugEnabled;
    }
    /**
     * enables debugging output
     */
    enableDebugging() {
        console.log('Enabled Debugging!');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBR0UsWUFBWSxVQUFtQjtRQUZ2QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUdyQyxJQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLE1BQU07WUFDakMsQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsRUFDM0Q7WUFDQSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNJLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHLENBQUMsU0FBYztRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUEvQ0QsZ0NBK0NDIn0=