# Robot Simulator

Simulates a single robot moving on a rectangular table based on a compact input format.

## Prerequisites
- Node.js (LTS recommended)
- npm

## Install the Packages
Navigate to the root directory of project in terminal and run this command:
```bash
npm install
```
or
```bash
npm i
```

## Run
To run the project 
```bash
npm run start
```

## Usage
The simulator expects a 3-line input:
1. Table size: `<rows> <cols>`
2. Initial robot position: `<row> <col> <orientation>`
3. Commands: a string of `L`, `R`, and `M`

Example (from [src/index.ts](src/index.ts)):
```text
5 4
1 2 N
LMLMMRMMLRM
```

Output is a single line with the final position:
```text
<row> <col> <orientation>
```

## Build
To build the project for distribution
```bash
npm run build
```
it will generate dist folder in root directory and will place all distributeable files
## Test
To run the tests
```bash
npm test
```
