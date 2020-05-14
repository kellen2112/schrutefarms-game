import Game from './classes/Game';
import Adversary from './classes/Adversary';
import Raccoon from './classes/Raccoon';
import Creature from './classes/Creature';
import Location from './classes/Location';
import TrashCan from './classes/TrashCan';

const game = new Game('game');

console.log('hello WORLD!');

document.body.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37:
            console.log('Left!');
            break;
        case 38:
            console.log('Up!');
            break; 
        case 39:
            console.log('Right!');
            break;
        case 40:
            console.log('Down!');
            break;
        default:
            break;           
    }
});



// const foo = {
//     bar: () => console.log('hi'),
// };
// foo.bar();



