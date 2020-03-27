function add(n1: number,n2: number){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('leche ka!');
    }
    return n1 + n2;
}

const result = add('5',2.8); // first arg has error 
console.log(result)