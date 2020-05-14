import { getRandEl } from '../utils';
import Item from './Item';

export default class TrashCan {
    constructor(location) {
        this.location = location;
        this.imgPath = 
        'https://image.shutterstock.com/image-vector/vector-illustration-monster-trash-can-260nw-205229842.jpg'
        this.turnsTilFresh = 0;
    }

    freshen() {
        if (this.turnsTilFresh) {
            this.turnsTilFresh--;
        }
    }

    tryYield(){
        if (!this.turnsTilFresh){
            return null;
        }
        const ingredients = {
            bread:['white','wheat','rye'],
            meat:['ham','turkey','roast beef'],
            condiment:['ketchup','mayo','mustard'],
            greens:['lettuce','kale','spinach'],
            veggies:['tomato','onion','carrots'],
            cheese:['bleu','cheddar','montery-jack']
        };
        const randType = getRandEl(Object.keys(ingredients));
        const randIngredient = getRandEl(ingredients[randType]);
        const newItem = Item(randType, randIngredient);
        this.turnsTilFresh = 10;
        return newItem;
        
    }
}

