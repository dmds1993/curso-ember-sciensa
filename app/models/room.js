import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  category: attr('string'),
  mealPlan: attr('string'),
  rates: attr(),
  name: attr('string')
});
