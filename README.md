Precourse Exit Practice

Requirements
Pseudocode everything!
Define your "IOCE"
Do not alter any provided function definitions
Make sure to understand your constraints. A correct answer not following the constraints is wrong. It is better to have attempted the correct problem.
Feel free to use the console


**Manipulating Collections**

Make 2 functions that randomize the order of an Array's contents.
Implement one function that is pure, and one that modifies the original array.



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

**Executing Higher Order Functions**

You are provided an Array of Objects representing SNL cast members.

Create altered data sets for the following conditions:
- cast members added from the year 2005 to present
- cast members whose names have more than 10 letters


Make new keys (appearanceNumber, name, and seasonsActive)
The values cannot be directly mapped to new keys.
Check provided result below for new data examples.
Implement a solution in two ways:

Using the native methods of both filter and map
Using the native method of reduce
Constraints:

Do not create any unnecessary storage variables outside your Higher Order Functions.
Your result should look like this:
```javascript
[
  {
    appearanceNum: '#8',
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