import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-room-select-hotel', 'Integration | Component | page room select hotel', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{page-room-select-hotel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#page-room-select-hotel}}
      template block text
    {{/page-room-select-hotel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
