Day20
1. Created and fetched user cart using Sequelize association methods createCart() and getCart() to manage cart products.
2. Implemented cart product management using Sequelize by checking existing items, updating quantity for duplicates, and retrieving cart products.
3. Implemented cart product deletion by removing the related entry from the CartItems junction table using destroy().
4. Added Order and OrderItem models to store cart products as order items using a many-to-many Sequelize association.
5. 