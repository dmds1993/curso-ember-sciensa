import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(store, type, query) {
    let url = `${this.host}/hotels/${query.hotel_id}/rooms/${query.room_id}`;
    return this.ajax(url, 'GET');
  }
});
