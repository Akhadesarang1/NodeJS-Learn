Day13
1. learned POST request sends form data (like productId) in the request body to the server, where it is accessed using req.body and processed by the corresponding route controller.
2. Created a Cart model that reads and updates cart data from a JSON file, adds products, increases quantity if already present, and recalculates total price.
3. Used query parameters (req.query) to detect edit mode in the URL and conditionally render the edit product page.