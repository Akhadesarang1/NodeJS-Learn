# Node.js Basics – Day 2 Notes

## 1. Blocking and Non-Blocking Code

### Blocking Code
- Blocking code **stops execution** until a task is completed.
- It blocks the **event loop**, meaning no other code runs during that time.
- Example: `fs.writeFileSync()`
- Used when the operation **must finish before moving ahead**, but should be avoided in servers.

### Non-Blocking Code
- Non-blocking code allows Node.js to **continue executing other tasks**.
- Uses **callbacks, events, or async operations**.
- Example: `fs.writeFile()`
- Improves performance and scalability.
- Ideal for handling multiple users simultaneously.

### Key Difference
| Blocking | Non-Blocking |
|--------|-------------|
| Stops execution | Continues execution |
| Slower for servers | Faster & scalable |
| Sync operations | Async operations |

---

## 2. Node.js – Looking Behind the Scenes

### How Node.js Works
- Node.js runs on **Google’s V8 JavaScript Engine**.
- Uses a **single-threaded** model with an **event loop**.
- Handles multiple requests efficiently without creating new threads.

### Event Loop
- Manages asynchronous operations.
- Delegates heavy tasks (like file system, timers) to the system.
- Executes callbacks once tasks are completed.

### Why Node.js is Fast
- Non-blocking I/O
- Event-driven architecture
- Single-threaded but highly efficient

---

## 3. Using the Node Modules System

### What is a Module?
- A module is a **reusable piece of code**.
- Every file in Node.js is a module.

### Types of Modules
1. **Core Modules**  
   - Built into Node.js  
   - Examples: `http`, `fs`, `path`, `os`

2. **Local Modules**  
   - Created by the developer
   - Exported using `module.exports`

3. **Third-Party Modules**
   - Installed using `npm`
   - Example: `express`

### Importing Modules
```js
const fs = require('fs');
