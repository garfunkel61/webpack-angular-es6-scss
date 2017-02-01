Webpack base angularJS es6 with sass builded
=====

Setting up application:
-----

- clone repository: git clone https://github.com/garfunkel61/webpack-angular-es6-scss.git
- install dependencies: npm install


Building application:
-----

- run: npm run-script build
  - this will take all files tree starting from src/app/app.js and build out a two bundles:
    - builds/app.bundle.js - with the application code
    - builds/vendors.bundel.js  - with all external libraries need by application
  - will create index.html in builds/ base on src/index.html but with linked-in build bundles

Running application
-----

- run: npm run-script server
  - will do what build does, and:
    - this will use BrowserSync and launch your application at localhost:3003
    - will add a .js map files for app and vendors bundles

Createing file structure
-----

- all files used by application can be imported with usage of es6 imports
- check src/app/app.js to see how all .js dependencies, .sass, .html and static assets files are imported

TODO:
------

- css into seperet file
- add unit tests compiler and runner
- add url loader?
