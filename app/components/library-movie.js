import Ember from 'ember';

export default Ember.Component.extend({
    infoMovie: [],
    trailer: "",
    result: "",
    actions: {
        getMovie(url, name) {
          var self = this;
          Ember.$.get('http://localhost:8080/getMovieInfo?url='+url+'&dom=www.mejortorrent.com').then(function(data){
            self.set('infoMovie',data);
          });
          var nombre = name;
          nombre = nombre.replace(' ','%20');
          console.log(nombre);
          Ember.$.get('http://localhost:8080/getTrailer?name='+nombre).then(function(data){
            self.set('trailer',data);
          });
        },
        sendMovie(url) {
            var self = this;
            Ember.$.get('http://localhost:8080/sendMovie?address='+url+'&ip=192.168.1.34&dom=www.mejortorrent.com').then(function(data){
              self.set('result',data);
              console.log(data);
            });
          }
      }
});
