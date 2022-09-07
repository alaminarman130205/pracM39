// 39-5 Block scope global scope simple understanding of Hoisting

function add(a, b){
    const total = a+b; 
    console.log(a,b);
    return total;
}
console.log(total);


// var didn't mantain the rules 

function add(a, b){
    const total = a+b; 
    if(b>5){
        const sum = 25+a+b; 

    }else{
        const sum = 5+a+b; 
        var current = sum;

    }
    console.log(current);
}
add(3,1);