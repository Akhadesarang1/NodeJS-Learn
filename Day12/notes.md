````md
# Day 12 — NodeJS Learning Notes

## 1. Adding Product ID to the Path

### Concept

- Implemented dynamic routing by passing a product ID inside the URL.
- Used anchor (`<a>`) tags to create links that include the product ID.
- Each product instance contains a unique identifier (`this.id`), which is used to fetch specific product details.

### Example

#### Inside EJS View

```html
<a href="/products/<%= product.id %>">View Details</a>
````

### Purpose

* Enables navigation to specific product pages.
* Helps identify which product data needs to be loaded when the route is accessed.

---

## 2. Extracting Dynamic Parameters

### Concept

* Used Express dynamic route parameters to capture values from the URL.
* Dynamic parameters allow building scalable routes for multiple items.

### Example Route

```js
router.get('/products/:productId', productController.getProduct);
```

### Accessing Parameters in Controller

```js
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
};
```

### Key Points

* `:productId` is a route parameter.
* `req.params` is used to extract values from the URL.

---

## 3. Loading Product Data

### Concept

* Retrieved product data based on the extracted product ID.
* Data can come from:

  * File system (JSON file)
  * Database
  * In-memory array

### Example

```js
Product.findById(prodId, product => {
  // process product data
});
```

### Purpose

* Fetch only the required product instead of loading all products.
* Improves efficiency and follows good backend design practices.

---

## 4. Rendering Product Detail View

### Concept

* Used `res.render()` to display product-specific details in a dynamic view.

### Example

```js
res.render('shop/product-detail', {
  product: product,
  pageTitle: product.title,
  path: '/products'
});
```

### Key Benefits

* Dynamic data rendering.
* Separation of concerns between logic and UI.
* Reusable template structure using EJS.

---

## Summary

Today’s learning focused on implementing dynamic routing and rendering detailed views in a NodeJS + Express application. The process included creating URL paths with product IDs, extracting dynamic parameters from routes, loading specific product data using the ID, and rendering a dedicated product detail page using EJS templates. This enhances scalability and allows building more dynamic and interactive web applications.

```
```
