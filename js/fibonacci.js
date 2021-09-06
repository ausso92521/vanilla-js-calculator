//Updates H1 tag to answer
calculate = () => {
    let n = input.value
    console.time('getFib')
    let result = getNthFibonacci(n)
    answer.innerHTML = `Fibonacci value ${n}: ${result}`
    console.timeEnd('getFib')
}

//Memoized recursive function to find Nth Fibonacci (FAST)
getNthFibonacci = (value = 0, memo = {}) => {
    if(value == 0) return 0
    if(value == 1) return 1
    if(value in memo) return memo[value]

    memo[value] = (getNthFibonacci(value - 1, memo) + getNthFibonacci(value - 2, memo))

    return memo[value]
}

// //Recursive function to find Nth Fibonacci number (SLOW)
// getNthFibonacci = (value = 0) => {
//     if(value == 0) return 0
//     if(value == 1) return 1

//     return (getNthFibonacci(value - 1) + getNthFibonacci(value - 2))
// }

//Get necessary inputs
const input = document.getElementById('fib_number')
const button = document.getElementById('calculate_fibonacci')
const answer = document.getElementById('answer')

//Add listener to button on form
button.addEventListener('click', calculate)

//Force enter key on text input to fire calculate instead of form submit
input.addEventListener('keyup', e =>{
    if(e.key === 'Enter') button.click()
})





