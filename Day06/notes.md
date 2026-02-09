````md
# Node.js Learning — Day 06 Notes

## 1. Introduction to Express.js

### What is Express?
- Express.js is a minimal and flexible Node.js web application framework.
- It simplifies server-side development by providing useful features for routing, middleware, and HTTP handling.

### Why Use Express?
- Simplifies server creation compared to core Node.js HTTP module.
- Easy routing system.
- Middleware support.
- Faster backend development.
- Better code organization.

---

## 2. Express Installation

### Steps:
1. Initialize project (if not already):

   npm init -y
````

2. Install Express:

   npm install express
   ```

---

## 3. Middleware Concept

### What is Middleware?

* Functions that execute during the request-response cycle.
* They can:

  * Execute code
  * Modify request/response
  * End response
  * Call next middleware

### Example:

app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});
```

### next() Function

* Passes control to the next middleware.
* Without `next()`, the request stops there (unless response is sent).

---

## 4. Understanding Middleware Flow

* Multiple middlewares run in sequence.
* Order matters.
* `res.send()` ends the request-response cycle.

Example:

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res) => {
  res.send("Response sent");
});
```

---

## 5. Routing with Express

### Basic Route Handling:

app.use('/', (req, res) => {
  res.send("Home Route");
});
```

* Handles requests matching the specified path.
* Can be used to manage different routes.

---

## 6. Assignment Practice

Tasks completed:

* Implemented Express server.
* Created multiple middlewares.
* Used `next()` for middleware chaining.
* Sent responses using `res.send()`.
* Managed routes effectively.

---

## 7. Body Parsing with body-parser

### Purpose:

* Parses incoming request body data (e.g., form submissions).

### Installation:

```bash
npm install body-parser
```

### Usage:

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
```

* Common parser used for form data.

---

## 8. Limiting Middleware to Specific HTTP Methods

* Middleware execution restricted to POST requests only.

Example:

app.post('/submit', (req, res) => {
  res.send("POST request handled");
});
```

* Other HTTP methods ignored.

---

## Summary

Today’s learning focused on:

* Express.js fundamentals.
* Middleware architecture and flow.
* Using `next()` for chaining.
* Route handling.
* Body parsing using body-parser.
* Limiting middleware execution based on HTTP methods.
* Practical implementation through assignment.

```
```
