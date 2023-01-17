// functional
// mutation/map

let rooms = ["a","b","c","d"]

let rooms_c = rooms.map(function (val){

    if (val == 'c'){return 'e'}
    else {return val}
})

// currying ex

const func=(curry)=>{

    return function(a){

        return function(b){

            return curry(a,b)
        }

    }
}

const multiply=(a,b)=>{
    return a*b
}

const addition=(a,b)=>{
    return a+b
}

let mul = func(multiply)
let add = func(addition)
// console.log(mul(3)(2))
// console.log(add(1)(2))










