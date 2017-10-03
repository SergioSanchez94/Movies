import Ember from 'ember';

export default Ember.Component.extend({
    infoMovie: [],
    trailer: "",
    result: "",
    loading: '',
    actions: {
        getMovie(url, name) {
          var self = this;
          this.set('loading','loader');
          Ember.$.get('http://localhost:8080/getMovieInfo?url='+url+'&dom=www.mejortorrent.com').then(function(data){
            self.set('infoMovie',data);
            self.set('loading','');
          });
          var nombre = name;
          nombre = nombre.replace(' ','%20');
          this.set('loading','loader');
          Ember.$.get('http://localhost:8080/getTrailer?name='+nombre).then(function(data){
            self.set('trailer',data);
            self.set('loading','');
          });
        },
        sendMovie(url) {
            var self = this;
            this.set('loading','loader');
            Ember.$.get('http://localhost:8080/sendMovie?address='+url+'&ip=192.168.1.34&dom=www.mejortorrent.com').then(function(data){
              self.set('result',data);
              self.set('loading','');
            });
          }
      }
});
