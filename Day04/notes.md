# Node.js Learning — Day 04 Notes

## 1. How the Web Works

Basic web communication flow:

Client → Request → Server → Response → Client

- The client (browser/app) sends a request.
- The server processes the request.
- The server sends back a response.
- The client receives and displays the response.

---

## 2. Program Lifecycle & Event Loop

- Node.js runs **non-blocking JavaScript**.
- Uses an **event-driven architecture** powered by the **Event Loop**.
- The event loop manages execution of asynchronous operations.
- A Node.js program exits automatically when there is no more work to do.
- `createServer()` keeps the process running because it continuously listens for requests.

Key Idea:
- Node executes tasks asynchronously without blocking other operations.

---

## 3. Asynchronous Code

- JavaScript in Node.js is non-blocking.
- Uses:
  - Callbacks
  - Events
- Execution order may change due to asynchronous behavior.
- Important to understand execution flow when working with async code.

---

## 4. Requests & Responses

- Request data can be received in **chunks**.
- Uses:
  - Streams
  - Buffers
- Handle incoming data carefully.
- Avoid sending multiple responses ("double responses") for a single request.

---

## 5. Node.js Core Modules

- Node.js includes built-in core modules such as:
  - http
  - fs
  - path
- Core modules can be imported into any file.
- Import syntax:

```js
const moduleName = require('module');

## 6. Node Module System
// Importing Modules

// Custom files:

// require('./path-to-file');


// Core or third-party modules:

// require('module');


// Exporting Modules

// Single export:

// module.exports = something;


// Multiple exports:

// exports.name = value;

### Summary

Understand client-server communication flow.

Node.js uses an event-driven, non-blocking architecture.

Event Loop manages async execution.

Handle request data using streams and buffers.

Use core modules and the module system for scalable code structure.