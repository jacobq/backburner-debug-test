import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'backburner-debug-test/config/environment';

// Old way
import Ember from 'ember';
try {
  Ember.run.backburner.DEBUG = true;
  console.log('Set via global (in your dreams)'); // <-- never gets here
  debugger;
} catch(e) {
  console.warn(`Tried to set "Ember.run.backburner.DEBUG = true;" but caught exception:`, e);
}

// Recommended by deprecation warning I saw in v3.28, which I think is erroneous.
// That is, I think there's a mistake in how this message is built-up from the template:
//   https://github.com/emberjs/ember.js/blob/v3.28.8/packages/%40ember/runloop/index.js#L789
//   https://github.com/emberjs/ember.js/blob/3537670c14883346e11e841fcb71333384fcbc87/packages/%40ember/runloop/index.js#L758
//   Here handler gets call with dotKey = 'run.backburner', importKey = 'backburner', and module = '@ember/runloop'
//   `Using \`${dotKey}\` has been deprecated. Instead, import the value directly from ${module}:\n\n  import { ${importKey} } from '${module}';`
//   So it fails to produce the correct suggestion when the name of the key to use when importing from the module differs from the original one.
import { backburner } from '@ember/runloop'; // doesn't seem to warn/error but backburner is undefined
if (backburner === undefined) {
  console.warn(`Tried to "import { backburner } from '@ember/runloop';" but it was undefined.`, backburner);
}

// Way that works and is specified in RFC176 data repo:
// https://github.com/ember-cli/ember-rfc176-data#ember-rfc176-data
import { _backburner } from '@ember/runloop';
_backburner.DEBUG = true;
console.log(`Set _backburner.DEBUG = ${_backburner.DEBUG}`);

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
