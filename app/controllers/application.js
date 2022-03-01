import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { _backburner, later } from '@ember/runloop';

export default class ApplicationController extends Controller {
  dummy = console.log(
    `Application controller about to initialize isBackburnerDebuggingEnabled to ${_backburner.DEBUG}`
  );
  @tracked isBackburnerDebuggingEnabled = _backburner.DEBUG;

  @action toggle() {
    console.log('About to toggle... Old state was:', {
      '_backburner.DEBUG': _backburner.DEBUG,
      isBackburnerDebuggingEnabled: this.isBackburnerDebuggingEnabled,
    });
    _backburner.DEBUG = !_backburner.DEBUG;
    this.isBackburnerDebuggingEnabled = _backburner.DEBUG;
  }

  @action blowUp() {
    console.log('Calling run.later(...) with function that will throw exception');
    later(() => {
      console.log('💥 get ready to go digging through the big stack trace');
      thisVarIsUndefined.noPropHere = 'boom';
    }, 10);
  }
}
