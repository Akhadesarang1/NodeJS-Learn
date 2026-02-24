# Day 16 — Node.js + MySQL Integration Notes

## 1. Connecting Node.js with MySQL

### mysql2 Connection Pool
- Used `mysql2` with connection pooling.
- Pool allows multiple reusable connections instead of creating a new connection for every query.
- Improves performance and scalability.

### Promise-Based Queries
- Used promise version of mysql2 for async/await or `.then()` handling.
- Cleaner error handling and readable asynchronous code.

Example:

```js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs-learn',
  password: 'password'
});

module.exports = pool.promise();
2. Database Creation & CRUD Basics
Database Tasks Performed

Created MySQL database.

Created tables.

Added columns and defined schema.

Practiced CRUD operations:

Operation	Description
CREATE	Insert new product
READ	Fetch products
UPDATE	Modify existing data
DELETE	Remove records
3. Retrieving Data Using db.execute()

Used db.execute() to run parameterized SQL queries.

Returns a promise containing:

rows (data)

metadata

Example:

db.execute('SELECT * FROM products')
  .then(([rows, fieldData]) => {
    console.log(rows);
  })
  .catch(err => console.log(err));

Benefits:

Prevents SQL injection.

Structured result handling.

4. MVC Integration (Model → Controller → View)
Model Layer

Created fetchAll() method to retrieve products.

static fetchAll() {
  return db.execute('SELECT * FROM products');
}
Controller Layer

Called model method.

Used promise response to render data.

Product.fetchAll()
  .then(([products]) => {
    res.render('shop/product-list', {
      prods: products
    });
  });
5. Insert & Fetch Single Product
Insert Product
db.execute(
  'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
  [title, price, description, imageUrl]
);

Key Concept:

Parameterized queries (?) improve security and prevent SQL injection.

Fetch Single Product
db.execute(
  'SELECT * FROM products WHERE id = ?',
  [prodId]
);
Key Learnings

mysql2 connection pooling improves performance.

Promise-based database queries simplify async flow.

MVC structure keeps database logic separated from controllers.

Parameterized queries are essential for secure SQL operations.

Models should encapsulate database access logic.