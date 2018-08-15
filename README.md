Athena React App
===========

### Installation
```
git clone https://github.com/ONE-BIG-MOB1/athena.git/ .
npm install && npm start
```
Go to [localhost:3000](http://localhost:3000) in latest version of Chrome browser.

### Notes
* Requests to the good endpoint are made on the server without going to React app. Pug is used as the template engine to display the results. Requests to the search and error endpoints are made via the React app.
* Formatting with Moment.js was added for the 'end of an era' date for the good endpoint. Though in a professional setting I wouldn't add this as I'm aware of the importance of just sticking to the specification.
