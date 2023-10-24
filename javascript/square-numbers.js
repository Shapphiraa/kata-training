// Examples
// -1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
// 25  =>  true
// 26  =>  false

function isSquare(n){
  return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(0))