# Node.js Learning --- Day 07 Notes

## 1. Express Router

Used Express Router to organize routes into separate modules.

### Steps:

-   Created router using:

const express = require('express');
const router = express.Router();
```

-   Defined routes inside router:

router.get('/add-product', (req, res, next) => {
    res.send('Add Product Page');
});
```

-   Exported router:

module.exports = router;
```

-   Used router in main app file:

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);
```

### Benefits:

-   Better code organization
-   Separation of concerns
-   Easier project scaling

------------------------------------------------------------------------

## 2. 404 Error Page

Handled unknown routes using:

res.status(404).send('Page Not Found');
```

Or served a custom HTML file for better UI.

------------------------------------------------------------------------

## 3. Filtering Paths

Used path filtering to group related routes:

app.use('/admin', adminRoutes);
```

-   Adds `/admin` prefix automatically to routes inside router.

Example:

    /admin/add-product

------------------------------------------------------------------------

## 4. Creating HTML Files

Created multiple HTML pages:

-   add-product.html
-   shop.html

Used for serving static content.

------------------------------------------------------------------------

## 5. Serving HTML Files

Used Node.js `path` module to safely locate files.

const path = require('path');

res.sendFile(
    path.join(__dirname, '../', 'views', 'add-product.html')
);
```

### Why use path.join():

-   Cross-platform compatibility
-   Avoids path errors

------------------------------------------------------------------------

## 6. Custom 404 Page

Returned custom HTML page:

res.status(404).sendFile(
    path.join(__dirname, '../', 'views', '404.html')
);
```

------------------------------------------------------------------------

## 7. Helper Function for Navigation

Created helper function/module to reuse navigation HTML across pages.

Benefits: - Avoid repeating code - Cleaner structure

------------------------------------------------------------------------

## 8. Internal CSS Styling

Added styles directly inside HTML files using:

<style>
   /* CSS styles */
</style>
```

Useful for small projects or learning phase.

------------------------------------------------------------------------

## 9. Serving Static Files

Served static assets (CSS, images, JS) using:

app.use(express.static(path.join(__dirname, 'public')));
```

Benefits: - Direct access to static files - Better project structure

------------------------------------------------------------------------

## Summary

Today focused on: - Express Router and modular routing - Handling 404
errors - Serving HTML files - Static file serving - Path filtering -
Basic page styling and navigation helpers

This improves scalability and structure of Express applications.
