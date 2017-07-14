import Ember from 'ember';
import layout from '../templates/components/test-box';

export default Ember.Component.extend({
  layout,
  init() {
    console.log("test-box has been initialized");
    this._super(...arguments);
  }
});
