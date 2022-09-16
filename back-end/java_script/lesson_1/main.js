/* 
commant một khối
shift + alt + A
 */

var fullName = 'Nguyen Khanh An'; 
var age = 26; 

/* 
Giới thiệu một sô hàm built-in 
    1. Alert : show message
    2. Console
    3. Confirm : show message, button cancel and ok
    4. Prompt : Alert and confirm and a input
    5. SetTimeout : chạy sau 1 khoảng thời gian(ms) (một lần)
    6. SetInterval: chạy sau 1 khoảng thời gian(ms) (vô hạn)
*/

/* 
console.log('Hello World') 
confirm('Xac nhan ban du tuoi'); 
prompt('Xac nhan ban du tuoi'); 
 */


// Cho đoạn code chạy sau 1 khoảng thời gian(ms) (một lần)
setTimeout(
    function(){
        alert('thong bao')
    }, 
    3000000
)

// đoạn code chạy vô hạn sau mỗi khoảng thời gian(ms)
setInterval(
    function(){
        console.log('Khanh an')
    },
    1000000
)
/* 
    các giá trị đều mang giá trị false:
    0 
    false 
    '', "" 
    undefinded
    NaN
    null 
*/
var firstName = 'Khanh'; 
var lastName = 'Ann'; 
// console.log(firstName+ ' ' + lastName); 


var a = 1, b = 1; 
// console.log( (a===b)); 

/*  
khác bọt : 
so sánh == : Toán tử so sánh trừu tượng, 
            đưa 2 giá trị về cùng kiểu dữ liệu rồi so sánh 
so sánh === : Toán tử so sánh  cân bằng nghiêm ngặt 
            trả về false nếu các giá trị khác nhau
*/ 

// NUmbar type 
var a = 1; 
var b = 2; 
var c = 1.5; 
// String type 
var fullName = 'Khanh An'; 

// Boolean type
var isSuccess = true;  

// Undefined type; 
var age; 
// Null 
var isNull = null; // nothing 
// Symbol 
var id = Symbol('id');  // unique
var id2 = Symbol('id');  // unique


//Function 

var myFunction = function(){
    alert('Hi. xin chao cac ban!'); 
}

// Object types 

var myObject = {
    name: 'Khanh An', 
    age: 18, 
    adress: 'Nghe An',
    myFunction: function(){
        alert('Hi. xin chao cac ban!'); 
    }
}; 

// console.log('myObject', myObject);  

var myArray = [
    'Javascript', 
    'PHP',
    'Ruby'
];
// console.log(myArray);

var a = 1; 
var b = '1'; 
// console.log(a !== b); 

var result = 'A' && 'B' && '' && 'C'; 
// console.log(result); 


function showDialog() {
    alert("Hello World"); 
}

function writeLog() {
    var myString = ''; 
    for (const i of arguments) {
        myString += `${i} - `; 
    }
    myString.
    console.log(myString)
}


writeLog(1,2,3,4); 












