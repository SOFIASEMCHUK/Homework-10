//1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
//2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
//3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
//4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
//5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

//1
console.log('Завдання 1');
let result = '';

for(let i = 20; i <= 30; i+=0.5) {
    result += i + ' ';
}
console.log(result);

//2
console.log('Завдання 2');
let dollar = '';

for(let i = 10; i <= 100; i++) {
    dollar += i + '$' + '=' + i * 27 + ' ';
}
console.log(dollar);

//3
console.log('Завдання 3');
let randomNum = +prompt('enter num N for task 3')
let result2 = '';

for(let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) <= randomNum) {
        result2 += i + ' ';
    }
}
console.log(result2);

//4 
console.log('Завдання 4');
let simple = +prompt('Enter simple number for task 4');
let count = 0;
for(let i = 1; i <= simple; i++){
    if(simple%i === 0) {
        count++;
    }
}
if(count > 2) {
    console.log('Це число не просте. Спробуй ще');
}else{
    console.log(`${simple} - просте число!`);
}

// if(simple%2 !== 0 && simple%3 !== 0 || simple === 2 || simple === 3) {
//     console.log(`${simple} - просте число!`);
// } else {
//     console.log('Це число не просте. Спробуй ще!');
// }


//5
console.log('Завдання 5');

let randomNum1 = +prompt('Enter number for task 5');

for(let i = 1; i <= randomNum1; i++) {
    if(Math.pow(3, i) === randomNum1) {
        console.log(`${randomNum1} - підходить умові`)
        break;
    }else{
        if(i === randomNum1)
        console.log('Не підходить'); 
        
    }
}
