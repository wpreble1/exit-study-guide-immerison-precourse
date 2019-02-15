Precourse Exit Practice

**Requirements**
Pseudocode everything!
Define your "IOCE"

******************************************************************************************************
Input: whatever data type your function accepts i.e (array of objects, string, object, array);

Output: data type that should be returned

Constraints: rules that your implementation must follow

Edge cases: special cases that could produce unintended results
******************************************************************************************************


Make all of your changes in ```exitPrep.js```. 
Make sure to understand your constraints. 
A correct answer not following the constraints is wrong. 
It is better to have attempted the correct problem.
Feel free to use the console and the debugger.


**Manipulating Collections**

- Make 2 functions that randomize the order of an Array's contents.
Implement one function that is pure, and one that modifies the original array.

- Make a function that accepts an unspecified number of objects and updates the first object with the contents of all subsequent objects.

- Make a function that performs the same operation as the previous function, but does not replace values at keys that are already present.



**Recursion**

Find all values of a provided name in an Object (and nested Objects) and rename them to a provided new name.

Example:
```javascript

const obj = {
    golf: {
	    zebra: 'charlie'
	},
};

replaceValuesInObj(obj, 'charlie', 'delta');

// returns { golf: { zebra: 'delta' } };

```

Add a new key/value pair to an Object (and nested Objects).

Example:
```javascript

const obj = {
    golf: {
	    zebra: 'charlie'
	},
};

addKeysToExistingObj(obj, 'foxtrot', 'victor');

// returns { golf: { zebra: 'charlie', foxtrot: 'victor' }, foxtrot: 'victor' };

```


**Executing Higher Order Functions**

You are provided an Array of Objects representing SNL cast members.

Create altered data sets for the following conditions:
- cast members added from the year 2005 to present
- cast members whose names have more than 10 letters.


Make new keys (appearanceNumber, name, and seasonsActive).

_Note: The values cannot be directly mapped to new keys_

Check provided result below for new data examples.
Implement each solution in two ways:

- Chaining native methods or other functions
- Using the native method of reduce

Constraints:

Do not create any unnecessary storage variables outside your Higher Order Functions.
Your result should look like this:
```javascript
[
  {
    appearanceNumber: '#8',
    name: 'Sterling K. Brown',
    seasonsActive: 6
  },
  {
    appearanceNumber: '#9',
    name: 'Jay Pharoah',
    seasonsActive: 7
  },
  {
    appearanceNumber: '#10',
    name: 'Leslie Jones',
    seasonsActive: 5
  }
]
```
