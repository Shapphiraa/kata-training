// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  const result = []

   while (str.length > 0) {
    result.push(str.slice(0, 2).padEnd(2, '_'))
    str = str.substring(2)
  }

  return result
}

// Otra forma sería quitando el padEnd y hacer la comprobación de si es par o impar antes, para que no se compruebe en todas las iteraciones:

function solution(str){
  const result = []

  if (str.length % 2 !== 0)
    str += '_'

   while (str.length > 0) {
    result.push(str.slice(0, 2))
    str = str.substring(2)
  }

  return result
}

console.log(solution('abcdef'))
console.log(solution('abcdefg'))
console.log(solution('abc'))
console.log(solution(''))