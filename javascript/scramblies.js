// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let result = false

  const one = Array.from(str1)
  const two = Array.from(str2)

  for (let i = 0; i < two.length; i++) {
      if (one.includes(two[i])) {
      one.splice(one.indexOf(two[i]), 1)
        result = true
        continue
    }

    result = false
    break
  }

  console.log(result)
}

scramble('rkqodlw', 'world')
scramble('cedewaraaossoqqyt', 'codewars')
scramble('katas', 'steak')
scramble('javscripts','javascript')

// Se puede hacer de una forma mucho más eficiente, de hecho esta solución no pasa el test de rendimiento del Kata :(