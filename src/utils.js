export function randFilteredElem(arr, filter){
    var randEl = randElem(arr);
    while(randEl === filter) {
       randEl = randElem(arr);
    }
    return randEl;
}

export function randElem(arr){
    var randIdx = genRandNum(0, arr.length-1);
    return arr[randIdx];
}

export function genRandNum(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
