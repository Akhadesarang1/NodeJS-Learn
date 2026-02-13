````md
# Express Routing and Middleware Notes

## 1. Basic Express App Setup

- Import required modules:

```js
const path = require('path');
const express = require('express');
````

* Create Express application:

```js
const app = express();
```

* Start server:

```js
app.listen(3000);
```

This creates a server running on port `3000`.

---

## 2. Middleware in Express

Middleware functions execute during the request-response cycle.

### Static Middleware

```js
app.use(express.static(path.join(__dirname, 'public')));
```

Purpose:

* Serves static files (JS, CSS, images).
* Allows browser access without defining routes manually.
* Example: `/public/main.js` becomes accessible as `/main.js`.

---

## 3. Express Router

Router helps organize routes into separate modules.

### Creating a Router

```js
const router = express.Router();
```

Benefits:

* Modular route structure.
* Cleaner project organization.
* Easier scalability.

---

## 4. Defining Routes

Example routes:

```js
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
```

```js
router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});
```

Explanation:

* `router.get()` handles GET requests.
* `res.sendFile()` sends HTML files.
* `path.join()` ensures correct file path across OS.

---

## 5. Using Router in Main App

Import routes:

```js
const mainRoutes = require('./routes/index');
```

Register middleware:

```js
app.use(mainRoutes);
```

All routes defined inside the router become active.

---

## 6. Serving Static JavaScript

Example:

```html
<script src="/main.js"></script>
```

* Works because of `express.static`.
* Browser requests `/main.js`.
* Server serves file from `public` folder.

---

## 7. Request Flow (Execution Order)

1. Request reaches Express app.
2. Middleware executes in order of declaration.
3. Static middleware checks for matching file.
4. Router middleware handles defined routes.
5. Response is sent back to browser.

---

## 8. Key Concepts Summary

* Middleware processes requests before response.
* `express.static()` serves public assets.
* Express Router enables modular routing.
* `res.sendFile()` sends HTML files.
* Proper folder structure improves maintainability.

---

```
```
