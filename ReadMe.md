# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @teetime/lotide`

**Require it:**

`const _ = require('@teetime/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(...)`: Checks if two arrays are equal. 
* `assertEqual(...)`: Checks if two items are equal.
* `assertObjectsEqual(...)`: Checks if two objects are equal.
* `countLetters(...)`: Counts the letters of a string.
* `countOnly(...)`: return a count of items of an array (allitems) specified by the items to count.

* `eqArrays.js(...)`: Checks if two arrays are equal
* `eqObjects(...)`: Checks if two objects are equal 
* `findKey(...)`: Return the key in an object as specified by callback function
* `findKeyByValue(...)`: Returns a key as specified by the title (string) 
* `flatten(...)`: Returns all items in an array and its nested arrays as a single dimension array. 
* `head(...)`: Checks for the first element of an array
* `letterPositions(...)`: Returns an object of the index of each letter from input
* `map(...)`: Maps each item according to the callback function
* `middle(...)`: Returns the middle element if array is odd, the middle two elements if even and empty array if array is length 2 or less.


