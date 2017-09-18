export declare class SmartDebug {
    debugLogFunction: any;
    private debugEnabled;
    /**
     * enables debugging output
     */
    enableDebugging(debugLogFunction?: any): void;
    /**
     * logs a message based on the contraints of the SmartDebug instance
     */
    log(logObject: any): void;
}
