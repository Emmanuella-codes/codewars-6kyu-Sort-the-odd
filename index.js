// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sort the odd</h1>`;

const sortedArr = arr => {
  let oddNum = arr.filter(a => a % 2 !== 0).sort((a, b) => a - b)
  return Array.from(arr.map(n => n % 2 === 0 ? n : oddNum.shift()))
}
console.log(sortedArr([5,8,6,3,4]))