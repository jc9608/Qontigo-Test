/*
EXERCISE #1

A  boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different. So create a function that returns the total number of boomerangs in an array.

Example : [1,4,1]

Expected result   
counter([9, 5, 9, 5, 1, 1, 1]) ➞ 2
counter([5, 6, 6, 7, 6, 3, 9]) ➞ 1
counter([4, 4, 4, 9, 9, 9, 9]) ➞ 0

INFO

[2, 2, 2] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

*/
// console log global variable, for practical purposes.
var cl = console.log;
function counter(list) {
	//you can show the result as you would like
	//************
	// So i need to calculate the boomerangs in this arrays, I'll start by creating the variables, to save the values.
	let a = [];
	let b = [];
	// next I'll run through the array, to get each of the numbers, and I'll use a if statement to check that the condition that would make the series of numbers be a boomerang is fullfiled (first and last digits being the same and the middle digit being different, and that the three numbers aren't the same). If the condition is met, I'll push the length (matches) into a different variable.
	for (let i = 0; i < list.length; i++) {
		if (list[i] === list[i + 2] && list[i + 1] !== list[i]) {
			a.push(list[i]);
			a.push(list[i + 1]);
			a.push(list[i + 2]);
			b.push(a);
			a = [];
			/* console.log("test, condition met"); */
		}
	}
	let c = b.length;
	//Return the total boomerangs, by measuring the length of the b array and assigning it to c.
	return c;
}

cl(
	"the total number of boomerangs in the first array is: " +
		counter([9, 5, 9, 5, 1, 1, 1])
);
cl(
	"the total number of boomerangs in the second array is: " +
		counter([5, 6, 6, 7, 6, 3, 9])
);
cl(
	"the total number of boomerangs in the third array is: " +
		counter([4, 4, 4, 9, 9, 9, 9])
);

/*
EXERCISE #2

You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.

"Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.

  awardPrizes({
    "Joshua" : 45,
    "Alex" : 39,
    "Eric" : 43
  }) ➞ {
    "Joshua" : "Gold",
    "Alex" : "Bronze",
    "Eric" : "Silver"
  }

  awardPrizes({
    "Person A" : 1,
    "Person B" : 2,
    "Person C" : 3,
    "Person D" : 4,
    "Person E" : 102
  }) ➞ {
    "Person A" : "Participation",
    "Person B" : "Participation",
    "Person C" : "Bronze",
    "Person D" : "Silver",
    "Person E" : "Gold"
  }

*/

function awardPrizes(data) {
	//create logic
}

const data1 = {
	PersonA: 1,
	PersonB: 2,
	PersonC: 3,
	PersonD: 4,
	PersonE: 102,
};

const data2 = {
	Mario: 99,
	Luigi: 100,
	Yoshi: 299,
	Toad: 2,
};

//create other dynamic examples at least 5 more

/*
EXERCISE #3

Write a function that returns the longest non-repeating substring for a string input.

Expected Result   
longestSubstring("abcabcbb") ➞ "abc"
longestSubstring("aaaaaa") ➞ "a"
longestSubstring("abcde") ➞ "abcde"
longestSubstring("abcda") ➞ "abcd


INFO
If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?

*/

function longestSubstring(str) {
	//you can show the result as you would like
	//
}

/* cl(longestSubstring("aaaaaa"));
cl(longestSubstring("abcde"));
cl(longestSubstring("abcda"));
cl(longestSubstring("abcda"));
 */
/*
Exercise #4

Given a string containing just the characters ( and ), find the length of the longest valid (well-formed) parentheses substring.

Expected Result 
sizeParentheses("(()") ➞ 2
// Longest valid parentheses substring is "()"

sizeParentheses(")()())") ➞ 4
// Longest valid parentheses substring is "()()"

sizeParentheses("()))))(()())(") ➞ 6

*/

function sizeParentheses(str) {
	//you can show the result as you would like
	// I have to use a for on the string and check when and if the parentheses are in the correct order, and tell wich is the longest valid parentheses substring, within the string. To do so, i basically need to create a new array with the well formed ones, and measure it's length.
	// create a number variable, to contain the length of the string and an array to push and the compare, the "well formed" ones.
	let n = str.length;
	let parentheses = [];
	parentheses.push(-1);
	// I set the total to 0
	let total = 0;
	// I use a for to traverse all of the characters in the string
	for (let i = 0; i < n; i++) {
		// If there is an opening bracket, push index, being the first part.
		if (str.charAt(i) == "(") {
			parentheses.push(i);
		}
		// Else, it's a closing bracket
		else {
			// if it's != than 0, pop the opening parentheses
			if (parentheses.length != 0) {
				parentheses.pop();
			}
			// calculate if current length is more than the max.
			if (parentheses.length != 0) {
				total = Math.max(total, i - parentheses[parentheses.length - 1]);
			}
			// If it's empty push index as a base for next valid substring, if at all.
			else {
				parentheses.push(i);
			}
		}
	}

	return total;
}

cl("the total number of well formed parentheses is: " + sizeParentheses("(()"));
cl(
	"the total number of well formed parentheses is: " + sizeParentheses(")()())")
);
cl(
	"the total number of well formed parentheses is: " +
		sizeParentheses("()))))(()())(")
);

/*
Exercise #5

The length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

Example
  [1, [2, 3]]
  2 elements, number 1 and array [2, 3]

Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.


Expected Result 
  getLength([1, [2, 3]]) ➞ 3
  getLength([1, [2, [3, 4]]]) ➞ 4
  getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
  getLength([1, [2], 1, [2], 1]) ➞ 5
*/

function getLength(arr) {
	//you can show the result as you would like
	//To achieve this result, you can easily flatten the array with the .flat() method. Assign that resulting length to a new array, wich will have the total length of the previus flattened array as a value, and then return that total value.
	let total = [];
	total = arr.flat(Infinity).length;
	return total;
}
cl(
	"the total number of non-nested items in the array, and the nested arrays is: " +
		getLength([1, [2, 3]])
);
cl(
	"the total number of non-nested items in the array, and the nested arrays is: " +
		getLength([1, [2, [3, 4]]])
);
cl(
	"the total number of non-nested items in the array, and the nested arrays is: " +
		getLength([1, [2, [3, [4, [5, 6]]]]])
);
cl(
	"the total number of non-nested items in the array, and the nested arrays is: " +
		getLength([1, [2], 1, [2], 1])
);
