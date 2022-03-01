import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'backburner-debug-test/config/environment';

// This doesn't work: Uncaught TypeError: Cannot set properties of undefined (setting 'debug')
//import { backburner } from '@ember/runloop';
//backburner.debug = true;

import { _backburner } from '@ember/runloop';
_backburner.DEBUG = true;
console.log(`Set _backburner.DEBUG = ${_backburner.DEBUG}`);

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
