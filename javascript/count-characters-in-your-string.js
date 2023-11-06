// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const result = {}
  const characters = Array.from(new Set(string))

  let count = 0

    for (let i = 0; i < characters.length; i++) {
      count = 0

      for (let j = 0; j < string.length; j++) {
        if (characters[i] === string[j])
          count ++
      }

      result[characters[i]] = count

    }

  return result;
}

console.log(count('')) // {}
console.log(count('a')) // {'a': 1}
console.log(count('ab')) // {'a': 1, 'b': 1}
console.log(count('aba')) // {'a': 2, 'b': 1}
console.log(count('ABC')) // {'A': 1, 'B': 1, 'C': 1}