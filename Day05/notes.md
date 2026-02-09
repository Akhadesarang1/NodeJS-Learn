
# Node.js Learning — Day 05 Notes

## 1. Understanding npm Scripts

npm scripts allow you to automate repetitive tasks by defining commands inside the `package.json` file.

### Example:

"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
````

### Benefits:

* Simplifies running commands
* Standardizes project workflows
* Helps in development and deployment automation

---

## 2. Installing Third-Party Packages Using npm

Third-party packages extend Node.js functionality.

### Install a package:


npm install package-name
```

### Example:


npm install nodemon
```

### Key Points:

* Packages are saved in `node_modules`
* Dependencies are listed in `package.json`
* Exact versions are tracked in `package-lock.json`

---

## 3. Using Nodemon for Auto Restart

Nodemon automatically restarts the Node.js application when file changes are detected.

### Install:


npm install nodemon --save-dev
```

### Run:


npx nodemon app.js
```

### Advantages:

* No need to manually restart server
* Faster development workflow

---

## 4. Types of Errors in JavaScript

### Syntax Errors

* Occur due to incorrect code syntax.
* Example: Missing brackets or incorrect keywords.

### Runtime Errors

* Occur during program execution.
* Example: Accessing undefined variables.

### Logical Errors

* Code runs but produces incorrect results due to flawed logic.

---

## 5. Using the Debugger

The debugger helps inspect and control code execution.

### Features:

* Set breakpoints
* Pause execution
* Inspect variables
* Step through code line by line

---

## 6. Auto Restarting Debugger

Debugger can be configured to restart automatically when code changes.

### Benefits:

* Continuous debugging workflow
* Faster testing and troubleshooting

---

## 7. Changing Variables in Debugger Console

During debugging:

* Variables can be modified directly in the debugger console.
* Useful for testing different scenarios without changing source code.

---

## Summary

Day 05 focused on improving development workflow using npm scripts, installing third-party packages, using nodemon for automatic restarts, understanding different JavaScript error types, and mastering debugging techniques including auto-restart and live variable modification.

```
```
