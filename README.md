# Advent of Code 2019

These are my solutions for the [2019 Advent of Code puzzles](https://adventofcode.com/2019). This is just a way for me
to practice JavaScript.

## Requirements

 1. Node 0.10 or higher
 2. NPM 5 or higher
 
## Setup

All you need to do is install the dependencies with npm

```bash
$ npm install
```

## Running

Once the project is installed, just use `node` to run `aoc.js` to see a puzzle's solution.

To run Day 1, Part 1 with the input I received:

```bash
$ node aoc.js 1 1
```

Or you can run it with any input file

```bash
$ node aoc.js 1 1 path/to/input/file.txt
```

Or you can run it with input directly as an argument

```bash
$ node aoc.js 1 1 1122
```

Finally, there is a convenience script that runs all puzzle solutions

```bash
$ npm run all
```

## Testing

Unit tests can be run if the dev dependencies were installed

```bash
# All tests
$ npm run test

# Just unit tests
$ npm run test-unit

# Just integration tests
$ npm run test-integration
```
