// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


const pureShuffle = array => {
    // your code here
    const shadowCopy = array.slice();
    const shuffleArray = [];

    while (shadowCopy.length) {
        const randomIndex = Math.floor(Math.random() * shadowCopy.length);
        shuffleArray.push(shadowCopy[randomIndex]);
        shadowCopy.splice(randomIndex, 1);
    }
    return shuffleArray;
};

var isPalindrome = (string) => {
    // your code here
    if (string === '') return undefined;
    if (string.length <= 1) return true;
    if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
        return isPalindrome(string.slice(1, string.length - 1));
    } else {
        return false;
    }
}

const mergeObjects = obj => {
    // your code here
    // return Object.assign(obj, ...arguments);


};



//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // your code here
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
};

var map = (arr, func) => {
    // your code here
}


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    // Your code here

};

var comedianNamesFilteredAndMapped = (comedians) => {
    // Your code here

};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    // Your code here

};

var comediansReduced2 = (comedians) => {
    // Your code here

};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
