import Ember from 'ember';

const { Route, RSVP, get } = Ember;

export default Route.extend({
  model(params) {
    let hotelCache = this.store.peekRecord('hotel', params.hotel_id);
    if (hotelCache) {
      return {
        hotel: hotelCache,
        room: this.store.queryRecord('room', params)
      }
    }
    return RSVP.hash({
      hotel: this.store.findAll('hotel').then((data) => {
        let hotelSelect = data.filter(el => el.id === params.hotel_id);
        return hotelSelect[0].data
      }),
      room: this.store.queryRecord('room', params)
    });
  }
});
