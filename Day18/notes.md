````md
# Day 18 – Sequelize Data Retrieval and Deletion

## Overview
On Day 18, the focus was on learning how to retrieve specific records, retrieve multiple records, edit existing records, and delete records in a MySQL database using Sequelize ORM in a Node.js application. These operations were implemented in the product management section of the application.

The main Sequelize methods used were:
- `findOne()`
- `findAll()`
- `findByPk()`
- `destroy()`

These methods help perform **CRUD operations** (Read and Delete in this case) efficiently without writing raw SQL queries.

---

# 1. Retrieving a Specific Record using `findOne()`

## Concept
`findOne()` is used to retrieve a **single record** from the database that matches a specific condition.

Instead of writing a SQL query like:

```sql
SELECT * FROM products WHERE id = 5;
````

Sequelize allows us to use:

```javascript
Product.findOne({ where: { id: prodId } });
```

## Implementation Example

```javascript
Product.findOne({ where: { id: prodId } })
  .then(product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
```

## How It Works

1. Sequelize checks the `products` table.
2. The `where` condition filters rows based on `id`.
3. It returns the **first matching record**.
4. The result is passed to the view for rendering.

## Key Points

* Returns **one object**.
* Uses `where` conditions to filter results.
* Useful when retrieving a specific record based on conditions.

---

# 2. Retrieving All Records using `findAll()`

## Concept

`findAll()` retrieves **all rows from a table**.

Equivalent SQL query:

```sql
SELECT * FROM products;
```

## Implementation Example

```javascript
Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
```

## How It Works

1. Sequelize queries the `products` table.
2. All product records are retrieved.
3. Sequelize returns an **array of objects**.
4. The products array is sent to the view for rendering.

## Key Points

* Returns **an array of records**.
* Used to display lists of data.
* Commonly used in **product listings, dashboards, admin panels**.

---

# 3. Retrieving Data using Primary Key with `findByPk()`

## Concept

`findByPk()` retrieves a record using the **Primary Key (PK)**.

Primary keys uniquely identify records in a table.

Equivalent SQL query:

```sql
SELECT * FROM products WHERE id = 5;
```

Sequelize version:

```javascript
Product.findByPk(prodId)
```

## Implementation Example

```javascript
Product.findByPk(prodId)
  .then(product => {
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      product: product
    });
  })
  .catch(err => console.log(err));
```

## How It Works

1. The product id is obtained from the request query.
2. Sequelize searches the table using the primary key.
3. The product data is returned as an object.
4. The data is pre-filled in the edit form.

## Key Points

* Faster than `findOne()` when searching by primary key.
* Returns **one object**.
* Often used when editing existing data.

---

# 4. Deleting Records using `destroy()`

## Concept

`destroy()` is used to **delete records from a database**.

Equivalent SQL query:

```sql
DELETE FROM products WHERE id = 5;
```

Sequelize version:

```javascript
Product.destroy({ where: { id: prodId } });
```

## Implementation Example

```javascript
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  Product.destroy({ where: { id: prodId } })
    .then(() => {
      console.log('PRODUCT DELETED');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};
```

## How It Works

1. Product ID is obtained from the form request.
2. Sequelize executes a delete query using the `where` condition.
3. The matching record is removed from the database.
4. The user is redirected back to the admin products page.

## Key Points

* Deletes records from the database.
* Requires a `where` condition to specify which record to remove.
* Returns the number of deleted rows.

---

# Comparison of Sequelize Methods

| Method       | Purpose                              | Returns                |
| ------------ | ------------------------------------ | ---------------------- |
| `findOne()`  | Retrieve one record using conditions | Single Object          |
| `findAll()`  | Retrieve all records                 | Array of Objects       |
| `findByPk()` | Retrieve record using primary key    | Single Object          |
| `destroy()`  | Delete record from database          | Number of rows deleted |

---

# Practical Use in the Application

| Feature                  | Sequelize Method Used |
| ------------------------ | --------------------- |
| View product details     | `findOne()`           |
| Show all products        | `findAll()`           |
| Load product for editing | `findByPk()`          |
| Delete product           | `destroy()`           |

---

# Key Learning Outcomes

* Learned how Sequelize simplifies database queries.
* Understood how to retrieve records using conditions.
* Implemented primary key retrieval using `findByPk()`.
* Implemented product deletion functionality using `destroy()`.
* Practiced integrating Sequelize queries with Express controllers and EJS views.

---

# Summary

Day 18 focused on **data retrieval and deletion using Sequelize ORM**. By using built-in Sequelize methods like `findOne()`, `findAll()`, `findByPk()`, and `destroy()`, database interactions become easier, safer, and more readable compared to raw SQL queries. These operations are essential for building real-world applications such as admin panels, product management systems, and dynamic web applications.

```
```
