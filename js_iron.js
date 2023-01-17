let arr = [1,2,3,4,5]

const sm=(a,b)=>{
    return a+=b
}
let sm_arr = arr.reduce(sm)

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
// why mexp is undefined ?

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
  }, {});

let mxp = pilots.reduce(function(oldest,ob){
    
    if (oldest.years < ob.years){
        oldest = ob
    }

    return oldest

},pilots[0])

console.log(mxp)
