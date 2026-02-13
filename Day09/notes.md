
# NodeJS Learning Notes — Day 09

## 1. Sharing Data Across Requests and Users

- Learned how to share data between different routes and users.
- Used **module exporting** so that data/functions from `admin.js` can be accessed in other files.
- Improved understanding of Node.js module system (`module.exports` and `require()`).

---

## 2. Overview of Templating Engines

Explored different templating engines used in Node.js:

- **Pug**
- **EJS**
- **Handlebars**

Key concept:

- Templating engines allow dynamic HTML rendering.
- Help separate backend logic from frontend views.

---

## 3. Working with Pug

### Installation & Setup

- Installed Pug as a templating engine.
- Configured it as the view engine in Express.

### Implementation

- Converted HTML files into `.pug` templates.
- Implemented layout structure.

### Dynamic Content

- Output dynamic content using variables:

title #{docTitle}
````

---

## 4. Working with Handlebars

### Setup

* Installed Handlebars.
* Registered Handlebars with Express.
* Set Handlebars as the view engine.

### Implementation

* Converted entire project views to Handlebars.
* Added layout support.

---

## 5. Working with EJS

* Installed and explored EJS templating engine.
* Compared syntax and structure with Pug and Handlebars.

---

## 6. Layouts and Partials

* Implemented layouts for reusable page structure.
* Worked with partials to reuse components like:

  * Header
  * Footer
  * Navigation

Benefits:

* Cleaner code structure
* Reusability
* Better maintainability

---

## Summary

Today’s focus was on:

* Sharing data across requests using modules.
* Understanding templating engines (Pug, Handlebars, EJS).
* Implementing dynamic views.
* Converting static HTML into templated views.
* Using layouts and partials for reusable UI components.

