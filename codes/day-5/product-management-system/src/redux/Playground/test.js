const numbers = [1, 2, 3, 4, 5]
function* printNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}

const generatorObjRef = printNumbers();
let res1 = generatorObjRef.next();
let res2 = generatorObjRef.next();

let res3 = generatorObjRef.next();
let res4 = generatorObjRef.next();
let res5 = generatorObjRef.next();

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(generatorObjRef.next())
console.log(generatorObjRef.next())

function* execute() {
    //yield takEvery('GET_PRODIUCTs_INITIATE', fetchProducts)
    yield console.log('logging in');
    yield console.log('claering memory');
    yield console.log('logging out');
}

const obj = execute()
obj.next();
obj.next()
obj.next()