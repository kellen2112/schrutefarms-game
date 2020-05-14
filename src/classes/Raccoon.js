import Creature from './Creature';

export default class Raccoon extends Creature {
    constructor(location,name='Lyle') {
        const imgPath = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fraccoon%2Bcartoon&psig=AOvVaw1J6d_MJtyTsHHVyLPJAeD_&ust=1588987344614000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODIwq6No-kCFQAAAAAdAAAAABAE'
        super(location,imgPath,name);
        this.inventory = {
            'bread':null,
            'meat':null,
            'condiment':null,
            'greens':null,
            'veggies':null,
            'cheese':null
        };
    }

    rummage(trashCans){
        const adjacentCans = trashCans.filter(tc =>
            tc.location.isAdjacentTo(this.location)
        );
        for(let i = 0; i < adjacentCans.langth; i++){
            const newItem = adjacentCans[i].tryYield();
            if(newItem){
                this.inventory[newItem.type] = newItem;
                return;
            }
        }
    }
}