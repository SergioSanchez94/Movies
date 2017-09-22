import Ember from 'ember';

export default Ember.Controller.extend({
    search: true,
    movies: [
        {"Title":"Avatar","Year":"2009","Rated":"PG-13","Released":"18 Dec 2009","Runtime":"162 min","Genre":"Action, Adventure, Fantasy","Director":"James Cameron","Writer":"James Cameron","Actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang","Plot":"A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.","Language":"English, Spanish","Country":"UK, USA","Awards":"Won 3 Oscars. Another 85 wins & 128 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"83/100"}],"Metascore":"83","imdbRating":"7.8","imdbVotes":"949,141","imdbID":"tt0499549","Type":"movie","DVD":"22 Apr 2010","BoxOffice":"$749,700,000","Production":"20th Century Fox","Website":"http://www.avatarmovie.com/","Response":"True"},
        {"Title":"Star Wars: The Force Awakens","Year":"2015","Rated":"PG-13","Released":"18 Dec 2015","Runtime":"136 min","Genre":"Action, Adventure, Fantasy","Director":"J.J. Abrams","Writer":"Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)","Actors":"Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver","Plot":"Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and spare parts scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.","Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 57 wins & 122 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"8.1","imdbVotes":"683,619","imdbID":"tt2488496","Type":"movie","DVD":"05 Apr 2016","BoxOffice":"$936,658,640","Production":"Walt Disney Pictures","Website":"http://starwars.com/","Response":"True"},
        {"Title":"Planet of the Apes","Year":"2001","Rated":"PG-13","Released":"27 Jul 2001","Runtime":"119 min","Genre":"Action, Adventure, Sci-Fi","Director":"Tim Burton","Writer":"Pierre Boulle (novel), William Broyles Jr. (screenplay), Lawrence Konner (screenplay), Mark Rosenthal (screenplay)","Actors":"Mark Wahlberg, Tim Roth, Helena Bonham Carter, Michael Clarke Duncan","Plot":"An Air Force astronaut crash lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.","Language":"English","Country":"USA","Awards":"Nominated for 2 BAFTA Film Awards. Another 10 wins & 27 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BY2RlMDhlY2MtMjQ1Zi00NzI5LTgxOTgtZjliNWMzYTY3NWZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.7/10"},{"Source":"Rotten Tomatoes","Value":"45%"},{"Source":"Metacritic","Value":"50/100"}],"Metascore":"50","imdbRating":"5.7","imdbVotes":"189,153","imdbID":"tt0133152","Type":"movie","DVD":"20 Nov 2001","BoxOffice":"$178,094,583","Production":"20th Century Fox","Website":"http://www.planetoftheapes.com","Response":"True"}
    ],
    actions: {
        buscar(busqueda){
            var self = this;
            Ember.$.getJSON('http://www.omdbapi.com/?t='+busqueda+'&apikey=BanMePlz').then(function(data){
                if (data.Response == 'False') {
                    self.set('search', false);
                } else {
                    var movies = [];
                    movies[0] = data;
                    self.set('search', true);
                    self.set('movies', movies);
                }
                
            });
        }
        }
});
