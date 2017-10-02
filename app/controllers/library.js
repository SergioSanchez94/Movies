import Ember from 'ember';

export default Ember.Controller.extend({
    search: true,
    movies: [],
    actions: {
        buscar(busqueda){
            var self = this;
            Ember.$.getJSON('http://localhost:8080/searchMovie?name='+busqueda+'&dom=www.mejortorrent.com').then(function(data){
               var movies = [];
               movies = data;
            if (movies.length == 0) {
                    self.set('search', false);
                } else {
                    self.set('movies', data);
                    self.set('search', true);
                }
            });
        }
        }
});
