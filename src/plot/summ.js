function summ(...nums) {
    let summ = 0;
    nums.forEach((x) => {
        summ += x
    })
    return summ
}

console.log(summ(2, 4));