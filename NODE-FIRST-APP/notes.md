# Node.js First App – Tutor Notes

> *Tutor’s Perspective:*
> This is your **first practical interaction with Node.js**, where you move beyond browser-based JavaScript and start working with the **server environment**.

---

## 1. Understanding the Environment

Unlike browser JavaScript, **Node.js runs on your system**. This means it can:

* Access files
* Work with the operating system
* Run backend logic

This capability is what makes Node.js powerful for server-side applications.

---

## 2. Importing Core Modules

```js
const fs = require("fs");
```

Here:

* `fs` stands for **File System**
* It is a **core Node.js module** (no installation required)
* `require()` is used to import modules in Node.js

**Tutor note:**
Core modules like `fs` are available immediately because they come bundled with Node.js.

---

## 3. Writing Files Using Node.js

```js
fs.writeFileSync('hello.txt', 'hello from nodejs');
```

What this line does:

* Creates a file named `hello.txt`
* Writes the text `hello from nodejs` into it
* If the file already exists, it **overwrites** the content

**Why `writeFileSync`?**

* `Sync` means **blocking execution**
* The next line of code runs only after the file is written

This is acceptable for learning and small scripts.

---

## 4. Commented Code

```js
// console.log('Hello from Sarang');
```

Comments are ignored during execution.

Use comments to:

* Explain code
* Temporarily disable lines
* Improve readability

---

## 5. Output Result

After running the file:

* A new file `hello.txt` is created
* Content inside the file:

```
hello from nodejs
```

This confirms that your Node.js script executed successfully.

---

## 6. Key Learning Outcomes

From this simple app, you learned:

* Node.js runs JavaScript outside the browser
* How to import core modules
* How to interact with the file system
* Difference between synchronous and asynchronous behavior
