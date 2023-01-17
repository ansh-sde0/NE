// recursion

const func=(x)=>{

    if(x ==0){
        return
    }

    console.log(x)
    func(x-1)
}

func(10)