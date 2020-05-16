slowMath.add(6,2)
.then((sum) => {
    console.log(sum);
    return slowMath.multiply(sum, 2)
})
.then((sum) => {
    console.log(sum);
    return slowMath.divide(sum, 4)
})
.then((sum) => {
    console.log(sum);
    return slowMath.subtract(sum, 3)
})
.then((sum) => {
    console.log(sum);
    return slowMath.add(sum, 98)
})
.then((sum) => {
    console.log(sum);
    return slowMath.remainder(sum, 2)
})
.then((sum) => {
    console.log(sum);
    return slowMath.multiply(sum, 50)
})
.then((sum) => {
    console.log(sum);
    return slowMath.remainder(sum, 40)
})
.then((sum) => {
    console.log(sum);
    return slowMath.add(sum, 32)
})
.then((sum) => {
    console.log(`The final result is ${sum}.`)
})
.catch((error) => {
    console.log(error);
});