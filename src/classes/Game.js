import { genRandNum } from '../utils';
import Location from './Location';
import Raccoon from './Raccoon';
import Adversary from './Adversary';
import TrashCan from './TrashCan';

export default class Game {
    constructor(gameId) {
        this.gameId = gameId;
        this.status = 'new';
        this.grid = Array(8)
            .fill(null)
            .map(() => Array(8)
            .fill(null));
        const startingLoc = this.genStartLocs();
        this.trashCans = Array(5)
            .fill(null)
            .map((_,idx) => new TrashCan(startingLoc[idx]));
        this.raccoon = new Raccoon(startingLoc[5], 'Sprinkles');
        this.adversary = new Adversary(startingLoc[6]);
        this.grid[this.raccoon.location.y][this.raccoon.location.x] = this.raccoon;
        this.grid[this.adversary.location.y][this.adversary.location.x] = this.adversary;
        this.trashCans.forEach(
            (tc) => this.grid[tc.location.y][tc.location.x] = tc
        );
        console.table(this.grid);
        
        this.populateGrid();
    }

    isOccupied(loc){
        return !!this.grid[loc.y][loc.x];
    }

    moveTo(creature, loc){
        if(!this.isOccupied(loc)){
            this.grid[creature.location.y][creature.location.x] = null;
            this.grid[loc.y][loc.x] = creature;
            creature.updateLocation(loc);
        }

    }

    genStartLocs() {
        const genLoc = () => `${genRandNum(0, 7)}${genRandNum(0, 7)}`;
        const randLocs = [];
        while (randLocs.length < 7) {
            const randLoc = genLoc();
            if (!(randLoc in randLocs)) {
                randLocs.push(randLoc);
            }
        }
        return randLocs.map((loc) => new Location(loc[1], loc[0]));
    }

    populateGrid() {
        const game = document.getElementById(this.gameId);
        const gridDOM = game.querySelector('.grid');

        gridDOM.innerHTML = '';

        for( let rowIdx = 0; rowIdx < 8; rowIdx++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for(let colIdx = 0; colIdx < 8; colIdx++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.id = `${rowIdx}${colIdx}` ;
                row.appendChild(cell); 
            }
            gridDOM.appendChild(row);
        }
        return this.grid
    } 
    
}

