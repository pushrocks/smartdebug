import * as plugins from './smartdebug.plugins';

export class SmartDebug {
  private _debugEnabled: boolean = false;
  get debugEnabled () {
    return this._debugEnabled;
  }

  /**
   * enables debugging output
   */
  public enableDebugging() {
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
