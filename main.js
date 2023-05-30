// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const totalPrice =  (orderedQuantity * pricePerDroid) + deliveryFee
// const message = (`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(4, 300, 100));


/**
  |============================
  | Lesons Artem
  |============================
*/

// ====================Lesons Artem=========================
// Конкатенація - це лише додавання


// Example 5. Шаблонні рядки
// Склади речення за допомогою шаблоний рядків A has B bots in stok, де A, B - змінні вставлені в рядок.

// const name = "Artem";
// const age = 28;

// const result = name + ' years ' + age;
// console.log(result);


// String при додавані являється домінуючим типом даних
// const c = 10 + 22 + "11" + 44;
// 10 + 22 = 32; 32 + "11" = number + string = numberstring(3211); numberstring(3211) + 44 = "321144";
// console.log(typeof c);

// При множені числа на рядок домінуючим буде число
// const a = 2 * "3";
// console.log(typeof a);


// При віднімані числа від рядка домінуючим буде число
// const b = 6 - "3";
// console.log(typeof b);


// const value = 10;
// const value_2 = '15';

// const result = value - Number(value_2);


// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenseBots = 50;
// // const message = companyName + ' has ' + (repairBots + defenseBots) + " bots in stock ";
// const message = `${companyName} has ${repairBots + defenseBots} bots in stock` // застосуємо інтерполяцію. Тобто ${}.
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6. - Методи рядків та ченінг.
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.


// Вага та висота зберігається у змінних weight та height, але не як числа, а у вигляді рядків(спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.height

// індекс маси тіла потрібно буде округлити до однієї цифри після коми;

// let weight = '88.3';
// let height = '1.75';
// // weight = weight.replace(',','.'); // replace - це метод заміни символа де 1-й аргумент що ми замінюємо 2-й на що.
// weight = Number(weight.replace(',', '.')); // переводимо зміну за допомогою метода Number де аргументом передаємо саму зміну.
// height = Number(height);
// // height = +height // приклад унарного(+) плюса. Уеарний плюс - це лише один операнд, тобто не має до чого додавати. Якби було 2 операнда це був вже бінарний +
// // 1) виконується метод replace;
// // 2) приводиться до Number;
// // 3) результат записується у зміну
// console.log(typeof height);

// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi); // 28.8




// Example 7. - Оператори порівняння та приведення до типів;
// Яким буде результат виразів ?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true бо відбувається преведення типів

// console.log('2' > '12'); //true 32 > 31 бо тут порівнюються коди символів (https://old.unicode-table.com/en/)

// console.log('2' < '12'); //false '2' < '1', 32 < 31

// console.log('4' == 4); //true бо якщо порівняння не строге(==), то стрічку приводимо до числа, тобто 4==4

// console.log('6' === 6); //false при строгому порівнянню ми приводимо спочатку до типів даниж тому false

// console.log('false' === false); //false бо різні типи даних

// //true =>1
// //false =>0
// console.log(1 == true); //true, тому що коли true=Number буде 1

// console.log(1 === true); //false в першу чергу порівнюємо різні типи даних

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true "P" < "p", 50 < 70

// console.log('Papaya' === 'papaya'); //false 50===70

// console.log(undefined == null); //true 0==0

// console.log(undefined === null); //false