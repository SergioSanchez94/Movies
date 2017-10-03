import Ember from 'ember';

export default Ember.Controller.extend({
    search: true,
    loading: "",
    movies: [],
    actions: {
        buscar(busqueda){
            var self = this;
            this.set('loading','loader');
            Ember.$.getJSON('http://localhost:8080/searchMovie?name='+busqueda+'&dom=www.mejortorrent.com').then(function(data){
               var movies = [];
               movies = data;
               self.set('loading','');
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
