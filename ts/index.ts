import * as plugins from './smartdebug.plugins'

export class SmartDebug {
  private debugEnabled: boolean = false

  /**
   * enables debugging output
   */
  enableDebugging () {
    this.debugEnabled = true
  }

  /**
   * logs a message based on the contraints of the SmartDebug instance
   */
  log (logObject: any) {
    if (this.debugEnabled) {
      console.log(logObject)
    }
  }

}
