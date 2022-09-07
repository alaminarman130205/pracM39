function sum(a,b,c){
    const args = [... arguments];
    console.log(args);
    // console.log(arguments);
    const result  = a+b+c; 
    return result;
}
const total = sum(4, 87,23,12,23,34);
// console.log(total);