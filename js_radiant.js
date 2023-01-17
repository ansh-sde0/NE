// rectify this 

function closure(){

    for (var i=0; i < 6; i++){

        setTimeout(function(){
            console.log(i)
        },1000)
    }

}
//closure()

// Sol1 - passing i as a parameter in setTimeout

function closure1(){

    for (var i=0;i<6;i++){
    
        setTimeout(function(ind){
            
            console.log(ind)

        },1000,i)

    }

}
//closure1()

// Sol2 - IIFE

function closure2(){
    for (var i=0; i < 6; i++){
        (function(i){
            setTimeout(function(){
                console.log(i)
            },1000)
        })(i)
    }
}
//closure2()

// Sol3 - bind

function closure3(){
    for (var i=0; i < 6; i++){
        setTimeout(function(i){
            console.log(i)
        }.bind(null, i),1000)
    }
}

//closure3()

// closures (private variables and methods)


const func=() => {

    var num = 1

    return {

        increment: function(amt){
            num += amt
        },
        
        decrement: function(amt){
            num -= amt
        },

        display: function(){
            console.log(num)
        }
    }

}
//fo = func()

// private variable using closure

const pc=()=>{

    let g = 3

    return {
        change: function(val){
            g += val
        }
    }

}





