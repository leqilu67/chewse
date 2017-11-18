# Project Title

Coding challenge for Chewse

## Ratios Problem

```
Write a function that satisfies the following:
Accepts 2 arguments:
- A dictionary/map where the keys are numeric identifiers for a certain food item, and the values are the ratio of that item desired
- An integer indicating how many portions the meal should serve
- Returns a dictionary/map where the keys are numeric identifiers for each food item, and the values are the actual quantities for each food item
- Assigns all portions
- Only assigns integers for portion counts
- Chooses the largest remainder for allocating non-integer portion counts
  - If there is no largest remainder, the item with the smallest numeric ID should be chosen
- Accepts any number of items and ratios
```

## Getting Started

Go to https://pototoland.github.io/chewse/

## Running the tests

Open developer tools on Chrome and enter ```testCases();``` to run test cases automatically,
or use ```distribution(argument1, argument2)``` to run specific tests manually.

### Test cases

I created 18 test cases, with the first 8 being invalid cases.

```
distribution(null, 7); //-> Please double check your ratios input.
distribution(7); //-> Please make sure two arguments are entered.
distribution([4, 5, 3], -3); //-> Please double check your ratios input.
distribution(["a", "d", 2], 7); //-> Please double check your ratios input.
distribution({1: 0, 2: 0, 3: 4}, 9.6); //-> Please make sure the total portion value is a positive integer.
distribution("string", 7); //-> Please double check your ratios input.
distribution({1: 1}, "string"); //-> Please make sure the total portion value is a positive integer.
distribution({}, -1); //-> Please make sure the total portion value is a positive integer.

```

And the rest of the test cases are with various valid inputs.

```
distribution({}, 1); //-> {}
distribution({1: 1}, 2); //-> {1: 2}
distribution({1: 1}, 0); //-> {1: 0}
distribution({1: 1, 2: 1, 3: 1}, 11); //-> {1: 4, 2: 4, 3: 3}
distribution({1: 0, 2: 0, 3: 4}, 7); //-> {1: 0, 2: 0, 3: 7}
distribution({1: 0, 2: 0, 3: 4}, 3); //-> {1: 0, 2: 0, 3: 3}
distribution({1: 4, 2: 9, 3: 1, 8: 7}, 5); //-> {1: 1, 2: 2, 3: 0, 8: 2}
distribution({3: 4, 1: 9, 7: 1}, 14); //-> {1: 9, 3: 4, 7: 1}
distribution({3: 4, 1: 9, 7: 1}, 5); //-> {1: 3, 3: 2, 7: 0}
distribution({3: 4, 1: 9, 7: 1}, 75); //-> {1: 48, 3: 22, 7: 5}
```

## Built With

* JavaScript

## Author

* **Leqi Lu** - https://www.leqilu.com
