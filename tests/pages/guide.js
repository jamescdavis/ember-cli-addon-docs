import PageObject, { collection } from 'ember-classy-page-object';

const GuidePage = PageObject.extend({
  navItems: collection({ scope: '[data-test-id="nav-item"]' }),

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  index: {
    scope: '[data-test-page-index]',

    items: collection({
      scope: '[data-test-index-item]'
    })
  }
});

export default GuidePage.create();
