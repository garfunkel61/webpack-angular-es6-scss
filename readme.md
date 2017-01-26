Webpack base angularJS es6 with sass builded
=====

Setting up application:
-----

- clone repository: git clone https://github.com/garfunkel61/webpack-angular-es6-scss.git
- install dependencies: npm install


Building application:
-----

- run: npm run-script build
  - this will take all files tree starting from src/app/app.js and build out a bundle in builds/app.bundle.js
  - will add a .js map file
  - will create index.html in builds/ base on src/index.html but with linked-in build bundle

Running application
-----

- run: npm run-script server
  - this will use BrowserSync and launch your application at localhost:3003

Createing file structure
-----

- all files used by application can be imported with usage of es6 imports
- check src/app/app.js to see how all .js dependencies, .sass and .html files are imported

TODO:
------

- add unit tests compiler and runner
- add bundle minification
- add production build
- add static files-loader 
