# Day 2 – Node.js Learning Notes

## 1. Creating the First Node.js Server
- Used Node.js core `http` module to create a basic server.
- Server listens for incoming HTTP requests and sends responses.
- Learned how Node.js can act as a backend server without any framework.

Key concepts:
- Server is always running and listening for requests.
- Each request is handled asynchronously.

---

## 2. Event Loop & Node.js Lifecycle
- Understood that Node.js is **single-threaded** but **non-blocking**.
- Event Loop handles:
  - Incoming requests
  - Asynchronous callbacks
  - Timers and I/O operations

Key idea:
- Node.js does not wait for long tasks to finish.
- Tasks are executed based on **event-driven execution**, not line-by-line blocking.

---

## 3. `process.exit()` – What & Why to Avoid
- `process.exit()` immediately stops the Node.js process.
- It does NOT wait for:
  - Pending requests
  - Open connections
  - Async operations

Why it’s discouraged:
- Can cause data loss
- Abruptly kills the server
- Bad practice in production servers

Better approach:
- Let the event loop finish naturally
- Handle shutdowns gracefully

---

## 4. Understanding Requests
Each incoming request provides useful data through `req` object.

Important properties:
- `req.url` → URL path requested
- `req.method` → HTTP method (GET, POST, etc.)
- `req.body` → Data sent by client (not directly available)

---

## 5. Sending Responses
Used `res` object to send responses back to client.

Important methods:
- `res.setHeader()` → Set response headers
- `res.write()` → Write response body
- `res.end()` → End the response (must be called)

Key rule:
- Always call `res.end()` to finish the response.

---

## 6. Routing & Redirection
- Implemented routing manually using:
  - `if` conditions
  - Strict equality operator (`===`)
- Different responses sent based on:
  - URL
  - HTTP method

Example logic:
- `/` → Home response
- `/message` → Form handling
- Other routes → Default response

---

## 7. Parsing Request Bodies (Manual Way)
Since Node.js does not parse request bodies automatically:

Steps followed:
1. Collect incoming data chunks using `req.on('data')`
2. Combine chunks into a buffer
3. Convert buffer into readable data (string / object)

Why this matters:
- Shows how Node.js handles streaming data
- Helps understand how frameworks like Express work internally

---

## 8. Event-Driven & Scope-Based Execution
- Observed how code execution depends on:
  - Event callbacks
  - Block scope
  - Async behavior

Key understanding:
- Code inside callbacks executes **later**, not immediately.
- Execution order depends on the event loop, not file order.

---

## Summary
Today’s learning focused on:
- Core Node.js (no frameworks)
- Low-level request & response handling
- Event loop behavior
- Manual data parsing
- Understanding how backend logic actually works

This foundation makes learning Express, APIs, and scalable backends much easier.
