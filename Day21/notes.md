# Day 21 – Node.js Learning Notes

## 1. Introduction to Cookies

Cookies are small pieces of data stored in the user's browser by a website. They are mainly used to remember user information between requests.

### Why Cookies Are Needed
HTTP is **stateless**, which means the server does not remember previous requests from the same user. Cookies help maintain user-related information such as:

- Login sessions
- User preferences
- Tracking user activity
- Authentication state

### How Cookies Work

1. Server sends a cookie to the browser.
2. Browser stores the cookie locally.
3. Browser sends the cookie back to the server with future requests.

Example flow:

Client Request → Server  
Server Response + Cookie → Browser stores cookie  
Next Request → Browser sends cookie back to server

Cookies are often used together with **sessions** to manage authentication.

---

## 2. Project Overview Changes

During the project review:

- Removed **two unnecessary navigation links** from the UI.
- Simplified the navigation structure.
- Prepared the application for implementing **authentication-based navigation rendering**.

This helps keep the UI clean and ensures that only relevant navigation options appear to users.

---

# 3. Login Page Implementation

A basic login system was implemented using **Express routes, controllers, and EJS views**.

### Components Involved

1. **Route**
2. **Controller**
3. **EJS View**
4. **Basic UI styling**

### Login Route

The login route handles requests for rendering the login page.

Example:

```js
router.get('/login', authController.getLogin);

Login Controller

The controller renders the login page and passes required data to the EJS template.

Example:

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login',
    isAuthenticated: req.isLoggedIn
  });
};

Responsibilities of the controller:

Handles request logic

Passes data to views

Controls rendering of pages

Login Page (EJS)

An EJS form was created to allow the user to submit login credentials.

Example structure:

<form action="/login" method="POST">
  <input type="text" name="email">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>

EJS allows dynamic rendering using embedded JavaScript.

Example:

<%= pageTitle %>
4. Request-Driven Authentication

A basic authentication mechanism was implemented using request properties.

Core Idea

Authentication state is attached to the request object.

Example:

req.isLoggedIn = true;

This value is then passed to the view to control what the user can see.

Login Controller Logic

When the login form is submitted:

exports.postLogin = (req, res, next) => {
  req.isLoggedIn = true;
  res.redirect('/');
};

Process:

User submits login form.

Controller sets req.isLoggedIn = true.

User is redirected to the homepage.

Passing Authentication State to Views

Controllers pass the authentication status to EJS:

res.render('page', {
  isAuthenticated: req.isLoggedIn
});

This allows the UI to react dynamically based on login status.

5. Conditional Rendering in EJS

Navigation elements are displayed conditionally based on authentication.

Example:

<% if (isAuthenticated) { %>
  <li><a href="/admin/add-product">Add Product</a></li>
<% } %>
Behavior

If isAuthenticated is true

Admin navigation links are visible

If isAuthenticated is false

Admin navigation links are hidden

6. Current Limitation of This Approach

This authentication method is temporary and not persistent.

Problem:

req.isLoggedIn only exists for the current request

After a new request, the login state is lost

Example:

User logs in → req.isLoggedIn = true
Next request → value disappears

7. What Will Be Implemented Next

To solve the limitation above, the next steps typically involve:

Cookies

Used to store session identifiers in the browser.

Sessions

Server stores session data and associates it with the cookie.

Typical flow:

User logs in → Server creates session
Server sends session ID cookie → Browser stores it
Future requests → Cookie is sent → Server recognizes user session

This makes authentication persistent across requests.

Summary

Today's progress included:

Learning the concept of cookies

Simplifying project navigation

Implementing a login page with Express, controller, and EJS

Adding request-driven authentication

Passing authentication state from controller to view

Using conditional rendering in EJS to control navigation visibility

The current authentication system works only per request and will later be improved using cookies and sessions for persistent login management.