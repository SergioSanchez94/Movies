import Ember from 'ember';

export default Ember.Controller.extend({
    init: function () {
        var self = this;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 
        
        var currentDate = yyyy + '-' + mm + '-' + dd;
        var lastMonth = yyyy + '-' + mm + '-' + dd;

        Ember.$.getJSON('https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=274474733b6e36dfdf3406071a9a4ae6&language=es-ES').then(function(data){
            if (data.total_results == 0) {
                self.set('search', false);
            } else {
                self.set('search', true);
                var shows = [];
                var showsResult = [];
                shows = data.results;
                shows.forEach(function(show) {
                    showsResult.push(show);
                }, this);
                self.set('shows', showsResult);
            } 
        });
    },
    search: true,
    shows: [],
    actions: {
        buscar(busqueda){
            var self = this;
            Ember.$.getJSON(' https://api.themoviedb.org/3/search/tv?api_key=274474733b6e36dfdf3406071a9a4ae6&language=es-ES&query='+busqueda+'&page=1').then(function(data){
                if (data.total_results == 0) {
                    self.set('search', false);
                } else {
                    self.set('search', true);
                    var shows = [];
                    var showsResult = [];
                    shows = data.results;
                    shows.forEach(function(show) {
                        showsResult.push(show);
                    }, this);
                    self.set('shows', showsResult);
                } 
            });
        }
        }
});
