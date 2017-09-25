import Ember from 'ember';

export default Ember.Component.extend({
    response: "",
    actions: {
        getMovie(titulo) {
          var self = this;
          Ember.$.get('http://localhost:8080/getMovie?name=' + titulo).then(function(data){
            self.set('response',data);
          });
        }
      }
});
