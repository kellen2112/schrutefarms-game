export default class Creature {
    constructor(location,imgPath,name='Jim Halpert') {
        this.location = location;
        this.imgPath = imgPath;
        this.name = name;  
    }
    
    updateLocation(loc) {
        this.location = loc;
    }
}

