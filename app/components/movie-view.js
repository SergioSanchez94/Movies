import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        getMovie(titulo) {
          Ember.$.get('http://localhost:8080/getMovie?name=' + titulo).then(function(data){
          });
        }
      }
});
