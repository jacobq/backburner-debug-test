# backburner-debug-test

This repro was created to aid in the process of figuring out the "right" way to enable backburner debugging.

* The [old way][old-guide] was to use set `Ember.run.backburner.DEBUG = true;`
* [RFC176][rfc176] provided better options for most use cases of the `Ember` global, and the [ember-rfc176-data][rfc176-data] repository provides a handy reference and notes: `Ember.run.backburner` --> `import { _backburner } from '@ember/runloop';`
* The [Debugging section of the Ember.js Guides >= 3.27][new-guide] shows:
  ```js
  // app/app.js
  import { run } from '@ember/runloop';
  run.backburner.DEBUG = true;
  ```
  However, this appears to also generate a deprecation warning on v3.28:
  > DEPRECATION: Using `run.backburner` has been deprecated. Instead, import the value directly from @ember/runloop: `import { backburner } from '@ember/runloop';`

So who is "right"? It looks like the guides and deprecation warning may need to be updated to match the RFC176 data repo as that is the code that appears to "work".

[old-guide]: https://guides.emberjs.com/v3.26.0/configuring-ember/debugging/#toc_errors-within-emberrunlater-backburner
[new-guide]: https://guides.emberjs.com/release/configuring-ember/debugging/#toc_errors-within-emberrunlater-backburner
[rfc176]: https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md
[rfc176-data]: https://github.com/ember-cli/ember-rfc176-data#new-modules-to-globals

