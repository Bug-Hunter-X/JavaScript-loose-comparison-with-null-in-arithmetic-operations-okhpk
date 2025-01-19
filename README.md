# JavaScript Loose Comparison with Null in Arithmetic Operations

This repository demonstrates a subtle bug in JavaScript related to loose comparison (`==`) with `null` values in arithmetic operations.

## Bug Description

The JavaScript code uses loose comparison (`==`) to check if arguments are `null`. While this works in some cases, it might lead to unexpected behavior and hidden bugs when dealing with various input types including numbers and null.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js` and run the code. Note the output when providing `null` values and then try with some other inputs like numbers and undefined values.

## Solution

The solution is to use strict comparison (`===`) to check for null. This resolves the unexpected behavior caused by loose comparison with null.