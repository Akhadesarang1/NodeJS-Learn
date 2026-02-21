# Node.js Learning Notes — Day 13

## 1. Understanding POST Requests
- POST requests are used to send data from client to server.
- Commonly used when submitting forms.
- Form data (e.g., `productId`) is sent inside the **request body**.
- Server accesses POST data using:

req.body

The route controller processes the received data and performs required logic (store, update, validate, etc.).

2. Creating a Cart Model
Purpose

Manage cart data using a structured model.

Features Implemented

Read cart data from a JSON file.

Add products to cart.

If product already exists:

Increase quantity instead of duplicating entry.

Recalculate total price whenever cart updates.

Persist updated cart data back to storage.

Key Concepts

File system operations (read/write JSON).

Data mutation and recalculation logic.

3. Using Query Parameters (req.query)

Query parameters allow passing extra information through the URL.

Example:

/admin/edit-product?edit=true

Accessed in Node.js using:

req.query
Use Case

Detect edit mode from URL.

Conditionally render UI (e.g., edit form vs add form).

4. Pre-Populating Edit Product Form
Steps

Receive product ID from request.

Fetch existing product data using ID.

Pass product data to view template.

Automatically fill form input fields.

Benefit

Improves user experience.

Allows editing without re-entering all details.

5. Dynamic Routes with Parameters

Dynamic route example:

/admin/edit-product/:productId

Route parameters allow identifying specific resources.

Access parameter:

req.params.productId
Usage

Navigate from product list to specific edit page.

6. Updating Existing Product Data
Workflow

Fetch product using ID.

Render form with existing data.

User edits and submits form.

Server receives updated data via POST request.

Replace or update existing product in storage.

Save updated dataset.