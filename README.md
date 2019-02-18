# Precourse Exit Practice

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

## Manipulating Collections

- Make 2 functions that randomize the order of an Array's contents.
Implement one function that is pure (`pureShuffle`), and one that modifies the original array (`dirtyShuffle`).

- Make a function `mergeObjects` that accepts an unspecified number of objects and updates the first object with the contents of all subsequent objects.

- Make a function `semiMergeObjects` that performs the same operation as the previous function, but does not replace values at keys that are already present.


## Recursion

Create a function `replaceValuesInObj` that finds all values of a provided name in an Object (and nested Objects) and renames them to a provided new name.

Example:
```javascript

const obj = {
  golf: {
    zebra: 'charlie',
  },
};

replaceValuesInObj(obj, 'charlie', 'delta');

// returns { golf: { zebra: 'delta' } };

```

Create a function `addKeysToExistingObj` that adds a new key/value pair to an Object (and nested Objects).

Example:
```javascript

const obj = {
  golf: {
    zebra: 'charlie'
  },
};

addKeysToExistingObj(obj, 'foxtrot', 'victor');
// {
//   golf: {
//     zebra: 'charlie',
//     foxtrot: 'victor'
//   },
//   foxtrot: 'victor'
// }

```


## Executing Higher Order Functions

You are provided an Array of Objects representing SNL cast members.

Create a function `comediansFilteredAndMapped` that returns all the comedians that are:
- cast members added from the year 2005 to present
- cast members whose __full name__ have more than 10 letters

It should:
- Use `filter` and `map`
- Make new keys (appearanceNumber, name, and seasonsActive)
- _Note: The values cannot be directly mapped to new keys_

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

---
Create a function `comedianNamesFilteredAndMapped` that gets the `names` of all the comedians that are:
- cast members added from the year 2005 to present
- cast members whose __full name__ have more than 10 letters

It should:
- Use `filter` and `map`

---
Create a function `comediansReduced1` that represents all the comedians that are:
- cast members added from the year 2005 to present
- cast members whose __full name__ have more than 10 letters

It should:
- Use `reduce`
- Make new keys (`appearanceNumber`, `name`, and `seasonsActive`)

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

---
Create a function `comediansReduced2` that represents all the comedian `names` that are:
- cast members added from the year 2005 to present
- cast members whose __full name__ have more than 10 letters

It should:
- Must use `reduce`
