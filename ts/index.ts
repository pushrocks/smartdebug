import * as plugins from './smartdebug.plugins'

export class SmartDebug {
  debugLogFunction: any = null
  private debugEnabled: boolean = false

  /**
   * enables debugging output
   */
  enableDebugging (debugLogFunction = null) {
    this.debugEnabled = true
    this.debugLogFunction = debugLogFunction
  }

  /**
   * logs a message based on the contraints of the SmartDebug instance
   */
  log (logObject: any) {
    if (this.debugEnabled && this.debugLogFunction) {
      this.debugLogFunction(logObject)
    } else if (this.debugEnabled) {
      console.log(logObject)
    }
  }

}
