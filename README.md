# Sessions Review
## Library Style App

| Objectives |
| :--- |
| To review and apply sessions to application with one relationship |
| To handle routing for muliple resources and pages |
| To implement **sign up**, **sign in**, and **logout** features |




## Setting Up

To practice sessions and managing resources we will create a **book style** application, **THE LIBRARY APP**. 


Let's get started setting up our standard application structure.


```bash

mkdir library_app;
cd library_app;

touch index.js;
echo {} > package.json;

mkdir -p public/{javascripts,stylesheets,images};

mkdir views;
touch views/home.html

mkdir models;
touch models/{index.js,book.js,user.js};

npm install --save bower

bower init
bower install --save jquery
```

You should have some idea of why each of these groups of directories and files are being created. Take a second to discuss it.


* `library_app/` **is our root app dir**
  * `index.js` **the main application file`.
  * `public/` **the assets directory for the application**
    * `javascripts/`, `stylesheets/`, etc are all assets.
  * `views` **contains all the html files we will send to the client**. You can optionally add subfolders here to break up the `views` into different concerns like `views/users/`, `views/books`, `views/sessions`, etc.
  * `models/`, **contains all our application model logic that we use to interact with our DB**.
  * `bower_components` **is an optional directory that we have only because we are using `bower`.






