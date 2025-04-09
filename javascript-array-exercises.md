
# JavaScript Basic Array Exercises (Without Looping)

Practice working with arrays in JavaScript without using loops.

---

## 1. Create an Array

Create an array called `fruits` that contains:

- "Apple"
- "Banana"
- "Orange"

```javascript
const fruits = ["Apple", "Banana", "Orange"]
```

---

## 2. Access Array Elements

Print the first and the last element of the `fruits` array.

```javascript
console.log(fruits[0])
console.log(fruits[fruits.length - 1])
```

---

## 3. Add Element to Array

Add `"Mango"` to the end of `fruits`.

```javascript
fruits.push("Mango")
```

---

## 4. Add Element to Beginning

Add `"Grape"` to the beginning of `fruits`.

```javascript
fruits.unshift("Grape")
```

---

## 5. Remove Last Element

Remove the last element from `fruits`.

```javascript
fruits.pop()
```

---

## 6. Remove First Element

Remove the first element from `fruits`.

```javascript
fruits.shift()
```

---

## 7. Check Array Length

Print how many items are in the `fruits` array.

```javascript
fruits.length
```

---

## 8. Check if Value Exists

Check if `"Banana"` exists in the `fruits` array.

Expected output → `true` or `false`

```javascript
fruits.includes("Banana")
```

---

## 9. Find Element Index

Find the index of `"Orange"` in the `fruits` array.

```javascript
fruits.indexOf("Orange")
```

---

## 10. Convert Array to String

Convert the `fruits` array to a single string separated by commas.

Example output → `"Apple,Banana,Orange"`

```javascript
fruits.toString()
```

---

Happy Coding! 🚀
