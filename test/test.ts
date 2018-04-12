// tslint:disable-next-line:no-implicit-dependencies
import { expect, tap } from 'tapbundle';
import * as smartdebug from '../ts/index';

let testSmartDebug: smartdebug.SmartDebug;

tap.test('should create a valid instance of SmartDebug', async () => {
  testSmartDebug = new smartdebug.SmartDebug();
});

tap.test('should not log a message, if debugEnabled = false', async () => {
  testSmartDebug.log('should not log to console');
  // tslint:disable-next-line:no-unused-expression
  expect(testSmartDebug.debugEnabled).to.be.false;
});

tap.test('should log to console, if enabled', async () => {
  testSmartDebug.enableDebugging();
  testSmartDebug.log('should log to console');
  // tslint:disable-next-line:no-unused-expression
  expect(testSmartDebug.debugEnabled).to.be.true;
});

tap.start();
