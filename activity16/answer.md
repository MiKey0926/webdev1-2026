# Advanced JavaScript Activity: Answer Template

---

## Task 1: Data Structures & References

```javascript
const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", isAvailable: true },
    { title: "1984", author: "George Orwell", isAvailable: true }
  ]
};

const copiedLibrary = { ...library };

copiedLibrary.books[0].isAvailable = false;

console.log(library);
console.log(copiedLibrary);

// The original also changed because a shallow copy only copies the object's top level.
// The books array is still shared. To prevent this, create a deep copy using
// structuredClone(library) or JSON.parse(JSON.stringify(library)).

```

## Task 2: Advanced Conditional Logic (Validation)

```javascript
function validatePassword(password) {
  if (password.length < 8) {
    return "Error: Password must be at least 8 characters long.";
  }

  if (!/[A-Z]/.test(password)) {
    return "Error: Password must contain at least one uppercase letter.";
  }

  if (!/\d/.test(password)) {
    return "Error: Password must contain at least one number.";
  }

  if (/password/i.test(password)) {
    return 'Error: Password must not contain the word "password".';
  }

  return "Strong Password";
}

```

## Task 3: Complex Iteration (Algorithms)

```javascript
function generateFibonacci(n) {
  const fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  return fibonacci;
}
```

## Task 4: Higher-Order Functions & Callbacks

```javascript
function processData(dataArray, callback) {
  return dataArray.map(callback);
}

const numbers = [2, 4, 6, 8];
const result = processData(numbers, num => num * num);

console.log(result);

```

## Task 5: Functional Array Methods (Map, Filter, Reduce)

```javascript
const transactions = [
  { type: "deposit", amount: 150 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 80 }
];

const balance = transactions.reduce((total, transaction) =>
  transaction.type === "deposit"
    ? total + transaction.amount
    : total - transaction.amount,
0);

console.log(balance);

```
