import DS from 'ember-data';

const {RESTSerializer} = DS;

export default RESTSerializer.extend({
  normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
    payload.room.id = payload.room.rates[0].rateToken;
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
