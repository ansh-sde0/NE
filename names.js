/*
Sure! Can you implement a function that takes an array of URLs
and returns an array of the HTTP status codes for each URL,
using JavaScript Promises? The function should handle the case
where some of the URLs are invalid and should return an error 
message for those URLs instead of a status code.
*/
// Sol ansh

/*
const give_urls=()=>{

    url_P = new Promise((resolve,reject){

        urls = fetch('api call for the urls')

        if (!urls){
            const err = Error('Urls not found')
            reject(err)
        }
        resolve(urls)
    })
    return url_P
}

u_obj = give_urls()
u_obj.then(function(x){

    return x.map(function(m){

        if (!m){
            console.log('url is invalid')
        }
        else{
            console.log(m.http)
        }

    })

})
*/

// Sol chatgpt

/*
const give_urls = ()=>{

    return new Promise((resolve,reject)=>{
        fetch('api call for the urls')
            .then(response=>response.json())
            .then(urls => {
                if (!urls) {
                    const err = Error('Urls not found')
                    reject(err)
                }
                
                const statusPromises = urls.map(function(m){
                    return new Promise((resolve,reject)=>{
                        if (!m){
                            reject('url is in invalid')
                        } else {
                            fetch(m)
                                .then(response=> resolve(response.status))
                                .catch(err=> reject(err))
                        }
                        
                    })
                })
                resolve(statusPromises)

            }).catch(error=> reject(error))
    })
}

const u_obj = give_urls()
u_obj.then(statusPromises=>{
    return Promise.all(statusPromises)
})
*/

/*
Sure, here's another challenge for you:
Implement a function that takes an array
of numbers and returns the sum of the even 
numbers in the array using promises. 
The function should handle any errors
that occur while processing the numbers 
and return an error message if any of the numbers 
are not valid.

You can use the Promise.all() method to 
process the array of numbers in parallel, 
and use Array.prototype.filter() and 
Array.prototype.reduce() to filter the 
even numbers and calculate the sum.
*/

// Sol ansh
/*
const arr_num = fetch('url which will return an array of numbers')
                .then((response)=>{
                    if (!response.ok){
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })

const up_array = (arr)=>{

    return new Promise((resolve,reject)=>{

        x = arr.map(function(m){

            if (!m.isInteger()){
                err = new Error('a noninteger is found in the array')
                reject(err)
            }
            resolve(x)

        })
        return x

    })
    .then(function(arr){

        return arr.filter(function(n){

            return n % 2 == 0
        })
        .reduce(function(acc,m){
            
            return acc + m

        },0)

    }).catch(function(err){
        console.log(err)
    })

}

sm = up_array(arr_num)
console.log(sm)
*/

// Sol chatgpt

/*
const getSumOfEvenNumbers = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    const evenNumbers = data.filter((num) => typeof num === "number" && num % 2 === 0);
    if (evenNumbers.length === 0) {
      throw new Error("No even numbers found in array");
    }
    const sum = evenNumbers.reduce((acc, num) => acc + num);
    return sum;
  } catch (error) {
    console.error(error);
  }
};
*/
