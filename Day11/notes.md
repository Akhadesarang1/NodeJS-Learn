# Day 11 — NodeJS Learning Notes

## 1. Introduction to MVC Architecture

Learned about MVC (Model–View–Controller) pattern:

- **Model** → Handles data and business logic.
- **View** → Responsible for UI and presentation.
- **Controller** → Manages request handling and connects Model and View.

Benefits:
- Better project structure
- Separation of concerns
- Improved scalability and maintainability

---

## 2. Controllers Implementation

- Created controller files inside `controllers/` folder.
- Implemented `controllers/product.js`.
- Used ES module import/export to organize controller logic.
- Added `error.js` controller for handling error routes.

Purpose:
- Move route logic out of route files.
- Keep code modular and clean.

---

## 3. Adding Product Model

- Introduced a Product model to handle data logic.
- Shifted data processing from controllers to the model layer.

Advantages:
- Cleaner controllers.
- Centralized data handling.

---

## 4. File-Based Data Storage

Implemented data persistence using file system:

- Saving products using:
  
```

product.save()

```

- Fetching products using:

```

product.fetchAll(products => {})

```

This separates storage logic from business logic.

---

## 5. Refactoring File Storage Logic

Refactored storage code to:

- Remove duplication.
- Improve readability.
- Achieve better separation of concerns.
- Make code more scalable and maintainable.

---

## Key Concepts Learned

- MVC architecture fundamentals.
- Controller structure and modularization.
- Moving logic from controller to model.
- File-based storage handling.
- Code refactoring for clean architecture.

