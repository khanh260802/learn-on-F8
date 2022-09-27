/* 
1. Tạo chuỗi 
    - các cách tạo chuỗi 
    - Nên dùng cách nào 
    - kiểm tra data type 
2. Một số case sử dụng backslash (\) 
3. Xem độ dài chuỗi 
4. Chú ý độ dài khi viết code 
5. Template string ES6 
*/

// console.log(`${fullName} love Yen`)

/* 
length
find index
cut string
replace
convert to upper case
convert to lower case
trim
split
get a character by index    
*/

// find index
var myString = '  Khanh love yen yen yen  '
// console.log( myString.lastIndexOf('yen'))

// cut string 
// console.log(myString.slice(-3))

// replace 
// console.log(myString.replace(/yen/g, 'YEN')) 

// convert to upper case 
// console.log(myString.toUpperCase());  

// convert to lower case 
// console.log(myString.toLowerCase()); 

// trim (xóa khoảng trắng 2 đầu) 
// console.log(myString.trim()); 

// 8. Split (tách chuỗi thành 1 array )
var languages = 'Javascript' 
// console.log(languages.split(''))
// output  :(3) ['Javascript', ' PHP', ' Ruby']

// 9. get a character by index 
var myString2 = 'KhanhAn' 
// console.log(myString2.charAt(0))
// or 
// console.log(myString2[0])
var otherNumber = new Number(9) 
var x  = 20 / 'abc' 
isNaN(x) // kiểm tra số có hợp lệ không

// to String xài như c++ 
var PI = 3.5345345
// console.log(PI.toFixed(2))
// console.log(typeof PI) 
var languages = [
    'Javascript', 
    'PHP', 
    'Ruby', 
]

Array.isArray()
// console.log(Array.isArray(languages)) 
// console.log(languages[0])















