// slowMath.add(1,1)
// .then((sum) => {
//     console.log(sum);
//     return slowMath.multiply(sum, 2)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.divide(sum, 4)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.subtract(sum, 3)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.add(sum, 98)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.remainder(sum, 2)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.multiply(sum, 50)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.remainder(sum, 40)
// })
// .then((sum) => {
//     console.log(sum);
//     return slowMath.add(sum, 32)
// })
// .then((sum) => {
//     console.log(`The final result is ${sum}.`)
// })
// .catch((error) => {
//     console.log(error);
// });


//error occurs because a math function returns a negative numer.  
//this causes the catch to fire and stops the slowMath


const doMath = async () => {
    try{
        let result = await slowMath.add(6,2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(`The final result is ${result}.`)
    }
    catch (error) {
        console.log(error);
    }
};

doMath();