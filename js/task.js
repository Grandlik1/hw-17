let string = 'hello'
let number = 6
let symbol = '*'
let boolean = false
let answer
function padString(str , num , sym = '*' , bool = true ) {
    if (typeof str !== 'string'){
        return console.log('вы не ввели строку');
    } else if (typeof num !== 'number' && num.length === 0) {
        return console.log('вы не ввели число');
    } else if (typeof sym !== 'string' && sym.length === 0) {
        return console.log('вы не ввели символ');
    } else if ( num < str.length) {
        answer = str.substr(0, num)
        return console.log(answer)
    }else {
        let symNumber = num - str.length
        sym = sym.repeat(symNumber)
        if (bool === true){
            answer = `${str}` + `${sym}`
            return console.log(answer)

        } else if (bool === false) {
            answer = `${sym}` + `${str}`
            return console.log(answer)
        }
    }
}
padString(string , number , symbol , boolean )