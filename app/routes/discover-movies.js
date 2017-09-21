import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var movies = [
            ['Avatar', 'images/avatar.jpg', 'Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra.',4],
            ['Star Wars', 'images/starwars.jpg','Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte (hechos narrados en el Episodio VI: El retorno del Jedi), la galaxia está todavía en guerra. Una nueva República se ha constituido, pero una siniestra organización, la Primera Orden, ha resurgido de las cenizas del Imperio Galáctico.',4],
            ['El planeta de los simios', 'images/simiosplanet.jpg','César y sus monos son forzados a encarar un conflicto mortal contra un ejército de humanos liderado por un brutal coronel. Después de sufrir pérdidas enormes, César lucha con sus instintos más oscuros en una búsqueda por vengar a su especie. Cuando finalmente se encuentren, Cesar y el Coronel protagonizarán una batalla que pondrá en juego el futuro de ambas especies y el del mismo planeta. Tercera película de la nueva saga de El Planeta de los Simios.',2] 
        ];
        return movies;
    }
});
