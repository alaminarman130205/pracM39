function stopwatch(){
    let counter = 0; 
    return function(){
        counter++;
        return counter;
    }
}
const first = stopwatch();
const second = stopwatch();
console.log(first());
console.log(first());
console.log(second());
console.log(second());