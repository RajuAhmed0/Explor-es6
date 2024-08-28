const numbers = [45, 48, 68, 32, 56, 47, 98, 62, 33];
const odd = numbers.filter(number => number % 2 === 0 ) // inequal use that condition last element aquret and == last condition everything string and num 
// console.log(odd);

const even = numbers.filter(number => number % 2 !== 0 )
console.log(odd, even);


const friends = ['asif', 'mehedi', 'saikot', 'sajib', 'shovo', 'al-amin']
const filterName = friends.filter(friend => friend.includes('m'))
console.log(filterName);