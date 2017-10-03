import Ember from 'ember';

export default Ember.Controller.extend({
    search: true,
    errorMessage: "",
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
                    self.set('errorMessage', 'No se han encontrado resultados');
                } else {
                    self.set('movies', data);
                    self.set('search', true);
                }
            }).fail(function(){
                self.set('loading','');
                self.set('search', false);
                self.set('errorMessage', 'La página que proporciona la información de las películas no se encuentra disponible.');
            });
        }
        }
});
