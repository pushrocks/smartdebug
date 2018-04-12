import * as plugins from './smartdebug.plugins';

export class SmartDebug {
  private _debugEnabled: boolean = false;

  constructor(debugTopic?: string) {
    if (
      process.env.SMARTDEBUG === 'true' ||
      (debugTopic && process.env.SMARTDEBUG_TOPIC === debugTopic)
    ) {
      this.enableDebugging();
    }
  }

  get debugEnabled() {
    return this._debugEnabled;
  }

  /**
   * enables debugging output
   */
  public enableDebugging() {
    console.log('Enabled Debugging!');
    this._debugEnabled = true;
  }

  /**
   * disables debugging
   */
  public disableDebugging() {
    this._debugEnabled = false;
  }

  /**
   * logs a message based on the contraints of the SmartDebug instance
   */
  public log(logObject: any) {
    if (this._debugEnabled) {
      // tslint:disable-next-line:no-console
      console.log(logObject);
    }
  }

  /**
   * a function returning
   */
  public isDebugMode() {
    return this._debugEnabled;
  }
}
