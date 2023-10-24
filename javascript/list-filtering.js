const firstList = [1,2,'a','b']
const secondList = [3,4,'123','a','b',0]

function filter_list(list) {
  return list.filter((character) => typeof character === 'number')
}

console.log(filter_list(firstList))
console.log(filter_list(secondList))