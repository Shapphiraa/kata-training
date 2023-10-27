// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  const digits = num.toString().split('')
  const result = []

  while (digits.length > 0) {
    if (digits[0] === '0') {
      digits.shift()
      continue
    }
    
    result.push(digits[0].padEnd(digits.length, '0'))
    digits.shift()
  }
  
  return result.join(' + ')
}

console.log(expandedForm(42))
console.log(expandedForm(70304))
console.log(expandedForm(50019211))