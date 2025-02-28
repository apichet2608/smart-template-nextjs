# คู่มือเรียนรู้ JavaScript ES6+ ฉบับสมบูรณ์

JavaScript ได้รับการพัฒนาอย่างต่อเนื่อง โดยเริ่มจาก ES6 (ECMAScript 2015) ซึ่งเป็นจุดเปลี่ยนสำคัญที่ทำให้ภาษานี้มีความสามารถสูงขึ้น บล็อกนี้จะช่วยให้คุณเข้าใจฟีเจอร์หลักของ ES6+ และการอัปเดตในเวอร์ชันถัดไป

---

## 🔥 **ES6 (ECMAScript 2015)** - การเปลี่ยนแปลงครั้งใหญ่ของ JavaScript

### 1. **`let` และ `const` (ตัวแปรแบบใหม่)**
- `let` ใช้สำหรับค่าที่เปลี่ยนแปลงได้
- `const` ใช้สำหรับค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้

```js
let name = "Alice";
const age = 25;
```

### 2. **Arrow Functions (`=>`)**
ทำให้โค้ดสั้นลง และไม่ต้องใช้ `function`

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 3. **Template Literals (` `)**
ช่วยให้การใช้ String ง่ายขึ้นด้วย `${}`

```js
const name = "Bob";
console.log(`Hello, ${name}!`); // Hello, Bob!
```

### 4. **Destructuring (การแยกค่าออกจาก Object และ Array)**

```js
const user = { name: "Charlie", age: 30 };
const { name, age } = user;
console.log(name, age); // Charlie 30
```

```js
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1 2
```

### 5. **Default Parameters**

```js
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
```

### 6. **Spread & Rest Operator (`...`)**

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]
```

```js
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10
```

### 7. **Modules (`import` / `export`)**

**math.js**
```js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

**main.js**
```js
import { add, multiply } from './math.js';
console.log(add(2, 3)); // 5
```

### 8. **Class (OOP ใน JavaScript)**

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const john = new Person("John");
john.greet(); // Hello, my name is John
```

### 9. **Promises (การจัดการ Asynchronous Code)**

```js
const fetchData = () => new Promise((resolve) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData().then(data => console.log(data)); // Data loaded (หลัง 1 วินาที)
```

---

## 🚀 **ES7 - ESNext: ฟีเจอร์ใหม่ที่น่าสนใจ**

### **ES7 (2016)**
✅ `Array.prototype.includes()`

```js
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // true
```

✅ `Exponentiation Operator (**)`

```js
console.log(2 ** 3); // 8
```

### **ES8 (2017)**
✅ `async/await`

```js
const fetchData = async () => {
  return "Hello, World!";
};
fetchData().then(console.log); // Hello, World!
```

✅ `Object.values()` และ `Object.entries()`

```js
const user = { name: "Alice", age: 30 };
console.log(Object.values(user)); // ["Alice", 30]
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 30]]
```

### **ES9 (2018)**
✅ `Rest/Spread properties`

```js
const person = { name: "Charlie", age: 35, city: "Bangkok" };
const { city, ...rest } = person;
console.log(rest); // { name: "Charlie", age: 35 }
```

### **ES10 - ESNext (2019 - ปัจจุบัน)**
✅ `Optional Chaining (?.)`

```js
const user = { profile: { name: "Eve" } };
console.log(user.profile?.name); // Eve
console.log(user.address?.city); // undefined
```

✅ `Nullish Coalescing (??)`

```js
const value = null;
console.log(value ?? "Default Value"); // Default Value
```

✅ `Top-Level Await`

```js
const data = await fetch("https://api.example.com").then(res => res.json());
console.log(data);
```

---

## 🎯 **สรุป**
ES6+ ทำให้ JavaScript มีประสิทธิภาพและอ่านง่ายขึ้น ฟีเจอร์สำคัญที่ควรรู้:
✅ `let` / `const` แทน `var`
✅ Arrow Functions (`=>`) ช่วยให้โค้ดสั้นลง
✅ Template Literals (`${}`) ทำให้จัดการ String ได้ง่าย
✅ Destructuring ดึงค่าจาก Object/Array ได้สะดวก
✅ Spread & Rest Operator (`...`) จัดการค่าหลายตัวได้ง่าย
✅ Modules (`import/export`) ทำให้โค้ดเป็นระเบียบ
✅ Class ช่วยให้เขียน OOP ได้ง่ายขึ้น
✅ `async/await` และ Promises จัดการ Asynchronous ได้ดี
✅ ESNext เช่น Optional Chaining (`?.`), Nullish Coalescing (`??`), และ Top-Level Await ช่วยลดโค้ดซับซ้อน

หวังว่าคู่มือนี้จะช่วยให้คุณเข้าใจ JavaScript ได้ดีขึ้น! 🚀🔥

---

💡 **สนใจเรียนรู้เพิ่มเติม?** ติดตามเนื้อหาใหม่ๆ เกี่ยวกับ JavaScript ได้ที่ [Your Blog Name]!

