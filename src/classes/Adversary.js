import Creature from './Creature';

export default class Adversary extends Creature {
    constructor(location,name='Dwigt',movesPerTurn = 2) {
        super(location,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eonline.com%2Fshows%2Fpeoples_choice_awards%2Fphotos%2F30012%2Ffunniest-dwight-schrute-moments-from-the-office%2F989012&psig=AOvVaw1lTbIIgZrOOhGKpAw6YHDQ&ust=1588987706628000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi5tNWOo-kCFQAAAAAdAAAAABAD',name
        );
        this.movesPerTurn = movesPerTurn;
    }
    // isNextToRaccoon()
}

