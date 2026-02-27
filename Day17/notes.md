# Day 17 – Sequelize Basics

## 1. Sequelize Overview
Sequelize is a **promise-based Node.js ORM (Object Relational Mapper)** used to work with SQL databases like MySQL, PostgreSQL, SQLite, and MSSQL using JavaScript.

Instead of writing raw SQL queries, Sequelize allows interaction with the database using **JavaScript objects and methods**.

### Key Concepts
- **Models** – Represent database tables.
- **Instances** – Represent rows in a table.
- **Queries** – Methods used to interact with the database.
- **Associations** – Relationships between tables (One-to-One, One-to-Many, Many-to-Many).

---

## 2. Required Packages

To use Sequelize with MySQL, two packages are required:

```bash
npm install sequelize mysql2
```

- **sequelize** → ORM for interacting with the database  
- **mysql2** → MySQL driver that allows Node.js to communicate with MySQL

---

## 3. Connecting Sequelize with MySQL

A Sequelize instance is configured to connect the Node.js application with the MySQL database.

Example configuration:

```javascript
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-learn', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
```

### Configuration Parameters
- **database name** → `nodejs-learn`
- **username** → `root`
- **password** → MySQL password
- **dialect** → Database type (mysql)
- **host** → Database server location (`localhost`)

---

## 4. Defining a Model

A **model** represents a table in the database.

Example: `Product` model representing the `products` table.

```javascript
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = Product;
```

### Fields
- `id` → Primary key
- `title` → Product name
- `price` → Product price
- `imageUrl` → Image link
- `description` → Product description

---

## 5. Synchronizing Models with Database

```javascript
sequelize.sync()
```

Purpose:
- Creates database tables automatically based on defined models.
- If the table already exists, Sequelize keeps it unchanged.

---

## 6. Inserting Data

```javascript
Product.create({
  title: "Book",
  price: 20,
  imageUrl: "image.jpg",
  description: "A good book"
});
```

Purpose:
- Inserts a new record into the database table.

---

## 7. Retrieving Data

```javascript
Product.findAll()
```

Purpose:
- Retrieves **all records** from the table.
- Returns an **array of objects** representing rows in the database.

Example return:

```javascript
[
  { id: 1, title: "Book", price: 20 },
  { id: 2, title: "Pen", price: 5 }
]
```

---

## Summary

In Day 17, the following concepts were covered:

- Basics of **Sequelize ORM**
- Installing **sequelize and mysql2**
- Connecting **Node.js with MySQL**
- Creating a **Product model**
- Using **sequelize.sync()** to create tables
- Inserting data with **create()**
- Retrieving data with **findAll()**