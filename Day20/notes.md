# Day 20 – Node.js + Sequelize (Cart & Orders)

## 1. Creating and Fetching User Cart

* Used Sequelize **association helper methods** to manage carts.
* `user.createCart()` creates a cart linked to the user.
* `user.getCart()` retrieves the existing cart for the user.
* These methods are automatically available because of Sequelize model associations.

**Purpose:**
Ensures every user has a cart where products can be stored before checkout.

---

## 2. Cart Product Management

* Products are added to the cart through the **CartItems junction table**.
* Logic implemented to handle duplicate products.

**Process:**

1. Fetch user's cart.
2. Check if the product already exists in the cart.
3. If it exists → **increase quantity**.
4. If it does not exist → **add product with quantity = 1**.

**Key Concept:**
Cart and Product have a **many-to-many relationship** through `CartItems`.

---

## 3. Removing Products from Cart

* Implemented deletion using Sequelize `destroy()`.

**Process:**

1. Fetch cart.
2. Get cart products.
3. Find the product to remove.
4. Delete the related row from the **CartItems table**.

**Result:**
The product is removed from the cart without deleting the product itself.

---

## 4. Order and OrderItem Models

Created two models to store purchase data:

### Order

Represents a completed purchase made by a user.

### OrderItem

Stores products inside an order with quantity.

**Relationship:**

User → Orders (One-to-Many)
Order → Products (Many-to-Many via OrderItem)

---

## 5. Creating Orders from Cart

Implemented the checkout flow.

**Process:**

1. Fetch user cart with products.
2. Create a new **Order**.
3. Copy cart products into **OrderItems** with quantities.
4. Clear the cart after order creation.

```javascript
cart.getProducts()
  .then(products => {
    return order.addProducts(
      products.map(product => {
        product.orderItem = { quantity: product.cartItem.quantity };
        return product;
      })
    );
  })
```

---

## 6. Fetching User Orders

* Orders are retrieved using:

```javascript
req.user.getOrders({ include: ['products'] })
```

* `include` allows fetching associated products inside each order.

**Result:**
Each order contains the products that were purchased along with their quantities.

---

# Key Sequelize Concepts Learned

* Association helper methods (`getCart`, `createCart`)
* Many-to-many relationships
* Junction tables (`CartItems`, `OrderItems`)
* Handling duplicate cart items
* Data transfer from cart → orders
* Using `include` to fetch related data

---

# Flow Summary

User → Add Product → Cart → Checkout → Order → OrderItems

1. User adds product to cart
2. Cart stores products in `CartItems`
3. Checkout converts cart products to `OrderItems`
4. Cart is cleared
5. Orders can be fetched with their products
