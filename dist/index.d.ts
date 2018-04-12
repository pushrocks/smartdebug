export declare class SmartDebug {
    private _debugEnabled;
    readonly debugEnabled: boolean;
    /**
     * enables debugging output
     */
    enableDebugging(): void;
    /**
     * disables debugging
     */
    disableDebugging(): void;
    /**
     * logs a message based on the contraints of the SmartDebug instance
     */
    log(logObject: any): void;
    /**
     * a function returning
     */
    isDebugMode(): boolean;
}
