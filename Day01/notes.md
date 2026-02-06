# JavaScript Summary (Node.js Basics)

> *Tutor’s Perspective:*
> These notes cover the foundational JavaScript concepts every Node.js beginner must understand. Each concept builds on the previous one, so focus on **why** we use a feature, not just **how**.

---

## 1. Variables: `var`, `let`, and `const`

In early JavaScript, `var` was used to declare variables. Today, it is considered **outdated** due to scope and hoisting issues.

* **`var`** – function-scoped, error-prone, avoid using
* **`let`** – block-scoped, value can be reassigned
* **`const`** – block-scoped, value cannot be reassigned

**Key rule:**

* Use `const` by default
* Use `let` only when reassignment is required

---

## 2. Functions and Parameters

Functions allow us to reuse logic. Passing parameters makes them flexible.

When we concatenate strings using `+`, it works, but later we’ll see cleaner approaches (like template literals).

**Learning focus:**

* How arguments flow into parameters
* How return values are used

---

## 3. Arrow Functions

Arrow functions are a **shorter syntax** for writing functions.

Examples you should recognize:

* Single parameter → parentheses optional
* Single expression → `return` keyword optional

**Important:**
Arrow functions handle `this` differently than regular functions.

---

## 4. Objects and the `this` Keyword

Objects group related data and behavior.

When defining methods inside objects:

* Avoid arrow functions if you need `this`
* Use method shorthand for cleaner syntax

**Why this matters:**
`this` refers to the object calling the method, not where it’s defined.

---

## 5. Arrays and Array Methods

Arrays store ordered collections of data.

You learned:

* Iteration using `for...of`
* Transformation using `map()`

**Tutor tip:**

* `map()` does NOT change the original array
* It returns a **new array**

---

## 6. Reference vs Primitive Types

Primitive values (number, string, boolean) are copied by value.

Objects and arrays are **reference types**:

* Modifying them affects the original
* Even when declared with `const`

**Key takeaway:**
`const` prevents reassignment, not mutation.

---

## 7. Spread Operator (`...`)

The spread operator is used to:

* Copy arrays
* Copy objects
* Avoid reference-related bugs

This is a modern and safe alternative to older methods like `slice()`.

---

## 8. Rest Operator (`...`)

The rest operator collects multiple arguments into an array.

**Why we use it:**

* When the number of function arguments is unknown
* To write flexible, reusable functions

---

## 9. Destructuring

Destructuring extracts values from:

* Objects (by property name)
* Arrays (by position)

This improves:

* Code readability
* Cleaner function parameters

---

## 10. Asynchronous JavaScript (Callbacks)

JavaScript is **non-blocking**.

Using `setTimeout()` simulates async behavior.

Callbacks allow us to:

* Execute code after async tasks finish
* But can lead to callback nesting if overused

---

## 11. Promises

Promises are a cleaner solution to callbacks.

A Promise:

* Starts pending
* Either resolves or rejects

Using `.then()` allows chaining async tasks in a readable way.

