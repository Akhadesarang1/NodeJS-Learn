Day19
1. Defined a User model in Sequelize with fields id (primary key, auto-increment), name, and email to represent the users table in the database.
2. Created a one-to-many association between User and Product using Sequelize where a user can have many products and each product belongs to a single user, with cascade deletion enabled.
3. Implemented a dummy user setup by checking if a user exists in the database after Sequelize sync, creating one if not present, and attaching the user to every request using middleware.
4. Used Sequelize magic association method `createProduct()` to create a product through the User model, automatically linking the product with the user's foreign key.
5. 