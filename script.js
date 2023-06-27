// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

function disemvowel(str) {
    str = str.replace(/a|e|i|o|u|A|E|I|O|U/g, '');
    return str;
}
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

function duplicates(arr) {
    return arr.reduce(function(prev, cur, i, a) {
      if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
  }

// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// assert.strictEqual(sequenceSum(2, 6, 2), 12)
// assert.strictEqual(sequenceSum(1, 5, 1), 15)
// assert.strictEqual(sequenceSum(1, 5, 3), 5)  
// })

const sequenceSum = (begin, end, step) => {

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

console.log(sequenceSum(2,2,2));


function spacey(array){
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i - 1] + array[i];
  }
  return array;
}
console.log(spacey(['i', 'have','no','space']))


function age(x, y) {
  const brotherAge = (1 / (y - 1)) * x;
  const julieAge = y * brotherAge;

  return julieAge;
}
console.log(age(15,2))


// TODO: define the Dog class here
class Dog{
  constructor (name, species, size){
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark(){
    if(this.size > 60){
      return 'Grrr! Grrr!';
    } else {
      return 'Woof! Woof!'
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

console.log('----------------------------------------------------')
// Character inventory
// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

// Here's the expected execution result.
// class Character {
//   constructor(name, health, strength) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters
//     this.keys = 1;
//     this.gold = 10;
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage;
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.health = 0;
//         const bonusXP = 10;
//         const bonusGold = 10;
//         const bonusKey = 1;
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold, and ${bonusKey} key(s)`
//         );
//         this.xp += bonusXP;
//         this.gold += bonusGold;
//         this.keys += bonusKey;
//       }
//     } else {
//       console.log(`${this.name} can’t attack (they've been eliminated)`);
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength, ${this.xp} XP points, ${this.keys} key(s), and ${this.gold} gold`;
//   }
// }
// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another 
// to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
class account{
  constructor(balance, name){
    this.balance = balance;
    this.name = name;
  }
  credit(num){
    this.balance += num;
  }
  describe(){
    return `Owner: ${this.name}, Balance: ${this.balance}`;
  }
}
const sean = new account(150, "Sean");
const georges = new account(211, "Georges");
const brad = new account(560, "Brad");
let accountList = [sean, georges, brad];
for(let i = 0; i < accountList.length; i++){
  accountList[i].credit(1000);
  console.log(accountList[i].describe())
}
console.log('----------------------------------------------------')
function arrAdder(arr) {
  let sentence = '';
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const letter = arr[j][i];
      if (letter === '') {
        break;
      }
      sentence += letter;
    }
    sentence += ' '; 
  }
  return sentence.trim();
}
const lettersArray = [
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
];
console.log(arrAdder(lettersArray));
console.log('----------------------------------------------------')
// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;
function add(num) {
  return num + 1;
}
function mult(num) {
  return num * 30;
}
function chain(input, fs) {
  let num = input;
  for(let i = 0; i < fs.length; i++){
    num = fs[i](num);
  }  
  return num;
}
console.log(chain(2, [add, mult]))
console.log('----------------------------------------------------')

function wallpaper(l, w, h) {
  const totalArea = 2 * (l + w) * h;
  let lengthNeeded = totalArea / 0.52 * 1.15;
  let rollsNeeded = Math.ceil(lengthNeeded / 10.0);
  numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
  "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", 
  "nineteen", "twenty"]

  if (l === 0 || w === 0 || h === 0) {
    return "zero";
  }
  return numbers[rollsNeeded];
  
}
console.log(wallpaper(6.3, 5.8, 3.13))
console.log('----------------------------------------------------')

// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// ...and so on...

//create array of lines, every even number line = "# bottles of beer on the wall, # bottles of beer", every odd number line = "take one down and pass it around.."
//set array size to iterate 100 times. for every even line print current # of beers, for every odd line print remaining # of beers.
//if bottles = 0, print new line asking to get more. 

var sing = function(){
  let lyrics = [];
  for(let i = 99; i >= 1; i--){
    let beers = i;
    let actionone = beers > 1 ? 'bottles' : 'bottle';
    let currentLine = `${i} ${actionone} of beer on the wall, ${i} ${actionone} of beer.`;
    lyrics.push(currentLine);
    
    let leftover = i - 1;
    let action = leftover > 1 ? 'bottles' : 'bottle';
    let nextLine = '';
    if(leftover == 0){
      nextLine = `Take one down and pass it around, no more bottles of beer on the wall.`;
    } else {
      nextLine = `Take one down and pass it around, ${leftover} ${action} of beer on the wall.`;
    }
    lyrics.push(nextLine)
  }
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  return lyrics;
}
console.log(sing)
console.log('----------------------------------------------------')
// Write function which takes a string and make an acronym of it.
// Rule of making acronym in this kata:
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether

function toAcronym(inp){
  inp = inp.split(' ');
  let acronym = []
  for(let i = 0; i < inp.length; i++){
    acronym.push(inp[i][0].toUpperCase());
  }
  return acronym.join('');
}
console.log(toAcronym("hyper text markup language"))
console.log('----------------------------------------------------')

// Given a number return the closest number to it that is divisible by 10.
// Example input:
// 22
// 25
// 37
// Expected output:
// 20
// 30
// 40
// Start by defining a function that takes a number as input and returns the closest number to it that is divisible by 10.

// Determine the remainder when the input number is divided by 10 using the modulo operator %. This will give you the distance of the number from the nearest multiple of 10.

// Compare the remainder with half of 10 (which is 5) to determine whether rounding up or rounding down is closer. If the remainder is less than 5, rounding 
//down will be closer; otherwise, rounding up will be closer.

// If rounding down is closer, subtract the remainder from the input number to get the closest number that is divisible by 10. If rounding up is closer, subtract the 
//remainder from 10 and add the result to the input number.

// Return the closest number that you calculated in step 4 as the output of the function.
const closestMultiple10 = num => {
  let leftOver = num % 10;
  let result = 0;
  if(leftOver >= 5){
    result = (10-leftOver)+num;
  } else {
    result = num - leftOver;
  }
  return result;
};
console.log(closestMultiple10(37))
console.log('----------------------------------------------------')

// The goal of this kata is two-fold:
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
// For the sake of this kata, you can assume all input will be a positive integer.
// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

var fibsFizzBuzz = function(n) {
  let start = [];
  let modified = [];
  if (n === 1) {
    start = [1];
    modified = [1];
  } else if (n >= 2) {
    start = [1, 1];
    modified = [1, 1];
    
    for (let i = 2; i < n; i++) {
      let fibNum = start[i - 2] + start[i - 1];
      let modifiedNum = fibNum;
      if (fibNum % 3 === 0 && fibNum % 5 === 0) {
        modifiedNum = 'FizzBuzz';
      } else if (fibNum % 3 === 0) {
        modifiedNum = 'Fizz';
      } else if (fibNum % 5 === 0) {
        modifiedNum = 'Buzz';
      }
      start.push(fibNum);
      modified.push(modifiedNum);
    }
  }

  return modified;
};
console.log(fibsFizzBuzz(20));
console.log('----------------------------------------------------')


 // Output: 45.6 (rounded to one decimal place)
function gps(s, x) {
  if (x.length === 0 || x.length === 1) {
    return 0; // No distance traveled, return 0 mph
  }

  const sections = [];
  const mphPerSection = [];
  const hours = s / 3600;
  for (let i = 0; i < x.length - 1; i++) {
    const start = x[i];
    const end = x[i + 1];
    const difference = end - start;
    sections.push(difference);
  }
  for(let i = 0; i < sections.length; i++){
    const distanceMiles = sections[i];
    const mph = (distanceMiles * 3600) / s;
    mphPerSection.push(mph);
  }
  
  return Math.floor(Math.max(...mphPerSection))
  // x = distance traveled, s = seconds
// take difference between sections, plug it into mph equation, return max value, floor it, return that value.
}
console.log(gps(19,[0.0]))
console.log('----------------------------------------------------')



function maxSumBetweenTwoNegatives(a) {
  let maxSum = -1;
  let currentSum = 0;
  let hasNegative = false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      if (hasNegative) {
        maxSum = Math.max(maxSum, currentSum);
        currentSum = 0;
      } else {
        hasNegative = true;
      }
    } else if (hasNegative) {
      currentSum += a[i];
    }
  }

  return maxSum;
}
console.log(maxSumBetweenTwoNegatives([-2,1,2,-2])); 
console.log('----------------------------------------------------')
function countSheeps(arrayOfSheep) {
  let sheepTotal = 0;
  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      sheepTotal++;
    }
    
  }
  return sheepTotal; 
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]))
  console.log('----------------------------------------------------')

function oddOrEven(array) {
  let checker = array.reduce((a,b) => {
    return a + b;
  }, 0)
  if(checker % 2 == 0){
    return 'even';
  } else if (checker == 0){
    return 'even'
  } else {
    return 'odd';
  }
}
console.log(oddOrEven([0,1,2,3]))
console.log('----------------------------------------------------')

function createPhoneNumber(numbers){
    if(numbers.length > 10){
      return 'Invalid Input (Too many numbers)';
    } else {
      let firstThree = [numbers[0],numbers[1],numbers[2]];
      let secondThree = [numbers[3],numbers[4],numbers[5]];
      let lastFour = [numbers[6],numbers[7],numbers[8], numbers[9]];
      return ('('+firstThree.join("")+')'+" "+secondThree.join("")+"-"+lastFour.join(""));
    }
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

console.log('----------------------------------------------------')

function dontGiveMeFive(start, end){
  let range = [];
  for(let i = start; i <= end; i++){
    range.push(i);
    
  }
  const checkIfFive = range.filter(function(number) {
    const numberString = number.toString();
    if(!numberString.includes('5')){
      return numberString;
    }
  });
  return checkIfFive.length;
}
console.log(dontGiveMeFive(4,17))
console.log('----------------------------------------------------')
function maps(x){
  for(let i = 0; i < x.length; i++){
    const doubledValues = x.map(function(number){
      return number*2;
    })
    return doubledValues;
  }
}
console.log(maps([1,2,3]))
console.log('----------------------------------------------------')

function toCamelCase(str) {
  let arrayOfWords = str.split(/[-_]/);
  for (let i = 1; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
  }
  return arrayOfWords.join("");
}

console.log(toCamelCase('the_stealth_warrior'));
console.log('----------------------------------------------------')

function getMiddle(s){
   const lettersArr = s.split("");
   const howLong = lettersArr.length;
   const oddResult = Math.ceil((howLong/2)) - 1;
   const evenResult = (howLong/2);
   const evenResultTwo = evenResult - 1;

   if(howLong % 2 == 0){
      return lettersArr[evenResultTwo]+lettersArr[evenResult];
   } else if (howLong % 2 == 1){
      return lettersArr[oddResult];
   }
}
console.log(getMiddle("test"))
console.log(getMiddle("middle"))

function solution(str){
  const reverser = str.split("").reverse().join("");
  return reverser;
}
console.log(solution("hello"))


console.log('----------------------------------------------------')
// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. 
// The sequence ends once an element that has already been in the sequence appears again.
// Given the first element a0, find the length of the sequence.
// Example
// For a0 = 16, the output should be 9
// Here's how elements of the sequence are constructed:
// a0 = 16
// a1 = 12 + 62 = 37
// a2 = 32 + 72 = 58
// a3 = 52 + 82 = 89
// a4 = 82 + 92 = 145
// a5 = 12 + 42 + 52 = 42
// a6 = 42 + 22 = 20
// a7 = 22 + 02 = 4
// a8 = 42 = 16, which has already occurred before (a0)
// Thus, there are 9 elements in the sequence.

function squareDigitsSequence(a0) {
  let digits = a0.toString().split('');
  let sum = a0;
  let amountOfLoops = [a0];
  amountOfLoops.push(a0)

  while (true) {
    sum = sum.toString().split('').map((digit) => parseInt(digit) ** 2).reduce((acc, val) => acc + val, 0);
    if (amountOfLoops.includes(sum)) {
      break;
    }
    amountOfLoops.push(sum);
  }
  return amountOfLoops.length;
}
console.log(squareDigitsSequence(103));

console.log('----------------------------------------------------')