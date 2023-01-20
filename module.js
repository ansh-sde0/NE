// normal function
// const obj = {
//     name: 'John',
//     printName: function() {
//       console.log(this.name);
//     }
//   };
  
  // arrow function
  const obj = {
    name: 'John',
    printName: () => {
        let name = 'ab'
      console.log(this.name);
    }
  };

obj.printName()