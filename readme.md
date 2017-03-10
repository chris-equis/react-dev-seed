ES6, React, Scss dev seed
=
A quick seed to enable a rapid setup for your application.

Prerequisites
-
It only requires **Node.js v6**. For more details, follow instructions on https://nodejs.org

Installation
-
Download this repository as a **.zip** file and extract to whatever folder you like.
In order to install dependencies, run the following command in your terminal
```bash
npm install
```
Check [_package.json_](https://github.com/chris-equis/react-dev-seed/blob/master/package.json) file for more details on dependencies. Some of them are explained below.

Start development
-
Starting the development will concurrently start a server and build your files, watching for changes. To do so, run the following command in your terminal:
```bash
npm start
```
It runs automatically and concurrently

 - `npm run server` that spawns a server with `wsrv ./src -p 9000 -s -l`
 - compiles your files and watches for changes with `webpack -d --watch`

For more details check [**wsrv** package details](https://www.npmjs.com/package/wsrv) and [**webpack** 2.x page](https://webpack.js.org/concepts/).

---
Open your favourite browser at **http://localhost:9000** address (due to `-l` flag of `wsrv` command, it will lively reload after any code change :)

---
This seed was inspired by [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr) and updated to handle more starting development needs.
