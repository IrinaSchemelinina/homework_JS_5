// Задача №1 

// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

function a_Minus_b_del_c(a, b, c){
    console.log((a - b) / c);
}
a_Minus_b_del_c(15, 4, 2);


// Задача №2 

// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

function qubSquare(s){

        console.log(Math.pow(s, 2));
        console.log(Math.pow(s, 3));
}

qubSquare(3);

// Задача №3 

// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

function max(a, b){
    if (a > b){
        return a;
    }else (a > b);
        return b;
    }
console.log('Max: ' + max(13, 16));

function min(a, b){
    if (a > b){
        return b;
    }else (a < b);
        return a
    }
console.log('Min: ' + min(13, 16));

// Задача №4 

// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

function enterArray(c, v){
    let arr = [];
    for (let i = c; i <= v; i++){
        arr.push(i)
    }
    return arr;
}

function result(arr){
    console.log(arr)
}

console.log(enterArray(prompt('Начало массива'), prompt('Конец массива')));

// Задача №5 

// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven(number){
    return number % 2 == 0;
}

console.log(isEven(3));
console.log(isEven(8));

// Задача №6 

// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
function integerNumber(w){
    return w.filter(c => isEven(c))
}

console.log(integerNumber([3,5,9,1,2,5,1,74,23,6]));

// Задача №7 

// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,
// например:

function pyramid(p){
    let str = '';
    for (let i = 1; i <= p; i++){
        for (let j = 1; j <= i; j++){
            str += i;
        }
        console.log(str);
        str = '';
    }
}
pyramid(9);

// Задача №8 

// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

// *
// ***
// *****
// *******
// *********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

function isoscelesTriangle(r){
    let str = '';
    for (let i = 1; i <= r; i++){
        for (let j = r; j > i; j--){
            str += '';
        }
        for (let z = 1; z <= i*2-1; z++){
            str += '*';
        }
        console.log(str);
        str = '';
    }
}

isoscelesTriangle(r = prompt('Введите кол-во рядов'));


// Задача №9 

// Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

{
    function fibonacha(){
        let arr = [];
        for (let i = 0; i < 1000; i++){
            if (i === 0){
                arr[i] = 0;
            }else if (i === 1){
                arr[i] = 1;
            }else{
                arr[i] = arr[i - 1] + arr[i - 2]
                if (arr[i] > 987) break;
            }
        }
        return arr;
    }

    let result = fibonacha(1000);
    console.log(result);
}

// Задача №10 

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

function recursion(n){
    let sum = 0;
    let str = String(n).split('');

    for (let i = 0; i < str.length; i++){
        sum += +str[i];
    }

    if (sum >= 10){
        recursion(sum);
    }else {
        console.log(sum);
    }
}
recursion('4897875');


// Задача №11

// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

function arrRecursion(array){

    if(arguments[1] == undefined)arguments[1] = 0;
    if(array.length > arguments[1]){
        console.log(array[arguments[1]]);
        arrRecursion(array, arguments[1] + 1);
    }
}
arrRecursion([2, 5, 66, 89, 1, 03, 23, 6]);

// Задача №12 

// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************

// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.

{
    function badge(length){
        let frame = "";
        for (let i = 0; i < length; i++){
            frame += "*";
        }
        console.log(frame);
    }
 
    let str = [];
    str.push("Домашняя работа: «Функции»");
 
    let group = prompt("Введите номер группы");
    str.push("Выполнил: студент гр." + group);
 
    let lastname = prompt("Ваша фамилия?");
    let firstname = prompt("Ваше имя?");
    let patronymic = prompt("Ваше отчество?");
    let name = lastname + ' ' + firstname + ' ' + patronymic;
    str.push(name);
 
    let lengthFrame = 0;
    for (let i = 0; i < str.length; i++){
        if (lengthFrame < str[i].length){
            lengthFrame = str[i].length;
        }
    }
 
    lengthFrame += 2;
 
    
    badge(lengthFrame);
    for (let i = 0; i < str.length; i++){
        let resultStr = "*";
        for (let j = 0; j < lengthFrame; j++){
            if (str[i][j] === undefined){
                if (j === lengthFrame - 2){
                    resultStr += '*';
                }
                else{
                    resultStr += ' ';
                }
            }
            else{
                resultStr += str[i][j];
            }
        }
        console.log(resultStr);
    }
    
    badge(lengthFrame);
}