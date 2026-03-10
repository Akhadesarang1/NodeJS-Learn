Day21
1. Had an intro to what is cookie 
2. did project overview and removd two navigations
3. Implemented login page rendering with Express route, controller, EJS form, and basic authentication UI styling.
4. Added request-driven authentication by setting `req.isLoggedIn` in the login controller, passing `isAuthenticated: req.isLoggedIn` to all controllers, and conditionally rendering admin navigation in EJS using `<% if (isAuthenticated) %>`.
5. 