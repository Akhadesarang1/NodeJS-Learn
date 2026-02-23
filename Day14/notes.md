# Day 14 — Node.js Learning Notes

## 1. Adding Product Delete Functionality

### Overview
Implemented the ability to delete products from the application through the admin panel using a POST request. The deletion process updates both the product storage and the cart data to maintain consistency.

### Flow
1. A POST route (`/delete-product`) is created.
2. The controller receives `productId` from `req.body`.
3. `Product.deleteById()` is called from the model.
4. The model:
   - Reads products from the JSON file.
   - Finds the target product.
   - Removes it from the products array.
   - Writes the updated data back to the file.
   - Calls `Cart.deleteProduct()` to remove the product from the cart and update total price.

### Key Concepts
- POST requests for data modification.
- Separation of concerns (routes → controllers → models).
- Keeping cart data synchronized with product data.


---

## 2. Deleting Cart Items

### Overview
Implemented functionality allowing users to remove individual items from their cart.

### Flow
1. Each cart item has a delete button in `cart.ejs`.
2. Clicking delete sends a POST request with the product ID.
3. Route (`/cart-delete-item`) triggers controller logic.
4. Controller:
   - Gets product ID from request body.
   - Finds product using `Product.findById()`.
   - Calls `Cart.deleteProduct()` to:
     - Remove item from cart.
     - Update total price.
5. Redirect back to `/cart`.

### Key Concepts
- Form submission with hidden input fields.
- Updating related data structures safely.
- Redirect after POST (Post/Redirect/Get pattern).


---

## 3. Displaying Cart Items on the Cart Page

### Overview
Cart data stores only product IDs and quantities, so product details must be combined before rendering.

### Flow
1. `Cart.getCart()` reads cart data from JSON.
2. `Product.fetchAll()` retrieves all product details.
3. Controller loops through products and:
   - Matches cart product IDs with full product data.
   - Creates a new array containing:
     - `productData`
     - `qty`
4. Passes formatted data to `cart.ejs`.
5. View renders:
   - Product title
   - Quantity
   - Delete button for each item.
6. Displays fallback message if cart is empty.

### Key Concepts
- Data transformation before rendering.
- Combining datasets (cart + product info).
- Server-side rendering using EJS.


---

## 4. Fixing Delete Product Bug (Safety Check)

### Problem
Error occurred when trying to access properties (e.g., `product.price`) of a product that may not exist.

### Solution
Added defensive check:

```js
if (!product) {
  return;
}
Benefits

Prevents runtime errors.

Avoids accessing undefined values.

Makes deletion logic more robust.

Key Concepts

Defensive programming.

Null/undefined safety checks.

Summary of Concepts Learned

Handling POST requests for delete operations.

MVC pattern structure in Node.js (Routes → Controllers → Models).

File-based data storage updates.

Synchronizing related data (products and cart).

Rendering dynamic content using EJS.

Matching relational data manually (IDs with objects).

Error prevention using validation checks.