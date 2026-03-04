# Day19 - Sequelize Relationships & Associations

## 1. Creating a User Model
Defined a **User model** in Sequelize with fields:
- `id` – Primary key, auto-increment
- `name` – Stores user's name
- `email` – Stores user's email  

This model represents the **users table** in the database.

---

## 2. One-To-Many Relationship (User → Product)
Created an association where:
- A **User can have many Products**
- Each **Product belongs to one User**

```js
User.hasMany(Product);
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
````

* Sequelize automatically adds a **userId foreign key** in the `products` table.
* `CASCADE` ensures that if a **user is deleted**, all their products are deleted as well.

---

## 3. Creating & Managing a Dummy User

Implemented a **default user setup** during server start.

Steps:

1. After `sequelize.sync()`, check if user with `id = 1` exists.
2. If not, create a new user.
3. Attach this user to every request using middleware.

```js
app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});
```

This allows easy access to the user in controllers using **`req.user`**.

---

## 4. Using Magic Association Method (`createProduct`)

Instead of creating a product directly using the Product model:

```js
Product.create({...})
```

We use Sequelize's **magic association method**:

```js
req.user.createProduct({...})
```

* Automatically sets the **userId foreign key**
* Links the product to the current user.

---

## 5. Fetching Related Products (`getProducts`)

Used Sequelize magic method to fetch products related to the current user.

```js
req.user.getProducts({ where: { id: prodId } })
```

* Retrieves **products belonging to the current user**
* `where` condition filters specific products.

---

## 6. One-To-One Relationship (User → Cart)

```js
User.hasOne(Cart);
Cart.belongsTo(User);
```

* Each **User has one Cart**
* Each **Cart belongs to one User**
* Sequelize adds **userId** in the `cart` table.

---

## 7. Many-To-Many Relationship (Cart ↔ Product)

```js
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
```

* A **Cart can contain many Products**
* A **Product can appear in many Carts**
* **CartItem** acts as a **junction table**
* It also stores additional data like **quantity**.

---

## Relationship Overview

User → Product → **One-To-Many**
User → Cart → **One-To-One**
Cart ↔ Product → **Many-To-Many (via CartItem)**

```
```
